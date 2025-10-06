'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import { 
  FileText, 
  Heart, 
  Target, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Save,
  Edit3,
  Star,
  User,
  Calendar,
  RotateCcw
} from 'lucide-react'

export default function IntakePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    // Persoonlijke informatie
    naam: '',
    leeftijd: '',
    beroep: '',
    locatie: '',
    
    // Motivatie
    motivatie: '',
    verwachtingen: '',
    
    // Doelen
    korteTermijnDoelen: '',
    langeTermijnDoelen: '',
    
    // Uitdagingen
    huidigeUitdagingen: '',
    gewensteVeranderingen: '',
    
    // Reflectie
    zelfbeeld: '',
    sterkePunten: '',
    ontwikkelpunten: '',
    
    // Praktisch
    beschikbareTijd: '',
    voorkeurSessies: '',
    communicatieVoorkeur: ''
  })

  const steps = [
    { id: 1, title: 'Persoonlijke Info', icon: User },
    { id: 2, title: 'Motivatie & Doelen', icon: Target },
    { id: 3, title: 'Reflectie', icon: Heart },
    { id: 4, title: 'Praktische Info', icon: Calendar }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  // Check if intake is already submitted
  useEffect(() => {
    const submittedIntake = localStorage.getItem('curacao-retraite-intake')
    if (submittedIntake) {
      setIsSubmitted(true)
      setFormData(JSON.parse(submittedIntake))
    }
  }, [])

  const handleSubmit = () => {
    // Save to localStorage
    localStorage.setItem('curacao-retraite-intake', JSON.stringify(formData))
    setIsSubmitted(true)
    alert('Intake succesvol ingediend! Je begeleider neemt binnen 24 uur contact met je op.')
  }

  const handleRestartIntake = () => {
    localStorage.removeItem('curacao-retraite-intake')
    setIsSubmitted(false)
    setCurrentStep(1)
    setFormData({
      naam: '',
      leeftijd: '',
      beroep: '',
      locatie: '',
      motivatie: '',
      verwachtingen: '',
      korteTermijnDoelen: '',
      langeTermijnDoelen: '',
      huidigeUitdagingen: '',
      gewensteVeranderingen: '',
      zelfbeeld: '',
      sterkePunten: '',
      ontwikkelpunten: '',
      beschikbareTijd: '',
      voorkeurSessies: '',
      communicatieVoorkeur: ''
    })
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-text mb-2">Volledige naam *</label>
              <input
                type="text"
                value={formData.naam}
                onChange={(e) => handleInputChange('naam', e.target.value)}
                className="input-field"
                placeholder="Je volledige naam"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text mb-2">Leeftijd *</label>
              <input
                type="number"
                value={formData.leeftijd}
                onChange={(e) => handleInputChange('leeftijd', e.target.value)}
                className="input-field"
                placeholder="Je leeftijd"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text mb-2">Beroep</label>
              <input
                type="text"
                value={formData.beroep}
                onChange={(e) => handleInputChange('beroep', e.target.value)}
                className="input-field"
                placeholder="Wat doe je voor werk?"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text mb-2">Locatie</label>
              <input
                type="text"
                value={formData.locatie}
                onChange={(e) => handleInputChange('locatie', e.target.value)}
                className="input-field"
                placeholder="Waar woon je?"
              />
            </div>
          </div>
        )
      
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-text mb-2">Wat is je motivatie om deel te nemen aan dit retraite? *</label>
              <textarea
                value={formData.motivatie}
                onChange={(e) => handleInputChange('motivatie', e.target.value)}
                className="input-field h-32"
                placeholder="Vertel ons waarom je wilt deelnemen..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text mb-2">Wat zijn je verwachtingen? *</label>
              <textarea
                value={formData.verwachtingen}
                onChange={(e) => handleInputChange('verwachtingen', e.target.value)}
                className="input-field h-32"
                placeholder="Wat hoop je te bereiken?"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text mb-2">Korte termijn doelen (3-6 maanden)</label>
              <textarea
                value={formData.korteTermijnDoelen}
                onChange={(e) => handleInputChange('korteTermijnDoelen', e.target.value)}
                className="input-field h-24"
                placeholder="Wat wil je de komende maanden bereiken?"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text mb-2">Lange termijn doelen (1-3 jaar)</label>
              <textarea
                value={formData.langeTermijnDoelen}
                onChange={(e) => handleInputChange('langeTermijnDoelen', e.target.value)}
                className="input-field h-24"
                placeholder="Wat zijn je dromen voor de toekomst?"
              />
            </div>
          </div>
        )
      
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-text mb-2">Hoe zie je jezelf op dit moment? *</label>
              <textarea
                value={formData.zelfbeeld}
                onChange={(e) => handleInputChange('zelfbeeld', e.target.value)}
                className="input-field h-32"
                placeholder="Beschrijf je huidige zelfbeeld..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text mb-2">Wat zijn je sterke punten? *</label>
              <textarea
                value={formData.sterkePunten}
                onChange={(e) => handleInputChange('sterkePunten', e.target.value)}
                className="input-field h-24"
                placeholder="Waar ben je goed in?"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text mb-2">Wat zou je willen ontwikkelen?</label>
              <textarea
                value={formData.ontwikkelpunten}
                onChange={(e) => handleInputChange('ontwikkelpunten', e.target.value)}
                className="input-field h-24"
                placeholder="Waar wil je aan werken?"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text mb-2">Wat zijn je huidige uitdagingen?</label>
              <textarea
                value={formData.huidigeUitdagingen}
                onChange={(e) => handleInputChange('huidigeUitdagingen', e.target.value)}
                className="input-field h-24"
                placeholder="Wat vind je moeilijk op dit moment?"
              />
            </div>
          </div>
        )
      
      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-text mb-2">Hoeveel tijd kun je per week besteden aan je retraite? *</label>
              <select
                value={formData.beschikbareTijd}
                onChange={(e) => handleInputChange('beschikbareTijd', e.target.value)}
                className="input-field"
              >
                <option value="">Selecteer...</option>
                <option value="1-2 uur">1-2 uur per week</option>
                <option value="3-5 uur">3-5 uur per week</option>
                <option value="6-10 uur">6-10 uur per week</option>
                <option value="10+ uur">Meer dan 10 uur per week</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text mb-2">Wat is je voorkeur voor sessies?</label>
              <select
                value={formData.voorkeurSessies}
                onChange={(e) => handleInputChange('voorkeurSessies', e.target.value)}
                className="input-field"
              >
                <option value="">Selecteer...</option>
                <option value="individueel">Individuele sessies</option>
                <option value="groep">Groepssessies</option>
                <option value="gemengd">Gemengd (individueel + groep)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text mb-2">Communicatie voorkeur</label>
              <select
                value={formData.communicatieVoorkeur}
                onChange={(e) => handleInputChange('communicatieVoorkeur', e.target.value)}
                className="input-field"
              >
                <option value="">Selecteer...</option>
                <option value="email">Email</option>
                <option value="telefoon">Telefoon</option>
                <option value="video">Video call</option>
                <option value="app">WhatsApp</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text mb-2">Wat zijn de gewenste veranderingen in je leven?</label>
              <textarea
                value={formData.gewensteVeranderingen}
                onChange={(e) => handleInputChange('gewensteVeranderingen', e.target.value)}
                className="input-field h-24"
                placeholder="Wat wil je anders in je leven?"
              />
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  // Show submitted intake if available
  if (isSubmitted) {
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
                  <h1 className="text-3xl font-bold text-text">Intake Voltooid</h1>
                  <p className="text-text-muted">Je intake is succesvol ingediend. Hier is een overzicht van je antwoorden.</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleRestartIntake}
                    className="flex items-center space-x-2 px-4 py-2 bg-surface border border-gray-700 rounded-xl text-text hover:border-primary-blue/30 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Opnieuw doen</span>
                  </button>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center luxury-glow">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="px-6 py-8">
            {/* Intake Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Persoonlijke Info */}
              <div className="glass-effect rounded-2xl p-6">
                <h2 className="text-xl font-bold text-text mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2 text-primary-blue" />
                  Persoonlijke Informatie
                </h2>
                <div className="space-y-3">
                  <div>
                    <span className="text-text-muted">Naam:</span>
                    <p className="text-text font-medium">{formData.naam}</p>
                  </div>
                  <div>
                    <span className="text-text-muted">Leeftijd:</span>
                    <p className="text-text font-medium">{formData.leeftijd}</p>
                  </div>
                  <div>
                    <span className="text-text-muted">Beroep:</span>
                    <p className="text-text font-medium">{formData.beroep}</p>
                  </div>
                  <div>
                    <span className="text-text-muted">Locatie:</span>
                    <p className="text-text font-medium">{formData.locatie}</p>
                  </div>
                </div>
              </div>

              {/* Motivatie & Doelen */}
              <div className="glass-effect rounded-2xl p-6">
                <h2 className="text-xl font-bold text-text mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-primary-blue" />
                  Motivatie & Doelen
                </h2>
                <div className="space-y-3">
                  <div>
                    <span className="text-text-muted">Motivatie:</span>
                    <p className="text-text text-sm">{formData.motivatie}</p>
                  </div>
                  <div>
                    <span className="text-text-muted">Verwachtingen:</span>
                    <p className="text-text text-sm">{formData.verwachtingen}</p>
                  </div>
                  <div>
                    <span className="text-text-muted">Korte termijn doelen:</span>
                    <p className="text-text text-sm">{formData.korteTermijnDoelen}</p>
                  </div>
                  <div>
                    <span className="text-text-muted">Lange termijn doelen:</span>
                    <p className="text-text text-sm">{formData.langeTermijnDoelen}</p>
                  </div>
                </div>
              </div>

              {/* Reflectie */}
              <div className="glass-effect rounded-2xl p-6">
                <h2 className="text-xl font-bold text-text mb-4 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-primary-blue" />
                  Zelfreflectie
                </h2>
                <div className="space-y-3">
                  <div>
                    <span className="text-text-muted">Zelfbeeld:</span>
                    <p className="text-text text-sm">{formData.zelfbeeld}</p>
                  </div>
                  <div>
                    <span className="text-text-muted">Sterke punten:</span>
                    <p className="text-text text-sm">{formData.sterkePunten}</p>
                  </div>
                  <div>
                    <span className="text-text-muted">Ontwikkelpunten:</span>
                    <p className="text-text text-sm">{formData.ontwikkelpunten}</p>
                  </div>
                  <div>
                    <span className="text-text-muted">Uitdagingen:</span>
                    <p className="text-text text-sm">{formData.huidigeUitdagingen}</p>
                  </div>
                </div>
              </div>

              {/* Praktische Info */}
              <div className="glass-effect rounded-2xl p-6">
                <h2 className="text-xl font-bold text-text mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary-blue" />
                  Praktische Informatie
                </h2>
                <div className="space-y-3">
                  <div>
                    <span className="text-text-muted">Beschikbare tijd:</span>
                    <p className="text-text font-medium">{formData.beschikbareTijd}</p>
                  </div>
                  <div>
                    <span className="text-text-muted">Sessie voorkeur:</span>
                    <p className="text-text font-medium">{formData.voorkeurSessies}</p>
                  </div>
                  <div>
                    <span className="text-text-muted">Communicatie:</span>
                    <p className="text-text font-medium">{formData.communicatieVoorkeur}</p>
                  </div>
                  <div>
                    <span className="text-text-muted">Gewenste veranderingen:</span>
                    <p className="text-text text-sm">{formData.gewensteVeranderingen}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Message */}
            <div className="mt-8">
              <div className="glass-effect rounded-2xl p-6 bg-green-500/10 border-green-500/20">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <div>
                    <h3 className="font-bold text-text">Intake Succesvol Ingediend!</h3>
                    <p className="text-text-muted">Je begeleider neemt binnen 24 uur contact met je op om je retraite programma op maat te maken.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
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
                <h1 className="text-3xl font-bold text-text">Intake Formulier</h1>
                <p className="text-text-muted">Help ons je beter te begrijpen voor jouw persoonlijke retraite.</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-full flex items-center justify-center luxury-glow">
                <FileText className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 py-8">
          {/* Progress Steps */}
          <div className="glass-effect rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isActive = currentStep === step.id
                const isCompleted = currentStep > step.id
                
                return (
                  <div key={step.id} className="flex items-center">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                      isCompleted ? 'bg-primary-blue text-white' :
                      isActive ? 'bg-primary-blue/20 text-primary-blue border-2 border-primary-blue' :
                      'bg-gray-700 text-text-muted'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <Icon className="w-5 h-5" />
                      )}
                    </div>
                    <div className="ml-3">
                      <p className={`text-sm font-medium ${
                        isActive ? 'text-text' : 'text-text-muted'
                      }`}>
                        {step.title}
                      </p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-12 h-0.5 mx-4 ${
                        isCompleted ? 'bg-primary-blue' : 'bg-gray-700'
                      }`} />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Form Content */}
          <div className="glass-effect rounded-2xl p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-text mb-2">
                Stap {currentStep}: {steps[currentStep - 1].title}
              </h2>
              <p className="text-text-muted">
                {currentStep === 1 && "Vertel ons iets over jezelf"}
                {currentStep === 2 && "Wat zijn je motivatie en doelen?"}
                {currentStep === 3 && "Laten we wat dieper kijken naar jezelf"}
                {currentStep === 4 && "Praktische informatie voor je retraite"}
              </p>
            </div>

            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-xl transition-colors ${
                  currentStep === 1 
                    ? 'bg-gray-700 text-text-muted cursor-not-allowed' 
                    : 'bg-surface border border-gray-700 text-text hover:border-primary-blue/30'
                }`}
              >
                Vorige
              </button>

              <div className="flex space-x-4">
                <button
                  className="flex items-center space-x-2 px-4 py-3 bg-surface border border-gray-700 rounded-xl text-text hover:border-primary-blue/30 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>Opslaan</span>
                </button>

                {currentStep < 4 ? (
                  <button
                    onClick={handleNext}
                    className="flex items-center space-x-2 px-6 py-3 btn-primary"
                  >
                    <span>Volgende</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="flex items-center space-x-2 px-6 py-3 btn-primary"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Intake Indienen</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
