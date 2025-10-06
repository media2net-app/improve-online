'use client'

import { useState, useEffect } from 'react'
import { 
  X, 
  Crown, 
  BookOpen, 
  TrendingUp, 
  Users, 
  Calendar, 
  FileText, 
  CreditCard,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react'

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const demoSteps = [
    {
      title: 'Welkom bij Dorette Academy!',
      subtitle: 'Je persoonlijke Virtual Assistant opleiding',
      content: (
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-gold to-primary-gold-dark rounded-full flex items-center justify-center mx-auto mb-6 luxury-glow">
            <Crown className="w-10 h-10 text-black" />
          </div>
          <p className="text-text-secondary text-lg mb-4">
            Deze demo toont wat cursisten te zien krijgen tijdens hun VA-opleiding van 0 tot 100.
          </p>
          <div className="bg-primary-gold/10 border border-primary-gold/20 rounded-xl p-4">
            <p className="text-primary-gold font-semibold">
              🎯 Van beginner tot professionele Virtual Assistant
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Persoonlijk dashboard',
      subtitle: 'Jouw leervoortgang in één oogopslag',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 p-3 bg-surface rounded-xl">
              <BookOpen className="w-6 h-6 text-primary-gold" />
              <div>
                <p className="text-text font-semibold">Lessen voltooid</p>
                <p className="text-text-muted text-sm">8/24 lessen</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-surface rounded-xl">
              <TrendingUp className="w-6 h-6 text-primary-gold" />
              <div>
                <p className="text-text font-semibold">Huidige reeks</p>
                <p className="text-text-muted text-sm">5 dagen</p>
              </div>
            </div>
          </div>
          <div className="bg-primary-gold/10 border border-primary-gold/20 rounded-xl p-4">
            <p className="text-text-secondary">
              <strong>Voortgang tracking:</strong> Zie je prestaties, behaalde certificaten en volgende stappen in je VA-reis.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Academy & cursussen',
      subtitle: 'Stap-voor-stap VA-opleiding',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-surface rounded-xl">
              <div className="w-8 h-8 bg-green-400/20 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-text font-semibold">Grondbeginselen</p>
                <p className="text-text-muted text-sm">Basis VA-vaardigheden</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-surface rounded-xl">
              <div className="w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <p className="text-text font-semibold">Communicatie</p>
                <p className="text-text-muted text-sm">Client management</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-surface rounded-xl">
              <div className="w-8 h-8 bg-blue-400/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-text font-semibold">Productiviteit</p>
                <p className="text-text-muted text-sm">Tools & automatisering</p>
              </div>
            </div>
          </div>
          <div className="bg-primary-gold/10 border border-primary-gold/20 rounded-xl p-4">
            <p className="text-text-secondary">
              <strong>Interactieve lessen:</strong> Video's, quizzen, praktijkopdrachten en certificaten voor elke module.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'VA Business Toolkit',
      subtitle: 'Alles wat je nodig hebt om te starten',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 p-3 bg-surface rounded-xl">
              <Users className="w-6 h-6 text-primary-gold" />
              <div>
                <p className="text-text font-semibold">Klantbeheer</p>
                <p className="text-text-muted text-sm">CRM systeem</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-surface rounded-xl">
              <Calendar className="w-6 h-6 text-primary-gold" />
              <div>
                <p className="text-text font-semibold">Agenda</p>
                <p className="text-text-muted text-sm">Afspraken plannen</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-surface rounded-xl">
              <FileText className="w-6 h-6 text-primary-gold" />
              <div>
                <p className="text-text font-semibold">Offertes</p>
                <p className="text-text-muted text-sm">Professionele voorstellen</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-surface rounded-xl">
              <CreditCard className="w-6 h-6 text-primary-gold" />
              <div>
                <p className="text-text font-semibold">Facturering</p>
                <p className="text-text-muted text-sm">Automatische facturen</p>
              </div>
            </div>
          </div>
          <div className="bg-primary-gold/10 border border-primary-gold/20 rounded-xl p-4">
            <p className="text-text-secondary">
              <strong>Complete business suite:</strong> Van klant acquisitie tot betaling - alles in één platform.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Klaar om te beginnen?',
      subtitle: 'Start je VA-reis vandaag nog',
      content: (
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-gold to-primary-gold-dark rounded-full flex items-center justify-center mx-auto luxury-glow">
            <Star className="w-8 h-8 text-black" />
          </div>
          <p className="text-text-secondary text-lg">
            Je hebt nu een overzicht van wat cursisten kunnen verwachten tijdens hun VA-opleiding.
          </p>
          <div className="bg-primary-gold/10 border border-primary-gold/20 rounded-xl p-4">
            <p className="text-primary-gold font-semibold">
              🚀 Van 0 tot professionele Virtual Assistant in 12 weken!
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
                className="bg-gradient-to-r from-primary-gold to-primary-gold-dark h-2 rounded-full transition-all duration-300"
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
                    index === currentStep ? 'bg-primary-gold' : 'bg-gray-600'
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

