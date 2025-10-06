'use client'

import { useState } from 'react'
import Navigation from './Navigation'
import { 
  Crown, 
  Play, 
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
  MessageCircle
} from 'lucide-react'

interface CourseDetailProps {
  courseId: string
}

export default function CourseDetail({ courseId }: CourseDetailProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  // Demo course data - in real app this would come from API
  const courses = [
    {
      id: '1',
      title: 'Virtual Assistant grondbeginselen',
      description: 'Leer de basis van het worden van een succesvolle virtual assistant. Deze uitgebreide cursus behandelt alles van het opzetten van je werkruimte tot het vinden van je eerste klanten.',
      category: 'fundamentals',
      duration: '4h 30m',
      lessons: 12,
      completed: 8,
      difficulty: 'Beginner',
      rating: 4.9,
      students: 1250,
      instructor: 'Sarah Johnson',
      price: 'Free',
      featured: true,
      lessonsList: [
        { id: 1, title: 'What is a Virtual Assistant?', duration: '15:00', type: 'video', completed: true, description: 'Introduction to the VA industry and career opportunities' },
        { id: 2, title: 'Essential Skills for VAs', duration: '20:00', type: 'video', completed: true, description: 'Core competencies every VA should develop' },
        { id: 3, title: 'Setting Up Your Workspace', duration: '18:00', type: 'video', completed: true, description: 'Creating an efficient home office setup' },
        { id: 4, title: 'Time Management Basics', duration: '22:00', type: 'video', completed: true, description: 'Fundamental time management techniques' },
        { id: 5, title: 'Communication Fundamentals', duration: '25:00', type: 'video', completed: true, description: 'Professional communication best practices' },
        { id: 6, title: 'Client Relationship Building', duration: '28:00', type: 'video', completed: true, description: 'Building and maintaining client relationships' },
        { id: 7, title: 'Basic Project Management', duration: '30:00', type: 'video', completed: true, description: 'Introduction to project management principles' },
        { id: 8, title: 'Introduction to Tools & Software', duration: '35:00', type: 'video', completed: true, description: 'Essential tools every VA should know' },
        { id: 9, title: 'Setting Your Rates', duration: '20:00', type: 'video', completed: false, description: 'How to price your services competitively' },
        { id: 10, title: 'Creating Your VA Portfolio', duration: '25:00', type: 'video', completed: false, description: 'Building a compelling portfolio' },
        { id: 11, title: 'Finding Your First Clients', duration: '30:00', type: 'video', completed: false, description: 'Strategies for client acquisition' },
        { id: 12, title: 'Fundamentals Quiz', duration: '15:00', type: 'quiz', completed: false, description: 'Test your knowledge of VA fundamentals' }
      ]
    },
    {
      id: '2',
      title: 'Email Management Mastery',
      description: 'Master the art of professional email communication and organization',
      category: 'communication',
      duration: '3h 15m',
      lessons: 9,
      completed: 6,
      difficulty: 'Intermediate',
      rating: 4.8,
      students: 890,
      instructor: 'Mike Chen',
      price: 'Premium',
      featured: true,
      lessonsList: [
        { id: 1, title: 'Email Organization Strategies', duration: '25:00', type: 'video', completed: true, description: 'Learn to organize your inbox with folders, labels, and filters' },
        { id: 2, title: 'Inbox Zero Methodology', duration: '20:00', type: 'video', completed: true, description: 'Master the art of keeping your inbox empty and organized' },
        { id: 3, title: 'Email Templates & Automation', duration: '30:00', type: 'video', completed: true, description: 'Create and use email templates for efficiency' },
        { id: 4, title: 'Professional Email Writing', duration: '28:00', type: 'video', completed: true, description: 'Write clear, professional emails that get results' },
        { id: 5, title: 'Managing Multiple Email Accounts', duration: '22:00', type: 'video', completed: true, description: 'Handle multiple email accounts for different clients' },
        { id: 6, title: 'Email Security Best Practices', duration: '18:00', type: 'video', completed: true, description: 'Protect sensitive information in email communications' },
        { id: 7, title: 'Advanced Email Tools', duration: '35:00', type: 'video', completed: false, description: 'Explore advanced tools like Boomerang, SaneBox, and more' },
        { id: 8, title: 'Client Email Management', duration: '25:00', type: 'video', completed: false, description: 'Manage client emails professionally and efficiently' },
        { id: 9, title: 'Email Management Quiz', duration: '12:00', type: 'quiz', completed: false, description: 'Test your email management knowledge' }
      ]
    },
    {
      id: '3',
      title: 'Calendar Optimization',
      description: 'Learn to manage multiple calendars and optimize scheduling',
      category: 'productivity',
      duration: '2h 45m',
      lessons: 8,
      completed: 3,
      difficulty: 'Intermediate',
      rating: 4.7,
      students: 650,
      instructor: 'Emma Davis',
      price: 'Premium',
      featured: false,
      lessonsList: [
        { id: 1, title: 'Calendar Setup & Organization', duration: '20:00', type: 'video', completed: true, description: 'Set up your calendar system for maximum efficiency' },
        { id: 2, title: 'Time Blocking Techniques', duration: '25:00', type: 'video', completed: true, description: 'Master the art of time blocking for productivity' },
        { id: 3, title: 'Managing Multiple Calendars', duration: '22:00', type: 'video', completed: true, description: 'Handle multiple calendars for different clients and projects' },
        { id: 4, title: 'Scheduling Best Practices', duration: '18:00', type: 'video', completed: false, description: 'Learn optimal scheduling strategies and buffer times' },
        { id: 5, title: 'Calendar Integration Tools', duration: '30:00', type: 'video', completed: false, description: 'Integrate calendars with other productivity tools' },
        { id: 6, title: 'Meeting Management', duration: '25:00', type: 'video', completed: false, description: 'Efficiently schedule and manage client meetings' },
        { id: 7, title: 'Time Zone Management', duration: '15:00', type: 'video', completed: false, description: 'Handle international clients across time zones' },
        { id: 8, title: 'Calendar Optimization Quiz', duration: '10:00', type: 'quiz', completed: false, description: 'Test your calendar management skills' }
      ]
    },
    {
      id: '4',
      title: 'Client Communication Excellence',
      description: 'Build strong relationships with clients through effective communication',
      category: 'communication',
      duration: '3h 30m',
      lessons: 10,
      completed: 0,
      difficulty: 'Advanced',
      rating: 4.9,
      students: 420,
      instructor: 'David Wilson',
      price: 'Premium',
      featured: false,
      lessonsList: [
        { id: 1, title: 'Understanding Client Needs', duration: '25:00', type: 'video', completed: false, description: 'Learn to identify and understand what clients really want' },
        { id: 2, title: 'Active Listening Techniques', duration: '20:00', type: 'video', completed: false, description: 'Master the art of truly hearing and understanding clients' },
        { id: 3, title: 'Professional Communication Styles', duration: '30:00', type: 'video', completed: false, description: 'Adapt your communication style to different client personalities' },
        { id: 4, title: 'Handling Difficult Conversations', duration: '35:00', type: 'video', completed: false, description: 'Navigate challenging client situations with confidence' },
        { id: 5, title: 'Building Trust & Rapport', duration: '28:00', type: 'video', completed: false, description: 'Create lasting relationships with your clients' },
        { id: 6, title: 'Managing Client Expectations', duration: '25:00', type: 'video', completed: false, description: 'Set and manage realistic expectations from the start' },
        { id: 7, title: 'Conflict Resolution', duration: '30:00', type: 'video', completed: false, description: 'Resolve conflicts professionally and maintain relationships' },
        { id: 8, title: 'Cultural Communication', duration: '22:00', type: 'video', completed: false, description: 'Communicate effectively across different cultures' },
        { id: 9, title: 'Client Feedback Management', duration: '20:00', type: 'video', completed: false, description: 'Handle feedback constructively and improve continuously' },
        { id: 10, title: 'Communication Excellence Quiz', duration: '15:00', type: 'quiz', completed: false, description: 'Test your client communication skills' }
      ]
    },
    {
      id: '5',
      title: 'Task Automation Tools',
      description: 'Discover powerful tools to automate repetitive tasks',
      category: 'productivity',
      duration: '4h 20m',
      lessons: 12,
      completed: 0,
      difficulty: 'Advanced',
      rating: 4.8,
      students: 380,
      instructor: 'Lisa Rodriguez',
      price: 'Premium',
      featured: false,
      lessonsList: [
        { id: 1, title: 'Introduction to Automation', duration: '20:00', type: 'video', completed: false, description: 'Understand the basics of task automation and its benefits' },
        { id: 2, title: 'Zapier Fundamentals', duration: '35:00', type: 'video', completed: false, description: 'Master Zapier to connect apps and automate workflows' },
        { id: 3, title: 'IFTTT Integration', duration: '25:00', type: 'video', completed: false, description: 'Use IFTTT to create simple automation recipes' },
        { id: 4, title: 'Microsoft Power Automate', duration: '30:00', type: 'video', completed: false, description: 'Automate business processes with Power Automate' },
        { id: 5, title: 'Google Apps Script', duration: '40:00', type: 'video', completed: false, description: 'Create custom automation scripts for Google Workspace' },
        { id: 6, title: 'Email Automation', duration: '25:00', type: 'video', completed: false, description: 'Automate email responses and follow-ups' },
        { id: 7, title: 'Social Media Automation', duration: '30:00', type: 'video', completed: false, description: 'Schedule and automate social media posts' },
        { id: 8, title: 'Data Entry Automation', duration: '28:00', type: 'video', completed: false, description: 'Automate repetitive data entry tasks' },
        { id: 9, title: 'File Management Automation', duration: '22:00', type: 'video', completed: false, description: 'Organize and manage files automatically' },
        { id: 10, title: 'Advanced Automation Workflows', duration: '35:00', type: 'video', completed: false, description: 'Create complex multi-step automation workflows' },
        { id: 11, title: 'Troubleshooting Automation', duration: '20:00', type: 'video', completed: false, description: 'Fix common automation issues and errors' },
        { id: 12, title: 'Automation Tools Quiz', duration: '15:00', type: 'quiz', completed: false, description: 'Test your automation knowledge and skills' }
      ]
    },
    {
      id: '6',
      title: 'Social Media Management',
      description: 'Learn to manage social media accounts for clients',
      category: 'advanced',
      duration: '3h 50m',
      lessons: 10,
      completed: 0,
      difficulty: 'Advanced',
      rating: 4.6,
      students: 290,
      instructor: 'Alex Thompson',
      price: 'Premium',
      featured: false,
      lessonsList: [
        { id: 1, title: 'Social Media Strategy Basics', duration: '25:00', type: 'video', completed: false, description: 'Develop effective social media strategies for clients' },
        { id: 2, title: 'Content Planning & Creation', duration: '35:00', type: 'video', completed: false, description: 'Plan and create engaging social media content' },
        { id: 3, title: 'Platform-Specific Best Practices', duration: '40:00', type: 'video', completed: false, description: 'Master best practices for each social media platform' },
        { id: 4, title: 'Social Media Scheduling Tools', duration: '30:00', type: 'video', completed: false, description: 'Use tools like Hootsuite, Buffer, and Later effectively' },
        { id: 5, title: 'Community Management', duration: '28:00', type: 'video', completed: false, description: 'Build and engage with online communities' },
        { id: 6, title: 'Analytics & Reporting', duration: '25:00', type: 'video', completed: false, description: 'Track performance and create meaningful reports' },
        { id: 7, title: 'Crisis Management', duration: '20:00', type: 'video', completed: false, description: 'Handle social media crises professionally' },
        { id: 8, title: 'Influencer Collaboration', duration: '22:00', type: 'video', completed: false, description: 'Work with influencers and brand ambassadors' },
        { id: 9, title: 'Paid Social Media Advertising', duration: '30:00', type: 'video', completed: false, description: 'Create and manage paid social media campaigns' },
        { id: 10, title: 'Social Media Management Quiz', duration: '15:00', type: 'quiz', completed: false, description: 'Test your social media management expertise' }
      ]
    },
    {
      id: '7',
      title: 'Project Management for VAs',
      description: 'Master project management skills for virtual assistants',
      category: 'productivity',
      duration: '3h 15m',
      lessons: 9,
      completed: 0,
      difficulty: 'Intermediate',
      rating: 4.7,
      students: 520,
      instructor: 'Jennifer Martinez',
      price: 'Premium',
      featured: false,
      lessonsList: [
        { id: 1, title: 'Project Management Fundamentals', duration: '25:00', type: 'video', completed: false, description: 'Learn the core principles of effective project management' },
        { id: 2, title: 'Asana for VAs', duration: '30:00', type: 'video', completed: false, description: 'Master Asana for task and project organization' },
        { id: 3, title: 'Trello Organization', duration: '25:00', type: 'video', completed: false, description: 'Use Trello boards for visual project management' },
        { id: 4, title: 'Monday.com Workflows', duration: '35:00', type: 'video', completed: false, description: 'Create efficient workflows with Monday.com' },
        { id: 5, title: 'Task Prioritization', duration: '20:00', type: 'video', completed: false, description: 'Prioritize tasks using proven methodologies' },
        { id: 6, title: 'Client Project Communication', duration: '25:00', type: 'video', completed: false, description: 'Communicate project progress effectively with clients' },
        { id: 7, title: 'Deadline Management', duration: '22:00', type: 'video', completed: false, description: 'Manage deadlines and deliver projects on time' },
        { id: 8, title: 'Project Documentation', duration: '18:00', type: 'video', completed: false, description: 'Create comprehensive project documentation' },
        { id: 9, title: 'Project Management Quiz', duration: '15:00', type: 'quiz', completed: false, description: 'Test your project management knowledge' }
      ]
    },
    {
      id: '8',
      title: 'Financial Management for VAs',
      description: 'Learn to manage finances and pricing as a virtual assistant',
      category: 'fundamentals',
      duration: '2h 30m',
      lessons: 7,
      completed: 0,
      difficulty: 'Beginner',
      rating: 4.8,
      students: 680,
      instructor: 'Robert Kim',
      price: 'Premium',
      featured: false,
      lessonsList: [
        { id: 1, title: 'Pricing Your Services', duration: '30:00', type: 'video', completed: false, description: 'Learn how to price your VA services competitively' },
        { id: 2, title: 'Invoicing & Payment Systems', duration: '25:00', type: 'video', completed: false, description: 'Set up professional invoicing and payment systems' },
        { id: 3, title: 'Expense Tracking', duration: '20:00', type: 'video', completed: false, description: 'Track business expenses for tax deductions' },
        { id: 4, title: 'Tax Preparation for VAs', duration: '35:00', type: 'video', completed: false, description: 'Understand tax obligations for virtual assistants' },
        { id: 5, title: 'Business Banking', duration: '18:00', type: 'video', completed: false, description: 'Set up and manage business bank accounts' },
        { id: 6, title: 'Financial Planning', duration: '22:00', type: 'video', completed: false, description: 'Plan for financial stability and growth' },
        { id: 7, title: 'Financial Management Quiz', duration: '10:00', type: 'quiz', completed: false, description: 'Test your financial management knowledge' }
      ]
    }
  ]

  const course = courses.find(c => c.id === courseId) || courses[0]

  const getProgressPercentage = (completed: number, total: number) => {
    return total > 0 ? Math.round((completed / total) * 100) : 0
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/10'
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10'
      case 'Advanced': return 'text-red-400 bg-red-400/10'
      default: return 'text-text-muted bg-gray-400/10'
    }
  }

  const getLessonIcon = (type: string, completed: boolean) => {
    if (completed) return <CheckCircle className="w-5 h-5 text-green-400" />
    if (type === 'quiz') return <Award className="w-5 h-5 text-primary-gold" />
    return <Play className="w-5 h-5 text-primary-gold" />
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Content */}
      <div className="lg:ml-64 transition-all duration-300">
        {/* Header */}
        <header className="bg-surface border-b border-gray-800">
          <div className="px-6 py-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <button className="text-text-muted hover:text-text transition-colors">
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <div>
                  <h1 className="text-3xl font-bold text-text">{course.title}</h1>
                  <p className="text-text-muted">Beheers de grondbeginselen van virtual assistance</p>
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
              {/* Course Overview */}
              <div className="glass-effect rounded-2xl p-6 mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-2 py-1 bg-primary-gold/20 text-primary-gold text-xs font-medium rounded-full">
                        {course.category}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(course.difficulty)}`}>
                        {course.difficulty}
                      </span>
                      <span className="px-2 py-1 bg-primary-gold/20 text-primary-gold text-xs font-medium rounded-full">
                        {course.price}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-text mb-3">{course.title}</h2>
                    <p className="text-text-muted text-lg mb-4">{course.description}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-text-muted mb-4">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-5 h-5" />
                      <span>{course.lessons} lessen</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5" />
                      <span>{course.students} studenten</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-primary-gold" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-text-secondary">Cursus voortgang</span>
                    <span className="text-primary-gold font-medium">
                      {getProgressPercentage(course.completed, course.lessons)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-primary-gold to-primary-gold-dark h-3 rounded-full transition-all duration-500"
                      style={{ width: `${getProgressPercentage(course.completed, course.lessons)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-text-muted">
                    by {course.instructor}
                  </div>
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => setIsLiked(!isLiked)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-colors ${
                        isLiked ? 'bg-primary-gold/20 text-primary-gold' : 'bg-surface text-text-muted hover:text-text'
                      }`}
                    >
                      <ThumbsUp className="w-4 h-4" />
                      <span>Vind ik leuk</span>
                    </button>
                    <button className="btn-primary">
                      {course.completed === course.lessons ? 'Cursus Bekijken' : 'Verder Leren'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Lessons List */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold text-text mb-6">Cursus Inhoud</h3>
                <div className="space-y-3">
                  {course.lessonsList.map((lesson, index) => (
                    <div key={lesson.id} className={`flex items-center justify-between p-4 rounded-xl transition-colors ${
                      lesson.completed ? 'bg-green-400/10 border border-green-400/20' :
                      index === course.completed ? 'bg-primary-gold/10 border border-primary-gold/30' :
                      'bg-surface border border-gray-700 hover:border-primary-gold/30'
                    }`}>
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          {getLessonIcon(lesson.type, lesson.completed)}
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-medium ${
                            lesson.completed ? 'text-text' : 'text-text-secondary'
                          }`}>
                            {lesson.title}
                          </h4>
                          <p className="text-text-muted text-sm">{lesson.description}</p>
                          <div className="flex items-center space-x-3 mt-1">
                            <span className="text-text-muted text-xs">{lesson.duration}</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              lesson.type === 'quiz' ? 'bg-primary-gold/20 text-primary-gold' : 'bg-gray-600 text-text-muted'
                            }`}>
                              {lesson.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {lesson.completed && (
                          <span className="text-green-400 text-sm font-medium">Completed</span>
                        )}
                        <a 
                          href={`/academy/lesson/${lesson.id}`}
                          className="text-primary-gold hover:text-primary-gold/80 transition-colors"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Stats */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-lg font-bold text-text mb-4">Course Statistics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Completion Rate</span>
                    <span className="text-primary-gold font-semibold">
                      {getProgressPercentage(course.completed, course.lessons)}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Lessons Completed</span>
                    <span className="text-text font-semibold">{course.completed}/{course.lessons}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Time Invested</span>
                    <span className="text-text font-semibold">2h 15m</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Huidige Reeks</span>
                    <span className="text-text font-semibold">5 days</span>
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-lg font-bold text-text mb-4">Cursus Bronnen</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-surface rounded-xl border border-gray-700 hover:border-primary-gold/30 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-gold/20 rounded-lg flex items-center justify-center">
                        <Download className="w-4 h-4 text-primary-gold" />
                      </div>
                      <div>
                        <p className="text-text font-medium text-sm">Cursus Werkboek</p>
                        <p className="text-text-muted text-xs">PDF • 2.3 MB</p>
                      </div>
                    </div>
                    <button className="text-primary-gold hover:text-primary-gold/80 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-surface rounded-xl border border-gray-700 hover:border-primary-gold/30 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-gold/20 rounded-lg flex items-center justify-center">
                        <Download className="w-4 h-4 text-primary-gold" />
                      </div>
                      <div>
                        <p className="text-text font-medium text-sm">VA Tools Checklist</p>
                        <p className="text-text-muted text-xs">DOCX • 1.1 MB</p>
                      </div>
                    </div>
                    <button className="text-primary-gold hover:text-primary-gold/80 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Instructor */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-lg font-bold text-text mb-4">Instructeur</h3>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-gold to-primary-gold-dark rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">SJ</span>
                  </div>
                  <div>
                    <p className="text-text font-semibold">{course.instructor}</p>
                    <p className="text-text-muted text-sm">Senior VA Consultant</p>
                  </div>
                </div>
                <p className="text-text-muted text-sm mb-4">
                  Sarah has been a virtual assistant for over 8 years and has helped hundreds of VAs start their careers.
                </p>
                <a 
                  href="/academy/instructor/sarah-johnson"
                  className="w-full text-primary-gold hover:text-primary-gold/80 transition-colors text-sm font-medium text-center block"
                >
                  View Profile
                </a>
              </div>

              {/* Community */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-lg font-bold text-text mb-4">Course Community</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Active Students</span>
                    <span className="text-text font-semibold">1,247</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Discussions</span>
                    <span className="text-text font-semibold">89</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Questions</span>
                    <span className="text-text font-semibold">156</span>
                  </div>
                  <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-surface border border-gray-700 rounded-xl text-text hover:border-primary-gold/30 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span>Join Discussion</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
