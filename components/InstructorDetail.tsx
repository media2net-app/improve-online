'use client'

import { useState } from 'react'
import Navigation from './Navigation'
import { 
  ArrowLeft,
  Star,
  Users,
  BookOpen,
  Award,
  MessageCircle,
  Mail,
  Globe,
  Linkedin,
  Twitter,
  Youtube,
  Play,
  Clock,
  CheckCircle,
  ThumbsUp,
  Share2,
  Bookmark,
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  Eye
} from 'lucide-react'

interface InstructorDetailProps {
  instructorSlug: string
}

export default function InstructorDetail({ instructorSlug }: InstructorDetailProps) {
  const [isFollowing, setIsFollowing] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  // Demo instructor data
  const instructors = [
    {
      slug: 'sarah-johnson',
      name: 'Sarah Johnson',
      title: 'Senior VA Consultant & Founder',
      bio: 'Sarah has been a virtual assistant for over 8 years and has helped hundreds of VAs start their careers. She founded VA Success Academy in 2019 and has since trained over 2,000 virtual assistants worldwide.',
      avatar: 'SJ',
      rating: 4.9,
      students: 2500,
      courses: 12,
      experience: '8+ years',
      location: 'San Francisco, CA',
      website: 'www.sarahjohnsonva.com',
      social: {
        linkedin: 'sarah-johnson-va',
        twitter: '@sarahjohnsonva',
        youtube: 'Sarah Johnson VA'
      },
      specialties: [
        'Virtual Assistant Training',
        'Business Development',
        'Client Management',
        'Productivity Systems'
      ],
      achievements: [
        'Top 1% VA Consultant',
        'VA of the Year 2022',
        'Best VA Training Program 2023',
        '500+ Successful VA Placements'
      ],
      courses: [
        {
          id: 1,
          title: 'Virtual Assistant grondbeginselen',
          description: 'Leer de basis van het worden van een succesvolle virtual assistant',
          duration: '4h 30m',
          lessons: 12,
          students: 1250,
          rating: 4.9,
          price: 'Free',
          thumbnail: '/api/placeholder/300/200'
        },
        {
          id: 2,
          title: 'Advanced VA Strategies',
          description: 'Advanced strategies for experienced virtual assistants',
          duration: '3h 45m',
          lessons: 8,
          students: 890,
          rating: 4.8,
          price: 'Premium',
          thumbnail: '/api/placeholder/300/200'
        }
      ],
      testimonials: [
        {
          id: 1,
          name: 'Maria Santos',
          role: 'Virtual Assistant',
          avatar: 'MS',
          content: 'Sarah\'s training completely transformed my VA career. I went from struggling to find clients to having a full roster in just 3 months!',
          rating: 5,
          date: '2 weeks ago'
        },
        {
          id: 2,
          name: 'John Chen',
          role: 'Business Owner',
          avatar: 'JC',
          content: 'The best VA training program I\'ve ever seen. Sarah\'s methods are practical and immediately applicable.',
          rating: 5,
          date: '1 month ago'
        },
        {
          id: 3,
          name: 'Lisa Rodriguez',
          role: 'Virtual Assistant',
          avatar: 'LR',
          content: 'Sarah helped me build a successful VA business from scratch. Her mentorship was invaluable.',
          rating: 5,
          date: '2 months ago'
        }
      ],
      recentActivity: [
        {
          type: 'course',
          title: 'Published new course: Advanced Client Management',
          time: '2 days ago'
        },
        {
          type: 'post',
          title: 'Shared tips on VA productivity systems',
          time: '1 week ago'
        },
        {
          type: 'webinar',
          title: 'Hosted live Q&A session',
          time: '2 weeks ago'
        }
      ]
    }
  ]

  const instructor = instructors.find(i => i.slug === instructorSlug) || instructors[0]

  const getSpecialtyColor = (index: number) => {
    const colors = [
      'bg-primary-gold/20 text-primary-gold',
      'bg-blue-400/20 text-blue-400',
      'bg-green-400/20 text-green-400',
      'bg-purple-400/20 text-purple-400'
    ]
    return colors[index % colors.length]
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
                <a 
                  href="/academy"
                  className="text-text-muted hover:text-text transition-colors"
                >
                  <ArrowLeft className="w-6 h-6" />
                </a>
                <div>
                  <h1 className="text-3xl font-bold text-text">{instructor.name}</h1>
                  <p className="text-text-muted">{instructor.title}</p>
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
              {/* Instructor Overview */}
              <div className="glass-effect rounded-2xl p-6 mb-6">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-gold to-primary-gold-dark rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-2xl">{instructor.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-text mb-2">{instructor.name}</h2>
                    <p className="text-text-muted text-lg mb-4">{instructor.title}</p>
                    <p className="text-text-muted mb-4">{instructor.bio}</p>
                    
                    <div className="flex items-center space-x-6 text-sm text-text-muted mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{instructor.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{instructor.experience} experience</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4" />
                        <span>{instructor.website}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <button 
                        onClick={() => setIsFollowing(!isFollowing)}
                        className={`px-6 py-3 rounded-xl transition-colors ${
                          isFollowing ? 'bg-primary-gold/20 text-primary-gold border border-primary-gold/30' : 'btn-primary'
                        }`}
                      >
                        {isFollowing ? 'Following' : 'Follow'}
                      </button>
                      <button className="flex items-center space-x-2 px-4 py-3 bg-surface border border-gray-700 rounded-xl text-text hover:border-primary-gold/30 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span>Message</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-surface rounded-xl">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <Star className="w-5 h-5 text-primary-gold" />
                      <span className="text-2xl font-bold text-text">{instructor.rating}</span>
                    </div>
                    <p className="text-text-muted text-sm">Rating</p>
                  </div>
                  <div className="text-center p-4 bg-surface rounded-xl">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <Users className="w-5 h-5 text-primary-gold" />
                      <span className="text-2xl font-bold text-text">{instructor.students.toLocaleString()}</span>
                    </div>
                    <p className="text-text-muted text-sm">Students</p>
                  </div>
                  <div className="text-center p-4 bg-surface rounded-xl">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <BookOpen className="w-5 h-5 text-primary-gold" />
                      <span className="text-2xl font-bold text-text">{instructor.courses}</span>
                    </div>
                    <p className="text-text-muted text-sm">Courses</p>
                  </div>
                  <div className="text-center p-4 bg-surface rounded-xl">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <Award className="w-5 h-5 text-primary-gold" />
                      <span className="text-2xl font-bold text-text">{instructor.achievements.length}</span>
                    </div>
                    <p className="text-text-muted text-sm">Awards</p>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-text mb-3">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {instructor.specialties.map((specialty, index) => (
                      <span 
                        key={specialty}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getSpecialtyColor(index)}`}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-text mb-3">Achievements</h3>
                  <div className="space-y-2">
                    {instructor.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-surface rounded-xl">
                        <Award className="w-5 h-5 text-primary-gold" />
                        <span className="text-text">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-lg font-bold text-text mb-3">Connect</h3>
                  <div className="flex items-center space-x-4">
                    <a 
                      href={`https://linkedin.com/in/${instructor.social.linkedin}`}
                      className="flex items-center space-x-2 p-3 bg-surface rounded-xl hover:border-primary-gold/30 transition-colors border border-gray-700"
                    >
                      <Linkedin className="w-5 h-5 text-primary-gold" />
                      <span className="text-text">LinkedIn</span>
                    </a>
                    <a 
                      href={`https://twitter.com/${instructor.social.twitter}`}
                      className="flex items-center space-x-2 p-3 bg-surface rounded-xl hover:border-primary-gold/30 transition-colors border border-gray-700"
                    >
                      <Twitter className="w-5 h-5 text-primary-gold" />
                      <span className="text-text">Twitter</span>
                    </a>
                    <a 
                      href={`https://youtube.com/c/${instructor.social.youtube}`}
                      className="flex items-center space-x-2 p-3 bg-surface rounded-xl hover:border-primary-gold/30 transition-colors border border-gray-700"
                    >
                      <Youtube className="w-5 h-5 text-primary-gold" />
                      <span className="text-text">YouTube</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Courses */}
              <div className="glass-effect rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-bold text-text mb-6">Courses by {instructor.name}</h3>
                <div className="space-y-4">
                  {instructor.courses.map((course) => (
                    <div key={course.id} className="flex items-center space-x-4 p-4 bg-surface rounded-xl border border-gray-700 hover:border-primary-gold/30 transition-colors">
                      <div className="w-16 h-12 bg-gradient-to-br from-primary-gold/20 to-primary-gold/10 rounded-lg flex items-center justify-center">
                        <Play className="w-6 h-6 text-primary-gold" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-text font-semibold mb-1">{course.title}</h4>
                        <p className="text-text-muted text-sm mb-2">{course.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-text-muted">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{course.lessons} lessons</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{course.students} students</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-primary-gold" />
                            <span>{course.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-primary-gold font-semibold mb-1">{course.price}</div>
                        <a 
                          href={`/academy/course/${course.id}`}
                          className="text-primary-gold hover:text-primary-gold/80 transition-colors text-sm"
                        >
                          View Course
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold text-text mb-6">Student Testimonials</h3>
                <div className="space-y-4">
                  {instructor.testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="p-4 bg-surface rounded-xl border border-gray-700">
                      <div className="flex items-start space-x-3 mb-3">
                        <div className="w-10 h-10 bg-primary-gold/20 rounded-full flex items-center justify-center">
                          <span className="text-primary-gold font-bold">{testimonial.avatar}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-text font-semibold">{testimonial.name}</span>
                            <span className="text-text-muted text-sm">{testimonial.role}</span>
                          </div>
                          <div className="flex items-center space-x-1 mb-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-primary-gold fill-current" />
                            ))}
                          </div>
                        </div>
                        <span className="text-text-muted text-sm">{testimonial.date}</span>
                      </div>
                      <p className="text-text-muted">{testimonial.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Activity */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-lg font-bold text-text mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {instructor.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-surface rounded-xl">
                      <div className="w-8 h-8 bg-primary-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        {activity.type === 'course' && <BookOpen className="w-4 h-4 text-primary-gold" />}
                        {activity.type === 'post' && <MessageCircle className="w-4 h-4 text-primary-gold" />}
                        {activity.type === 'webinar' && <Play className="w-4 h-4 text-primary-gold" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-text text-sm font-medium">{activity.title}</p>
                        <p className="text-text-muted text-xs">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-lg font-bold text-text mb-4">Contact</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-3 bg-surface rounded-xl border border-gray-700 hover:border-primary-gold/30 transition-colors">
                    <Mail className="w-5 h-5 text-primary-gold" />
                    <span className="text-text">Send Message</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-surface rounded-xl border border-gray-700 hover:border-primary-gold/30 transition-colors">
                    <Calendar className="w-5 h-5 text-primary-gold" />
                    <span className="text-text">Schedule Meeting</span>
                  </button>
                </div>
              </div>

              {/* Follow Stats */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-lg font-bold text-text mb-4">Follow Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Followers</span>
                    <span className="text-text font-semibold">2,847</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Following</span>
                    <span className="text-text font-semibold">156</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Posts</span>
                    <span className="text-text font-semibold">89</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
