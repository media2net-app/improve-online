'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  CheckCircle, 
  Clock,
  Award,
  BarChart3,
  Calendar,
  Target,
  Heart,
  Brain,
  MessageCircle
} from 'lucide-react'

export default function VoortgangPage() {
  const [selectedModule, setSelectedModule] = useState('all')
  const [selectedDeelnemer, setSelectedDeelnemer] = useState('all')

  // Mock data voor voortgang
  const deelnemers = [
    {
      id: 1,
      naam: 'Maria Rodriguez',
      email: 'maria@example.com',
      voortgang: {
        modules: [
          { id: 1, naam: 'Zelfkennis & Reflectie', voltooid: 5, totaal: 5, percentage: 100 },
          { id: 2, naam: 'Emotionele Intelligentie', voltooid: 3, totaal: 5, percentage: 60 },
          { id: 3, naam: 'Mindfulness & Welzijn', voltooid: 1, totaal: 5, percentage: 20 },
          { id: 4, naam: 'Communicatie & Leiderschap', voltooid: 0, totaal: 5, percentage: 0 }
        ],
        totaalVoltooid: 9,
        totaalModules: 20,
        laatsteActiviteit: '2025-01-08',
        gemiddeldeScore: 8.5
      }
    },
    {
      id: 2,
      naam: 'Sarah van der Berg',
      email: 'sarah@example.com',
      voortgang: {
        modules: [
          { id: 1, naam: 'Zelfkennis & Reflectie', voltooid: 4, totaal: 5, percentage: 80 },
          { id: 2, naam: 'Emotionele Intelligentie', voltooid: 2, totaal: 5, percentage: 40 },
          { id: 3, naam: 'Mindfulness & Welzijn', voltooid: 0, totaal: 5, percentage: 0 },
          { id: 4, naam: 'Communicatie & Leiderschap', voltooid: 0, totaal: 5, percentage: 0 }
        ],
        totaalVoltooid: 6,
        totaalModules: 20,
        laatsteActiviteit: '2025-01-07',
        gemiddeldeScore: 7.8
      }
    },
    {
      id: 3,
      naam: 'Michael Chen',
      email: 'michael@example.com',
      voortgang: {
        modules: [
          { id: 1, naam: 'Zelfkennis & Reflectie', voltooid: 5, totaal: 5, percentage: 100 },
          { id: 2, naam: 'Emotionele Intelligentie', voltooid: 5, totaal: 5, percentage: 100 },
          { id: 3, naam: 'Mindfulness & Welzijn', voltooid: 4, totaal: 5, percentage: 80 },
          { id: 4, naam: 'Communicatie & Leiderschap', voltooid: 2, totaal: 5, percentage: 40 }
        ],
        totaalVoltooid: 16,
        totaalModules: 20,
        laatsteActiviteit: '2025-01-09',
        gemiddeldeScore: 9.2
      }
    }
  ]

  const modules = [
    { id: 1, naam: 'Zelfkennis & Reflectie', icon: Target },
    { id: 2, naam: 'Emotionele Intelligentie', icon: Heart },
    { id: 3, naam: 'Mindfulness & Welzijn', icon: Brain },
    { id: 4, naam: 'Communicatie & Leiderschap', icon: MessageCircle }
  ]

  const filteredDeelnemers = deelnemers.filter(deelnemer => {
    if (selectedDeelnemer !== 'all' && deelnemer.id.toString() !== selectedDeelnemer) return false
    return true
  })

  const overallStats = {
    totaalDeelnemers: deelnemers.length,
    gemiddeldeVoortgang: Math.round(deelnemers.reduce((acc, d) => acc + (d.voortgang.totaalVoltooid / d.voortgang.totaalModules) * 100, 0) / deelnemers.length),
    totaalVoltooid: deelnemers.reduce((acc, d) => acc + d.voortgang.totaalVoltooid, 0),
    totaalModules: deelnemers[0]?.voortgang.totaalModules * deelnemers.length || 0
  }

  const getVoortgangColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-400'
    if (percentage >= 60) return 'text-yellow-400'
    if (percentage >= 40) return 'text-orange-400'
    return 'text-red-400'
  }

  const getVoortgangBgColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-500'
    if (percentage >= 60) return 'bg-yellow-500'
    if (percentage >= 40) return 'bg-orange-500'
    return 'bg-red-500'
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Content */}
      <div className="lg:ml-64 transition-all duration-300">
        {/* Header */}
        <header className="bg-surface border-b border-gray-800">
          <div className="px-6 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-text">Voortgang Tracking</h1>
                <p className="text-text-muted">Monitor de voortgang van alle deelnemers</p>
              </div>
              <div className="text-right">
                <p className="text-text font-medium">{overallStats.gemiddeldeVoortgang}% gemiddeld</p>
                <p className="text-text-muted text-sm">Groepsvoortgang</p>
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 py-8">
          {/* Overall Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Totaal Deelnemers</p>
                  <p className="text-3xl font-bold text-text">{overallStats.totaalDeelnemers}</p>
                </div>
                <Users className="w-12 h-12 text-primary-blue" />
              </div>
            </div>
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Gemiddelde Voortgang</p>
                  <p className="text-3xl font-bold text-green-400">{overallStats.gemiddeldeVoortgang}%</p>
                </div>
                <TrendingUp className="w-12 h-12 text-green-400" />
              </div>
            </div>
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Voltooid</p>
                  <p className="text-3xl font-bold text-blue-400">{overallStats.totaalVoltooid}</p>
                </div>
                <CheckCircle className="w-12 h-12 text-blue-400" />
              </div>
            </div>
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Totaal Modules</p>
                  <p className="text-3xl font-bold text-gray-400">{overallStats.totaalModules}</p>
                </div>
                <BookOpen className="w-12 h-12 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="glass-effect rounded-2xl p-6 mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <label className="text-text-muted text-sm">Module:</label>
                <select
                  value={selectedModule}
                  onChange={(e) => setSelectedModule(e.target.value)}
                  className="px-4 py-2 bg-surface border border-gray-700 rounded-xl text-text focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/50 transition-colors"
                >
                  <option value="all">Alle modules</option>
                  {modules.map(module => (
                    <option key={module.id} value={module.id}>{module.naam}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <label className="text-text-muted text-sm">Deelnemer:</label>
                <select
                  value={selectedDeelnemer}
                  onChange={(e) => setSelectedDeelnemer(e.target.value)}
                  className="px-4 py-2 bg-surface border border-gray-700 rounded-xl text-text focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/50 transition-colors"
                >
                  <option value="all">Alle deelnemers</option>
                  {deelnemers.map(deelnemer => (
                    <option key={deelnemer.id} value={deelnemer.id}>{deelnemer.naam}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Module Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="glass-effect rounded-2xl p-6">
              <h3 className="text-xl font-bold text-text mb-4">Module Voortgang</h3>
              <div className="space-y-4">
                {modules.map((module) => {
                  const Icon = module.icon
                  const moduleStats = deelnemers.reduce((acc, d) => {
                    const moduleData = d.voortgang.modules.find(m => m.id === module.id)
                    return {
                      voltooid: acc.voltooid + (moduleData?.voltooid || 0),
                      totaal: acc.totaal + (moduleData?.totaal || 0)
                    }
                  }, { voltooid: 0, totaal: 0 })
                  const percentage = moduleStats.totaal > 0 ? Math.round((moduleStats.voltooid / moduleStats.totaal) * 100) : 0
                  
                  return (
                    <div key={module.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Icon className="w-5 h-5 text-primary-blue" />
                        <span className="text-text font-medium">{module.naam}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`text-sm font-medium ${getVoortgangColor(percentage)}`}>
                          {percentage}%
                        </span>
                        <div className="w-20 bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${getVoortgangBgColor(percentage)}`}
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <h3 className="text-xl font-bold text-text mb-4">Deelnemer Ranking</h3>
              <div className="space-y-4">
                {deelnemers
                  .sort((a, b) => (b.voortgang.totaalVoltooid / b.voortgang.totaalModules) - (a.voortgang.totaalVoltooid / a.voortgang.totaalModules))
                  .map((deelnemer, index) => {
                    const percentage = Math.round((deelnemer.voortgang.totaalVoltooid / deelnemer.voortgang.totaalModules) * 100)
                    return (
                      <div key={deelnemer.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">#{index + 1}</span>
                          </div>
                          <div>
                            <p className="text-text font-medium">{deelnemer.naam}</p>
                            <p className="text-text-muted text-sm">{deelnemer.voortgang.totaalVoltooid}/{deelnemer.voortgang.totaalModules} modules</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`font-bold ${getVoortgangColor(percentage)}`}>{percentage}%</p>
                          <p className="text-text-muted text-sm">Score: {deelnemer.voortgang.gemiddeldeScore}</p>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>

          {/* Individual Progress */}
          <div className="glass-effect rounded-2xl p-6">
            <h3 className="text-xl font-bold text-text mb-6">Individuele Voortgang</h3>
            <div className="space-y-6">
              {filteredDeelnemers.map((deelnemer) => (
                <div key={deelnemer.id} className="border border-gray-700 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {deelnemer.naam.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-text font-bold text-lg">{deelnemer.naam}</h4>
                        <p className="text-text-muted text-sm">{deelnemer.email}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-text font-bold">
                        {Math.round((deelnemer.voortgang.totaalVoltooid / deelnemer.voortgang.totaalModules) * 100)}%
                      </p>
                      <p className="text-text-muted text-sm">Laatste activiteit: {deelnemer.voortgang.laatsteActiviteit}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {deelnemer.voortgang.modules.map((module) => {
                      const moduleInfo = modules.find(m => m.id === module.id)
                      const Icon = moduleInfo?.icon || BookOpen
                      
                      return (
                        <div key={module.id} className="bg-surface border border-gray-700 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-3">
                            <Icon className="w-4 h-4 text-primary-blue" />
                            <span className="text-text font-medium text-sm">{module.naam}</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-text-muted">Voortgang</span>
                              <span className="text-text font-medium">{module.voltooid}/{module.totaal}</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${getVoortgangBgColor(module.percentage)}`}
                                style={{ width: `${module.percentage}%` }}
                              ></div>
                            </div>
                            <p className={`text-xs font-medium ${getVoortgangColor(module.percentage)}`}>
                              {module.percentage}% voltooid
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
