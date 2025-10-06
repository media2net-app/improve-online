'use client'

import Navigation from '@/components/Navigation'
import { 
  Users, 
  UserCheck, 
  Clock,
  Plane,
  CheckCircle,
  AlertCircle,
  CreditCard,
  FileText,
  BarChart3,
  TrendingUp,
  Euro,
  DollarSign,
  Receipt
} from 'lucide-react'

export default function AdminDashboard() {
  // Mock data voor deelnemers met betaling info
  const deelnemers = [
    {
      id: 1,
      naam: 'Maria Rodriguez',
      email: 'maria@example.com',
      status: 'bevestigd',
      betaling: {
        status: 'volledig_betaald',
        bedrag: 4100,
        betaald: 4100,
        openstaand: 0,
        aanbetaling: 1000,
        resterend: 0,
        laatsteBetaling: '2025-01-08'
      }
    },
    {
      id: 2,
      naam: 'Sarah van der Berg',
      email: 'sarah@example.com',
      status: 'bevestigd',
      betaling: {
        status: 'aanbetaling_gedaan',
        bedrag: 4100,
        betaald: 1000,
        openstaand: 3100,
        aanbetaling: 1000,
        resterend: 3100,
        laatsteBetaling: '2025-01-05'
      }
    },
    {
      id: 3,
      naam: 'Michael Chen',
      email: 'michael@example.com',
      status: 'bevestigd',
      betaling: {
        status: 'volledig_betaald',
        bedrag: 4100,
        betaald: 4100,
        openstaand: 0,
        aanbetaling: 1000,
        resterend: 0,
        laatsteBetaling: '2025-01-07'
      }
    },
    {
      id: 4,
      naam: 'Lisa Johnson',
      email: 'lisa@example.com',
      status: 'wachtlijst',
      betaling: {
        status: 'niet_betaald',
        bedrag: 4100,
        betaald: 0,
        openstaand: 4100,
        aanbetaling: 0,
        resterend: 4100,
        laatsteBetaling: null
      }
    },
    {
      id: 5,
      naam: 'Emma Thompson',
      email: 'emma@example.com',
      status: 'geannuleerd',
      betaling: {
        status: 'terugbetaald',
        bedrag: 4100,
        betaald: 0,
        openstaand: 0,
        aanbetaling: 1000,
        resterend: 0,
        laatsteBetaling: '2025-01-03'
      }
    }
  ]

  // Bereken financiële statistieken
  const stats = {
    totaalDeelnemers: deelnemers.filter(d => d.status !== 'geannuleerd').length,
    bevestigd: deelnemers.filter(d => d.status === 'bevestigd').length,
    wachtlijst: deelnemers.filter(d => d.status === 'wachtlijst').length,
    geannuleerd: deelnemers.filter(d => d.status === 'geannuleerd').length,
    vliegticketsGeboekt: deelnemers.filter(d => d.status === 'bevestigd').length,
    // Financiële stats
    totaleOmzet: deelnemers.reduce((acc, d) => acc + d.betaling.bedrag, 0),
    betaaldTotaal: deelnemers.reduce((acc, d) => acc + d.betaling.betaald, 0),
    openstaandTotaal: deelnemers.reduce((acc, d) => acc + d.betaling.openstaand, 0),
    volledigBetaald: deelnemers.filter(d => d.betaling.status === 'volledig_betaald').length,
    aanbetalingGedaan: deelnemers.filter(d => d.betaling.status === 'aanbetaling_gedaan').length,
    nietBetaald: deelnemers.filter(d => d.betaling.status === 'niet_betaald').length
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
                <h1 className="text-2xl font-bold text-text">Admin Dashboard</h1>
                <p className="text-text-muted">Beheer van Curacao Retraite 2025</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-text font-medium">Jonnhy de Vries</p>
                  <p className="text-text-muted text-sm">Retraite Begeleider</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">J</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 py-8">
          {/* Financiële Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Totale Omzet</p>
                  <p className="text-3xl font-bold text-green-400">€{stats.totaleOmzet.toLocaleString()}</p>
                  <p className="text-text-muted text-xs mt-1">€4.100 per deelnemer</p>
                </div>
                <Euro className="w-12 h-12 text-green-400" />
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Betaald Totaal</p>
                  <p className="text-3xl font-bold text-blue-400">€{stats.betaaldTotaal.toLocaleString()}</p>
                  <p className="text-text-muted text-xs mt-1">{Math.round((stats.betaaldTotaal / stats.totaleOmzet) * 100)}% van omzet</p>
                </div>
                <CreditCard className="w-12 h-12 text-blue-400" />
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Openstaand</p>
                  <p className="text-3xl font-bold text-red-400">€{stats.openstaandTotaal.toLocaleString()}</p>
                  <p className="text-text-muted text-xs mt-1">{stats.aanbetalingGedaan + stats.nietBetaald} deelnemers</p>
                </div>
                <AlertCircle className="w-12 h-12 text-red-400" />
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Volledig Betaald</p>
                  <p className="text-3xl font-bold text-green-400">{stats.volledigBetaald}</p>
                  <p className="text-text-muted text-xs mt-1">van {stats.bevestigd} bevestigde</p>
                </div>
                <CheckCircle className="w-12 h-12 text-green-400" />
              </div>
            </div>
          </div>

          {/* Deelnemer Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Bevestigde Deelnemers</p>
                  <p className="text-3xl font-bold text-text">{stats.bevestigd}</p>
                  <p className="text-text-muted text-xs mt-1">van {stats.totaalDeelnemers} totaal</p>
                </div>
                <Users className="w-12 h-12 text-primary-blue" />
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Wachtlijst</p>
                  <p className="text-3xl font-bold text-yellow-400">{stats.wachtlijst}</p>
                  <p className="text-text-muted text-xs mt-1">Wachten op plek</p>
                </div>
                <Clock className="w-12 h-12 text-yellow-400" />
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Vliegtickets</p>
                  <p className="text-3xl font-bold text-blue-400">{stats.vliegticketsGeboekt}</p>
                  <p className="text-text-muted text-xs mt-1">Geboekt voor retraite</p>
                </div>
                <Plane className="w-12 h-12 text-blue-400" />
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-effect rounded-2xl p-6">
              <h3 className="text-xl font-bold text-text mb-4">Recente Activiteiten</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-text font-medium">Maria Rodriguez heeft Module 2 voltooid</p>
                    <p className="text-text-muted text-sm">2 uur geleden</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <FileText className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-text font-medium">Nieuwe intake ingediend door Lisa Johnson</p>
                    <p className="text-text-muted text-sm">4 uur geleden</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <AlertCircle className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-text font-medium">Emma Thompson heeft retraite geannuleerd</p>
                    <p className="text-text-muted text-sm">1 dag geleden</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <CreditCard className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-text font-medium">Betaling ontvangen van Michael Chen</p>
                    <p className="text-text-muted text-sm">2 dagen geleden</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <h3 className="text-xl font-bold text-text mb-4">Voortgang Overzicht</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-text font-medium">Module 1: Zelfkennis</span>
                    <span className="text-text-muted text-sm">4/5 voltooid</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-primary-blue h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-text font-medium">Module 2: Emotionele Intelligentie</span>
                    <span className="text-text-muted text-sm">2/5 voltooid</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-primary-blue h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-text font-medium">Module 3: Mindfulness</span>
                    <span className="text-text-muted text-sm">1/5 voltooid</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-primary-blue h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-text font-medium">Module 4: Communicatie</span>
                    <span className="text-text-muted text-sm">0/5 voltooid</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-primary-blue h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Betalingsoverzicht */}
          <div className="glass-effect rounded-2xl p-6 mt-8">
            <h3 className="text-xl font-bold text-text mb-6">Betalingsoverzicht per Deelnemer</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-surface border-b border-gray-700">
                  <tr>
                    <th className="text-left p-4 text-text font-medium">Deelnemer</th>
                    <th className="text-left p-4 text-text font-medium">Status</th>
                    <th className="text-left p-4 text-text font-medium">Totaal Bedrag</th>
                    <th className="text-left p-4 text-text font-medium">Betaald</th>
                    <th className="text-left p-4 text-text font-medium">Openstaand</th>
                    <th className="text-left p-4 text-text font-medium">Laatste Betaling</th>
                    <th className="text-left p-4 text-text font-medium">Acties</th>
                  </tr>
                </thead>
                <tbody>
                  {deelnemers.filter(d => d.status !== 'geannuleerd').map((deelnemer) => (
                    <tr key={deelnemer.id} className="border-b border-gray-700 hover:bg-surface-light transition-colors">
                      <td className="p-4">
                        <div>
                          <p className="text-text font-medium">{deelnemer.naam}</p>
                          <p className="text-text-muted text-sm">{deelnemer.email}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          deelnemer.betaling.status === 'volledig_betaald' ? 'bg-green-500/20 text-green-400' :
                          deelnemer.betaling.status === 'aanbetaling_gedaan' ? 'bg-yellow-500/20 text-yellow-400' :
                          deelnemer.betaling.status === 'niet_betaald' ? 'bg-red-500/20 text-red-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {deelnemer.betaling.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="text-text font-medium">€{deelnemer.betaling.bedrag.toLocaleString()}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-green-400 font-medium">€{deelnemer.betaling.betaald.toLocaleString()}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-red-400 font-medium">€{deelnemer.betaling.openstaand.toLocaleString()}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-text-muted text-sm">
                          {deelnemer.betaling.laatsteBetaling || 'Nog niet betaald'}
                        </span>
                      </td>
                      <td className="p-4">
                        {deelnemer.betaling.openstaand > 0 && (
                          <button className="px-3 py-1 bg-primary-blue text-white rounded-lg hover:bg-primary-blue-dark transition-colors text-sm">
                            Herinnering Sturen
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Prijs Informatie */}
          <div className="glass-effect rounded-2xl p-6 mt-8">
            <h3 className="text-xl font-bold text-text mb-6">Retraite Prijs Informatie</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-text mb-4">Inbegrepen in de Prijs</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-text">7-daagse retraite op Curaçao</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-text">Verblijf in eigen appartement (Morena Resort)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-text">Alle maaltijden (ontbijt, lunch, diner)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-text">Professionele begeleiding door Jonnhy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-text">Alle activiteiten en excursies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-text">Vliegticket (indicatief €900)</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-text mb-4">Prijs Structuur</h4>
                <div className="bg-surface border border-gray-700 rounded-xl p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-text-muted">Retraite op Curaçao</span>
                      <span className="text-text font-medium">€4.300</span>
                    </div>
                    <div className="flex justify-between text-green-400">
                      <span>Earlybird korting (vóór 15 jan 2025)</span>
                      <span className="font-medium">-€200</span>
                    </div>
                    <div className="border-t border-gray-700 pt-3 flex justify-between">
                      <span className="text-text font-bold">Totaal per deelnemer</span>
                      <span className="text-primary-blue font-bold text-lg">€4.100</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                  <p className="text-yellow-400 text-sm">
                    <strong>Betaling:</strong> Aanbetaling van €1.000 bij boeking, resterend bedrag uiterlijk 30 dagen voor vertrek.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}