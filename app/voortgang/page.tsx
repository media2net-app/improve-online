'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import { 
  Compass, 
  Target, 
  TrendingUp, 
  Calendar, 
  Award,
  Star,
  Heart,
  Lightbulb,
  CheckCircle,
  Clock,
  BarChart3,
  PieChart,
  Activity,
  Zap
} from 'lucide-react'

export default function VoortgangPage() {
  const [activeTab, setActiveTab] = useState('overzicht')
  const [progressData, setProgressData] = useState({
    doelen: [],
    mijlpalen: [],
    statistieken: {
      totaalReflecties: 0,
      dagenStreak: 0,
      voltooideModules: 0,
      totaleUren: 0
    }
  })

  // Load progress data from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('curacao-retraite-voortgang')
    const savedReflections = localStorage.getItem('curacao-retraite-reflecties')
    
    if (savedProgress) {
      setProgressData(JSON.parse(savedProgress))
    }

    // Update statistics from reflections
    if (savedReflections) {
      const reflections = JSON.parse(savedReflections)
      setProgressData(prev => ({
        ...prev,
        statistieken: {
          ...prev.statistieken,
          totaalReflecties: reflections.length,
          dagenStreak: calculateStreak(reflections)
        }
      }))
    }
  }, [])

  const calculateStreak = (reflections) => {
    if (reflections.length === 0) return 0
    
    const today = new Date()
    let streak = 0
    let currentDate = new Date(today)
    
    // Sort reflections by date descending
    const sortedReflections = reflections
      .map(r => ({ ...r, date: new Date(r.datum) }))
      .sort((a, b) => b.date - a.date)
    
    for (let i = 0; i < sortedReflections.length; i++) {
      const reflectionDate = new Date(sortedReflections[i].datum)
      const expectedDate = new Date(currentDate)
      expectedDate.setHours(0, 0, 0, 0)
      reflectionDate.setHours(0, 0, 0, 0)
      
      if (reflectionDate.getTime() === expectedDate.getTime()) {
        streak++
        currentDate.setDate(currentDate.getDate() - 1)
      } else {
        break
      }
    }
    
    return streak
  }

  const doelen = [
    {
      id: 1,
      titel: 'Dagelijkse reflectie',
      beschrijving: 'Elke dag 10 minuten reflecteren',
      voortgang: 75,
      status: 'bezig',
      deadline: '2024-02-01',
      categorie: 'gewoonte'
    },
    {
      id: 2,
      titel: 'IKIGAI ontdekken',
      beschrijving: 'Mijn levensdoel helder krijgen',
      voortgang: 100,
      status: 'voltooid',
      deadline: '2024-01-20',
      categorie: 'persoonlijk'
    },
    {
      id: 3,
      titel: 'Mission Statement',
      beschrijving: 'Mijn persoonlijke missie formuleren',
      voortgang: 60,
      status: 'bezig',
      deadline: '2024-02-15',
      categorie: 'persoonlijk'
    },
    {
      id: 4,
      titel: 'Mindfulness beoefening',
      beschrijving: 'Dagelijks 15 minuten mediteren',
      voortgang: 40,
      status: 'bezig',
      deadline: '2024-03-01',
      categorie: 'gewoonte'
    }
  ]

  const mijlpalen = [
    {
      id: 1,
      titel: 'Eerste reflectie voltooid',
      datum: '2024-01-15',
      type: 'reflectie',
      beschrijving: 'Je hebt je eerste dagelijkse reflectie ingevuld',
      icon: Star
    },
    {
      id: 2,
      titel: '7-dagen streak',
      datum: '2024-01-22',
      type: 'streak',
      beschrijving: 'Je hebt 7 dagen achter elkaar gereflecteerd',
      icon: Award
    },
    {
      id: 3,
      titel: 'IKIGAI workshop voltooid',
      datum: '2024-01-20',
      type: 'module',
      beschrijving: 'Je hebt de IKIGAI workshop op Klein Curaçao voltooid',
      icon: Target
    },
    {
      id: 4,
      titel: 'Christoffelberg beklommen',
      datum: '2024-01-21',
      type: 'uitdaging',
      beschrijving: 'Je hebt de hoogste berg van Curaçao beklommen',
      icon: TrendingUp
    }
  ]

  const getProgressColor = (percentage) => {
    if (percentage >= 80) return 'bg-green-500'
    if (percentage >= 60) return 'bg-blue-500'
    if (percentage >= 40) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'voltooid': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'bezig': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'gepland': return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getMilestoneIcon = (type) => {
    switch (type) {
      case 'reflectie': return Heart
      case 'streak': return Award
      case 'module': return Target
      case 'uitdaging': return TrendingUp
      default: return Star
    }
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
              <div>
                <h1 className="text-3xl font-bold text-text">Voortgang</h1>
                <p className="text-text-muted">Volg je persoonlijke groei en behaalde mijlpalen.</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-full flex items-center justify-center luxury-glow">
                <Compass className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 py-8">
          {/* Tabs */}
          <div className="flex space-x-1 mb-8">
            <button
              onClick={() => setActiveTab('overzicht')}
              className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                activeTab === 'overzicht' 
                  ? 'bg-primary-blue text-white' 
                  : 'bg-surface text-text-muted hover:text-text hover:bg-surface-light border border-gray-700'
              }`}
            >
              Overzicht
            </button>
            <button
              onClick={() => setActiveTab('doelen')}
              className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                activeTab === 'doelen' 
                  ? 'bg-primary-blue text-white' 
                  : 'bg-surface text-text-muted hover:text-text hover:bg-surface-light border border-gray-700'
              }`}
            >
              Doelen
            </button>
            <button
              onClick={() => setActiveTab('mijlpalenen')}
              className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                activeTab === 'mijlpalenen' 
                  ? 'bg-primary-blue text-white' 
                  : 'bg-surface text-text-muted hover:text-text hover:bg-surface-light border border-gray-700'
              }`}
            >
              Mijlpalenen
            </button>
            <button
              onClick={() => setActiveTab('statistieken')}
              className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                activeTab === 'statistieken' 
                  ? 'bg-primary-blue text-white' 
                  : 'bg-surface text-text-muted hover:text-text hover:bg-surface-light border border-gray-700'
              }`}
            >
              Statistieken
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'overzicht' && (
            <div className="space-y-8">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="glass-effect rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-text-muted text-sm">Reflecties</p>
                      <p className="text-3xl font-bold text-text">{progressData.statistieken.totaalReflecties}</p>
                    </div>
                    <Heart className="w-8 h-8 text-primary-blue" />
                  </div>
                </div>

                <div className="glass-effect rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-text-muted text-sm">Streak</p>
                      <p className="text-3xl font-bold text-text">{progressData.statistieken.dagenStreak}</p>
                    </div>
                    <Zap className="w-8 h-8 text-primary-blue" />
                  </div>
                </div>

                <div className="glass-effect rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-text-muted text-sm">Doelen Voltooid</p>
                      <p className="text-3xl font-bold text-text">
                        {doelen.filter(d => d.status === 'voltooid').length}/{doelen.length}
                      </p>
                    </div>
                    <Target className="w-8 h-8 text-primary-blue" />
                  </div>
                </div>

                <div className="glass-effect rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-text-muted text-sm">Mijlpalenen</p>
                      <p className="text-3xl font-bold text-text">{mijlpalenen.length}</p>
                    </div>
                    <Award className="w-8 h-8 text-primary-blue" />
                  </div>
                </div>
              </div>

              {/* Recent Progress */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="glass-effect rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-text mb-4">Actieve Doelen</h2>
                  <div className="space-y-4">
                    {doelen.filter(d => d.status === 'bezig').map((doel) => (
                      <div key={doel.id} className="p-4 bg-surface rounded-xl border border-gray-700">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-text">{doel.titel}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(doel.status)}`}>
                            {doel.voortgang}%
                          </span>
                        </div>
                        <p className="text-text-muted text-sm mb-3">{doel.beschrijving}</p>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(doel.voortgang)}`}
                            style={{ width: `${doel.voortgang}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-effect rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-text mb-4">Recente Mijlpalenen</h2>
                  <div className="space-y-4">
                    {mijlpalenen.slice(0, 3).map((mijlpaal) => {
                      const Icon = getMilestoneIcon(mijlpaal.type)
                      return (
                        <div key={mijlpaal.id} className="flex items-center space-x-3 p-3 bg-surface rounded-xl border border-gray-700">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-xl flex items-center justify-center">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-text text-sm">{mijlpaal.titel}</h3>
                            <p className="text-text-muted text-xs">{new Date(mijlpaal.datum).toLocaleDateString('nl-NL')}</p>
                          </div>
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'doelen' && (
            <div className="space-y-6">
              {doelen.map((doel) => (
                <div key={doel.id} className="glass-effect rounded-2xl p-6 hover:border-primary-blue/30 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-text mb-2">{doel.titel}</h3>
                      <p className="text-text-secondary mb-2">{doel.beschrijving}</p>
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(doel.status)}`}>
                          {doel.status}
                        </span>
                        <span className="text-text-muted text-sm">Deadline: {new Date(doel.deadline).toLocaleDateString('nl-NL')}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-text">{doel.voortgang}%</p>
                      <p className="text-text-muted text-sm">Voortgang</p>
                    </div>
                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                    <div 
                      className={`h-3 rounded-full transition-all duration-500 ${getProgressColor(doel.voortgang)}`}
                      style={{ width: `${doel.voortgang}%` }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-text-muted text-sm">Categorie: {doel.categorie}</span>
                    <button className="text-primary-blue hover:text-primary-blue/80 transition-colors text-sm font-medium">
                      Bijwerken →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'mijlpalenen' && (
            <div className="space-y-6">
              {mijlpalenen.map((mijlpaal) => {
                const Icon = getMilestoneIcon(mijlpaal.type)
                return (
                  <div key={mijlpaal.id} className="glass-effect rounded-2xl p-6 hover:border-primary-blue/30 transition-colors">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-bold text-text text-lg">{mijlpaal.titel}</h3>
                            <p className="text-primary-blue font-medium">{new Date(mijlpaal.datum).toLocaleDateString('nl-NL')}</p>
                          </div>
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        </div>
                        <p className="text-text-secondary">{mijlpaal.beschrijving}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {activeTab === 'statistieken' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="glass-effect rounded-2xl p-6">
                <h2 className="text-xl font-bold text-text mb-4">Voortgang Grafiek</h2>
                <div className="h-64 flex items-end justify-between space-x-2">
                  {[20, 35, 45, 60, 75, 80, 75, 90].map((height, index) => (
                    <div key={index} className="flex-1 bg-primary-blue rounded-t" style={{ height: `${height}%` }}></div>
                  ))}
                </div>
                <p className="text-text-muted text-sm mt-4 text-center">Weekelijkse voortgang over de afgelopen 8 weken</p>
              </div>

              <div className="glass-effect rounded-2xl p-6">
                <h2 className="text-xl font-bold text-text mb-4">Categorieën</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-text">Persoonlijke Groei</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                      <span className="text-text font-medium">70%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text">Gewoontes</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                      <span className="text-text font-medium">60%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text">Reflectie</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-700 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="text-text font-medium">85%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text">Missie</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-700 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <span className="text-text font-medium">45%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
