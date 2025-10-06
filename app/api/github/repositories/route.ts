import { NextRequest, NextResponse } from 'next/server'
import { githubAPI, GitHubRepository } from '@/lib/github-api'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const perPage = parseInt(searchParams.get('per_page') || '100')
    const search = searchParams.get('search')

    let repositories: GitHubRepository[]

    if (search) {
      repositories = await githubAPI.searchRepositories(search)
    } else {
      repositories = await githubAPI.getRepositories(page, perPage)
    }

    // Enhance repositories with additional data
    const enhancedRepositories = await Promise.all(
      repositories.map(async (repo) => {
        try {
          const [topics, languages] = await Promise.all([
            githubAPI.getRepositoryTopics(repo.name),
            githubAPI.getRepositoryLanguages(repo.name)
          ])

          return {
            ...repo,
            topics: topics.names,
            languages: Object.keys(languages),
            sizeFormatted: formatRepositorySize(repo.size),
            updatedAtFormatted: formatDate(repo.updated_at),
            createdAtFormatted: formatDate(repo.created_at),
            pushedAtFormatted: formatDate(repo.pushed_at)
          }
        } catch (error) {
          console.error(`Failed to enhance repository ${repo.name}:`, error)
          return {
            ...repo,
            topics: [],
            languages: repo.language ? [repo.language] : [],
            sizeFormatted: formatRepositorySize(repo.size),
            updatedAtFormatted: formatDate(repo.updated_at),
            createdAtFormatted: formatDate(repo.created_at),
            pushedAtFormatted: formatDate(repo.pushed_at)
          }
        }
      })
    )

    return NextResponse.json({
      success: true,
      data: enhancedRepositories,
      pagination: {
        page,
        perPage,
        total: enhancedRepositories.length
      }
    })
  } catch (error) {
    console.error('GitHub repositories API error:', error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch repositories'
      },
      { status: 500 }
    )
  }
}

// Helper functions
function formatRepositorySize(sizeInKB: number): string {
  if (sizeInKB < 1024) {
    return `${sizeInKB} KB`
  } else if (sizeInKB < 1024 * 1024) {
    return `${(sizeInKB / 1024).toFixed(1)} MB`
  } else {
    return `${(sizeInKB / (1024 * 1024)).toFixed(1)} GB`
  }
}

function formatDate(dateString: string): string {
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
