'use client'

import { useState, useEffect } from 'react'
import Navigation from './Navigation'
import DemoModal from './DemoModal'
import { 
  Crown, 
  Heart, 
  Target, 
  Clock, 
  TrendingUp, 
  Users, 
  Star,
  Play,
  CheckCircle,
  ArrowRight,
  Calendar,
  Lightbulb,
  Award,
  Compass,
  Trophy
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

  // Demo data voor retraite deelnemer
  const retraiteProgress = {
    totalModules: 8,
    completedModules: 3,
    currentStreak: 7,
    totalHours: 24.5,
    level: 'Ontwikkelaar',
    nextMilestone: 'Missie Statement afronden'
  }

  const retraiteModules = [
    { id: 1, title: 'Intake & Zelfreflectie', progress: 100, completed: true, type: 'intake' },
    { id: 2, title: 'Persoonlijke Waarden', progress: 100, completed: true, type: 'groei' },
    { id: 3, title: 'Levensmissie Ontdekken', progress: 75, completed: false, type: 'missie' },
    { id: 4, title: 'Mindfulness & Meditatie', progress: 0, completed: false, type: 'reflectie' },
    { id: 5, title: 'Doelen & Actieplan', progress: 0, completed: false, type: 'voortgang' }
  ]

  const achievements = [
    { id: 1, title: 'Eerste reflectie voltooid', icon: Star, earned: true },
    { id: 2, title: 'Week van bewustzijn', icon: Trophy, earned: true },
    { id: 3, title: 'Waarden ontdekt', icon: Heart, earned: true },
    { id: 4, title: 'Missie specialist', icon: Target, earned: false }
  ]

  const upcomingEvents = [
    { id: 1, title: 'Groepssessie: Missie delen', time: 'Vandaag 19:00', type: 'groep' },
    { id: 2, title: 'Individuele begeleiding', time: 'Morgen 14:00', type: '1op1' },
    { id: 3, title: 'Meditatie sessie', time: 'Vrijdag 08:00', type: 'meditatie' }
  ]

  const getModuleIcon = (type: string) => {
    switch (type) {
      case 'intake': return <Target className="w-6 h-6 text-black" />
      case 'groei': return <Heart className="w-6 h-6 text-black" />
      case 'missie': return <Compass className="w-6 h-6 text-black" />
      case 'reflectie': return <Lightbulb className="w-6 h-6 text-black" />
      case 'voortgang': return <TrendingUp className="w-6 h-6 text-black" />
      default: return <Play className="w-6 h-6 text-black" />
    }
  }

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
                <h1 className="text-3xl font-bold text-text">Retraite Dashboard</h1>
                <p className="text-text-muted">Welkom terug, Maria! Hier is je groeivoortgang.</p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowDemoModal(true)}
                  className="px-4 py-2 bg-primary-blue/20 text-primary-blue rounded-xl hover:bg-primary-blue/30 transition-colors text-sm font-medium"
                >
                  Demo bekijken
                </button>
                <div className="text-right">
                  <p className="text-text-secondary text-sm">Huidig niveau</p>
                  <p className="text-primary-blue font-semibold">{retraiteProgress.level}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-full flex items-center justify-center luxury-glow">
                  <span className="text-white font-bold text-lg">M</span>
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
                <p className="text-text-muted text-sm">Modules voltooid</p>
                <p className="text-3xl font-bold text-text">{retraiteProgress.completedModules}/{retraiteProgress.totalModules}</p>
              </div>
              <Heart className="w-8 h-8 text-primary-blue" />
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-primary-blue to-primary-blue-dark h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(retraiteProgress.completedModules / retraiteProgress.totalModules) * 100}%` }}
                ></div>
              </div>
              <p className="text-text-muted text-xs mt-2">
                {Math.round((retraiteProgress.completedModules / retraiteProgress.totalModules) * 100)}% Voltooid
              </p>
            </div>
          </div>

          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-muted text-sm">Dagelijkse reflectie</p>
                <p className="text-3xl font-bold text-text">{retraiteProgress.currentStreak} dagen</p>
              </div>
              <TrendingUp className="w-8 h-8 text-primary-blue" />
            </div>
            <p className="text-text-muted text-xs mt-2">Ga zo door!</p>
          </div>

          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-muted text-sm">Totale uren</p>
                <p className="text-3xl font-bold text-text">{retraiteProgress.totalHours}h</p>
              </div>
              <Clock className="w-8 h-8 text-primary-blue" />
            </div>
            <p className="text-text-muted text-xs mt-2">Reflectietijd</p>
          </div>

          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-muted text-sm">Volgende mijlpaal</p>
                <p className="text-lg font-semibold text-text">{retraiteProgress.nextMilestone}</p>
              </div>
              <Target className="w-8 h-8 text-primary-blue" />
            </div>
            <p className="text-text-muted text-xs mt-2">2 modules te gaan</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Modules */}
          <div className="lg:col-span-2">
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-text">Jouw Retraite Modules</h2>
                <button className="text-primary-blue hover:text-primary-blue/80 transition-colors flex items-center space-x-1">
                  <span>Bekijk alles</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-4">
                {retraiteModules.map((module) => (
                  <div key={module.id} className="flex items-center justify-between p-4 bg-surface rounded-xl border border-gray-700 hover:border-primary-blue/30 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-xl flex items-center justify-center">
                        {module.completed ? (
                          <CheckCircle className="w-6 h-6 text-white" />
                        ) : (
                          getModuleIcon(module.type)
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-text">{module.title}</h3>
                        <p className="text-text-muted text-sm">
                          {module.progress}% Voltooid
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-20 bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary-blue to-primary-blue-dark h-2 rounded-full transition-all duration-500"
                          style={{ width: `${module.progress}%` }}
                        ></div>
                      </div>
                    <a 
                      href={`/${module.type}`}
                      className="text-primary-blue hover:text-primary-blue/80 transition-colors"
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
                    achievement.earned ? 'bg-primary-blue/10 border border-primary-blue/20' : 'bg-surface border border-gray-700'
                  }`}>
                    <achievement.icon className={`w-6 h-6 ${
                      achievement.earned ? 'text-primary-blue' : 'text-text-muted'
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
              <h2 className="text-xl font-bold text-text mb-4">Aankomende sessies</h2>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-3 bg-surface rounded-xl border border-gray-700">
                    <div>
                      <p className="text-text font-medium text-sm">{event.title}</p>
                      <p className="text-text-muted text-xs">{event.time}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      event.type === 'groep' ? 'bg-primary-blue' :
                      event.type === '1op1' ? 'bg-green-500' : 'bg-purple-500'
                    }`}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-effect rounded-2xl p-6">
              <h2 className="text-xl font-bold text-text mb-4">Snelle acties</h2>
              <div className="space-y-3">
                <a href="/intake" className="w-full btn-primary text-center block">
                  Start Intake
                </a>
                <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-surface border border-gray-700 rounded-xl text-text hover:border-primary-blue/30 transition-colors">
                  <Calendar className="w-5 h-5" />
                  <span>Plan reflectietijd</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-surface border border-gray-700 rounded-xl text-text hover:border-primary-blue/30 transition-colors">
                  <Users className="w-5 h-5" />
                  <span>Sluit aan bij groep</span>
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