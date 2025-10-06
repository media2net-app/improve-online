'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { 
  Users, 
  UserCheck, 
  UserX, 
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react'

export default function DeelnemersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  // Mock data voor deelnemers
  const deelnemers = [
    {
      id: 1,
      naam: 'Maria Rodriguez',
      email: 'maria@example.com',
      telefoon: '+31 6 12345678',
      status: 'bevestigd',
      intakeVoltooid: true,
      betaald: true,
      voortgang: {
        modulesVoltooid: 2,
        totaleModules: 4,
        laatsteActiviteit: '2025-01-08'
      },
      specialeBehoeften: [],
      notities: 'Zeer gemotiveerd, stelt veel vragen'
    },
    {
      id: 2,
      naam: 'Sarah van der Berg',
      email: 'sarah@example.com',
      telefoon: '+31 6 87654321',
      status: 'bevestigd',
      intakeVoltooid: true,
      betaald: true,
      voortgang: {
        modulesVoltooid: 1,
        totaleModules: 4,
        laatsteActiviteit: '2025-01-07'
      },
      specialeBehoeften: ['Vegetarisch'],
      notities: 'Heeft vragen over accommodatie'
    },
    {
      id: 3,
      naam: 'Lisa Johnson',
      email: 'lisa@example.com',
      telefoon: '+31 6 11223344',
      status: 'wachtlijst',
      intakeVoltooid: false,
      betaald: false,
      voortgang: {
        modulesVoltooid: 0,
        totaleModules: 4,
        laatsteActiviteit: null
      },
      specialeBehoeften: [],
      notities: 'Wacht op plek door annulering'
    },
    {
      id: 4,
      naam: 'Michael Chen',
      email: 'michael@example.com',
      telefoon: '+31 6 55667788',
      status: 'bevestigd',
      intakeVoltooid: true,
      betaald: true,
      voortgang: {
        modulesVoltooid: 3,
        totaleModules: 4,
        laatsteActiviteit: '2025-01-09'
      },
      specialeBehoeften: ['Glutenvrij'],
      notities: 'Zeer actief in groepsdiscussies'
    },
    {
      id: 5,
      naam: 'Emma Thompson',
      email: 'emma@example.com',
      telefoon: '+31 6 99887766',
      status: 'geannuleerd',
      intakeVollooid: true,
      betaald: false,
      voortgang: {
        modulesVoltooid: 1,
        totaleModules: 4,
        laatsteActiviteit: '2025-01-05'
      },
      specialeBehoeften: [],
      notities: 'Geannuleerd wegens persoonlijke omstandigheden'
    }
  ]

  const filteredDeelnemers = deelnemers.filter(deelnemer => {
    const matchesSearch = deelnemer.naam.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         deelnemer.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || deelnemer.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'bevestigd': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'wachtlijst': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'geannuleerd': return 'bg-red-500/20 text-red-400 border-red-500/30'
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
              <div>
                <h1 className="text-2xl font-bold text-text">Deelnemers Beheer</h1>
                <p className="text-text-muted">Beheer alle retraite deelnemers</p>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-primary-blue text-white rounded-xl hover:bg-primary-blue-dark transition-colors">
                <Plus className="w-4 h-4" />
                <span>Nieuwe Deelnemer</span>
              </button>
            </div>
          </div>
        </header>

        <div className="px-6 py-8">
          {/* Filters */}
          <div className="glass-effect rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Zoek deelnemers..."
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
                  <option value="bevestigd">Bevestigd</option>
                  <option value="wachtlijst">Wachtlijst</option>
                  <option value="geannuleerd">Geannuleerd</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-text-muted text-sm">{filteredDeelnemers.length} deelnemers</span>
              </div>
            </div>
          </div>

          {/* Deelnemers Table */}
          <div className="glass-effect rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-surface border-b border-gray-700">
                  <tr>
                    <th className="text-left p-4 text-text font-medium">Deelnemer</th>
                    <th className="text-left p-4 text-text font-medium">Status</th>
                    <th className="text-left p-4 text-text font-medium">Intake</th>
                    <th className="text-left p-4 text-text font-medium">Betaling</th>
                    <th className="text-left p-4 text-text font-medium">Voortgang</th>
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
                          <p className="text-text-muted text-sm">{deelnemer.telefoon}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(deelnemer.status)}`}>
                          {deelnemer.status}
                        </span>
                      </td>
                      <td className="p-4">
                        {deelnemer.intakeVoltooid ? (
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-green-400 text-sm">Voltooid</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm">In behandeling</span>
                          </div>
                        )}
                      </td>
                      <td className="p-4">
                        {deelnemer.betaald ? (
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-green-400 text-sm">Betaald</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <AlertCircle className="w-4 h-4 text-red-400" />
                            <span className="text-red-400 text-sm">Openstaand</span>
                          </div>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-text text-sm">
                            {deelnemer.voortgang.modulesVoltooid}/{deelnemer.voortgang.totaleModules}
                          </span>
                          <div className="w-16 bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-primary-blue h-2 rounded-full"
                              style={{ width: `${(deelnemer.voortgang.modulesVoltooid / deelnemer.voortgang.totaleModules) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-primary-blue hover:bg-primary-blue/20 rounded-lg transition-colors" title="Bekijken">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-yellow-400 hover:bg-yellow-400/20 rounded-lg transition-colors" title="Bewerken">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-red-400 hover:bg-red-400/20 rounded-lg transition-colors" title="Verwijderen">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
