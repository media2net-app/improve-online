'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import { 
  Lightbulb, 
  Heart, 
  Target, 
  BookOpen, 
  Star,
  Calendar,
  Save,
  Edit3,
  CheckCircle,
  Plus,
  Trash2,
  Clock,
  TrendingUp,
  Award
} from 'lucide-react'

export default function ReflectiePage() {
  const [activeTab, setActiveTab] = useState('dagelijks')
  const [reflections, setReflections] = useState([])
  const [newReflection, setNewReflection] = useState({
    datum: '',
    type: 'dagelijks',
    vraag: '',
    antwoord: '',
    gevoel: '',
    inzicht: ''
  })
  const [showAddModal, setShowAddModal] = useState(false)

  // Load reflections from localStorage
  useEffect(() => {
    const savedReflections = localStorage.getItem('curacao-retraite-reflecties')
    if (savedReflections) {
      setReflections(JSON.parse(savedReflections))
    }
  }, [])

  // Save reflections to localStorage
  const saveReflections = (newReflections) => {
    localStorage.setItem('curacao-retraite-reflecties', JSON.stringify(newReflections))
    setReflections(newReflections)
  }

  const handleAddReflection = () => {
    if (!newReflection.datum || !newReflection.vraag || !newReflection.antwoord) {
      alert('Vul alle verplichte velden in')
      return
    }

    const reflection = {
      ...newReflection,
      id: Date.now(),
      createdAt: new Date().toISOString()
    }

    const updatedReflections = [...reflections, reflection]
    saveReflections(updatedReflections)
    
    // Reset form
    setNewReflection({
      datum: '',
      type: 'dagelijks',
      vraag: '',
      antwoord: '',
      gevoel: '',
      inzicht: ''
    })
    setShowAddModal(false)
  }

  const handleDeleteReflection = (id) => {
    if (confirm('Weet je zeker dat je deze reflectie wilt verwijderen?')) {
      const updatedReflections = reflections.filter(r => r.id !== id)
      saveReflections(updatedReflections)
    }
  }

  const dagelijkseVragen = [
    "Waar ben ik vandaag dankbaar voor?",
    "Wat heb ik vandaag geleerd over mezelf?",
    "Hoe heb ik vandaag voor mezelf gezorgd?",
    "Welke emotie was dominant vandaag?",
    "Wat zou ik morgen anders willen doen?",
    "Hoe voel ik me aan het einde van deze dag?",
    "Wat was mijn grootste uitdaging vandaag?",
    "Welke kleine stap heb ik vandaag gezet richting mijn doelen?"
  ]

  const wekelijkseVragen = [
    "Wat zijn mijn grootste inzichten van deze week?",
    "Hoe heb ik deze week mijn waarden geleefd?",
    "Welke patronen zie ik in mijn gedrag deze week?",
    "Wat heeft me deze week het meest geïnspireerd?",
    "Waar heb ik deze week groei ervaren?",
    "Wat zou ik volgende week anders willen aanpakken?",
    "Hoe voel ik me over mijn voortgang richting mijn missie?",
    "Welke dankbaarheid wil ik uitdragen voor deze week?"
  ]

  const maandelijkseVragen = [
    "Wat is mijn grootste doorbraak deze maand geweest?",
    "Hoe ben ik gegroeid als persoon deze maand?",
    "Welke gewoontes heb ik deze maand ontwikkeld?",
    "Wat zijn mijn belangrijkste lessen van deze maand?",
    "Hoe sta ik ervoor met mijn jaardoelen?",
    "Wat wil ik volgende maand anders doen?",
    "Welke nieuwe inzichten heb ik over mijn missie?",
    "Hoe voel ik me over mijn persoonlijke ontwikkeling?"
  ]

  const getQuestionsForType = (type) => {
    switch (type) {
      case 'dagelijks': return dagelijkseVragen
      case 'wekelijks': return wekelijkseVragen
      case 'maandelijks': return maandelijkseVragen
      default: return dagelijkseVragen
    }
  }

  const getReflectionIcon = (type) => {
    switch (type) {
      case 'dagelijks': return Calendar
      case 'wekelijks': return Star
      case 'maandelijks': return Award
      default: return Lightbulb
    }
  }

  const getReflectionColor = (type) => {
    switch (type) {
      case 'dagelijks': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'wekelijks': return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      case 'maandelijks': return 'bg-green-500/20 text-green-400 border-green-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getGevoelEmoji = (gevoel) => {
    switch (gevoel) {
      case 'blij': return '😊'
      case 'dankbaar': return '🙏'
      case 'energiek': return '⚡'
      case 'rustig': return '😌'
      case 'geïnspireerd': return '✨'
      case 'trots': return '🎯'
      case 'kwetsbaar': return '💙'
      case 'hoopvol': return '🌟'
      default: return '😐'
    }
  }

  const filteredReflections = reflections.filter(r => r.type === activeTab)

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
                <h1 className="text-3xl font-bold text-text">Reflectie</h1>
                <p className="text-text-muted">Dagelijkse, wekelijkse en maandelijkse zelfreflectie voor persoonlijke groei.</p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowAddModal(true)}
                  className="flex items-center space-x-2 px-4 py-2 btn-primary"
                >
                  <Plus className="w-4 h-4" />
                  <span>Nieuwe Reflectie</span>
                </button>
                <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-full flex items-center justify-center luxury-glow">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 py-8">
          {/* Tabs */}
          <div className="flex space-x-1 mb-8">
            <button
              onClick={() => setActiveTab('dagelijks')}
              className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                activeTab === 'dagelijks' 
                  ? 'bg-primary-blue text-white' 
                  : 'bg-surface text-text-muted hover:text-text hover:bg-surface-light border border-gray-700'
              }`}
            >
              Dagelijks
            </button>
            <button
              onClick={() => setActiveTab('wekelijks')}
              className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                activeTab === 'wekelijks' 
                  ? 'bg-primary-blue text-white' 
                  : 'bg-surface text-text-muted hover:text-text hover:bg-surface-light border border-gray-700'
              }`}
            >
              Wekelijks
            </button>
            <button
              onClick={() => setActiveTab('maandelijks')}
              className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                activeTab === 'maandelijks' 
                  ? 'bg-primary-blue text-white' 
                  : 'bg-surface text-text-muted hover:text-text hover:bg-surface-light border border-gray-700'
              }`}
            >
              Maandelijks
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Totaal Reflecties</p>
                  <p className="text-3xl font-bold text-text">{reflections.length}</p>
                </div>
                <BookOpen className="w-8 h-8 text-primary-blue" />
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Deze Maand</p>
                  <p className="text-3xl font-bold text-text">
                    {reflections.filter(r => {
                      const date = new Date(r.datum)
                      const now = new Date()
                      return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()
                    }).length}
                  </p>
                </div>
                <TrendingUp className="w-8 h-8 text-primary-blue" />
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Streak</p>
                  <p className="text-3xl font-bold text-text">
                    {Math.min(reflections.length, 30)}
                  </p>
                </div>
                <Clock className="w-8 h-8 text-primary-blue" />
              </div>
            </div>
          </div>

          {/* Reflections List */}
          <div className="space-y-6">
            {filteredReflections.length === 0 ? (
              <div className="glass-effect rounded-2xl p-8 text-center">
                <Lightbulb className="w-16 h-16 text-text-muted mx-auto mb-4" />
                <h3 className="text-xl font-bold text-text mb-2">Nog geen {activeTab}e reflecties</h3>
                <p className="text-text-muted mb-4">Begin met het toevoegen van je eerste reflectie om je groei te volgen.</p>
                <button
                  onClick={() => setShowAddModal(true)}
                  className="btn-primary"
                >
                  Eerste Reflectie Toevoegen
                </button>
              </div>
            ) : (
              filteredReflections.map((reflection) => {
                const Icon = getReflectionIcon(reflection.type)
                return (
                  <div key={reflection.id} className="glass-effect rounded-2xl p-6 hover:border-primary-blue/30 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-xl flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-text">{reflection.vraag}</h3>
                          <p className="text-primary-blue font-medium">{new Date(reflection.datum).toLocaleDateString('nl-NL')}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getReflectionColor(reflection.type)}`}>
                          {reflection.type}
                        </span>
                        <button
                          onClick={() => handleDeleteReflection(reflection.id)}
                          className="p-2 text-text-muted hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <span className="text-text-muted text-sm">Antwoord:</span>
                        <p className="text-text">{reflection.antwoord}</p>
                      </div>

                      {reflection.gevoel && (
                        <div className="flex items-center space-x-2">
                          <span className="text-text-muted text-sm">Gevoel:</span>
                          <span className="text-2xl">{getGevoelEmoji(reflection.gevoel)}</span>
                          <span className="text-text">{reflection.gevoel}</span>
                        </div>
                      )}

                      {reflection.inzicht && (
                        <div>
                          <span className="text-text-muted text-sm">Inzicht:</span>
                          <p className="text-text italic">"{reflection.inzicht}"</p>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </div>

      {/* Add Reflection Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text">Nieuwe Reflectie</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 text-text-muted hover:text-text transition-colors"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Datum *</label>
                  <input
                    type="date"
                    value={newReflection.datum}
                    onChange={(e) => setNewReflection(prev => ({ ...prev, datum: e.target.value }))}
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">Type *</label>
                  <select
                    value={newReflection.type}
                    onChange={(e) => setNewReflection(prev => ({ ...prev, type: e.target.value }))}
                    className="input-field"
                  >
                    <option value="dagelijks">Dagelijks</option>
                    <option value="wekelijks">Wekelijks</option>
                    <option value="maandelijks">Maandelijks</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text mb-2">Reflectie Vraag *</label>
                <select
                  value={newReflection.vraag}
                  onChange={(e) => setNewReflection(prev => ({ ...prev, vraag: e.target.value }))}
                  className="input-field"
                >
                  <option value="">Selecteer een vraag...</option>
                  {getQuestionsForType(newReflection.type).map((vraag, index) => (
                    <option key={index} value={vraag}>{vraag}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text mb-2">Je Antwoord *</label>
                <textarea
                  value={newReflection.antwoord}
                  onChange={(e) => setNewReflection(prev => ({ ...prev, antwoord: e.target.value }))}
                  className="input-field h-32"
                  placeholder="Schrijf hier je antwoord..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Gevoel</label>
                  <select
                    value={newReflection.gevoel}
                    onChange={(e) => setNewReflection(prev => ({ ...prev, gevoel: e.target.value }))}
                    className="input-field"
                  >
                    <option value="">Selecteer een gevoel...</option>
                    <option value="blij">😊 Blij</option>
                    <option value="dankbaar">🙏 Dankbaar</option>
                    <option value="energiek">⚡ Energiek</option>
                    <option value="rustig">😌 Rustig</option>
                    <option value="geïnspireerd">✨ Geïnspireerd</option>
                    <option value="trots">🎯 Trots</option>
                    <option value="kwetsbaar">💙 Kwetsbaar</option>
                    <option value="hoopvol">🌟 Hoopvol</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">Inzicht</label>
                  <input
                    type="text"
                    value={newReflection.inzicht}
                    onChange={(e) => setNewReflection(prev => ({ ...prev, inzicht: e.target.value }))}
                    className="input-field"
                    placeholder="Een belangrijk inzicht..."
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-6 py-3 bg-surface border border-gray-700 rounded-xl text-text hover:border-primary-blue/30 transition-colors"
                >
                  Annuleren
                </button>
                <button
                  onClick={handleAddReflection}
                  className="flex items-center space-x-2 px-6 py-3 btn-primary"
                >
                  <Save className="w-4 h-4" />
                  <span>Opslaan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
