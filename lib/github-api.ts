// GitHub API service for fetching repository data
import { githubCache, withCache, GitHubCache } from './github-cache'

export interface GitHubRepository {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  clone_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  watchers_count: number
  size: number
  updated_at: string
  created_at: string
  pushed_at: string
  visibility: 'public' | 'private'
  topics: string[]
  license: {
    name: string
    spdx_id: string
  } | null
  open_issues_count: number
  default_branch: string
  archived: boolean
  disabled: boolean
}

export interface GitHubUser {
  login: string
  id: number
  avatar_url: string
  html_url: string
  name: string | null
  company: string | null
  blog: string | null
  location: string | null
  email: string | null
  bio: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export interface GitHubStats {
  totalRepos: number
  totalStars: number
  totalForks: number
  totalWatchers: number
  totalSize: number
  languages: string[]
  mostPopularRepo: GitHubRepository | null
  recentlyUpdated: GitHubRepository[]
}

class GitHubAPIService {
  private baseURL = 'https://api.github.com'
  private token: string | null = null
  private username: string = 'media2net-app'

  constructor(token?: string) {
    this.token = token || null
  }

  private async makeRequest<T>(endpoint: string): Promise<T> {
    const url = `${this.baseURL}${endpoint}`
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Improve-Platform'
    }

    if (this.token) {
      headers['Authorization'] = `token ${this.token}`
    }

    try {
      const response = await fetch(url, { headers })
      
      if (!response.ok) {
        if (response.status === 403) {
          throw new Error('GitHub API rate limit exceeded. Please try again later.')
        }
        if (response.status === 404) {
          throw new Error('GitHub user or repository not found.')
        }
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error('GitHub API request failed:', error)
      throw error
    }
  }

  async getUserInfo(): Promise<GitHubUser> {
    const cacheKey = GitHubCache.getUserKey(this.username)
    return withCache(cacheKey, () => 
      this.makeRequest<GitHubUser>(`/users/${this.username}`)
    )
  }

  async getRepositories(page: number = 1, perPage: number = 100): Promise<GitHubRepository[]> {
    const cacheKey = GitHubCache.getRepositoriesKey(this.username, page, perPage)
    return withCache(cacheKey, async () => {
      const repos = await this.makeRequest<GitHubRepository[]>(
        `/users/${this.username}/repos?page=${page}&per_page=${perPage}&sort=updated&direction=desc`
      )
      
      // Filter out archived and disabled repositories
      return repos.filter(repo => !repo.archived && !repo.disabled)
    })
  }

  async getRepository(name: string): Promise<GitHubRepository> {
    return this.makeRequest<GitHubRepository>(`/repos/${this.username}/${name}`)
  }

  async getRepositoryTopics(name: string): Promise<{ names: string[] }> {
    return this.makeRequest<{ names: string[] }>(`/repos/${this.username}/${name}/topics`)
  }

  async getRepositoryLanguages(name: string): Promise<Record<string, number>> {
    return this.makeRequest<Record<string, number>>(`/repos/${this.username}/${name}/languages`)
  }

  async getRepositoryStats(name: string): Promise<{
    contributors: number
    commits: number
    branches: number
    releases: number
  }> {
    try {
      const [contributors, commits, branches, releases] = await Promise.all([
        this.makeRequest<any[]>(`/repos/${this.username}/${name}/contributors`),
        this.makeRequest<any[]>(`/repos/${this.username}/${name}/commits`),
        this.makeRequest<any[]>(`/repos/${this.username}/${name}/branches`),
        this.makeRequest<any[]>(`/repos/${this.username}/${name}/releases`)
      ])

      return {
        contributors: contributors.length,
        commits: commits.length,
        branches: branches.length,
        releases: releases.length
      }
    } catch (error) {
      console.error(`Failed to get stats for ${name}:`, error)
      return {
        contributors: 0,
        commits: 0,
        branches: 0,
        releases: 0
      }
    }
  }

