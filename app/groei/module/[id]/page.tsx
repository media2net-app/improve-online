'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Navigation from '@/components/Navigation'
import { 
  Heart, 
  Star, 
  Lightbulb, 
  Users,
  ArrowLeft,
  Play,
  CheckCircle,
  Clock,
  BookOpen,
  FileText,
  Target,
  Award,
  Calendar,
  TrendingUp,
  Download,
  Share2
} from 'lucide-react'

export default function ModuleDetailPage() {
  const params = useParams()
  const moduleId = parseInt(params.id as string)
  const [activeTab, setActiveTab] = useState('overzicht')

  // Module data based on ID
  const modules = {
    1: {
      id: 1,
      title: 'Zelfkennis & Identiteit',
      description: 'Ontdek wie je werkelijk bent en wat je uniek maakt',
      progress: 100,
      completed: true,
      duration: '2 weken',
      totalLessons: 6,
      completedLessons: 6,
      icon: Heart,
      color: 'blue',
      intro: 'In deze module ga je diep in op jezelf. Je ontdekt je kernwaarden, persoonlijkheid en wat jou uniek maakt. Dit is de basis voor alle andere groei.',
      objectives: [
        'Je kernwaarden identificeren en begrijpen',
        'Je persoonlijkheidstype ontdekken',
        'Je sterke punten en ontwikkelpunten in kaart brengen',
        'Je unieke kwaliteiten herkennen en waarderen',
        'Een helder zelfbeeld ontwikkelen'
      ]
    },
    2: {
      id: 2,
      title: 'Emotionele Intelligentie',
      description: 'Leer je emoties begrijpen en beheren voor betere relaties',
      progress: 75,
      completed: false,
      duration: '3 weken',
      totalLessons: 8,
      completedLessons: 6,
      icon: Star,
      color: 'purple',
      intro: 'Emotionele intelligentie is cruciaal voor persoonlijke groei en gezonde relaties. Je leert je emoties herkennen, begrijpen en effectief beheren.',
      objectives: [
        'Emoties herkennen en benoemen',
        'Emotionele triggers identificeren',
        'Empathie ontwikkelen voor anderen',
        'Emotionele zelfregulatie oefenen',
        'Constructieve communicatie leren'
      ]
    },
    3: {
      id: 3,
      title: 'Mindfulness & Bewustzijn',
      description: 'Ontwikkel mindfulness voor innerlijke rust en helderheid',
      progress: 25,
      completed: false,
      duration: '4 weken',
      totalLessons: 10,
      completedLessons: 2,
      icon: Lightbulb,
      color: 'green',
      intro: 'Mindfulness helpt je om in het nu te leven en meer bewust te zijn van je gedachten, gevoelens en omgeving. Dit creëert innerlijke rust en helderheid.',
      objectives: [
        'Mindfulness basisprincipes leren',
        'Meditatie technieken oefenen',
        'Aandacht en concentratie verbeteren',
        'Stress verminderen door bewustzijn',
        'Innerlijke rust ontwikkelen'
      ]
    },
    4: {
      id: 4,
      title: 'Communicatie & Grenzen',
      description: 'Verbeter je communicatie en leer gezonde grenzen stellen',
      progress: 0,
      completed: false,
      duration: '3 weken',
      totalLessons: 7,
      completedLessons: 0,
      icon: Users,
      color: 'orange',
      intro: 'Effectieve communicatie en gezonde grenzen zijn essentieel voor gezonde relaties. Je leert je uit te drukken en voor jezelf op te komen.',
      objectives: [
        'Assertieve communicatie ontwikkelen',
        'Actief luisteren oefenen',
        'Gezonde grenzen stellen',
        'Conflicten constructief oplossen',
        'Empathische communicatie leren'
      ]
    }
  }

  const lessons = {
    1: [
      {
        id: 1,
        title: 'Introductie: Wie ben ik?',
        description: 'Een eerste kennismaking met jezelf en het concept van zelfkennis',
        duration: '30 min',
        type: 'video',
        completed: true,
        content: 'video-intro-zelfkennis'
      },
      {
        id: 2,
        title: 'Kernwaarden Ontdekken',
        description: 'Identificeer de waarden die het belangrijkst voor je zijn',
        duration: '45 min',
        type: 'oefening',
        completed: true,
        content: 'oefening-kernwaarden'
      },
      {
        id: 3,
        title: 'Persoonlijkheid Assessment',
        description: 'Ontdek je persoonlijkheidstype en karaktereigenschappen',
        duration: '60 min',
        type: 'assessment',
        completed: true,
        content: 'assessment-persoonlijkheid'
      },
      {
        id: 4,
        title: 'Sterke Punten Inventaris',
        description: 'Maak een overzicht van je talenten en vaardigheden',
        duration: '40 min',
        type: 'oefening',
        completed: true,
        content: 'oefening-sterke-punten'
      },
      {
        id: 5,
        title: 'Ontwikkelpunten Identificeren',
        description: 'Gebieden waar je wilt groeien en verbeteren',
        duration: '35 min',
        type: 'reflectie',
        completed: true,
        content: 'reflectie-ontwikkelpunten'
      },
      {
        id: 6,
        title: 'Zelfbeeld Integratie',
        description: 'Alles samenbrengen in een coherent zelfbeeld',
        duration: '50 min',
        type: 'synthese',
        completed: true,
        content: 'synthese-zelfbeeld'
      }
    ],
    2: [
      {
        id: 1,
        title: 'Emoties Herkennen',
        description: 'Leer verschillende emoties identificeren en benoemen',
        duration: '30 min',
        type: 'video',
        completed: true,
        content: 'video-emoties-herkennen'
      },
      {
        id: 2,
        title: 'Emotionele Dagboek',
        description: 'Start met het bijhouden van je dagelijkse emoties',
        duration: '20 min',
        type: 'oefening',
        completed: true,
        content: 'oefening-emotie-dagboek'
      },
      {
        id: 3,
        title: 'Emotionele Triggers',
        description: 'Ontdek wat je emoties uitlokt en waarom',
        duration: '45 min',
        type: 'reflectie',
        completed: true,
        content: 'reflectie-triggers'
      },
      {
        id: 4,
        title: 'Empathie Oefenen',
        description: 'Leer je in te leven in de gevoelens van anderen',
        duration: '40 min',
        type: 'oefening',
        completed: true,
        content: 'oefening-empathie'
      },
      {
        id: 5,
        title: 'Emotionele Regulatie',
        description: 'Technieken om je emoties te beheren',
        duration: '50 min',
        type: 'video',
        completed: true,
        content: 'video-emotionele-regulatie'
      },
      {
        id: 6,
        title: 'Communicatie & Emoties',
        description: 'Hoe emoties je communicatie beïnvloeden',
        duration: '35 min',
        type: 'video',
        completed: false,
        content: 'video-communicatie-emoties'
      },
      {
        id: 7,
        title: 'Conflicthantering',
        description: 'Emotioneel intelligente conflictoplossing',
        duration: '45 min',
        type: 'oefening',
        completed: false,
        content: 'oefening-conflicthantering'
      },
      {
        id: 8,
        title: 'Emotionele Intelligentie Assessment',
        description: 'Test je groei in emotionele intelligentie',
        duration: '30 min',
        type: 'assessment',
        completed: false,
        content: 'assessment-ei'
      }
    ],
    3: [
      {
        id: 1,
        title: 'Mindfulness Introductie',
        description: 'Wat is mindfulness en waarom is het belangrijk?',
        duration: '25 min',
        type: 'video',
        completed: true,
        content: 'video-mindfulness-intro'
      },
      {
        id: 2,
        title: 'Ademhalingsoefening',
        description: 'Eerste stappen in mindful ademhalen',
        duration: '15 min',
        type: 'meditatie',
        completed: true,
        content: 'meditatie-ademhaling'
      },
      {
        id: 3,
        title: 'Body Scan',
        description: 'Lichaamsbewustzijn ontwikkelen',
        duration: '20 min',
        type: 'meditatie',
        completed: false,
        content: 'meditatie-body-scan'
      },
      {
        id: 4,
        title: 'Mindful Eten',
        description: 'Aandachtig eten en proeven',
        duration: '30 min',
        type: 'oefening',
        completed: false,
        content: 'oefening-mindful-eten'
      },
      {
        id: 5,
        title: 'Walking Meditation',
        description: 'Mindfulness tijdens wandelen',
        duration: '25 min',
        type: 'meditatie',
        completed: false,
        content: 'meditatie-wandelen'
      },
      {
        id: 6,
        title: 'Gedachten Observeren',
        description: 'Je gedachten zonder oordeel waarnemen',
        duration: '20 min',
        type: 'meditatie',
        completed: false,
        content: 'meditatie-gedachten'
      },
      {
        id: 7,
        title: 'Mindful Communicatie',
        description: 'Aandachtig luisteren en spreken',
        duration: '40 min',
        type: 'oefening',
        completed: false,
        content: 'oefening-mindful-communicatie'
      },
      {
        id: 8,
        title: 'Stress & Mindfulness',
        description: 'Mindfulness als tool tegen stress',
        duration: '35 min',
        type: 'video',
        completed: false,
        content: 'video-stress-mindfulness'
      },
      {
        id: 9,
        title: 'Dagelijkse Mindfulness',
        description: 'Mindfulness integreren in je dagelijks leven',
        duration: '30 min',
        type: 'oefening',
        completed: false,
        content: 'oefening-dagelijks-mindfulness'
      },
      {
        id: 10,
        title: 'Mindfulness Assessment',
        description: 'Je mindfulness ontwikkeling evalueren',
        duration: '25 min',
        type: 'assessment',
        completed: false,
        content: 'assessment-mindfulness'
      }
    ],
    4: [
      {
        id: 1,
        title: 'Communicatie Basis',
        description: 'De fundamenten van effectieve communicatie',
        duration: '30 min',
        type: 'video',
        completed: false,
        content: 'video-communicatie-basis'
      },
      {
        id: 2,
        title: 'Actief Luisteren',
        description: 'Leer echt naar anderen te luisteren',
        duration: '40 min',
        type: 'oefening',
        completed: false,
        content: 'oefening-actief-luisteren'
      },
      {
        id: 3,
        title: 'Assertiviteit',
        description: 'Voor jezelf opkomen zonder agressief te zijn',
        duration: '45 min',
        type: 'video',
        completed: false,
        content: 'video-assertiviteit'
      },
      {
        id: 4,
        title: 'Grenzen Stellen',
        description: 'Leer gezonde grenzen te stellen',
        duration: '50 min',
        type: 'oefening',
        completed: false,
        content: 'oefening-grenzen'
      },
      {
        id: 5,
        title: 'Feedback Geven & Ontvangen',
        description: 'Constructieve feedback uitwisselen',
        duration: '40 min',
        type: 'oefening',
        completed: false,
        content: 'oefening-feedback'
      },
      {
        id: 6,
        title: 'Conflicthantering',
        description: 'Conflicten constructief oplossen',
        duration: '45 min',
        type: 'video',
        completed: false,
        content: 'video-conflicthantering'
      },
      {
        id: 7,
        title: 'Communicatie Assessment',
        description: 'Je communicatievaardigheden evalueren',
        duration: '30 min',
        type: 'assessment',
        completed: false,
        content: 'assessment-communicatie'
      }
    ]
  }

  const currentModule = modules[moduleId as keyof typeof modules]
  const currentLessons = lessons[moduleId as keyof typeof lessons] || []

  if (!currentModule) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="lg:ml-64 p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-text">Module niet gevonden</h1>
            <a href="/groei" className="text-primary-blue hover:text-primary-blue/80">← Terug naar modules</a>
          </div>
        </div>
      </div>
    )
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

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video': return Play
      case 'oefening': return Target
      case 'meditatie': return Heart
      case 'reflectie': return Lightbulb
      case 'assessment': return Award
      case 'synthese': return BookOpen
      default: return FileText
    }
  }

  const getLessonColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-red-500/20 text-red-400 border-red-500/30'
      case 'oefening': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'meditatie': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'reflectie': return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      case 'assessment': return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
      case 'synthese': return 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
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
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <a 
                  href="/groei"
                  className="flex items-center space-x-2 text-text-muted hover:text-text transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Terug naar modules</span>
                </a>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-full flex items-center justify-center luxury-glow">
                <currentModule.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 py-8">
          {/* Module Header */}
          <div className="glass-effect rounded-2xl p-8 mb-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-text mb-2">{currentModule.title}</h1>
                <p className="text-text-secondary text-lg mb-4">{currentModule.description}</p>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-text-muted" />
                    <span className="text-text-muted">{currentModule.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-text-muted" />
                    <span className="text-text-muted">{currentModule.totalLessons} lessen</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-text-muted" />
                    <span className="text-text-muted">{currentModule.completedLessons} voltooid</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-2xl flex items-center justify-center mb-3">
                  <currentModule.icon className="w-10 h-10 text-white" />
                </div>
                <p className="text-3xl font-bold text-text">{currentModule.progress}%</p>
                <p className="text-text-muted">Voltooid</p>
              </div>
            </div>

            <div className="w-full bg-gray-700 rounded-full h-3">
              <div 
                className={`bg-gradient-to-r ${getProgressColor(currentModule.color)} h-3 rounded-full transition-all duration-500`}
                style={{ width: `${currentModule.progress}%` }}
              ></div>
            </div>
          </div>

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
              onClick={() => setActiveTab('lessen')}
              className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                activeTab === 'lessen' 
                  ? 'bg-primary-blue text-white' 
                  : 'bg-surface text-text-muted hover:text-text hover:bg-surface-light border border-gray-700'
              }`}
            >
              Lessen ({currentLessons.length})
            </button>
            <button
              onClick={() => setActiveTab('materialen')}
              className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                activeTab === 'materialen' 
                  ? 'bg-primary-blue text-white' 
                  : 'bg-surface text-text-muted hover:text-text hover:bg-surface-light border border-gray-700'
              }`}
            >
              Materialen
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'overzicht' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="glass-effect rounded-2xl p-6">
                <h2 className="text-xl font-bold text-text mb-4">Module Introductie</h2>
                <p className="text-text-secondary mb-4">{currentModule.intro}</p>
                
                <h3 className="text-lg font-semibold text-text mb-3">Leerdoelen</h3>
                <ul className="space-y-2">
                  {currentModule.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-effect rounded-2xl p-6">
                <h2 className="text-xl font-bold text-text mb-4">Module Statistieken</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Voortgang</span>
                    <span className="text-text font-semibold">{currentModule.progress}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Lessen voltooid</span>
                    <span className="text-text font-semibold">{currentModule.completedLessons}/{currentModule.totalLessons}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Geschatte tijd</span>
                    <span className="text-text font-semibold">{currentModule.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Status</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      currentModule.completed ? 'bg-green-500/20 text-green-400' :
                      currentModule.progress > 0 ? 'bg-blue-500/20 text-blue-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {currentModule.completed ? 'Voltooid' :
                       currentModule.progress > 0 ? 'Bezig' : 'Niet gestart'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'lessen' && (
            <div className="space-y-6">
              {currentLessons.map((lesson) => {
                const Icon = getLessonIcon(lesson.type)
                return (
                  <div key={lesson.id} className="glass-effect rounded-2xl p-6 hover:border-primary-blue/30 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-bold text-text text-lg">{lesson.title}</h3>
                              <p className="text-text-secondary">{lesson.description}</p>
                            </div>
                            {lesson.completed && (
                              <CheckCircle className="w-6 h-6 text-green-500 ml-4" />
                            )}
                          </div>
                          
                          <div className="flex items-center space-x-4 mb-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLessonColor(lesson.type)}`}>
                              {lesson.type}
                            </span>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-text-muted" />
                              <span className="text-text-muted text-sm">{lesson.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a 
                        href={`/groei/module/${moduleId}/les/${lesson.id}`}
                        className={`px-4 py-2 rounded-xl transition-colors inline-block ${
                          lesson.completed 
                            ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' 
                            : 'btn-primary'
                        }`}
                      >
                        {lesson.completed ? 'Herbekijken' : 'Start Les'}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {activeTab === 'materialen' && (
            <div className="space-y-6">
              <div className="glass-effect rounded-2xl p-6">
                <h2 className="text-xl font-bold text-text mb-4">Downloads</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-surface rounded-xl border border-gray-700">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-primary-blue" />
                      <div>
                        <p className="text-text font-medium">Module Werkboek</p>
                        <p className="text-text-muted text-sm">PDF • 2.3 MB</p>
                      </div>
                    </div>
                    <button className="flex items-center space-x-2 px-3 py-2 bg-primary-blue/20 text-primary-blue rounded-lg hover:bg-primary-blue/30 transition-colors">
                      <Download className="w-4 h-4" />
                      <span>Downloaden</span>
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-surface rounded-xl border border-gray-700">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-primary-blue" />
                      <div>
                        <p className="text-text font-medium">Oefening Schema</p>
                        <p className="text-text-muted text-sm">PDF • 1.1 MB</p>
                      </div>
                    </div>
                    <button className="flex items-center space-x-2 px-3 py-2 bg-primary-blue/20 text-primary-blue rounded-lg hover:bg-primary-blue/30 transition-colors">
                      <Download className="w-4 h-4" />
                      <span>Downloaden</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-6">
                <h2 className="text-xl font-bold text-text mb-4">Extra Bronnen</h2>
                <div className="space-y-3">
                  <div className="p-4 bg-surface rounded-xl border border-gray-700">
                    <h3 className="font-semibold text-text mb-2">Aanbevolen Boeken</h3>
                    <ul className="space-y-1 text-text-secondary">
                      <li>• "Emotionele Intelligentie" - Daniel Goleman</li>
                      <li>• "De Kracht van Nu" - Eckhart Tolle</li>
                      <li>• "Mindset" - Carol Dweck</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-surface rounded-xl border border-gray-700">
                    <h3 className="font-semibold text-text mb-2">Handige Apps</h3>
                    <ul className="space-y-1 text-text-secondary">
                      <li>• Headspace (Meditatie)</li>
                      <li>• Insight Timer (Mindfulness)</li>
                      <li>• Reflectly (Journaling)</li>
                    </ul>
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
