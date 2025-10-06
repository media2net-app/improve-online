'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { 
  Heart, 
  Target, 
  BookOpen, 
  Play, 
  CheckCircle, 
  ArrowRight,
  Star,
  TrendingUp,
  Lightbulb,
  Award,
  Calendar,
  Users,
  FileText
} from 'lucide-react'

export default function PersoonlijkeGroeiPage() {
  const [activeTab, setActiveTab] = useState('modules')

  // Demo data voor persoonlijke groei modules
  const groeiModules = [
    {
      id: 1,
      title: 'Zelfkennis & Identiteit',
      description: 'Ontdek wie je werkelijk bent en wat je uniek maakt',
      progress: 100,
      completed: true,
      duration: '2 weken',
      lessons: 6,
      completedLessons: 6,
      icon: Heart,
      color: 'blue'
    },
    {
      id: 2,
      title: 'Emotionele Intelligentie',
      description: 'Leer je emoties begrijpen en beheren voor betere relaties',
      progress: 75,
      completed: false,
      duration: '3 weken',
      lessons: 8,
      completedLessons: 6,
      icon: Star,
      color: 'purple'
    },
    {
      id: 3,
      title: 'Mindfulness & Bewustzijn',
      description: 'Ontwikkel mindfulness voor innerlijke rust en helderheid',
      progress: 25,
      completed: false,
      duration: '4 weken',
      lessons: 10,
      completedLessons: 2,
      icon: Lightbulb,
      color: 'green'
    },
    {
      id: 4,
      title: 'Communicatie & Grenzen',
      description: 'Verbeter je communicatie en leer gezonde grenzen stellen',
      progress: 0,
      completed: false,
      duration: '3 weken',
      lessons: 7,
      completedLessons: 0,
      icon: Users,
      color: 'orange'
    }
  ]

  const reflectieVragen = [
    {
      id: 1,
      vraag: "Wat zijn de drie belangrijkste waarden in je leven?",
      type: "waarden",
      completed: true
    },
    {
      id: 2,
      vraag: "Hoe uit je liefde en waardering naar anderen?",
      type: "relaties",
      completed: true
    },
    {
      id: 3,
      vraag: "Wat weerhoudt je ervan om je dromen na te jagen?",
      type: "dromen",
      completed: false
    },
    {
      id: 4,
      vraag: "Wanneer voel je je het meest authentiek?",
      type: "authenticiteit",
      completed: false
    }
  ]

  const voortgangStats = {
    totaalModules: 8,
    voltooidModules: 1,
    totaalUren: 12.5,
    gemiddeldeScore: 8.2,
    volgendeModule: 'Emotionele Intelligentie'
  }

  const getProgressColor = (color: string) => {
    switch (color) {
      case 'blue': return 'from-blue-500 to-blue-600'
      case 'purple': return 'from-purple-500 to-purple-600'
      case 'green': return 'from-green-500 to-green-600'
      case 'orange': return 'from-orange-500 to-orange-600'
      default: return 'from-primary-blue to-primary-blue-dark'
    }
  }

  const getProgressBgColor = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-500/10 border-blue-500/20'
      case 'purple': return 'bg-purple-500/10 border-purple-500/20'
      case 'green': return 'bg-green-500/10 border-green-500/20'
      case 'orange': return 'bg-orange-500/10 border-orange-500/20'
      default: return 'bg-primary-blue/10 border-primary-blue/20'
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
                <h1 className="text-3xl font-bold text-text">Persoonlijke Groei</h1>
                <p className="text-text-muted">Ontwikkel jezelf en groei naar je beste versie.</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-full flex items-center justify-center luxury-glow">
                <Heart className="w-6 h-6 text-white" />
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
                  <p className="text-3xl font-bold text-text">{voortgangStats.voltooidModules}/{voortgangStats.totaalModules}</p>
                </div>
                <BookOpen className="w-8 h-8 text-primary-blue" />
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary-blue to-primary-blue-dark h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(voortgangStats.voltooidModules / voortgangStats.totaalModules) * 100}%` }}
                  ></div>
                </div>
                <p className="text-text-muted text-xs mt-2">
                  {Math.round((voortgangStats.voltooidModules / voortgangStats.totaalModules) * 100)}% Voltooid
                </p>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Studie uren</p>
                  <p className="text-3xl font-bold text-text">{voortgangStats.totaalUren}h</p>
                </div>
                <Calendar className="w-8 h-8 text-primary-blue" />
              </div>
              <p className="text-text-muted text-xs mt-2">Totale tijd</p>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Gemiddelde score</p>
                  <p className="text-3xl font-bold text-text">{voortgangStats.gemiddeldeScore}</p>
                </div>
                <Star className="w-8 h-8 text-primary-blue" />
              </div>
              <p className="text-text-muted text-xs mt-2">Uitstekend!</p>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Volgende module</p>
                  <p className="text-lg font-semibold text-text truncate">{voortgangStats.volgendeModule}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-primary-blue" />
              </div>
              <p className="text-text-muted text-xs mt-2">Klaar om te beginnen</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 mb-8">
            <button
              onClick={() => setActiveTab('modules')}
              className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                activeTab === 'modules' 
                  ? 'bg-primary-blue text-white' 
                  : 'bg-surface text-text-muted hover:text-text hover:bg-surface-light'
              }`}
            >
              Groei Modules
            </button>
            <button
              onClick={() => setActiveTab('reflectie')}
              className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                activeTab === 'reflectie' 
                  ? 'bg-primary-blue text-white' 
                  : 'bg-surface text-text-muted hover:text-text hover:bg-surface-light'
              }`}
            >
              Reflectie Vragen
            </button>
            <button
              onClick={() => setActiveTab('voortgang')}
              className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                activeTab === 'voortgang' 
                  ? 'bg-primary-blue text-white' 
                  : 'bg-surface text-text-muted hover:text-text hover:bg-surface-light'
              }`}
            >
              Voortgang
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'modules' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {groeiModules.map((module) => {
                const Icon = module.icon
                return (
                  <div key={module.id} className="glass-effect rounded-2xl p-6 hover:border-primary-blue/30 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 bg-gradient-to-br ${getProgressColor(module.color)} rounded-xl flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-text text-lg">{module.title}</h3>
                          <p className="text-text-muted text-sm">{module.duration} • {module.lessons} lessen</p>
                        </div>
                      </div>
                      {module.completed && (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      )}
                    </div>

                    <p className="text-text-secondary mb-4">{module.description}</p>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-text-muted">Voortgang</span>
                        <span className="text-text">{module.completedLessons}/{module.lessons} lessen</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${getProgressColor(module.color)} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${module.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        module.completed ? 'bg-green-500/20 text-green-400' :
                        module.progress > 0 ? 'bg-blue-500/20 text-blue-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {module.completed ? 'Voltooid' :
                         module.progress > 0 ? 'Bezig' : 'Niet gestart'}
                      </div>
                      <a 
                        href={`/groei/module/${module.id}`}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-colors ${
                          module.completed ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' :
                          'btn-primary'
                        }`}
                      >
                        <span>{module.completed ? 'Herbekijken' : 'Beginnen'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {activeTab === 'reflectie' && (
            <div className="space-y-6">
              <div className="glass-effect rounded-2xl p-6">
                <h2 className="text-xl font-bold text-text mb-4">Dagelijkse Reflectie Vragen</h2>
                <p className="text-text-muted mb-6">Neem elke dag even de tijd om te reflecteren op jezelf en je groei.</p>
                
                <div className="space-y-4">
                  {reflectieVragen.map((vraag) => (
                    <div key={vraag.id} className={`p-4 rounded-xl border ${
                      vraag.completed 
                        ? 'bg-primary-blue/10 border-primary-blue/20' 
                        : 'bg-surface border-gray-700 hover:border-primary-blue/30'
                    } transition-colors`}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-text font-medium mb-2">{vraag.vraag}</p>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            vraag.completed 
                              ? 'bg-primary-blue/20 text-primary-blue' 
                              : 'bg-gray-500/20 text-gray-400'
                          }`}>
                            {vraag.type}
                          </span>
                        </div>
                        {vraag.completed ? (
                          <CheckCircle className="w-5 h-5 text-primary-blue ml-4" />
                        ) : (
                          <button className="flex items-center space-x-2 px-3 py-2 bg-primary-blue/20 text-primary-blue rounded-lg hover:bg-primary-blue/30 transition-colors text-sm">
                            <FileText className="w-4 h-4" />
                            <span>Beantwoorden</span>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'voortgang' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="glass-effect rounded-2xl p-6">
                <h2 className="text-xl font-bold text-text mb-4">Groei Metrics</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Zelfkennis Score</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-primary-blue to-primary-blue-dark h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="text-text font-medium">8.5/10</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Emotionele Stabiliteit</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <span className="text-text font-medium">7.5/10</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Mindfulness Beoefening</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                      <span className="text-text font-medium">6.0/10</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-6">
                <h2 className="text-xl font-bold text-text mb-4">Recente Prestaties</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-primary-blue/10 rounded-xl">
                    <Award className="w-5 h-5 text-primary-blue" />
                    <div>
                      <p className="text-text font-medium text-sm">Zelfkennis Module Voltooid</p>
                      <p className="text-text-muted text-xs">2 dagen geleden</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-xl">
                    <Star className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-text font-medium text-sm">7 dagen reflectie streak</p>
                      <p className="text-text-muted text-xs">Huidige streak</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-500/10 rounded-xl">
                    <Heart className="w-5 h-5 text-purple-500" />
                    <div>
                      <p className="text-text font-medium text-sm">Emotionele Intelligentie gestart</p>
                      <p className="text-text-muted text-xs">1 week geleden</p>
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