  async getStats(): Promise<GitHubStats> {
    try {
      const [userInfo, repositories] = await Promise.all([
        this.getUserInfo(),
        this.getRepositories()
      ])

      const totalStars = repositories.reduce((sum, repo) => sum + repo.stargazers_count, 0)
      const totalForks = repositories.reduce((sum, repo) => sum + repo.forks_count, 0)
      const totalWatchers = repositories.reduce((sum, repo) => sum + repo.watchers_count, 0)
      const totalSize = repositories.reduce((sum, repo) => sum + repo.size, 0)

      const languages = [...new Set(repositories.map(repo => repo.language).filter(Boolean))]
      const mostPopularRepo = repositories.reduce((prev, current) => 
        (prev.stargazers_count > current.stargazers_count) ? prev : current
      )
      const recentlyUpdated = repositories
        .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
        .slice(0, 5)

      return {
        totalRepos: repositories.length,
        totalStars,
        totalForks,
        totalWatchers,
        totalSize,
        languages: languages as string[],
        mostPopularRepo,
        recentlyUpdated
      }
    } catch (error) {
      console.error('Failed to get GitHub stats:', error)
      throw error
    }
  }

  async searchRepositories(query: string): Promise<GitHubRepository[]> {
    const response = await this.makeRequest<{ items: GitHubRepository[] }>(
      `/search/repositories?q=user:${this.username}+${encodeURIComponent(query)}&sort=updated&order=desc`
    )
    return response.items
  }

  async getRepositoryActivity(name: string, days: number = 30): Promise<any[]> {
    const since = new Date()
    since.setDate(since.getDate() - days)
    
    return this.makeRequest<any[]>(
      `/repos/${this.username}/${name}/activity?since=${since.toISOString()}`
    )
  }
}

// Export singleton instance
export const githubAPI = new GitHubAPIService()

// Helper functions
export const formatRepositorySize = (sizeInKB: number): string => {
  if (sizeInKB < 1024) {
    return `${sizeInKB} KB`
  } else if (sizeInKB < 1024 * 1024) {
    return `${(sizeInKB / 1024).toFixed(1)} MB`
  } else {
    return `${(sizeInKB / (1024 * 1024)).toFixed(1)} GB`
  }
}

export const getLanguageColor = (language: string | null): string => {
  if (!language) return 'text-gray-400'
  
  const colors: Record<string, string> = {
    'TypeScript': 'text-blue-400',
    'JavaScript': 'text-yellow-400',
    'Go': 'text-cyan-400',
    'Shell': 'text-green-400',
    'Rust': 'text-orange-400',
    'Python': 'text-green-300',
    'Java': 'text-red-400',
    'C++': 'text-blue-300',
    'C#': 'text-purple-400',
    'PHP': 'text-indigo-400',
    'Ruby': 'text-red-300',
    'Swift': 'text-orange-300',
    'Kotlin': 'text-purple-300',
    'Dart': 'text-blue-200',
    'SQL': 'text-gray-300',
    'Markdown': 'text-gray-400',
    'HTML': 'text-orange-400',
    'CSS': 'text-blue-300',
    'Vue': 'text-green-400',
    'React': 'text-cyan-300'
  }
  
  return colors[language] || 'text-gray-400'
}

export const getLanguageBackgroundColor = (language: string | null): string => {
  if (!language) return 'bg-gray-500'
  
  const colors: Record<string, string> = {
    'TypeScript': 'bg-blue-400',
    'JavaScript': 'bg-yellow-400',
    'Go': 'bg-cyan-400',
    'Shell': 'bg-green-400',
    'Rust': 'bg-orange-400',
    'Python': 'bg-green-300',
    'Java': 'bg-red-400',
    'C++': 'bg-blue-300',
    'C#': 'bg-purple-400',
    'PHP': 'bg-indigo-400',
    'Ruby': 'bg-red-300',
    'Swift': 'bg-orange-300',
    'Kotlin': 'bg-purple-300',
    'Dart': 'bg-blue-200',
    'SQL': 'bg-gray-300',
    'Markdown': 'bg-gray-400',
    'HTML': 'bg-orange-400',
    'CSS': 'bg-blue-300',
    'Vue': 'bg-green-400',
    'React': 'bg-cyan-300'
  }
  
  return colors[language] || 'bg-gray-500'
}

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const now = new Date()
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
  
  if (diffInDays === 0) return 'Today'
  if (diffInDays === 1) return 'Yesterday'
  if (diffInDays < 7) return `${diffInDays} days ago`
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`
  return `${Math.floor(diffInDays / 365)} years ago`
}
