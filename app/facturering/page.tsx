'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { 
  Search,
  Filter,
  Plus,
  FileText,
  Download,
  Send,
  Edit,
  Trash2,
  Eye,
  Copy,
  CheckCircle,
  Clock,
  AlertCircle,
  DollarSign,
  Calendar,
  User,
  Building,
  Phone,
  Mail,
  MoreVertical,
  TrendingUp,
  Target,
  Star,
  ArrowRight,
  CreditCard,
  Banknote,
  Receipt,
  PieChart,
  X,
  Save
} from 'lucide-react'

export default function Facturering() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [sortBy, setSortBy] = useState('date')
  const [showAddModal, setShowAddModal] = useState(false)
  const [showViewModal, setShowViewModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedFactuur, setSelectedFactuur] = useState(null)

  // Demo facturen data
  const facturen = [
    {
      id: 1,
      nummer: 'FAC-2024-001',
      klant: 'Sarah van der Berg',
      bedrijf: 'TechStart BV',
      titel: 'Virtual Assistant Services - Januari 2024',
      bedrag: 2500,
      btw: 525,
      totaal: 3025,
      status: 'betaald',
      vervaldatum: '2024-02-15',
      aangemaakt: '2024-01-15',
      betaaldatum: '2024-01-20',
      betaalmethode: 'Bankoverschrijving',
      beschrijving: 'Maandelijkse VA services inclusief email management en project ondersteuning',
      items: [
        { naam: 'Email Management (20 uur)', aantal: 20, prijs: 50, totaal: 1000 },
        { naam: 'Kalender Beheer (15 uur)', aantal: 15, prijs: 45, totaal: 675 },
        { naam: 'Project Ondersteuning (10 uur)', aantal: 10, prijs: 60, totaal: 600 },
        { naam: 'Administratieve taken (5 uur)', aantal: 5, prijs: 45, totaal: 225 }
      ],
      opmerkingen: 'Bedankt voor uw vertrouwen!'
    },
    {
      id: 2,
      nummer: 'FAC-2024-002',
      klant: 'Mark Janssen',
      bedrijf: 'Marketing Pro',
      titel: 'Email Marketing Setup & Training',
      bedrag: 1200,
      btw: 252,
      totaal: 1452,
      status: 'betaald',
      vervaldatum: '2024-02-10',
      aangemaakt: '2024-01-12',
      betaaldatum: '2024-01-18',
      betaalmethode: 'iDEAL',
      beschrijving: 'Complete email marketing setup inclusief automatisering en team training',
      items: [
        { naam: 'Email Setup & Configuratie', aantal: 1, prijs: 300, totaal: 300 },
        { naam: 'Automatisering Workflows', aantal: 1, prijs: 400, totaal: 400 },
        { naam: 'Team Training (4 uur)', aantal: 4, prijs: 125, totaal: 500 }
      ],
      opmerkingen: 'Training was zeer waardevol!'
    },
    {
      id: 3,
      nummer: 'FAC-2024-003',
      klant: 'Lisa Chen',
      bedrijf: 'Global Solutions',
      titel: 'Project Management Support - Q1',
      bedrag: 4500,
      btw: 945,
      totaal: 5445,
      status: 'openstaand',
      vervaldatum: '2024-02-20',
      aangemaakt: '2024-01-18',
      betaaldatum: null,
      betaalmethode: null,
      beschrijving: 'Uitgebreide project management ondersteuning voor internationale uitbreiding',
      items: [
        { naam: 'Project Planning & Setup', aantal: 1, prijs: 800, totaal: 800 },
        { naam: 'Team Coordination (30 uur)', aantal: 30, prijs: 75, totaal: 2250 },
        { naam: 'Reporting & Analytics (20 uur)', aantal: 20, prijs: 60, totaal: 1200 },
        { naam: 'Stakeholder Communication', aantal: 1, prijs: 250, totaal: 250 }
      ],
      opmerkingen: 'Wekelijkse status updates inbegrepen'
    },
    {
      id: 4,
      nummer: 'FAC-2024-004',
      klant: 'Tom de Vries',
      bedrijf: 'Local Business',
      titel: 'Administrative Support Package',
      bedrag: 800,
      btw: 168,
      totaal: 968,
      status: 'verlopen',
      vervaldatum: '2024-01-30',
      aangemaakt: '2024-01-05',
      betaaldatum: null,
      betaalmethode: null,
      beschrijving: 'Basis administratieve ondersteuning voor kleine onderneming',
      items: [
        { naam: 'Data Entry & Management (10 uur)', aantal: 10, prijs: 35, totaal: 350 },
        { naam: 'Document Management (8 uur)', aantal: 8, prijs: 40, totaal: 320 },
        { naam: 'Customer Service Support (5 uur)', aantal: 5, prijs: 30, totaal: 150 }
      ],
      opmerkingen: 'Herinnering verzonden'
    },
    {
      id: 5,
      nummer: 'FAC-2024-005',
      klant: 'Anna Kowalski',
      bedrijf: 'Creative Agency',
      titel: 'Social Media Management - Januari',
      bedrag: 1800,
      btw: 378,
      totaal: 2178,
      status: 'openstaand',
      vervaldatum: '2024-02-25',
      aangemaakt: '2024-01-20',
      betaaldatum: null,
      betaalmethode: null,
      beschrijving: 'Maandelijkse social media management voor 3 platforms',
      items: [
        { naam: 'Content Creation (25 uur)', aantal: 25, prijs: 45, totaal: 1125 },
        { naam: 'Community Management (15 uur)', aantal: 15, prijs: 35, totaal: 525 },
        { naam: 'Analytics & Reporting (5 uur)', aantal: 5, prijs: 30, totaal: 150 }
      ],
      opmerkingen: 'Inclusief content calendar'
    }
  ]

  const filteredFacturen = facturen.filter(factuur => {
    const matchesSearch = factuur.nummer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         factuur.klant.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         factuur.bedrijf.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         factuur.titel.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = filterStatus === 'all' || factuur.status === filterStatus
    
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'betaald': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'openstaand': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'verlopen': return 'bg-red-500/20 text-red-400 border-red-500/30'
      case 'concept': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'betaald': return <CheckCircle className="w-4 h-4" />
      case 'openstaand': return <Clock className="w-4 h-4" />
      case 'verlopen': return <AlertCircle className="w-4 h-4" />
      case 'concept': return <Edit className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  const getPaymentIcon = (methode: string) => {
    switch (methode) {
      case 'Bankoverschrijving': return <Banknote className="w-4 h-4" />
      case 'iDEAL': return <CreditCard className="w-4 h-4" />
      case 'PayPal': return <CreditCard className="w-4 h-4" />
      default: return <Receipt className="w-4 h-4" />
    }
  }

  const isOverdue = (vervaldatum: string) => {
    return new Date(vervaldatum) < new Date() && !facturen.find(f => f.vervaldatum === vervaldatum)?.betaaldatum
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
                <h1 className="text-3xl font-bold text-text">Facturering</h1>
                <p className="text-text-muted">Beheer je facturen en betalingen</p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowAddModal(true)}
                  className="btn-primary flex items-center space-x-2"
                >
                  <Plus className="w-5 h-5" />
                  <span>Nieuwe factuur</span>
                </button>
                <div className="text-right">
                  <p className="text-text-secondary text-sm">Openstaand</p>
                  <p className="text-primary-gold font-semibold">
                    €{facturen.filter(f => f.status === 'openstaand').reduce((sum, f) => sum + f.totaal, 0).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 py-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Totaal facturen</p>
                  <p className="text-3xl font-bold text-text">{facturen.length}</p>
                </div>
                <FileText className="w-8 h-8 text-primary-gold" />
              </div>
              <p className="text-text-muted text-xs mt-2">+2 deze maand</p>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Betaald</p>
                  <p className="text-3xl font-bold text-text">{facturen.filter(f => f.status === 'betaald').length}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <p className="text-text-muted text-xs mt-2">
                €{facturen.filter(f => f.status === 'betaald').reduce((sum, f) => sum + f.totaal, 0).toLocaleString()}
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Openstaand</p>
                  <p className="text-3xl font-bold text-text">{facturen.filter(f => f.status === 'openstaand').length}</p>
                </div>
                <Clock className="w-8 h-8 text-blue-400" />
              </div>
              <p className="text-text-muted text-xs mt-2">
                €{facturen.filter(f => f.status === 'openstaand').reduce((sum, f) => sum + f.totaal, 0).toLocaleString()}
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Verlopen</p>
                  <p className="text-3xl font-bold text-text">{facturen.filter(f => f.status === 'verlopen').length}</p>
                </div>
                <AlertCircle className="w-8 h-8 text-red-400" />
              </div>
              <p className="text-text-muted text-xs mt-2">
                €{facturen.filter(f => f.status === 'verlopen').reduce((sum, f) => sum + f.totaal, 0).toLocaleString()}
              </p>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="glass-effect rounded-2xl p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-gold" />
                <input
                  type="text"
                  placeholder="Zoek facturen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-field pl-12 w-full"
                />
              </div>
              
              <div className="flex gap-4">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="input-field"
                >
                  <option value="all">Alle statussen</option>
                  <option value="betaald">Betaald</option>
                  <option value="openstaand">Openstaand</option>
                  <option value="verlopen">Verlopen</option>
                  <option value="concept">Concept</option>
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="input-field"
                >
                  <option value="date">Sorteer op datum</option>
                  <option value="bedrag">Sorteer op bedrag</option>
                  <option value="klant">Sorteer op klant</option>
                  <option value="status">Sorteer op status</option>
                </select>
              </div>
            </div>
          </div>

          {/* Facturen Lijst */}
          <div className="space-y-6">
            {filteredFacturen.map((factuur) => (
              <div key={factuur.id} className="glass-effect rounded-2xl p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  {/* Main Info */}
                  <div className="flex-1 mb-4 lg:mb-0">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-text">{factuur.titel}</h3>
                          <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(factuur.status)}`}>
                            {getStatusIcon(factuur.status)}
                            <span className="capitalize">{factuur.status}</span>
                          </span>
                          {isOverdue(factuur.vervaldatum) && (
                            <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30">
                              Verlopen
                            </span>
                          )}
                        </div>
                        <p className="text-text-muted mb-2">{factuur.beschrijving}</p>
                        <div className="flex items-center space-x-6 text-sm text-text-muted">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>{factuur.klant}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Building className="w-4 h-4" />
                            <span>{factuur.bedrijf}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>Vervalt: {new Date(factuur.vervaldatum).toLocaleDateString('nl-NL')}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment Info */}
                    {factuur.betaaldatum && (
                      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-4">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <div>
                            <p className="text-green-400 font-semibold">Betaald op {new Date(factuur.betaaldatum).toLocaleDateString('nl-NL')}</p>
                            <div className="flex items-center space-x-2 text-sm text-green-300">
                              {getPaymentIcon(factuur.betaalmethode!)}
                              <span>{factuur.betaalmethode}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Items Preview */}
                    <div className="bg-surface rounded-xl p-4 mb-4">
                      <h4 className="font-semibold text-text mb-3">Factuur items:</h4>
                      <div className="space-y-2">
                        {factuur.items.slice(0, 3).map((item, index) => (
                          <div key={index} className="flex justify-between items-center text-sm">
                            <span className="text-text">{item.naam}</span>
                            <span className="text-primary-gold font-semibold">€{item.totaal}</span>
                          </div>
                        ))}
                        {factuur.items.length > 3 && (
                          <p className="text-text-muted text-sm">+{factuur.items.length - 3} meer items</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Financial Info & Actions */}
                  <div className="lg:ml-6 lg:min-w-[300px]">
                    <div className="bg-surface rounded-xl p-4 mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-text-muted">Subtotaal:</span>
                        <span className="text-text font-semibold">€{factuur.bedrag.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-text-muted">BTW (21%):</span>
                        <span className="text-text font-semibold">€{factuur.btw.toLocaleString()}</span>
                      </div>
                      <div className="border-t border-gray-700 pt-2">
                        <div className="flex justify-between items-center">
                          <span className="text-text font-bold">Totaal:</span>
                          <span className="text-primary-gold font-bold text-lg">€{factuur.totaal.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <button 
                        onClick={() => {
                          setSelectedFactuur(factuur)
                          setShowViewModal(true)
                        }}
                        className="flex items-center space-x-2 px-4 py-2 bg-primary-gold/10 text-primary-gold rounded-xl hover:bg-primary-gold/20 transition-colors text-sm"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Bekijk</span>
                      </button>
                      <button 
                        onClick={() => {
                          alert(`PDF wordt gedownload voor ${factuur.titel}`)
                        }}
                        className="flex items-center space-x-2 px-4 py-2 bg-surface border border-gray-700 text-text rounded-xl hover:border-primary-gold/30 transition-colors text-sm"
                      >
                        <Download className="w-4 h-4" />
                        <span>PDF</span>
                      </button>
                      {factuur.status === 'openstaand' && (
                        <button 
                          onClick={() => {
                            alert(`Herinnering verzonden voor ${factuur.titel}`)
                          }}
                          className="flex items-center space-x-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-xl hover:bg-green-500/20 transition-colors text-sm"
                        >
                          <Send className="w-4 h-4" />
                          <span>Herinnering</span>
                        </button>
                      )}
                      <button 
                        onClick={() => {
                          setSelectedFactuur(factuur)
                          setShowEditModal(true)
                        }}
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-xl hover:bg-blue-500/20 transition-colors text-sm"
                      >
                        <Edit className="w-4 h-4" />
                        <span>Bewerk</span>
                      </button>
                      <button 
                        onClick={() => {
                          if (confirm(`Weet je zeker dat je ${factuur.titel} wilt verwijderen?`)) {
                            alert('Factuur verwijderd!')
                          }
                        }}
                        className="flex items-center space-x-2 px-4 py-2 bg-red-500/10 text-red-400 rounded-xl hover:bg-red-500/20 transition-colors text-sm"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span>Verwijder</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View Factuur Modal */}
      {showViewModal && selectedFactuur && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text">Factuur details</h2>
              <button
                onClick={() => setShowViewModal(false)}
                className="p-2 text-text-muted hover:text-text transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-text mb-4">{selectedFactuur.titel}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-text-muted text-sm">Klant</p>
                    <p className="text-text font-semibold">{selectedFactuur.klant}</p>
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">Bedrijf</p>
                    <p className="text-text font-semibold">{selectedFactuur.bedrijf}</p>
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">Beschrijving</p>
                    <p className="text-text">{selectedFactuur.beschrijving}</p>
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">Status</p>
                    <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(selectedFactuur.status)}`}>
                      {getStatusIcon(selectedFactuur.status)}
                      <span className="capitalize">{selectedFactuur.status}</span>
                    </span>
                  </div>
                  {selectedFactuur.betaaldatum && (
                    <div>
                      <p className="text-text-muted text-sm">Betaald op</p>
                      <p className="text-text font-semibold">{new Date(selectedFactuur.betaaldatum).toLocaleDateString('nl-NL')}</p>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-text mb-4">Financiële details</h4>
                <div className="bg-surface rounded-xl p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Subtotaal:</span>
                    <span className="text-text font-semibold">€{selectedFactuur.bedrag.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">BTW (21%):</span>
                    <span className="text-text font-semibold">€{selectedFactuur.btw.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-gray-700 pt-3">
                    <div className="flex justify-between">
                      <span className="text-text font-bold">Totaal:</span>
                      <span className="text-primary-gold font-bold text-lg">€{selectedFactuur.totaal.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <button 
                    onClick={() => alert('PDF wordt gedownload')}
                    className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-primary-gold/10 text-primary-gold rounded-xl hover:bg-primary-gold/20 transition-colors"
                  >
                    <Download className="w-5 h-5" />
                    <span>PDF downloaden</span>
                  </button>
                  {selectedFactuur.status === 'openstaand' && (
                    <button 
                      onClick={() => alert('Herinnering verzonden!')}
                      className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-green-500/10 text-green-400 rounded-xl hover:bg-green-500/20 transition-colors"
                    >
                      <Send className="w-5 h-5" />
                      <span>Herinnering versturen</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Factuur Modal */}
      {showEditModal && selectedFactuur && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text">Factuur bewerken</h2>
              <button
                onClick={() => setShowEditModal(false)}
                className="p-2 text-text-muted hover:text-text transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Titel</label>
                  <input
                    type="text"
                    defaultValue={selectedFactuur.titel}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Status</label>
                  <select className="input-field" defaultValue={selectedFactuur.status}>
                    <option value="concept">Concept</option>
                    <option value="openstaand">Openstaand</option>
                    <option value="betaald">Betaald</option>
                    <option value="verlopen">Verlopen</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text mb-2">Beschrijving</label>
                <textarea
                  defaultValue={selectedFactuur.beschrijving}
                  rows={4}
                  className="input-field"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Bedrag</label>
                  <input
                    type="number"
                    defaultValue={selectedFactuur.bedrag}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-2">BTW</label>
                  <input
                    type="number"
                    defaultValue={selectedFactuur.btw}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Totaal</label>
                  <input
                    type="number"
                    defaultValue={selectedFactuur.totaal}
                    className="input-field"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowEditModal(false)}
                  className="px-6 py-3 bg-surface border border-gray-700 rounded-xl text-text hover:border-primary-gold/30 transition-colors"
                >
                  Annuleren
                </button>
                <button
                  onClick={() => {
                    alert('Factuur bijgewerkt!')
                    setShowEditModal(false)
                  }}
                  className="btn-primary flex items-center space-x-2"
                >
                  <Save className="w-5 h-5" />
                  <span>Opslaan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Factuur Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text">Nieuwe factuur</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 text-text-muted hover:text-text transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Klant</label>
                  <select className="input-field">
                    <option>Sarah van der Berg</option>
                    <option>Mark Janssen</option>
                    <option>Lisa Chen</option>
                    <option>Tom de Vries</option>
                    <option>Anna Kowalski</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Factuur nummer</label>
                  <input type="text" className="input-field" placeholder="FAC-2024-006" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text mb-2">Titel</label>
                <input type="text" className="input-field" placeholder="Project titel" />
              </div>

              <div>
                <label className="block text-sm font-medium text-text mb-2">Beschrijving</label>
                <textarea rows={4} className="input-field" placeholder="Project beschrijving..."></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Bedrag</label>
                  <input type="number" className="input-field" placeholder="2500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-2">BTW</label>
                  <input type="number" className="input-field" placeholder="525" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Vervaldatum</label>
                  <input type="date" className="input-field" />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-6 py-3 bg-surface border border-gray-700 rounded-xl text-text hover:border-primary-gold/30 transition-colors"
                >
                  Annuleren
                </button>
                <button
                  onClick={() => {
                    alert('Nieuwe factuur toegevoegd!')
                    setShowAddModal(false)
                  }}
                  className="btn-primary flex items-center space-x-2"
                >
                  <Save className="w-5 h-5" />
                  <span>Factuur maken</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
