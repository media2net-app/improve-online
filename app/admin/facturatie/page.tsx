'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { 
  FileText, 
  Plus, 
  Search, 
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  Send,
  CheckCircle,
  Clock,
  AlertCircle,
  Euro,
  Calendar,
  User,
  Mail,
  Phone,
  MapPin,
  Building
} from 'lucide-react'

export default function FacturatiePage() {
  const [activeTab, setActiveTab] = useState('overzicht')
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [selectedDeelnemer, setSelectedDeelnemer] = useState('')

  // Mock data voor deelnemers
  const deelnemers = [
    {
      id: 1,
      naam: 'Maria Rodriguez',
      email: 'maria@example.com',
      telefoon: '+31 6 12345678',
      adres: 'Hoofdstraat 123, 1012 AB Amsterdam',
      kvk: '12345678',
      btw: 'NL123456789B01'
    },
    {
      id: 2,
      naam: 'Sarah van der Berg',
      email: 'sarah@example.com',
      telefoon: '+31 6 87654321',
      adres: 'Keizersgracht 456, 1017 EG Amsterdam',
      kvk: '87654321',
      btw: 'NL876543210B01'
    },
    {
      id: 3,
      naam: 'Michael Chen',
      email: 'michael@example.com',
      telefoon: '+31 6 11223344',
      adres: 'Prinsengracht 789, 1015 DS Amsterdam',
      kvk: '11223344',
      btw: 'NL112233440B01'
    },
    {
      id: 4,
      naam: 'Lisa Johnson',
      email: 'lisa@example.com',
      telefoon: '+31 6 55667788',
      adres: 'Herengracht 321, 1017 BX Amsterdam',
      kvk: '55667788',
      btw: 'NL556677880B01'
    }
  ]

  // Mock data voor facturen
  const facturen = [
    {
      id: 'FAC-2025-001',
      deelnemerId: 1,
      deelnemerNaam: 'Maria Rodriguez',
      deelnemerEmail: 'maria@example.com',
      datum: '2025-01-08',
      vervaldatum: '2025-02-07',
      status: 'betaald',
      bedrag: 4100,
      betaaldBedrag: 4100,
      openstaandBedrag: 0,
      items: [
        { omschrijving: 'Curacao Retraite 2025 - Volledig pakket', aantal: 1, prijs: 4100, totaal: 4100 }
      ],
      btwPercentage: 21,
      btwBedrag: 861,
      subtotaal: 3239
    },
    {
      id: 'FAC-2025-002',
      deelnemerId: 2,
      deelnemerNaam: 'Sarah van der Berg',
      deelnemerEmail: 'sarah@example.com',
      datum: '2025-01-05',
      vervaldatum: '2025-02-04',
      status: 'openstaand',
      bedrag: 4100,
      betaaldBedrag: 1000,
      openstaandBedrag: 3100,
      items: [
        { omschrijving: 'Curacao Retraite 2025 - Volledig pakket', aantal: 1, prijs: 4100, totaal: 4100 }
      ],
      btwPercentage: 21,
      btwBedrag: 861,
      subtotaal: 3239
    },
    {
      id: 'FAC-2025-003',
      deelnemerId: 3,
      deelnemerNaam: 'Michael Chen',
      deelnemerEmail: 'michael@example.com',
      datum: '2025-01-07',
      vervaldatum: '2025-02-06',
      status: 'betaald',
      bedrag: 4100,
      betaaldBedrag: 4100,
      openstaandBedrag: 0,
      items: [
        { omschrijving: 'Curacao Retraite 2025 - Volledig pakket', aantal: 1, prijs: 4100, totaal: 4100 }
      ],
      btwPercentage: 21,
      btwBedrag: 861,
      subtotaal: 3239
    },
    {
      id: 'FAC-2025-004',
      deelnemerId: 4,
      deelnemerNaam: 'Lisa Johnson',
      deelnemerEmail: 'lisa@example.com',
      datum: '2025-01-10',
      vervaldatum: '2025-02-09',
      status: 'openstaand',
      bedrag: 4100,
      betaaldBedrag: 0,
      openstaandBedrag: 4100,
      items: [
        { omschrijving: 'Curacao Retraite 2025 - Volledig pakket', aantal: 1, prijs: 4100, totaal: 4100 }
      ],
      btwPercentage: 21,
      btwBedrag: 861,
      subtotaal: 3239
    }
  ]

  const filteredFacturen = facturen.filter(factuur => {
    const matchesSearch = factuur.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         factuur.deelnemerNaam.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         factuur.deelnemerEmail.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || factuur.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const stats = {
    totaal: facturen.length,
    betaald: facturen.filter(f => f.status === 'betaald').length,
    openstaand: facturen.filter(f => f.status === 'openstaand').length,
    totaalBedrag: facturen.reduce((acc, f) => acc + f.bedrag, 0),
    betaaldBedrag: facturen.reduce((acc, f) => acc + f.betaaldBedrag, 0),
    openstaandBedrag: facturen.reduce((acc, f) => acc + f.openstaandBedrag, 0)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'betaald': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'openstaand': return 'bg-red-500/20 text-red-400 border-red-500/30'
      case 'verlopen': return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const tabs = [
    { id: 'overzicht', label: 'Factuur Overzicht', icon: FileText },
    { id: 'nieuw', label: 'Nieuwe Factuur', icon: Plus }
  ]

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
                <h1 className="text-2xl font-bold text-text">Facturatie Beheer</h1>
                <p className="text-text-muted">Beheer alle facturen en betalingen</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-primary-blue text-white rounded-xl hover:bg-primary-blue-dark transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Export Facturen</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 py-8">
          {/* Tabs */}
          <div className="flex space-x-2 mb-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.id 
                      ? 'bg-primary-blue text-white' 
                      : 'bg-surface text-text-muted hover:text-text hover:bg-surface-light border border-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Totaal Facturen</p>
                  <p className="text-3xl font-bold text-text">{stats.totaal}</p>
                </div>
                <FileText className="w-12 h-12 text-primary-blue" />
              </div>
            </div>
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Betaald</p>
                  <p className="text-3xl font-bold text-green-400">{stats.betaald}</p>
                  <p className="text-text-muted text-xs mt-1">€{stats.betaaldBedrag.toLocaleString()}</p>
                </div>
                <CheckCircle className="w-12 h-12 text-green-400" />
              </div>
            </div>
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Openstaand</p>
                  <p className="text-3xl font-bold text-red-400">{stats.openstaand}</p>
                  <p className="text-text-muted text-xs mt-1">€{stats.openstaandBedrag.toLocaleString()}</p>
                </div>
                <AlertCircle className="w-12 h-12 text-red-400" />
              </div>
            </div>
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Totale Omzet</p>
                  <p className="text-3xl font-bold text-blue-400">€{stats.totaalBedrag.toLocaleString()}</p>
                </div>
                <Euro className="w-12 h-12 text-blue-400" />
              </div>
            </div>
          </div>

          {/* Overzicht Tab */}
          {activeTab === 'overzicht' && (
            <div className="space-y-6">
              {/* Filters */}
              <div className="glass-effect rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Zoek facturen..."
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
                      <option value="betaald">Betaald</option>
                      <option value="openstaand">Openstaand</option>
                      <option value="verlopen">Verlopen</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-text-muted text-sm">{filteredFacturen.length} facturen</span>
                  </div>
                </div>
              </div>

              {/* Facturen Table */}
              <div className="glass-effect rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-gray-700">
                  <h3 className="text-xl font-bold text-text">Factuur Overzicht</h3>
                  <p className="text-text-muted text-sm mt-1">Alle gegenereerde facturen</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-surface border-b border-gray-700">
                      <tr>
                        <th className="text-left p-4 text-text font-medium">Factuur</th>
                        <th className="text-left p-4 text-text font-medium">Deelnemer</th>
                        <th className="text-left p-4 text-text font-medium">Datum</th>
                        <th className="text-left p-4 text-text font-medium">Bedrag</th>
                        <th className="text-left p-4 text-text font-medium">Status</th>
                        <th className="text-left p-4 text-text font-medium">Acties</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredFacturen.map((factuur) => (
                        <tr key={factuur.id} className="border-b border-gray-700 hover:bg-surface-light transition-colors">
                          <td className="p-4">
                            <div>
                              <p className="text-text font-medium">{factuur.id}</p>
                              <p className="text-text-muted text-sm">Vervaldatum: {factuur.vervaldatum}</p>
                            </div>
                          </td>
                          <td className="p-4">
                            <div>
                              <p className="text-text font-medium">{factuur.deelnemerNaam}</p>
                              <p className="text-text-muted text-sm">{factuur.deelnemerEmail}</p>
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="text-text">{factuur.datum}</span>
                          </td>
                          <td className="p-4">
                            <div>
                              <p className="text-text font-medium">€{factuur.bedrag.toLocaleString()}</p>
                              {factuur.openstaandBedrag > 0 && (
                                <p className="text-red-400 text-sm">Openstaand: €{factuur.openstaandBedrag.toLocaleString()}</p>
                              )}
                            </div>
                          </td>
                          <td className="p-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(factuur.status)}`}>
                              {factuur.status}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center space-x-2">
                              <button className="p-2 text-primary-blue hover:bg-primary-blue/20 rounded-lg transition-colors" title="Bekijken">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-green-400 hover:bg-green-400/20 rounded-lg transition-colors" title="Downloaden">
                                <Download className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-yellow-400 hover:bg-yellow-400/20 rounded-lg transition-colors" title="Verzenden">
                                <Send className="w-4 h-4" />
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
          )}

          {/* Nieuwe Factuur Tab */}
          {activeTab === 'nieuw' && (
            <div className="space-y-6">
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold text-text mb-6">Nieuwe Factuur Maken</h3>
                
                {/* Deelnemer Selectie */}
                <div className="mb-6">
                  <label className="block text-text font-medium mb-3">Selecteer Deelnemer</label>
                  <select
                    value={selectedDeelnemer}
                    onChange={(e) => setSelectedDeelnemer(e.target.value)}
                    className="w-full px-4 py-3 bg-surface border border-gray-700 rounded-xl text-text focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/50 transition-colors"
                  >
                    <option value="">-- Selecteer een deelnemer --</option>
                    {deelnemers.map((deelnemer) => (
                      <option key={deelnemer.id} value={deelnemer.id}>
                        {deelnemer.naam} - {deelnemer.email}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedDeelnemer && (
                  <div className="space-y-6">
                    {/* Geselecteerde Deelnemer Info */}
                    {(() => {
                      const deelnemer = deelnemers.find(d => d.id.toString() === selectedDeelnemer)
                      if (!deelnemer) return null
                      
                      return (
                        <div className="bg-surface border border-gray-700 rounded-xl p-6">
                          <h4 className="text-lg font-bold text-text mb-4">Factuurgegevens</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h5 className="text-text font-medium mb-3">Deelnemer Informatie</h5>
                              <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                  <User className="w-4 h-4 text-text-muted" />
                                  <span className="text-text">{deelnemer.naam}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Mail className="w-4 h-4 text-text-muted" />
                                  <span className="text-text-muted">{deelnemer.email}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Phone className="w-4 h-4 text-text-muted" />
                                  <span className="text-text-muted">{deelnemer.telefoon}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <MapPin className="w-4 h-4 text-text-muted" />
                                  <span className="text-text-muted">{deelnemer.adres}</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h5 className="text-text font-medium mb-3">Bedrijfsgegevens</h5>
                              <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                  <Building className="w-4 h-4 text-text-muted" />
                                  <span className="text-text-muted">KVK: {deelnemer.kvk}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Building className="w-4 h-4 text-text-muted" />
                                  <span className="text-text-muted">BTW: {deelnemer.btw}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })()}

                    {/* Factuur Items */}
                    <div className="bg-surface border border-gray-700 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-text mb-4">Factuur Items</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-surface border-b border-gray-700">
                            <tr>
                              <th className="text-left p-3 text-text font-medium">Omschrijving</th>
                              <th className="text-left p-3 text-text font-medium">Aantal</th>
                              <th className="text-left p-3 text-text font-medium">Prijs</th>
                              <th className="text-left p-3 text-text font-medium">Totaal</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-gray-700">
                              <td className="p-3">
                                <input
                                  type="text"
                                  defaultValue="Curacao Retraite 2025 - Volledig pakket"
                                  className="w-full px-3 py-2 bg-surface border border-gray-700 rounded-lg text-text focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/50 transition-colors"
                                />
                              </td>
                              <td className="p-3">
                                <input
                                  type="number"
                                  defaultValue="1"
                                  className="w-20 px-3 py-2 bg-surface border border-gray-700 rounded-lg text-text focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/50 transition-colors"
                                />
                              </td>
                              <td className="p-3">
                                <input
                                  type="number"
                                  defaultValue="4100"
                                  className="w-24 px-3 py-2 bg-surface border border-gray-700 rounded-lg text-text focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/50 transition-colors"
                                />
                              </td>
                              <td className="p-3">
                                <span className="text-text font-medium">€4.100</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <button className="px-4 py-2 bg-primary-blue text-white rounded-lg hover:bg-primary-blue-dark transition-colors">
                          <Plus className="w-4 h-4 mr-2 inline" />
                          Item Toevoegen
                        </button>
                      </div>
                    </div>

                    {/* Factuur Samenvatting */}
                    <div className="bg-surface border border-gray-700 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-text mb-4">Factuur Samenvatting</h4>
                      <div className="max-w-md ml-auto">
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-text-muted">Subtotaal</span>
                            <span className="text-text font-medium">€3.239</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-text-muted">BTW (21%)</span>
                            <span className="text-text font-medium">€861</span>
                          </div>
                          <div className="border-t border-gray-700 pt-3 flex justify-between">
                            <span className="text-text font-bold">Totaal</span>
                            <span className="text-primary-blue font-bold text-lg">€4.100</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actie Knoppen */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded border-gray-700" />
                          <span className="text-text text-sm">Factuur per email verzenden</span>
                        </label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button className="px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors">
                          Voorbeeld
                        </button>
                        <button className="px-6 py-3 bg-primary-blue text-white rounded-xl hover:bg-primary-blue-dark transition-colors">
                          Factuur Maken
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
