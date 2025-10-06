'use client'

import { useState } from 'react'
import Navigation from './Navigation'
import { 
  Play, 
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Settings,
  Clock,
  CheckCircle,
  Lock,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Star,
  Users,
  Award,
  Download,
  Bookmark,
  Share2,
  ThumbsUp,
  MessageCircle,
  FileText,
  Video,
  Headphones,
  Monitor,
  Smartphone,
  RotateCcw,
  SkipBack,
  SkipForward,
  PlayCircle,
  PauseCircle
} from 'lucide-react'

interface LessonDetailProps {
  lessonId: string
}

export default function LessonDetail({ lessonId }: LessonDetailProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(1800) // 30 minutes in seconds
  const [playbackSpeed, setPlaybackSpeed] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [showNotes, setShowNotes] = useState(false)
  const [notes, setNotes] = useState('')
  const [showComments, setShowComments] = useState(false)

  // Demo lesson data
  const lessons = [
    {
      id: '1',
      title: 'What is a Virtual Assistant?',
      description: 'Introduction to the VA industry and career opportunities. Learn about the different types of virtual assistant roles and how to get started.',
      duration: 900, // 15 minutes
      type: 'video',
      completed: false,
      courseId: '1',
      courseTitle: 'Virtual Assistant grondbeginselen',
      instructor: 'Sarah Johnson',
      videoUrl: '/api/video/placeholder',
      transcript: 'Welcome to this comprehensive introduction to virtual assistance. In this lesson, we\'ll explore what it means to be a virtual assistant and the incredible opportunities this career path offers...',
      resources: [
        { title: 'VA Career Guide', type: 'PDF', size: '2.3 MB' },
        { title: 'Skills Assessment', type: 'DOCX', size: '1.1 MB' },
        { title: 'Industry Report 2024', type: 'PDF', size: '3.2 MB' }
      ],
      comments: [
        {
          id: 1,
          author: 'Maria Santos',
          avatar: 'MS',
          time: '2 hours ago',
          content: 'This was really helpful! I never knew there were so many different types of VA roles.',
          likes: 12,
          replies: 3
        },
        {
          id: 2,
          author: 'John Chen',
          avatar: 'JC',
          time: '5 hours ago',
          content: 'Great introduction. Looking forward to the next lessons.',
          likes: 8,
          replies: 1
        }
      ]
    },
    {
      id: '2',
      title: 'Essential Skills for VAs',
      description: 'Core competencies every VA should develop to succeed in the industry.',
      duration: 1200, // 20 minutes
      type: 'video',
      completed: true,
      courseId: '1',
      courseTitle: 'Virtual Assistant grondbeginselen',
      instructor: 'Sarah Johnson',
      videoUrl: '/api/video/placeholder',
      transcript: 'In this lesson, we\'ll dive deep into the essential skills that every successful virtual assistant needs to master...',
      resources: [
        { title: 'Skills Checklist', type: 'PDF', size: '1.8 MB' },
        { title: 'Practice Exercises', type: 'DOCX', size: '2.1 MB' }
      ],
      comments: [
        {
          id: 1,
          author: 'Lisa Rodriguez',
          avatar: 'LR',
          time: '1 day ago',
          content: 'The communication skills section was particularly valuable.',
          likes: 15,
          replies: 2
        }
      ]
    }
  ]

  const lesson = lessons.find(l => l.id === lessonId) || lessons[0]

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = (parseInt(e.target.value) / 100) * duration
    setCurrentTime(newTime)
  }

  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed)
  }

  const handleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const handleSkip = (direction: 'back' | 'forward') => {
    const skipTime = direction === 'back' ? -10 : 10
    const newTime = Math.max(0, Math.min(duration, currentTime + skipTime))
    setCurrentTime(newTime)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Content */}
      <div className="lg:ml-64 transition-all duration-300">
        {/* Header */}
        <header className="bg-surface border-b border-gray-800">
          <div className="px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <a 
                  href={`/academy/course/${lesson.courseId}`}
                  className="text-text-muted hover:text-text transition-colors"
                >
                  <ArrowLeft className="w-6 h-6" />
                </a>
                <div>
                  <h1 className="text-2xl font-bold text-text">{lesson.title}</h1>
                  <p className="text-text-muted">{lesson.courseTitle}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`p-2 rounded-xl transition-colors ${
                    isBookmarked ? 'bg-primary-gold/20 text-primary-gold' : 'bg-surface text-text-muted hover:text-text'
                  }`}
                >
                  <Bookmark className="w-5 h-5" />
                </button>
                <button className="p-2 bg-surface text-text-muted hover:text-text rounded-xl transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Video Player */}
              <div className="glass-effect rounded-2xl p-6 mb-6">
                <div className="relative bg-black rounded-xl overflow-hidden mb-4">
                  {/* Video Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center">
                      <PlayCircle className="w-20 h-20 text-primary-gold mx-auto mb-4" />
                      <p className="text-text-muted">Video Player</p>
                      <p className="text-text-muted text-sm">Click to start lesson</p>
                    </div>
                  </div>
                  
                  {/* Video Controls Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={(currentTime / duration) * 100}
                        onChange={handleSeek}
                        className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>
                    
                    {/* Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button onClick={() => handleSkip('back')} className="text-white hover:text-primary-gold transition-colors">
                          <SkipBack className="w-6 h-6" />
                        </button>
                        <button onClick={handlePlayPause} className="text-white hover:text-primary-gold transition-colors">
                          {isPlaying ? <PauseCircle className="w-8 h-8" /> : <PlayCircle className="w-8 h-8" />}
                        </button>
                        <button onClick={() => handleSkip('forward')} className="text-white hover:text-primary-gold transition-colors">
                          <SkipForward className="w-6 h-6" />
                        </button>
                        <button onClick={handleMute} className="text-white hover:text-primary-gold transition-colors">
                          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                        </button>
                        <span className="text-white text-sm">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <button className="text-white hover:text-primary-gold transition-colors">
                            <Settings className="w-5 h-5" />
                          </button>
                          <select 
                            value={playbackSpeed}
                            onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
                            className="bg-transparent text-white text-sm border-none outline-none"
                          >
                            <option value={0.5}>0.5x</option>
                            <option value={0.75}>0.75x</option>
                            <option value={1}>1x</option>
                            <option value={1.25}>1.25x</option>
                            <option value={1.5}>1.5x</option>
                            <option value={2}>2x</option>
                          </select>
                        </div>
                        <button onClick={handleFullscreen} className="text-white hover:text-primary-gold transition-colors">
                          <Maximize className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lesson Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 bg-primary-gold/20 text-primary-gold text-sm font-medium rounded-full">
                      {lesson.type}
                    </span>
                    <div className="flex items-center space-x-2 text-text-muted">
                      <Clock className="w-4 h-4" />
                      <span>{formatTime(lesson.duration)}</span>
                    </div>
                    {lesson.completed && (
                      <div className="flex items-center space-x-2 text-green-400">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm">Completed</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => setIsLiked(!isLiked)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-xl transition-colors ${
                        isLiked ? 'bg-primary-gold/20 text-primary-gold' : 'bg-surface text-text-muted hover:text-text'
                      }`}
                    >
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-sm">Like</span>
                    </button>
                    <button className="btn-primary">
                      {lesson.completed ? 'Mark as Complete' : 'Mark Complete'}
                    </button>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-text mb-3">{lesson.title}</h2>
                <p className="text-text-muted mb-4">{lesson.description}</p>
              </div>

              {/* Tabs */}
              <div className="glass-effect rounded-2xl p-6">
                <div className="flex space-x-1 mb-6">
                  <button 
                    onClick={() => setShowNotes(false)}
                    className={`px-4 py-2 rounded-xl transition-colors ${
                      !showNotes ? 'bg-primary-gold/20 text-primary-gold' : 'text-text-muted hover:text-text'
                    }`}
                  >
                    Transcript
                  </button>
                  <button 
                    onClick={() => setShowNotes(true)}
                    className={`px-4 py-2 rounded-xl transition-colors ${
                      showNotes ? 'bg-primary-gold/20 text-primary-gold' : 'text-text-muted hover:text-text'
                    }`}
                  >
                    My Notes
                  </button>
                  <button 
                    onClick={() => setShowComments(!showComments)}
                    className={`px-4 py-2 rounded-xl transition-colors ${
                      showComments ? 'bg-primary-gold/20 text-primary-gold' : 'text-text-muted hover:text-text'
                    }`}
                  >
                    Comments ({lesson.comments.length})
                  </button>
                </div>

                {/* Content */}
                {!showNotes && !showComments && (
                  <div>
                    <h3 className="text-lg font-bold text-text mb-4">Lesson Transcript</h3>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-text-muted leading-relaxed">{lesson.transcript}</p>
                    </div>
                  </div>
                )}

                {showNotes && (
                  <div>
                    <h3 className="text-lg font-bold text-text mb-4">My Notes</h3>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Add your notes here..."
                      className="w-full h-40 p-4 bg-surface border border-gray-700 rounded-xl text-text placeholder-text-muted focus:border-primary-gold/50 focus:outline-none resize-none"
                    />
                    <div className="flex justify-end mt-4">
                      <button className="btn-primary">
                        Save Notes
                      </button>
                    </div>
                  </div>
                )}

                {showComments && (
                  <div>
                    <h3 className="text-lg font-bold text-text mb-4">Discussion</h3>
                    <div className="space-y-4">
                      {lesson.comments.map((comment) => (
                        <div key={comment.id} className="flex space-x-3 p-4 bg-surface rounded-xl">
                          <div className="w-8 h-8 bg-primary-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-primary-gold font-bold text-sm">{comment.avatar}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-text font-medium">{comment.author}</span>
                              <span className="text-text-muted text-sm">{comment.time}</span>
                            </div>
                            <p className="text-text-muted mb-2">{comment.content}</p>
                            <div className="flex items-center space-x-4">
                              <button className="flex items-center space-x-1 text-text-muted hover:text-primary-gold transition-colors">
                                <ThumbsUp className="w-4 h-4" />
                                <span className="text-sm">{comment.likes}</span>
                              </button>
                              <button className="text-text-muted hover:text-primary-gold transition-colors text-sm">
                                Reply
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Add Comment */}
                    <div className="mt-6 p-4 bg-surface rounded-xl">
                      <textarea
                        placeholder="Add a comment..."
                        className="w-full h-20 p-3 bg-background border border-gray-700 rounded-xl text-text placeholder-text-muted focus:border-primary-gold/50 focus:outline-none resize-none"
                      />
                      <div className="flex justify-end mt-3">
                        <button className="btn-primary">
                          Post Comment
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Lesson Resources */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-lg font-bold text-text mb-4">Lesson Resources</h3>
                <div className="space-y-3">
                  {lesson.resources.map((resource, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-surface rounded-xl border border-gray-700 hover:border-primary-gold/30 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary-gold/20 rounded-lg flex items-center justify-center">
                          <Download className="w-4 h-4 text-primary-gold" />
                        </div>
                        <div>
                          <p className="text-text font-medium text-sm">{resource.title}</p>
                          <p className="text-text-muted text-xs">{resource.type} • {resource.size}</p>
                        </div>
                      </div>
                      <button className="text-primary-gold hover:text-primary-gold/80 transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Progress */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-lg font-bold text-text mb-4">Course Progress</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Current Lesson</span>
                    <span className="text-text font-semibold">1/12</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-gold to-primary-gold-dark h-2 rounded-full" style={{ width: '8%' }}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Time Remaining</span>
                    <span className="text-text font-semibold">3h 45m</span>
                  </div>
                </div>
              </div>

              {/* Next Lesson */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-lg font-bold text-text mb-4">Next Lesson</h3>
                <div className="p-4 bg-surface rounded-xl border border-gray-700">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-primary-gold/20 rounded-lg flex items-center justify-center">
                      <Play className="w-5 h-5 text-primary-gold" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-text font-medium">Essential Skills for VAs</h4>
                      <p className="text-text-muted text-sm">20:00 • Video</p>
                    </div>
                  </div>
                  <a 
                    href="/academy/lesson/2"
                    className="w-full btn-primary text-center block"
                  >
                    Continue Course
                  </a>
                </div>
              </div>

              {/* Instructor */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-lg font-bold text-text mb-4">Instructor</h3>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-gold to-primary-gold-dark rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">SJ</span>
                  </div>
                  <div>
                    <p className="text-text font-semibold">{lesson.instructor}</p>
                    <p className="text-text-muted text-sm">Senior VA Consultant</p>
                  </div>
                </div>
                <a 
                  href="/academy/instructor/sarah-johnson"
                  className="w-full text-primary-gold hover:text-primary-gold/80 transition-colors text-sm font-medium text-center block"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}