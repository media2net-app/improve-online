'use client'

import { useState, useEffect } from 'react'
import { 
  X, 
  Crown, 
  Heart, 
  Target, 
  Lightbulb, 
  Calendar, 
  FileText, 
  Compass,
  CheckCircle,
  ArrowRight,
  Star,
  Waves,
  Mountain,
  Users
} from 'lucide-react'

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const demoSteps = [
    {
      title: 'Welkom bij Curacao Retraite!',
      subtitle: 'Je persoonlijke groei en missie herdefiniëren',
      content: (
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-full flex items-center justify-center mx-auto mb-6 luxury-glow">
            <Crown className="w-10 h-10 text-white" />
          </div>
          <p className="text-text-secondary text-lg mb-4">
            Deze demo toont wat deelnemers te zien krijgen tijdens hun 7-daags retraite op Curaçao.
          </p>
          <div className="bg-primary-blue/10 border border-primary-blue/20 rounded-xl p-4">
            <p className="text-primary-blue font-semibold">
              🌴 Van zelfreflectie tot levensmissie op een tropisch eiland
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Persoonlijk dashboard',
      subtitle: 'Jouw groeivoortgang in één oogopslag',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 p-3 bg-surface rounded-xl">
              <Heart className="w-6 h-6 text-primary-blue" />
              <div>
                <p className="text-text font-semibold">Modules voltooid</p>
                <p className="text-text-muted text-sm">3/8 modules</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-surface rounded-xl">
              <Target className="w-6 h-6 text-primary-blue" />
              <div>
                <p className="text-text font-semibold">Reflectie streak</p>
                <p className="text-text-muted text-sm">7 dagen</p>
              </div>
            </div>
          </div>
          <div className="bg-primary-blue/10 border border-primary-blue/20 rounded-xl p-4">
            <p className="text-text-secondary">
              <strong>Voortgang tracking:</strong> Zie je groei, behaalde mijlpalen en volgende stappen in je retraite reis.
            </p>
          </div>
        </div>
      )
    },
    {
      title: '7-Daags Programma',
      subtitle: 'Van aankomst tot missie definitie',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-surface rounded-xl">
              <div className="w-8 h-8 bg-green-400/20 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-text font-semibold">Dag 2: Klein Curaçao</p>
                <p className="text-text-muted text-sm">IKIGAI workshop op paradijselijk eiland</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-surface rounded-xl">
              <div className="w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                <Mountain className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <p className="text-text font-semibold">Dag 3: Christoffelberg</p>
                <p className="text-text-muted text-sm">Uitdagende hike met diepgaande reflectie</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-surface rounded-xl">
              <div className="w-8 h-8 bg-blue-400/20 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-text font-semibold">Dag 5: Mission Statement</p>
                <p className="text-text-muted text-sm">Persoonlijke missie en visie formuleren</p>
              </div>
            </div>
          </div>
          <div className="bg-primary-blue/10 border border-primary-blue/20 rounded-xl p-4">
            <p className="text-text-secondary">
              <strong>Unieke ervaringen:</strong> Elke dag een nieuwe uitdaging en inzicht in je persoonlijke groei.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Retraite Toolkit',
      subtitle: 'Alles voor je persoonlijke ontwikkeling',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 p-3 bg-surface rounded-xl">
              <FileText className="w-6 h-6 text-primary-blue" />
              <div>
                <p className="text-text font-semibold">Intake</p>
                <p className="text-text-muted text-sm">Persoonlijke analyse</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-surface rounded-xl">
              <Heart className="w-6 h-6 text-primary-blue" />
              <div>
                <p className="text-text font-semibold">Persoonlijke Groei</p>
                <p className="text-text-muted text-sm">Zelfontwikkeling modules</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-surface rounded-xl">
              <Target className="w-6 h-6 text-primary-blue" />
              <div>
                <p className="text-text font-semibold">Missie Definitie</p>
                <p className="text-text-muted text-sm">Levensdoel formuleren</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-surface rounded-xl">
              <Lightbulb className="w-6 h-6 text-primary-blue" />
              <div>
                <p className="text-text font-semibold">Reflectie</p>
                <p className="text-text-muted text-sm">Dagelijkse inzichten</p>
              </div>
            </div>
          </div>
          <div className="bg-primary-blue/10 border border-primary-blue/20 rounded-xl p-4">
            <p className="text-text-secondary">
              <strong>Complete retraite ervaring:</strong> Van intake tot missie - alles voor jouw persoonlijke groei.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Klaar voor je retraite?',
      subtitle: 'Start je persoonlijke groei vandaag nog',
      content: (
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-full flex items-center justify-center mx-auto luxury-glow">
            <Star className="w-8 h-8 text-white" />
          </div>
          <p className="text-text-secondary text-lg">
            Je hebt nu een overzicht van wat deelnemers kunnen verwachten tijdens hun retraite op Curaçao.
          </p>
          <div className="bg-primary-blue/10 border border-primary-blue/20 rounded-xl p-4">
            <p className="text-primary-blue font-semibold">
              🌊 7 dagen van zelfontdekking in het paradijs van Curaçao!
            </p>
          </div>
        </div>
      )
    }
  ]

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0)
    }
  }, [isOpen])

  const nextStep = () => {
    if (currentStep < demoSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onClose()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (!isOpen) return null

  const currentDemo = demoSteps[currentStep]
  const isLastStep = currentStep === demoSteps.length - 1

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass-effect rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-text">{currentDemo.title}</h2>
              <p className="text-text-muted">{currentDemo.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-text-muted hover:text-text transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Progress bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm text-text-muted mb-2">
              <span>Stap {currentStep + 1} van {demoSteps.length}</span>
              <span>{Math.round(((currentStep + 1) / demoSteps.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary-blue to-primary-blue-dark h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / demoSteps.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {currentDemo.content}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-800">
          <div className="flex items-center justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="px-4 py-2 text-text-muted hover:text-text transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Vorige
            </button>
            
            <div className="flex space-x-2">
              {demoSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentStep ? 'bg-primary-blue' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextStep}
              className="btn-primary flex items-center space-x-2"
            >
              <span>{isLastStep ? 'Beginnen' : 'Volgende'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}