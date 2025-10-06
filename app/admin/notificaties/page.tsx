'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { 
  Bell, 
  Users, 
  FileText, 
  AlertCircle, 
  CheckCircle, 
  Clock,
  Send,
  Trash2,
  Filter,
  Search,
  Eye,
  Mail
} from 'lucide-react'

export default function AdminNotificatiesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')

  // Mock data voor admin notificaties
  const notificaties = [
    {
      id: 1,
      type: 'intake',
      titel: 'Nieuwe intake ingediend',
      bericht: 'Lisa Johnson heeft een nieuwe intake ingediend en wacht op beoordeling.',
      deelnemer: 'Lisa Johnson',
      datum: '2025-01-08',
      tijd: '14:30',
      status: 'ongelezen',
      urgentie: 'medium'
    },
    {
      id: 2,
      type: 'voortgang',
      titel: 'Module voltooid',
      bericht: 'Maria Rodriguez heeft Module 2 volledig voltooid met een score van 9.2.',
      deelnemer: 'Maria Rodriguez',
      datum: '2025-01-08',
      tijd: '12:15',
      status: 'gelezen',
      urgentie: 'low'
    },
    {
      id: 3,
      type: 'betaling',
      titel: 'Betaling ontvangen',
      bericht: 'Betaling van €2.500 ontvangen van Michael Chen voor de retraite.',
      deelnemer: 'Michael Chen',
      datum: '2025-01-07',
      tijd: '16:45',
      status: 'gelezen',
      urgentie: 'high'
    },
    {
      id: 4,
      type: 'annulering',
      titel: 'Retraite geannuleerd',
      bericht: 'Emma Thompson heeft haar deelname aan de retraite geannuleerd wegens persoonlijke omstandigheden.',
      deelnemer: 'Emma Thompson',
      datum: '2025-01-05',
      tijd: '09:20',
      status: 'gelezen',
      urgentie: 'high'
    },
    {
      id: 5,
      type: 'systeem',
      titel: 'Systeem update beschikbaar',
      bericht: 'Er is een nieuwe versie van het retraite platform beschikbaar met verbeterde functionaliteiten.',
      deelnemer: null,
      datum: '2025-01-04',
      tijd: '08:00',
      status: 'ongelezen',
      urgentie: 'low'
    },
    {
      id: 6,
      type: 'logistiek',
      titel: 'Vliegticket geboekt',
      bericht: 'Vliegticket voor Sarah van der Berg is succesvol geboekt voor vlucht KL 737.',
      deelnemer: 'Sarah van der Berg',
      datum: '2025-01-03',
      tijd: '11:30',
      status: 'gelezen',
      urgentie: 'medium'
    }
  ]

  const filteredNotificaties = notificaties.filter(notificatie => {
    const matchesSearch = notificatie.titel.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notificatie.bericht.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (notificatie.deelnemer && notificatie.deelnemer.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesType = filterType === 'all' || notificatie.type === filterType
    const matchesStatus = filterStatus === 'all' || notificatie.status === filterStatus
    return matchesSearch && matchesType && matchesStatus
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'intake': return <FileText className="w-5 h-5" />
      case 'voortgang': return <Users className="w-5 h-5" />
      case 'betaling': return <CheckCircle className="w-5 h-5" />
      case 'annulering': return <AlertCircle className="w-5 h-5" />
      case 'systeem': return <Bell className="w-5 h-5" />
      case 'logistiek': return <Mail className="w-5 h-5" />
      default: return <Bell className="w-5 h-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'intake': return 'text-blue-400 bg-blue-500/20'
      case 'voortgang': return 'text-green-400 bg-green-500/20'
      case 'betaling': return 'text-green-400 bg-green-500/20'
      case 'annulering': return 'text-red-400 bg-red-500/20'
      case 'systeem': return 'text-purple-400 bg-purple-500/20'
      case 'logistiek': return 'text-orange-400 bg-orange-500/20'
      default: return 'text-gray-400 bg-gray-500/20'
    }
  }

  const getUrgentieColor = (urgentie: string) => {
    switch (urgentie) {
      case 'high': return 'border-l-red-500'
      case 'medium': return 'border-l-yellow-500'
      case 'low': return 'border-l-green-500'
      default: return 'border-l-gray-500'
    }
  }

  const stats = {
    totaal: notificaties.length,
    ongelezen: notificaties.filter(n => n.status === 'ongelezen').length,
    urgent: notificaties.filter(n => n.urgentie === 'high').length,
    vandaag: notificaties.filter(n => n.datum === '2025-01-08').length
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
                <h1 className="text-2xl font-bold text-text">Admin Notificaties</h1>
                <p className="text-text-muted">Beheer alle systeem en deelnemer notificaties</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-primary-blue text-white rounded-xl hover:bg-primary-blue-dark transition-colors">
                  <Send className="w-4 h-4" />
                  <span>Nieuwe Notificatie</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>Bulk Email</span>
                </button>
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
                <Bell className="w-12 h-12 text-primary-blue" />
              </div>
            </div>
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Ongelezen</p>
                  <p className="text-3xl font-bold text-red-400">{stats.ongelezen}</p>
                </div>
                <AlertCircle className="w-12 h-12 text-red-400" />
              </div>
            </div>
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Urgent</p>
                  <p className="text-3xl font-bold text-orange-400">{stats.urgent}</p>
                </div>
                <Clock className="w-12 h-12 text-orange-400" />
              </div>
            </div>
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Vandaag</p>
                  <p className="text-3xl font-bold text-green-400">{stats.vandaag}</p>
                </div>
                <CheckCircle className="w-12 h-12 text-green-400" />
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
                    placeholder="Zoek notificaties..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-surface border border-gray-700 rounded-xl text-text placeholder-text-muted focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/50 transition-colors"
                  />
                </div>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-4 py-2 bg-surface border border-gray-700 rounded-xl text-text focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/50 transition-colors"
                >
                  <option value="all">Alle types</option>
                  <option value="intake">Intakes</option>
                  <option value="voortgang">Voortgang</option>
                  <option value="betaling">Betalingen</option>
                  <option value="annulering">Annuleringen</option>
                  <option value="logistiek">Logistiek</option>
                  <option value="systeem">Systeem</option>
                </select>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 bg-surface border border-gray-700 rounded-xl text-text focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/50 transition-colors"
                >
                  <option value="all">Alle statussen</option>
                  <option value="ongelezen">Ongelezen</option>
                  <option value="gelezen">Gelezen</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-text-muted text-sm">{filteredNotificaties.length} notificaties</span>
              </div>
            </div>
          </div>

          {/* Notificaties List */}
          <div className="glass-effect rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-gray-700">
              <h3 className="text-xl font-bold text-text">Notificatie Overzicht</h3>
              <p className="text-text-muted text-sm mt-1">Alle systeem en deelnemer gerelateerde notificaties</p>
            </div>
            <div className="divide-y divide-gray-700">
              {filteredNotificaties.map((notificatie) => (
                <div key={notificatie.id} className={`p-6 hover:bg-surface-light transition-colors border-l-4 ${getUrgentieColor(notificatie.urgentie)}`}>
                  <div className="flex items-start space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getTypeColor(notificatie.type)}`}>
                      {getTypeIcon(notificatie.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-text font-bold text-lg">{notificatie.titel}</h4>
                        <div className="flex items-center space-x-2">
                          {notificatie.status === 'ongelezen' && (
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          )}
                          <span className="text-text-muted text-sm">{notificatie.datum} {notificatie.tijd}</span>
                        </div>
                      </div>
                      <p className="text-text-muted mb-3">{notificatie.bericht}</p>
                      {notificatie.deelnemer && (
                        <div className="flex items-center space-x-2 mb-3">
                          <Users className="w-4 h-4 text-text-muted" />
                          <span className="text-text-muted text-sm">Deelnemer: {notificatie.deelnemer}</span>
                        </div>
                      )}
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(notificatie.type)}`}>
                          {notificatie.type}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          notificatie.urgentie === 'high' ? 'bg-red-500/20 text-red-400' :
                          notificatie.urgentie === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {notificatie.urgentie} urgentie
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-primary-blue hover:bg-primary-blue/20 rounded-lg transition-colors" title="Bekijken">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-400 hover:bg-red-400/20 rounded-lg transition-colors" title="Verwijderen">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
