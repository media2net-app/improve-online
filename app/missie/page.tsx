'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { 
  Target, 
  Compass, 
  Lightbulb, 
  Heart, 
  CheckCircle, 
  ArrowRight,
  Star,
  BookOpen,
  FileText,
  Edit3,
  Save,
  Share2
} from 'lucide-react'

export default function MissieDefinitiePage() {
  const [activeTab, setActiveTab] = useState('ontdekken')
  const [missieStatement, setMissieStatement] = useState('')
  const [visieStatement, setVisieStatement] = useState('')
  const [waarden, setWaarden] = useState([''])

  const missieStappen = [
    {
      id: 1,
      title: 'Waarden Ontdekken',
      description: 'Identificeer je kernwaarden',
      completed: true,
      icon: Heart
    },
    {
      id: 2,
      title: 'Passies Erkennen',
      description: 'Wat drijft je echt?',
      completed: true,
      icon: Star
    },
    {
      id: 3,
      title: 'Missie Formuleren',
      description: 'Schrijf je missie statement',
      completed: false,
      icon: Target
    },
    {
      id: 4,
      title: 'Visie Creëren',
      description: 'Definieer je gewenste toekomst',
      completed: false,
      icon: Compass
    }
  ]

  const kernVragen = [
    {
      vraag: "Wat zijn de drie belangrijkste waarden in je leven?",
      categorie: "waarden",
      completed: true
    },
    {
      vraag: "Wat zou je doen als geld geen rol speelde?",
      categorie: "passie",
      completed: true
    },
    {
      vraag: "Hoe wil je dat mensen je herinneren?",
      categorie: "impact",
      completed: false
    },
    {
      vraag: "Wat is je unieke bijdrage aan de wereld?",
      categorie: "missie",
      completed: false
    },
    {
      vraag: "Waar zie je jezelf over 10 jaar?",
      categorie: "visie",
      completed: false
    }
  ]

  const handleWaardeChange = (index: number, value: string) => {
    const newWaarden = [...waarden]
    newWaarden[index] = value
    setWaarden(newWaarden)
  }

  const addWaarde = () => {
    setWaarden([...waarden, ''])
  }

  const removeWaarde = (index: number) => {
    const newWaarden = waarden.filter((_, i) => i !== index)
    setWaarden(newWaarden)
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
                <h1 className="text-3xl font-bold text-text">Missie Definitie</h1>
                <p className="text-text-muted">Ontdek je levensmissie en creëer een duidelijke richting.</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-full flex items-center justify-center luxury-glow">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 py-8">
          {/* Progress Steps */}
          <div className="glass-effect rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between">
              {missieStappen.map((stap, index) => {
                const Icon = stap.icon
                const isActive = stap.id === 3 && activeTab === 'ontdekken'
                
                return (
                  <div key={stap.id} className="flex items-center">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                      stap.completed ? 'bg-primary-blue text-white' :
                      isActive ? 'bg-primary-blue/20 text-primary-blue border-2 border-primary-blue' :
                      'bg-gray-700 text-text-muted'
                    }`}>
                      {stap.completed ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <Icon className="w-5 h-5" />
                      )}
                    </div>
                    <div className="ml-3">
                      <p className={`text-sm font-medium ${
                        isActive ? 'text-text' : 'text-text-muted'
                      }`}>
                        {stap.title}
                      </p>
                      <p className="text-xs text-text-muted">{stap.description}</p>
                    </div>
                    {index < missieStappen.length - 1 && (
                      <div className={`w-12 h-0.5 mx-4 ${
                        stap.completed ? 'bg-primary-blue' : 'bg-gray-700'
                      }`} />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 mb-8">
            <button
              onClick={() => setActiveTab('ontdekken')}
              className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                activeTab === 'ontdekken' 
                  ? 'bg-primary-blue text-white' 
                  : 'bg-surface text-text-muted hover:text-text hover:bg-surface-light'
              }`}
            >
              Missie Ontdekken
            </button>
            <button
              onClick={() => setActiveTab('formuleren')}
              className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                activeTab === 'formuleren' 
                  ? 'bg-primary-blue text-white' 
                  : 'bg-surface text-text-muted hover:text-text hover:bg-surface-light'
              }`}
            >
              Missie Formuleren
            </button>
            <button
              onClick={() => setActiveTab('delen')}
              className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                activeTab === 'delen' 
                  ? 'bg-primary-blue text-white' 
                  : 'bg-surface text-text-muted hover:text-text hover:bg-surface-light'
              }`}
            >
              Missie Delen
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'ontdekken' && (
            <div className="space-y-6">
              <div className="glass-effect rounded-2xl p-6">
                <h2 className="text-xl font-bold text-text mb-4">Kern Vragen voor Je Missie</h2>
                <p className="text-text-muted mb-6">Beantwoord deze vragen om je missie te ontdekken.</p>
                
                <div className="space-y-4">
                  {kernVragen.map((item, index) => (
                    <div key={index} className={`p-4 rounded-xl border ${
                      item.completed 
                        ? 'bg-primary-blue/10 border-primary-blue/20' 
                        : 'bg-surface border-gray-700 hover:border-primary-blue/30'
                    } transition-colors`}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-text font-medium mb-2">{item.vraag}</p>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.completed 
                              ? 'bg-primary-blue/20 text-primary-blue' 
                              : 'bg-gray-500/20 text-gray-400'
                          }`}>
                            {item.categorie}
                          </span>
                        </div>
                        {item.completed ? (
                          <CheckCircle className="w-5 h-5 text-primary-blue ml-4" />
                        ) : (
                          <button className="flex items-center space-x-2 px-3 py-2 bg-primary-blue/20 text-primary-blue rounded-lg hover:bg-primary-blue/30 transition-colors text-sm">
                            <Edit3 className="w-4 h-4" />
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

          {activeTab === 'formuleren' && (
            <div className="space-y-6">
              <div className="glass-effect rounded-2xl p-6">
                <h2 className="text-xl font-bold text-text mb-4">Je Persoonlijke Waarden</h2>
                <p className="text-text-muted mb-6">Definieer je kernwaarden die je missie zullen vormen.</p>
                
                <div className="space-y-4">
                  {waarden.map((waarde, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex-1">
                        <input
                          type="text"
                          value={waarde}
                          onChange={(e) => handleWaardeChange(index, e.target.value)}
                          className="input-field"
                          placeholder={`Waarde ${index + 1}`}
                        />
                      </div>
                      {waarden.length > 1 && (
                        <button
                          onClick={() => removeWaarde(index)}
                          className="px-3 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                        >
                          Verwijderen
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={addWaarde}
                    className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-surface border border-gray-700 rounded-xl text-text hover:border-primary-blue/30 transition-colors"
                  >
                    <span>+ Waarde toevoegen</span>
                  </button>
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-6">
                <h2 className="text-xl font-bold text-text mb-4">Missie Statement</h2>
                <p className="text-text-muted mb-6">Schrijf je persoonlijke missie statement in 1-2 zinnen.</p>
                
                <textarea
                  value={missieStatement}
                  onChange={(e) => setMissieStatement(e.target.value)}
                  className="input-field h-32"
                  placeholder="Mijn missie is om..."
                />
              </div>

              <div className="glass-effect rounded-2xl p-6">
                <h2 className="text-xl font-bold text-text mb-4">Visie Statement</h2>
                <p className="text-text-muted mb-6">Beschrijf hoe je je ideale toekomst ziet.</p>
                
                <textarea
                  value={visieStatement}
                  onChange={(e) => setVisieStatement(e.target.value)}
                  className="input-field h-32"
                  placeholder="Over 10 jaar zie ik mezelf..."
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button className="flex items-center space-x-2 px-6 py-3 bg-surface border border-gray-700 rounded-xl text-text hover:border-primary-blue/30 transition-colors">
                  <Save className="w-4 h-4" />
                  <span>Opslaan</span>
                </button>
                <button className="flex items-center space-x-2 px-6 py-3 btn-primary">
                  <CheckCircle className="w-4 h-4" />
                  <span>Missie Voltooien</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'delen' && (
            <div className="space-y-6">
              <div className="glass-effect rounded-2xl p-6">
                <h2 className="text-xl font-bold text-text mb-4">Je Missie Delen</h2>
                <p className="text-text-muted mb-6">Deel je missie met anderen om verantwoording te creëren.</p>
                
                <div className="bg-surface rounded-xl p-6 border border-gray-700 mb-6">
                  <h3 className="font-bold text-text mb-2">Mijn Missie</h3>
                  <p className="text-text-secondary mb-4">
                    {missieStatement || "Je missie statement wordt hier getoond..."}
                  </p>
                  
                  <h3 className="font-bold text-text mb-2">Mijn Visie</h3>
                  <p className="text-text-secondary">
                    {visieStatement || "Je visie statement wordt hier getoond..."}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="flex items-center justify-center space-x-2 p-4 bg-surface border border-gray-700 rounded-xl text-text hover:border-primary-blue/30 transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span>Delen met vrienden</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 p-4 bg-surface border border-gray-700 rounded-xl text-text hover:border-primary-blue/30 transition-colors">
                    <FileText className="w-5 h-5" />
                    <span>PDF downloaden</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 p-4 bg-surface border border-gray-700 rounded-xl text-text hover:border-primary-blue/30 transition-colors">
                    <BookOpen className="w-5 h-5" />
                    <span>In portfolio</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
