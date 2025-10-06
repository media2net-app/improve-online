'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { 
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Clock,
  Target,
  Star,
  Award,
  Calendar,
  BarChart3,
  PieChart,
  Activity,
  Zap,
  CheckCircle,
  AlertCircle,
  ArrowUp,
  ArrowDown,
  Minus,
  Eye,
  Download,
  Filter,
  RefreshCw
} from 'lucide-react'

export default function Prestaties() {
  const [timeRange, setTimeRange] = useState('30d')
  const [activeTab, setActiveTab] = useState('overview')

  // Demo performance data
  const overviewStats = {
    totaleOmzet: 15420,
    omzetGroei: 12.5,
    actieveKlanten: 8,
    klantenGroei: 25,
    gemiddeldeReactieTijd: 2.3,
    reactieTijdVerbetering: -15,
    tevredenheidScore: 4.8,
    tevredenheidGroei: 8.2,
    voltooideProjecten: 23,
    projectenGroei: 35,
    gemiddeldeProjectWaarde: 670,
    projectWaardeGroei: 18
  }

  const revenueData = [
    { maand: 'Jan', omzet: 8500, projecten: 12 },
    { maand: 'Feb', omzet: 9200, projecten: 15 },
    { maand: 'Mrt', omzet: 10800, projecten: 18 },
    { maand: 'Apr', omzet: 12100, projecten: 21 },
    { maand: 'Mei', omzet: 13900, projecten: 24 },
    { maand: 'Jun', omzet: 15420, projecten: 23 }
  ]

  const topKlanten = [
    { naam: 'Sarah van der Berg', bedrijf: 'TechStart BV', omzet: 4500, projecten: 3, rating: 5 },
    { naam: 'Lisa Chen', bedrijf: 'Global Solutions', omzet: 3800, projecten: 2, rating: 5 },
    { naam: 'Mark Janssen', bedrijf: 'Marketing Pro', omzet: 2200, projecten: 1, rating: 4 },
    { naam: 'Anna Kowalski', bedrijf: 'Creative Agency', omzet: 1800, projecten: 1, rating: 4 },
    { naam: 'Tom de Vries', bedrijf: 'Local Business', omzet: 1200, projecten: 1, rating: 3 }
  ]

  const projectTypes = [
    { type: 'Email Management', aantal: 8, percentage: 35, kleur: 'blue' },
    { type: 'Project Management', aantal: 6, percentage: 26, kleur: 'green' },
    { type: 'Social Media', aantal: 4, percentage: 17, kleur: 'purple' },
    { type: 'Administratief', aantal: 3, percentage: 13, kleur: 'orange' },
    { type: 'Overig', aantal: 2, percentage: 9, kleur: 'gray' }
  ]

  const recenteActiviteiten = [
    { id: 1, actie: 'Project voltooid', details: 'Email automatisering voor TechStart', tijd: '2 uur geleden', impact: 'positief' },
    { id: 2, actie: 'Nieuwe klant', details: 'Marketing Pro toegevoegd', tijd: '1 dag geleden', impact: 'positief' },
    { id: 3, actie: 'Factuur betaald', details: '€2,500 van Global Solutions', tijd: '2 dagen geleden', impact: 'positief' },
    { id: 4, actie: 'Herinnering verzonden', details: 'Factuur #004 voor Local Business', tijd: '3 dagen geleden', impact: 'neutraal' },
    { id: 5, actie: 'Project vertraagd', details: 'Social Media project uitgesteld', tijd: '1 week geleden', impact: 'negatief' }
  ]

  const doelen = [
    { naam: 'Maandelijkse omzet', huidig: 15420, target: 20000, periode: 'Deze maand', kleur: 'green' },
    { naam: 'Nieuwe klanten', huidig: 2, target: 5, periode: 'Deze maand', kleur: 'blue' },
    { naam: 'Project voltooiing', huidig: 23, target: 30, periode: 'Deze maand', kleur: 'purple' },
    { naam: 'Tevredenheid score', huidig: 4.8, target: 5.0, periode: 'Deze maand', kleur: 'orange' }
  ]

  const getTrendIcon = (value: number) => {
    if (value > 0) return <ArrowUp className="w-4 h-4 text-green-400" />
    if (value < 0) return <ArrowDown className="w-4 h-4 text-red-400" />
    return <Minus className="w-4 h-4 text-gray-400" />
  }

  const getTrendColor = (value: number) => {
    if (value > 0) return 'text-green-400'
    if (value < 0) return 'text-red-400'
    return 'text-gray-400'
  }

  const getActivityIcon = (impact: string) => {
    switch (impact) {
      case 'positief': return <CheckCircle className="w-5 h-5 text-green-400" />
      case 'negatief': return <AlertCircle className="w-5 h-5 text-red-400" />
      default: return <Activity className="w-5 h-5 text-blue-400" />
    }
  }

  const getProjectTypeColor = (kleur: string) => {
    switch (kleur) {
      case 'blue': return 'bg-blue-500'
      case 'green': return 'bg-green-500'
      case 'purple': return 'bg-purple-500'
      case 'orange': return 'bg-orange-500'
      default: return 'bg-gray-500'
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
                <h1 className="text-3xl font-bold text-text">Prestaties</h1>
                <p className="text-text-muted">Analyseer je bedrijfsprestaties en groei</p>
              </div>
              <div className="flex items-center space-x-4">
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="input-field"
                >
                  <option value="7d">Laatste 7 dagen</option>
                  <option value="30d">Laatste 30 dagen</option>
                  <option value="90d">Laatste 90 dagen</option>
                  <option value="1y">Laatste jaar</option>
                </select>
                <button className="flex items-center space-x-2 px-4 py-2 bg-surface border border-gray-700 rounded-xl text-text hover:border-primary-gold/30 transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Export</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 py-8">
          {/* Tabs */}
          <div className="flex space-x-1 mb-8 bg-surface rounded-2xl p-2">
            {[
              { id: 'overview', label: 'Overzicht', icon: BarChart3 },
              { id: 'revenue', label: 'Omzet', icon: DollarSign },
              { id: 'clients', label: 'Klanten', icon: Users },
              { id: 'projects', label: 'Projecten', icon: Target }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-medium transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-primary-gold text-black' 
                    : 'text-text-muted hover:text-text hover:bg-surface-light'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass-effect rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-text-muted text-sm">Totale omzet</p>
                      <p className="text-3xl font-bold text-text">€{overviewStats.totaleOmzet.toLocaleString()}</p>
                    </div>
                    <DollarSign className="w-8 h-8 text-primary-gold" />
                  </div>
                  <div className="flex items-center space-x-2">
                    {getTrendIcon(overviewStats.omzetGroei)}
                    <span className={`text-sm font-medium ${getTrendColor(overviewStats.omzetGroei)}`}>
                      +{overviewStats.omzetGroei}%
                    </span>
                    <span className="text-text-muted text-sm">vs vorige periode</span>
                  </div>
                </div>

                <div className="glass-effect rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-text-muted text-sm">Actieve klanten</p>
                      <p className="text-3xl font-bold text-text">{overviewStats.actieveKlanten}</p>
                    </div>
                    <Users className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="flex items-center space-x-2">
                    {getTrendIcon(overviewStats.klantenGroei)}
                    <span className={`text-sm font-medium ${getTrendColor(overviewStats.klantenGroei)}`}>
                      +{overviewStats.klantenGroei}%
                    </span>
                    <span className="text-text-muted text-sm">groei</span>
                  </div>
                </div>

                <div className="glass-effect rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-text-muted text-sm">Reactie tijd</p>
                      <p className="text-3xl font-bold text-text">{overviewStats.gemiddeldeReactieTijd}h</p>
                    </div>
                    <Clock className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="flex items-center space-x-2">
                    {getTrendIcon(overviewStats.reactieTijdVerbetering)}
                    <span className={`text-sm font-medium ${getTrendColor(overviewStats.reactieTijdVerbetering)}`}>
                      {overviewStats.reactieTijdVerbetering}%
                    </span>
                    <span className="text-text-muted text-sm">verbetering</span>
                  </div>
                </div>

                <div className="glass-effect rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-text-muted text-sm">Tevredenheid</p>
                      <p className="text-3xl font-bold text-text">{overviewStats.tevredenheidScore}</p>
                    </div>
                    <Star className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div className="flex items-center space-x-2">
                    {getTrendIcon(overviewStats.tevredenheidGroei)}
                    <span className={`text-sm font-medium ${getTrendColor(overviewStats.tevredenheidGroei)}`}>
                      +{overviewStats.tevredenheidGroei}%
                    </span>
                    <span className="text-text-muted text-sm">verbetering</span>
                  </div>
                </div>
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Revenue Chart */}
                <div className="glass-effect rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-text mb-6">Omzet trend</h3>
                  <div className="space-y-4">
                    {revenueData.map((data, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-text-muted text-sm">{data.maand}</span>
                        <div className="flex items-center space-x-4">
                          <div className="w-32 bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-primary-gold to-primary-gold-dark h-2 rounded-full transition-all duration-500"
                              style={{ width: `${(data.omzet / Math.max(...revenueData.map(d => d.omzet))) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-text font-semibold text-sm w-20 text-right">€{data.omzet.toLocaleString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Types */}
                <div className="glass-effect rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-text mb-6">Project types</h3>
                  <div className="space-y-4">
                    {projectTypes.map((type, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded-full ${getProjectTypeColor(type.kleur)}`}></div>
                          <span className="text-text text-sm">{type.type}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-text-muted text-sm">{type.aantal} projecten</span>
                          <span className="text-primary-gold font-semibold text-sm">{type.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Goals and Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Goals */}
                <div className="glass-effect rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-text mb-6">Doelen</h3>
                  <div className="space-y-4">
                    {doelen.map((doel, index) => (
                      <div key={index} className="p-4 bg-surface rounded-xl border border-gray-700">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-text">{doel.naam}</h4>
                          <span className="text-text-muted text-sm">{doel.periode}</span>
                        </div>
                        <div className="flex items-center space-x-4 mb-2">
                          <span className="text-2xl font-bold text-text">{doel.huidig}</span>
                          <span className="text-text-muted">van {doel.target}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-500 ${
                              doel.kleur === 'green' ? 'bg-green-500' :
                              doel.kleur === 'blue' ? 'bg-blue-500' :
                              doel.kleur === 'purple' ? 'bg-purple-500' : 'bg-orange-500'
                            }`}
                            style={{ width: `${(doel.huidig / doel.target) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="glass-effect rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-text mb-6">Recente activiteiten</h3>
                  <div className="space-y-4">
                    {recenteActiviteiten.map((activiteit) => (
                      <div key={activiteit.id} className="flex items-center space-x-4 p-3 bg-surface rounded-xl border border-gray-700">
                        {getActivityIcon(activiteit.impact)}
                        <div className="flex-1">
                          <p className="font-semibold text-text text-sm">{activiteit.actie}</p>
                          <p className="text-text-muted text-xs">{activiteit.details}</p>
                        </div>
                        <span className="text-text-muted text-xs">{activiteit.tijd}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Revenue Tab */}
          {activeTab === 'revenue' && (
            <div className="space-y-8">
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold text-text mb-6">Omzet analyse</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary-gold">€{overviewStats.totaleOmzet.toLocaleString()}</p>
                    <p className="text-text-muted">Totale omzet</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-400">€{overviewStats.gemiddeldeProjectWaarde}</p>
                    <p className="text-text-muted">Gemiddelde project waarde</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-400">{overviewStats.voltooideProjecten}</p>
                    <p className="text-text-muted">Voltooide projecten</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Clients Tab */}
          {activeTab === 'clients' && (
            <div className="space-y-8">
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold text-text mb-6">Top klanten</h3>
                <div className="space-y-4">
                  {topKlanten.map((klant, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-surface rounded-xl border border-gray-700">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-gold to-primary-gold-dark rounded-full flex items-center justify-center">
                          <span className="text-black font-bold text-sm">
                            {klant.naam.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-text">{klant.naam}</h4>
                          <p className="text-text-muted text-sm">{klant.bedrijf}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <p className="text-primary-gold font-semibold">€{klant.omzet.toLocaleString()}</p>
                          <p className="text-text-muted text-xs">Omzet</p>
                        </div>
                        <div className="text-center">
                          <p className="text-text font-semibold">{klant.projecten}</p>
                          <p className="text-text-muted text-xs">Projecten</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-primary-gold fill-current" />
                          <span className="text-text font-semibold">{klant.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="space-y-8">
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold text-text mb-6">Project statistieken</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary-gold">{overviewStats.voltooideProjecten}</p>
                    <p className="text-text-muted">Voltooid</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-400">3</p>
                    <p className="text-text-muted">Actief</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-400">2</p>
                    <p className="text-text-muted">Gepland</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-orange-400">{overviewStats.gemiddeldeProjectWaarde}h</p>
                    <p className="text-text-muted">Gem. duur</p>
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
