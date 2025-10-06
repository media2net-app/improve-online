'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import { 
  Github, 
  Star, 
  GitFork, 
  Eye, 
  Calendar,
  Code,
  ExternalLink,
  Download,
  GitBranch,
  Clock,
  Users,
  Shield,
  Zap,
  RefreshCw,
  AlertCircle,
  Loader2
} from 'lucide-react'

interface GitHubRepository {
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
  sizeFormatted: string
  updatedAtFormatted: string
  createdAtFormatted: string
  pushedAtFormatted: string
  languages: string[]
}

interface GitHubStats {
  totalRepos: number
  totalStars: number
  totalForks: number
  totalWatchers: number
  totalSize: number
  languages: string[]
  mostPopularRepo: GitHubRepository | null
  recentlyUpdated: GitHubRepository[]
}

export default function GitHubPage() {
  const [repositories, setRepositories] = useState<GitHubRepository[]>([])
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  // Fetch GitHub data
  const fetchGitHubData = async () => {
    try {
      setLoading(true)
      setError(null)

      const [reposResponse, statsResponse] = await Promise.all([
        fetch('/api/github/repositories'),
        fetch('/api/github/stats')
      ])

      if (!reposResponse.ok || !statsResponse.ok) {
        throw new Error('Failed to fetch GitHub data')
      }

      const reposData = await reposResponse.json()
      const statsData = await statsResponse.json()

      if (!reposData.success || !statsData.success) {
        throw new Error(reposData.error || statsData.error || 'Failed to fetch data')
      }

      setRepositories(reposData.data)
      setStats(statsData.data)
      setLastUpdated(new Date())
    } catch (err) {
      console.error('Error fetching GitHub data:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch GitHub data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGitHubData()
  }, [])

  const getLanguageColor = (language: string | null) => {
    if (!language) return 'text-gray-400'
    
    const colors: { [key: string]: string } = {
      'TypeScript': 'text-blue-400',
      'JavaScript': 'text-yellow-400',
      'Go': 'text-cyan-400',
      'Shell': 'text-green-400',
      'Rust': 'text-orange-400',
      'Python': 'text-green-300',
      'Java': 'text-red-400',
      'C++': 'text-blue-300',
      'SQL': 'text-gray-300',
      'Markdown': 'text-gray-400'
    }
    return colors[language] || 'text-gray-400'
  }

  const getLanguageBackgroundColor = (language: string | null) => {
    if (!language) return 'bg-gray-500'
    
    const colors: { [key: string]: string } = {
      'TypeScript': 'bg-blue-400',
      'JavaScript': 'bg-yellow-400',
      'Go': 'bg-cyan-400',
      'Shell': 'bg-green-400',
      'Rust': 'bg-orange-400',
      'Python': 'bg-green-300',
      'Java': 'bg-red-400',
      'C++': 'bg-blue-300',
      'SQL': 'bg-gray-300',
      'Markdown': 'bg-gray-400'
    }
    return colors[language] || 'bg-gray-500'
  }

  const getVisibilityIcon = (visibility: string) => {
    return visibility === 'public' ? 
      <Shield className="w-4 h-4 text-green-400" /> : 
      <Shield className="w-4 h-4 text-yellow-400" />
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black">
        <Navigation />
        <div className="lg:ml-64 transition-all duration-300">
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <Loader2 className="w-12 h-12 text-silver animate-spin mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Loading GitHub Data</h2>
              <p className="text-gray-400">Fetching your repositories from GitHub...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black">
        <Navigation />
        <div className="lg:ml-64 transition-all duration-300">
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Error Loading Data</h2>
              <p className="text-gray-400 mb-4">{error}</p>
              <button
                onClick={fetchGitHubData}
                className="px-6 py-3 bg-silver/20 hover:bg-silver/30 text-silver rounded-lg transition-colors flex items-center space-x-2 mx-auto"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Try Again</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Main Content */}
      <div className="lg:ml-64 transition-all duration-300">
        {/* Header */}
        <header className="bg-gray-900/50 border-b border-gray-700">
          <div className="px-6 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white flex items-center space-x-3">
                  <Github className="w-8 h-8 text-silver" />
                  <span>GitHub Projects</span>
                </h1>
                <p className="text-gray-400 mt-2">Live data from your GitHub repositories</p>
                {lastUpdated && (
                  <p className="text-gray-500 text-sm mt-1">
                    Last updated: {lastUpdated.toLocaleTimeString()}
                  </p>
                )}
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={fetchGitHubData}
                  disabled={loading}
                  className="px-4 py-2 bg-silver/20 hover:bg-silver/30 text-silver rounded-lg transition-colors flex items-center space-x-2 disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                  <span>Refresh</span>
                </button>
                <div className="text-right">
                  <p className="text-white font-medium">Chiel</p>
                  <p className="text-gray-400 text-sm">Developer</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-silver to-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">C</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 py-8">
          {/* GitHub Stats */}
          {stats && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="glass-effect rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Repositories</p>
                    <p className="text-3xl font-bold text-white">{stats.totalRepos}</p>
                    <p className="text-gray-400 text-xs mt-1">Public repositories</p>
                  </div>
                  <Github className="w-12 h-12 text-silver" />
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Stars</p>
                    <p className="text-3xl font-bold text-yellow-400">{stats.totalStars}</p>
                    <p className="text-gray-400 text-xs mt-1">Across all repos</p>
                  </div>
                  <Star className="w-12 h-12 text-yellow-400" />
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Forks</p>
                    <p className="text-3xl font-bold text-blue-400">{stats.totalForks}</p>
                    <p className="text-gray-400 text-xs mt-1">Community forks</p>
                  </div>
                  <GitFork className="w-12 h-12 text-blue-400" />
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Watchers</p>
                    <p className="text-3xl font-bold text-green-400">{stats.totalWatchers}</p>
                    <p className="text-gray-400 text-xs mt-1">Active watchers</p>
                  </div>
                  <Eye className="w-12 h-12 text-green-400" />
                </div>
              </div>
            </div>
          )}

          {/* Language Distribution */}
          {stats && (
            <div className="glass-effect rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                {stats.languages.map((language) => (
                  <div key={language} className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-lg">
                    <div className={`w-3 h-3 rounded-full ${getLanguageBackgroundColor(language)}`}></div>
                    <span className="text-white font-medium">{language}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* GitHub Projects Table */}
          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">All Repositories</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm">{repositories.length} repositories</span>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50 border-b border-gray-700">
                  <tr>
                    <th className="text-left p-4 text-white font-medium">Repository</th>
                    <th className="text-left p-4 text-white font-medium">Description</th>
                    <th className="text-left p-4 text-white font-medium">Language</th>
                    <th className="text-left p-4 text-white font-medium">Stars</th>
                    <th className="text-left p-4 text-white font-medium">Forks</th>
                    <th className="text-left p-4 text-white font-medium">Updated</th>
                    <th className="text-left p-4 text-white font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {repositories.map((repo) => (
                    <tr key={repo.id} className="border-b border-gray-700 hover:bg-gray-800/30 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          {getVisibilityIcon(repo.visibility)}
                          <div>
                            <div className="flex items-center space-x-2">
                              <p className="text-white font-medium">{repo.name}</p>
                              <ExternalLink className="w-4 h-4 text-gray-400 hover:text-silver cursor-pointer" />
                            </div>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {repo.topics.slice(0, 3).map((topic, index) => (
                                <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                                  {topic}
                                </span>
                              ))}
                              {repo.topics.length > 3 && (
                                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                                  +{repo.topics.length - 3}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-gray-300 text-sm max-w-xs truncate">{repo.description || 'No description'}</p>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${getLanguageBackgroundColor(repo.language)}`}></div>
                          <span className={`font-medium ${getLanguageColor(repo.language)}`}>{repo.language || 'Unknown'}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-white font-medium">{repo.stargazers_count}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-1">
                          <GitFork className="w-4 h-4 text-blue-400" />
                          <span className="text-white font-medium">{repo.forks_count}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300 text-sm">{repo.updatedAtFormatted}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => window.open(repo.html_url, '_blank')}
                            className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm flex items-center space-x-1"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span>View</span>
                          </button>
                          <button 
                            onClick={() => navigator.clipboard.writeText(repo.clone_url)}
                            className="px-3 py-1 bg-silver/20 hover:bg-silver/30 text-silver rounded-lg transition-colors text-sm flex items-center space-x-1"
                          >
                            <Download className="w-3 h-3" />
                            <span>Clone</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Activity */}
          {stats && stats.recentlyUpdated.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Most Popular Repository</h3>
                {stats.mostPopularRepo && (
                  <div className="p-4 bg-gray-800/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium">{stats.mostPopularRepo.name}</h4>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 font-medium">{stats.mostPopularRepo.stargazers_count}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{stats.mostPopularRepo.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{stats.mostPopularRepo.language}</span>
                      <span>{stats.mostPopularRepo.forks_count} forks</span>
                      <span>{stats.mostPopularRepo.watchers_count} watchers</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Recently Updated</h3>
                <div className="space-y-3">
                  {stats.recentlyUpdated.slice(0, 4).map((repo) => (
                    <div key={repo.id} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                      <div>
                        <p className="text-white font-medium">{repo.name}</p>
                        <p className="text-gray-400 text-sm">{repo.updatedAtFormatted}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400" />
                          <span className="text-white text-sm">{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <GitFork className="w-3 h-3 text-blue-400" />
                          <span className="text-white text-sm">{repo.forks_count}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}