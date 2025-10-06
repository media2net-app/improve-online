'use client'

import { useState, useEffect } from 'react'
import Navigation from './Navigation'
import DemoModal from './DemoModal'
import { 
  Crown, 
  BookOpen, 
  Trophy, 
  Clock, 
  TrendingUp, 
  Users, 
  Star,
  Play,
  CheckCircle,
  ArrowRight,
  Calendar,
  Target,
  Award
} from 'lucide-react'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [showDemoModal, setShowDemoModal] = useState(false)

  // Show demo modal on first visit
  useEffect(() => {
    const hasSeenDemo = localStorage.getItem('hasSeenDemo')
    if (!hasSeenDemo) {
      setShowDemoModal(true)
      localStorage.setItem('hasSeenDemo', 'true')
    }
  }, [])

  // Demo data
  const userProgress = {
    totalLessons: 24,
    completedLessons: 8,
    currentStreak: 5,
    totalHours: 12.5,
    level: 'Gemiddeld',
    nextMilestone: 'Geavanceerde VA technieken'
  }

  const recentLessons = [
    { id: 1, title: 'Email beheer beste praktijken', progress: 100, completed: true },
    { id: 2, title: 'Kalender optimalisatie', progress: 75, completed: false },
    { id: 3, title: 'Client communicatie', progress: 0, completed: false },
    { id: 4, title: 'Taak automatisering tools', progress: 0, completed: false }
  ]

  const achievements = [
    { id: 1, title: 'Eerste les voltooid', icon: Star, earned: true },
    { id: 2, title: 'Week streak', icon: Trophy, earned: true },
    { id: 3, title: 'Email expert', icon: Award, earned: false },
    { id: 4, title: 'Productiviteit meester', icon: Target, earned: false }
  ]

  const upcomingEvents = [
    { id: 1, title: 'Live V&A sessie', time: 'Vandaag 14:00', type: 'live' },
    { id: 2, title: 'Wekelijkse uitdaging', time: 'Morgen 09:00', type: 'challenge' },
    { id: 3, title: 'Mentor sessie', time: 'Vrijdag 15:00', type: 'mentor' }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <DemoModal isOpen={showDemoModal} onClose={() => setShowDemoModal(false)} />
      
      {/* Main Content */}
      <div className="lg:ml-64 transition-all duration-300">
        {/* Header */}
        <header className="bg-surface border-b border-gray-800">
          <div className="px-6 py-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-text">Dashboard</h1>
                <p className="text-text-muted">Welkom terug, Sarah! Hier is je leervoortgang.</p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowDemoModal(true)}
                  className="px-4 py-2 bg-primary-gold/20 text-primary-gold rounded-xl hover:bg-primary-gold/30 transition-colors text-sm font-medium"
                >
                  Demo bekijken
                </button>
                <div className="text-right">
                  <p className="text-text-secondary text-sm">Huidig niveau</p>
                  <p className="text-primary-gold font-semibold">{userProgress.level}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-primary-gold to-primary-gold-dark rounded-full flex items-center justify-center luxury-glow">
                  <span className="text-black font-bold text-lg">S</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 py-8">
        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-muted text-sm">Lessen voltooid</p>
                <p className="text-3xl font-bold text-text">{userProgress.completedLessons}/{userProgress.totalLessons}</p>
              </div>
              <BookOpen className="w-8 h-8 text-primary-gold" />
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-primary-gold to-primary-gold-dark h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(userProgress.completedLessons / userProgress.totalLessons) * 100}%` }}
                ></div>
              </div>
              <p className="text-text-muted text-xs mt-2">
                {Math.round((userProgress.completedLessons / userProgress.totalLessons) * 100)}% Voltooid
              </p>
            </div>
          </div>

          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-muted text-sm">Huidige reeks</p>
                <p className="text-3xl font-bold text-text">{userProgress.currentStreak} dagen</p>
              </div>
              <TrendingUp className="w-8 h-8 text-primary-gold" />
            </div>
            <p className="text-text-muted text-xs mt-2">Ga zo door!</p>
          </div>

          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-muted text-sm">Totale uren</p>
                <p className="text-3xl font-bold text-text">{userProgress.totalHours}h</p>
              </div>
              <Clock className="w-8 h-8 text-primary-gold" />
            </div>
            <p className="text-text-muted text-xs mt-2">Leertijd</p>
          </div>

          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-muted text-sm">Volgende mijlpaal</p>
                <p className="text-lg font-semibold text-text">{userProgress.nextMilestone}</p>
              </div>
              <Trophy className="w-8 h-8 text-primary-gold" />
            </div>
            <p className="text-text-muted text-xs mt-2">2 lessen te gaan</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Lessons */}
          <div className="lg:col-span-2">
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-text">Verder leren</h2>
                <button className="text-primary-gold hover:text-primary-gold/80 transition-colors flex items-center space-x-1">
                  <span>Bekijk alles</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-4">
                {recentLessons.map((lesson) => (
                  <div key={lesson.id} className="flex items-center justify-between p-4 bg-surface rounded-xl border border-gray-700 hover:border-primary-gold/30 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-gold to-primary-gold-dark rounded-xl flex items-center justify-center">
                        {lesson.completed ? (
                          <CheckCircle className="w-6 h-6 text-black" />
                        ) : (
                          <Play className="w-6 h-6 text-black" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-text">{lesson.title}</h3>
                        <p className="text-text-muted text-sm">
                          {lesson.progress}% Voltooid
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-20 bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary-gold to-primary-gold-dark h-2 rounded-full transition-all duration-500"
                          style={{ width: `${lesson.progress}%` }}
                        ></div>
                      </div>
                    <a 
                      href={`/academy/course/${lesson.id}`}
                      className="text-primary-gold hover:text-primary-gold/80 transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <div className="glass-effect rounded-2xl p-6">
              <h2 className="text-xl font-bold text-text mb-4">Prestaties</h2>
              <div className="space-y-3">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className={`flex items-center space-x-3 p-3 rounded-xl ${
                    achievement.earned ? 'bg-primary-gold/10 border border-primary-gold/20' : 'bg-surface border border-gray-700'
                  }`}>
                    <achievement.icon className={`w-6 h-6 ${
                      achievement.earned ? 'text-primary-gold' : 'text-text-muted'
                    }`} />
                    <span className={`text-sm ${
                      achievement.earned ? 'text-text' : 'text-text-muted'
                    }`}>
                      {achievement.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="glass-effect rounded-2xl p-6">
              <h2 className="text-xl font-bold text-text mb-4">Aankomende evenementen</h2>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-3 bg-surface rounded-xl border border-gray-700">
                    <div>
                      <p className="text-text font-medium text-sm">{event.title}</p>
                      <p className="text-text-muted text-xs">{event.time}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      event.type === 'live' ? 'bg-red-500' :
                      event.type === 'challenge' ? 'bg-primary-gold' : 'bg-blue-500'
                    }`}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-effect rounded-2xl p-6">
              <h2 className="text-xl font-bold text-text mb-4">Snelle acties</h2>
              <div className="space-y-3">
                <a href="/academy" className="w-full btn-primary text-center block">
                  Verder leren
                </a>
                <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-surface border border-gray-700 rounded-xl text-text hover:border-primary-gold/30 transition-colors">
                  <Calendar className="w-5 h-5" />
                  <span>Plan studietijd</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-surface border border-gray-700 rounded-xl text-text hover:border-primary-gold/30 transition-colors">
                  <Users className="w-5 h-5" />
                  <span>Word lid van community</span>
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
