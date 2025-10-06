// GitHub data caching service
interface CacheEntry<T> {
  data: T
  timestamp: number
  ttl: number
}

class GitHubCache {
  private cache = new Map<string, CacheEntry<any>>()
  private defaultTTL = 5 * 60 * 1000 // 5 minutes

  set<T>(key: string, data: T, ttl: number = this.defaultTTL): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    })
  }

  get<T>(key: string): T | null {
    const entry = this.cache.get(key)
    
    if (!entry) {
      return null
    }

    // Check if cache entry is expired
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key)
      return null
    }

    return entry.data as T
  }

  has(key: string): boolean {
    const entry = this.cache.get(key)
    
    if (!entry) {
      return false
    }

    // Check if cache entry is expired
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key)
      return false
    }

    return true
  }

  delete(key: string): boolean {
    return this.cache.delete(key)
  }

  clear(): void {
    this.cache.clear()
  }

  // Get cache statistics
  getStats() {
    const now = Date.now()
    let validEntries = 0
    let expiredEntries = 0

    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > entry.ttl) {
        expiredEntries++
      } else {
        validEntries++
      }
    }

    return {
      totalEntries: this.cache.size,
      validEntries,
      expiredEntries,
      hitRate: this.calculateHitRate()
    }
  }

  private hitRate = { hits: 0, misses: 0 }

  private calculateHitRate(): number {
    const total = this.hitRate.hits + this.hitRate.misses
    return total === 0 ? 0 : this.hitRate.hits / total
  }

  // Cache key generators
  static getRepositoriesKey(username: string, page: number = 1, perPage: number = 100): string {
    return `repos:${username}:${page}:${perPage}`
  }

  static getRepositoryKey(username: string, repoName: string): string {
    return `repo:${username}:${repoName}`
  }

  static getStatsKey(username: string): string {
    return `stats:${username}`
  }

  static getUserKey(username: string): string {
    return `user:${username}`
  }

  static getSearchKey(query: string): string {
    return `search:${query}`
  }
}

// Export singleton instance
export const githubCache = new GitHubCache()

// Cache middleware for API routes
export function withCache<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttl?: number
): Promise<T> {
  // Check cache first
  const cached = githubCache.get<T>(key)
  if (cached !== null) {
    return Promise.resolve(cached)
  }

  // Fetch fresh data
  return fetcher().then(data => {
    githubCache.set(key, data, ttl)
    return data
  })
}

// Cache invalidation helpers
export function invalidateUserCache(username: string): void {
  const patterns = [
    `repos:${username}:*`,
    `repo:${username}:*`,
    `stats:${username}`,
    `user:${username}`
  ]

  // In a real implementation, you'd use pattern matching
  // For now, we'll clear all cache entries
  githubCache.clear()
}

export function invalidateRepositoryCache(username: string, repoName: string): void {
  githubCache.delete(GitHubCache.getRepositoryKey(username, repoName))
  githubCache.delete(GitHubCache.getStatsKey(username))
  
  // Also invalidate repositories list
  for (let page = 1; page <= 10; page++) {
    githubCache.delete(GitHubCache.getRepositoriesKey(username, page))
  }
}
