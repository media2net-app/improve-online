'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { 
  Plane, 
  CheckCircle, 
  AlertCircle, 
  Clock,
  Eye,
  Edit,
  Search,
  Filter
} from 'lucide-react'

export default function VliegticketsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  // Mock data voor deelnemers met vliegticket info
  const deelnemers = [
    {
      id: 1,
      naam: 'Maria Rodriguez',
      email: 'maria@example.com',
      vliegticket: {
        status: 'geboekt',
        vlucht: 'KL 737',
        datum: '2025-03-15',
        tijd: '14:30',
        van: 'AMS',
        naar: 'CUR',
        seat: '12A',
        terminal: '2'
      }
    },
    {
      id: 2,
      naam: 'Sarah van der Berg',
      email: 'sarah@example.com',
      vliegticket: {
        status: 'geboekt',
        vlucht: 'KL 737',
        datum: '2025-03-15',
        tijd: '14:30',
        van: 'AMS',
        naar: 'CUR',
        seat: '12B',
        terminal: '2'
      }
    },
    {
      id: 3,
      naam: 'Lisa Johnson',
      email: 'lisa@example.com',
      vliegticket: {
        status: 'niet_geboekt',
        vlucht: null,
        datum: null,
        tijd: null,
        van: null,
        naar: null,
        seat: null,
        terminal: null
      }
    },
    {
      id: 4,
      naam: 'Michael Chen',
      email: 'michael@example.com',
      vliegticket: {
        status: 'geboekt',
        vlucht: 'KL 737',
        datum: '2025-03-15',
        tijd: '14:30',
        van: 'AMS',
        naar: 'CUR',
        seat: '12C',
        terminal: '2'
      }
    },
    {
      id: 5,
      naam: 'Emma Thompson',
      email: 'emma@example.com',
      vliegticket: {
        status: 'geannuleerd',
        vlucht: 'KL 737',
        datum: '2025-03-15',
        tijd: '14:30',
        van: 'AMS',
        naar: 'CUR',
        seat: '12D',
        terminal: '2'
      }
    }
  ]

  const filteredDeelnemers = deelnemers.filter(deelnemer => 
    deelnemer.naam.toLowerCase().includes(searchTerm.toLowerCase()) ||
    deelnemer.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const stats = {
    geboekt: deelnemers.filter(d => d.vliegticket.status === 'geboekt').length,
    nietGeboekt: deelnemers.filter(d => d.vliegticket.status === 'niet_geboekt').length,
    geannuleerd: deelnemers.filter(d => d.vliegticket.status === 'geannuleerd').length
  }

  const getVliegticketStatusColor = (status: string) => {
    switch (status) {
      case 'geboekt': return 'bg-green-500/20 text-green-400'
      case 'niet_geboekt': return 'bg-red-500/20 text-red-400'
      case 'geannuleerd': return 'bg-gray-500/20 text-gray-400'
      default: return 'bg-gray-500/20 text-gray-400'
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
              <div>
                <h1 className="text-2xl font-bold text-text">Vliegtickets Beheer</h1>
                <p className="text-text-muted">Beheer alle vliegtickets voor Curacao Retraite 2025</p>
              </div>
              <div className="text-right">
                <p className="text-text font-medium">Vlucht KL 737</p>
                <p className="text-text-muted text-sm">15 maart 2025, 14:30</p>
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 py-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Geboekt</p>
                  <p className="text-3xl font-bold text-green-400">{stats.geboekt}</p>
                </div>
                <CheckCircle className="w-12 h-12 text-green-400" />
              </div>
            </div>
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Niet Geboekt</p>
                  <p className="text-3xl font-bold text-red-400">{stats.nietGeboekt}</p>
                </div>
                <AlertCircle className="w-12 h-12 text-red-400" />
              </div>
            </div>
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Geannuleerd</p>
                  <p className="text-3xl font-bold text-gray-400">{stats.geannuleerd}</p>
                </div>
                <Clock className="w-12 h-12 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="glass-effect rounded-2xl p-6 mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4" />
                <input
                  type="text"
                  placeholder="Zoek deelnemers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-surface border border-gray-700 rounded-xl text-text placeholder-text-muted focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/50 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Vliegtickets Table */}
          <div className="glass-effect rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-gray-700">
              <h3 className="text-xl font-bold text-text">Vliegticket Overzicht</h3>
              <p className="text-text-muted text-sm mt-1">Vlucht KL 737 - 15 maart 2025, 14:30</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-surface border-b border-gray-700">
                  <tr>
                    <th className="text-left p-4 text-text font-medium">Deelnemer</th>
                    <th className="text-left p-4 text-text font-medium">Status</th>
                    <th className="text-left p-4 text-text font-medium">Vlucht Details</th>
                    <th className="text-left p-4 text-text font-medium">Seat</th>
                    <th className="text-left p-4 text-text font-medium">Terminal</th>
                    <th className="text-left p-4 text-text font-medium">Acties</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDeelnemers.map((deelnemer) => (
                    <tr key={deelnemer.id} className="border-b border-gray-700 hover:bg-surface-light transition-colors">
                      <td className="p-4">
                        <div>
                          <p className="text-text font-medium">{deelnemer.naam}</p>
                          <p className="text-text-muted text-sm">{deelnemer.email}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getVliegticketStatusColor(deelnemer.vliegticket.status)}`}>
                          {deelnemer.vliegticket.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="p-4">
                        {deelnemer.vliegticket.vlucht ? (
                          <div>
                            <p className="text-text font-medium">{deelnemer.vliegticket.vlucht}</p>
                            <p className="text-text-muted text-sm">{deelnemer.vliegticket.van} → {deelnemer.vliegticket.naar}</p>
                            <p className="text-text-muted text-sm">{deelnemer.vliegticket.datum} {deelnemer.vliegticket.tijd}</p>
                          </div>
                        ) : (
                          <span className="text-text-muted">-</span>
                        )}
                      </td>
                      <td className="p-4">
                        <span className="text-text font-medium">{deelnemer.vliegticket.seat || '-'}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-text font-medium">{deelnemer.vliegticket.terminal || '-'}</span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          {deelnemer.vliegticket.status === 'niet_geboekt' && (
                            <button className="px-3 py-1 bg-primary-blue text-white rounded-lg hover:bg-primary-blue-dark transition-colors text-sm">
                              Boeken
                            </button>
                          )}
                          <button className="p-2 text-primary-blue hover:bg-primary-blue/20 rounded-lg transition-colors" title="Bekijken">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-yellow-400 hover:bg-yellow-400/20 rounded-lg transition-colors" title="Bewerken">
                            <Edit className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Flight Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <div className="glass-effect rounded-2xl p-6">
              <h3 className="text-xl font-bold text-text mb-4">Vlucht Informatie</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-text-muted">Vluchtnummer</span>
                  <span className="text-text font-medium">KL 737</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Datum</span>
                  <span className="text-text font-medium">15 maart 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Vertrektijd</span>
                  <span className="text-text font-medium">14:30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Route</span>
                  <span className="text-text font-medium">AMS → CUR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Terminal</span>
                  <span className="text-text font-medium">Terminal 2</span>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <h3 className="text-xl font-bold text-text mb-4">Terugvlucht</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-text-muted">Vluchtnummer</span>
                  <span className="text-text font-medium">KL 738</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Datum</span>
                  <span className="text-text font-medium">22 maart 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Vertrektijd</span>
                  <span className="text-text font-medium">18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Route</span>
                  <span className="text-text font-medium">CUR → AMS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Aankomst</span>
                  <span className="text-text font-medium">23 maart 12:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
