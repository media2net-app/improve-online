'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { 
  FileText, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Eye,
  Download,
  Search,
  Filter,
  User,
  Calendar,
  Target,
  Heart
} from 'lucide-react'

export default function IntakesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  // Mock data voor intakes
  const intakes = [
    {
      id: 1,
      deelnemer: {
        naam: 'Maria Rodriguez',
        email: 'maria@example.com',
        telefoon: '+31 6 12345678'
      },
      status: 'goedgekeurd',
      ingediendDatum: '2025-01-05',
      beoordeeldDatum: '2025-01-06',
      beoordelaar: 'Jonnhy de Vries',
      data: {
        naam: 'Maria Rodriguez',
        leeftijd: '32',
        beroep: 'Marketing Manager',
        locatie: 'Amsterdam',
        motivatie: 'Ik wil meer inzicht krijgen in mijn persoonlijke waarden en mijn leven meer richting geven.',
        verwachtingen: 'Ik hoop concrete tools te krijgen om beter te kunnen reflecteren en keuzes te maken.',
        korteTermijnDoelen: 'Meer balans vinden tussen werk en privé',
        langeTermijnDoelen: 'Een carrière switch overwegen',
        huidigeUitdagingen: 'Stress en onzekerheid over de toekomst',
        gewensteVeranderingen: 'Meer zelfvertrouwen en duidelijkheid',
        zelfbeeld: 'Ik zie mezelf als ambitieus maar soms onzeker',
        sterkePunten: 'Creativiteit, doorzettingsvermogen, empathie',
        ontwikkelpunten: 'Stress management, besluitvaardigheid',
        beschikbareTijd: '2-3 uur per week',
        voorkeurSessies: 'Avond sessies',
        communicatieVoorkeur: 'Email en telefoon'
      },
      notities: 'Zeer gemotiveerde deelnemer, duidelijke doelen'
    },
    {
      id: 2,
      deelnemer: {
        naam: 'Sarah van der Berg',
        email: 'sarah@example.com',
        telefoon: '+31 6 87654321'
      },
      status: 'in_behandeling',
      ingediendDatum: '2025-01-08',
      beoordeeldDatum: null,
      beoordelaar: null,
      data: {
        naam: 'Sarah van der Berg',
        leeftijd: '28',
        beroep: 'Psycholoog',
        locatie: 'Utrecht',
        motivatie: 'Ik wil mijn eigen praktijk starten en heb begeleiding nodig bij deze stap.',
        verwachtingen: 'Tools voor ondernemerschap en persoonlijke groei',
        korteTermijnDoelen: 'Business plan maken',
        langeTermijnDoelen: 'Eigen praktijk opzetten',
        huidigeUitdagingen: 'Angst voor ondernemerschap',
        gewensteVeranderingen: 'Meer ondernemerschap en zelfvertrouwen',
        zelfbeeld: 'Ik ben een goede psycholoog maar twijfel over mijn zakelijke vaardigheden',
        sterkePunten: 'Luistervaardigheid, analytisch denken, empathie',
        ontwikkelpunten: 'Zakelijke vaardigheden, ondernemerschap',
        beschikbareTijd: '1-2 uur per week',
        voorkeurSessies: 'Weekend sessies',
        communicatieVoorkeur: 'Email'
      },
      notities: 'Heeft specifieke vragen over ondernemerschap'
    },
    {
      id: 3,
      deelnemer: {
        naam: 'Lisa Johnson',
        email: 'lisa@example.com',
        telefoon: '+31 6 11223344'
      },
      status: 'afgewezen',
      ingediendDatum: '2025-01-03',
      beoordeeldDatum: '2025-01-04',
      beoordelaar: 'Jonnhy de Vries',
      data: {
        naam: 'Lisa Johnson',
        leeftijd: '45',
        beroep: 'HR Manager',
        locatie: 'Rotterdam',
        motivatie: 'Ik wil mijn team beter kunnen begeleiden.',
        verwachtingen: 'Management training',
        korteTermijnDoelen: 'Betere teamleider worden',
        langeTermijnDoelen: 'Directeur worden',
        huidigeUitdagingen: 'Team motivatie',
        gewensteVeranderingen: 'Meer leiderschapsvaardigheden',
        zelfbeeld: 'Ervaren manager',
        sterkePunten: 'Organisatie, ervaring',
        ontwikkelpunten: 'Empathie, communicatie',
        beschikbareTijd: '30 minuten per week',
        voorkeurSessies: 'Tijdens werkuren',
        communicatieVoorkeur: 'Telefoon'
      },
      notities: 'Niet geschikt voor retraite - meer management training nodig'
    },
    {
      id: 4,
      deelnemer: {
        naam: 'Michael Chen',
        email: 'michael@example.com',
        telefoon: '+31 6 55667788'
      },
      status: 'goedgekeurd',
      ingediendDatum: '2025-01-02',
      beoordeeldDatum: '2025-01-03',
      beoordelaar: 'Jonnhy de Vries',
      data: {
        naam: 'Michael Chen',
        leeftijd: '35',
        beroep: 'Software Developer',
        locatie: 'Eindhoven',
        motivatie: 'Ik wil meer balans vinden tussen werk en privé en mijn waarden beter leren kennen.',
        verwachtingen: 'Praktische tools voor work-life balance',
        korteTermijnDoelen: 'Betere grenzen stellen',
        langeTermijnDoelen: 'Carrière switch overwegen',
        huidigeUitdagingen: 'Burn-out risico',
        gewensteVeranderingen: 'Meer tijd voor hobby\'s en familie',
        zelfbeeld: 'Hardwerkend maar uitgeput',
        sterkePunten: 'Analytisch denken, probleemoplossend',
        ontwikkelpunten: 'Stress management, sociale vaardigheden',
        beschikbareTijd: '3-4 uur per week',
        voorkeurSessies: 'Avond sessies',
        communicatieVoorkeur: 'Email en Slack'
      },
      notities: 'Zeer gemotiveerd, goede kandidaat'
    }
  ]

  const filteredIntakes = intakes.filter(intake => {
    const matchesSearch = intake.deelnemer.naam.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         intake.deelnemer.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || intake.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'goedgekeurd': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'in_behandeling': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'afgewezen': return 'bg-red-500/20 text-red-400 border-red-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const stats = {
    totaal: intakes.length,
    goedgekeurd: intakes.filter(i => i.status === 'goedgekeurd').length,
    inBehandeling: intakes.filter(i => i.status === 'in_behandeling').length,
    afgewezen: intakes.filter(i => i.status === 'afgewezen').length
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
                <h1 className="text-2xl font-bold text-text">Intakes Beheer</h1>
                <p className="text-text-muted">Beoordeel en beheer alle intake formulieren</p>
              </div>
              <div className="text-right">
                <p className="text-text font-medium">{stats.inBehandeling} in behandeling</p>
                <p className="text-text-muted text-sm">Wachten op beoordeling</p>
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 py-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Totaal</p>
                  <p className="text-3xl font-bold text-text">{stats.totaal}</p>
                </div>
                <FileText className="w-12 h-12 text-primary-blue" />
              </div>
            </div>
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Goedgekeurd</p>
                  <p className="text-3xl font-bold text-green-400">{stats.goedgekeurd}</p>
                </div>
                <CheckCircle className="w-12 h-12 text-green-400" />
              </div>
            </div>
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">In Behandeling</p>
                  <p className="text-3xl font-bold text-yellow-400">{stats.inBehandeling}</p>
                </div>
                <Clock className="w-12 h-12 text-yellow-400" />
              </div>
            </div>
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Afgewezen</p>
                  <p className="text-3xl font-bold text-red-400">{stats.afgewezen}</p>
                </div>
                <AlertCircle className="w-12 h-12 text-red-400" />
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="glass-effect rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Zoek intakes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-surface border border-gray-700 rounded-xl text-text placeholder-text-muted focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/50 transition-colors"
                  />
                </div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 bg-surface border border-gray-700 rounded-xl text-text focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/50 transition-colors"
                >
                  <option value="all">Alle statussen</option>
                  <option value="goedgekeurd">Goedgekeurd</option>
                  <option value="in_behandeling">In Behandeling</option>
                  <option value="afgewezen">Afgewezen</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-text-muted text-sm">{filteredIntakes.length} intakes</span>
              </div>
            </div>
          </div>

          {/* Intakes Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredIntakes.map((intake) => (
              <div key={intake.id} className="glass-effect rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {intake.deelnemer.naam.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-text font-bold text-lg">{intake.deelnemer.naam}</h3>
                      <p className="text-text-muted text-sm">{intake.deelnemer.email}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(intake.status)}`}>
                    {intake.status.replace('_', ' ')}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-text-muted" />
                    <span className="text-text-muted text-sm">{intake.data.beroep}, {intake.data.leeftijd} jaar</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-text-muted" />
                    <span className="text-text-muted text-sm">Ingediend: {intake.ingediendDatum}</span>
                  </div>
                  {intake.beoordeeldDatum && (
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-text-muted" />
                      <span className="text-text-muted text-sm">Beoordeeld: {intake.beoordeeldDatum}</span>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <h4 className="text-text font-medium mb-2">Motivatie</h4>
                  <p className="text-text-muted text-sm line-clamp-3">{intake.data.motivatie}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-text font-medium mb-2">Doelen</h4>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Target className="w-3 h-3 text-primary-blue" />
                      <span className="text-text-muted text-xs">{intake.data.korteTermijnDoelen}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="w-3 h-3 text-primary-blue" />
                      <span className="text-text-muted text-xs">{intake.data.langeTermijnDoelen}</span>
                    </div>
                  </div>
                </div>

                {intake.notities && (
                  <div className="mb-6">
                    <h4 className="text-text font-medium mb-2">Notities</h4>
                    <p className="text-text-muted text-sm">{intake.notities}</p>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-primary-blue hover:bg-primary-blue/20 rounded-lg transition-colors" title="Bekijken">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-green-400 hover:bg-green-400/20 rounded-lg transition-colors" title="Downloaden">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                  {intake.status === 'in_behandeling' && (
                    <div className="flex items-center space-x-2">
                      <button className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm">
                        Goedkeuren
                      </button>
                      <button className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm">
                        Afwijzen
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
