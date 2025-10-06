import { NextResponse } from 'next/server'
import { githubAPI } from '@/lib/github-api'

export async function GET() {
  try {
    const stats = await githubAPI.getStats()
    
    return NextResponse.json({
      success: true,
      data: stats
    })
  } catch (error) {
    console.error('GitHub stats API error:', error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch GitHub stats'
      },
      { status: 500 }
    )
  }
}
