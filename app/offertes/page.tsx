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
  X,
  Save
} from 'lucide-react'

export default function Offertes() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [sortBy, setSortBy] = useState('date')
  const [showAddModal, setShowAddModal] = useState(false)
  const [showViewModal, setShowViewModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedOfferte, setSelectedOfferte] = useState(null)

  // Demo offertes data
  const offertes = [
    {
      id: 1,
      nummer: 'OFF-2024-001',
      klant: 'Sarah van der Berg',
      bedrijf: 'TechStart BV',
      titel: 'Virtual Assistant Services - Q1 2024',
      bedrag: 2500,
      status: 'verzonden',
      vervaldatum: '2024-02-15',
      aangemaakt: '2024-01-15',
      beschrijving: 'Maandelijkse VA services inclusief email management, kalender beheer en project ondersteuning',
      items: [
        { naam: 'Email Management (20 uur)', aantal: 20, prijs: 50, totaal: 1000 },
        { naam: 'Kalender Beheer (15 uur)', aantal: 15, prijs: 45, totaal: 675 },
        { naam: 'Project Ondersteuning (10 uur)', aantal: 10, prijs: 60, totaal: 600 },
        { naam: 'Administratieve taken (5 uur)', aantal: 5, prijs: 45, totaal: 225 }
      ],
      btwPercentage: 21,
      opmerkingen: 'Inclusief wekelijkse voortgangsrapportage'
    },
    {
      id: 2,
      nummer: 'OFF-2024-002',
      klant: 'Mark Janssen',
      bedrijf: 'Marketing Pro',
      titel: 'Email Marketing Setup & Training',
      bedrag: 1200,
      status: 'geaccepteerd',
      vervaldatum: '2024-02-10',
      aangemaakt: '2024-01-12',
      beschrijving: 'Complete email marketing setup inclusief automatisering en team training',
      items: [
        { naam: 'Email Setup & Configuratie', aantal: 1, prijs: 300, totaal: 300 },
        { naam: 'Automatisering Workflows', aantal: 1, prijs: 400, totaal: 400 },
        { naam: 'Team Training (4 uur)', aantal: 4, prijs: 125, totaal: 500 }
      ],
      btwPercentage: 21,
      opmerkingen: 'Training kan online of op locatie'
    },
    {
      id: 3,
      nummer: 'OFF-2024-003',
      klant: 'Lisa Chen',
      bedrijf: 'Global Solutions',
      titel: 'Project Management Support',
      bedrag: 4500,
      status: 'concept',
      vervaldatum: '2024-02-20',
      aangemaakt: '2024-01-18',
      beschrijving: 'Uitgebreide project management ondersteuning voor internationale uitbreiding',
      items: [
        { naam: 'Project Planning & Setup', aantal: 1, prijs: 800, totaal: 800 },
        { naam: 'Team Coordination (30 uur)', aantal: 30, prijs: 75, totaal: 2250 },
        { naam: 'Reporting & Analytics (20 uur)', aantal: 20, prijs: 60, totaal: 1200 },
        { naam: 'Stakeholder Communication', aantal: 1, prijs: 250, totaal: 250 }
      ],
      btwPercentage: 21,
      opmerkingen: 'Inclusief wekelijkse status updates'
    },
    {
      id: 4,
      nummer: 'OFF-2024-004',
      klant: 'Tom de Vries',
      bedrijf: 'Local Business',
      titel: 'Administrative Support Package',
      bedrag: 800,
      status: 'verlopen',
      vervaldatum: '2024-01-30',
      aangemaakt: '2024-01-05',
      beschrijving: 'Basis administratieve ondersteuning voor kleine onderneming',
      items: [
        { naam: 'Data Entry & Management (10 uur)', aantal: 10, prijs: 35, totaal: 350 },
        { naam: 'Document Management (8 uur)', aantal: 8, prijs: 40, totaal: 320 },
        { naam: 'Customer Service Support (5 uur)', aantal: 5, prijs: 30, totaal: 150 }
      ],
      btwPercentage: 21,
      opmerkingen: 'Basis support package'
    },
    {
      id: 5,
      nummer: 'OFF-2024-005',
      klant: 'Anna Kowalski',
      bedrijf: 'Creative Agency',
      titel: 'Social Media Management',
      bedrag: 1800,
      status: 'verzonden',
      vervaldatum: '2024-02-25',
      aangemaakt: '2024-01-20',
      beschrijving: 'Maandelijkse social media management voor 3 platforms',
      items: [
        { naam: 'Content Creation (25 uur)', aantal: 25, prijs: 45, totaal: 1125 },
        { naam: 'Community Management (15 uur)', aantal: 15, prijs: 35, totaal: 525 },
        { naam: 'Analytics & Reporting (5 uur)', aantal: 5, prijs: 30, totaal: 150 }
      ],
      btwPercentage: 21,
      opmerkingen: 'Inclusief content calendar en brand guidelines'
    }
  ]

  const filteredOffertes = offertes.filter(offerte => {
    const matchesSearch = offerte.nummer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         offerte.klant.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         offerte.bedrijf.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         offerte.titel.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = filterStatus === 'all' || offerte.status === filterStatus
    
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'geaccepteerd': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'verzonden': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'concept': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'verlopen': return 'bg-red-500/20 text-red-400 border-red-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'geaccepteerd': return <CheckCircle className="w-4 h-4" />
      case 'verzonden': return <Send className="w-4 h-4" />
      case 'concept': return <Edit className="w-4 h-4" />
      case 'verlopen': return <AlertCircle className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  const calculateBtw = (bedrag: number, btwPercentage: number) => {
    return (bedrag * btwPercentage) / 100
  }

  const calculateTotaal = (bedrag: number, btwPercentage: number) => {
    return bedrag + calculateBtw(bedrag, btwPercentage)
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
                <h1 className="text-3xl font-bold text-text">Offertes</h1>
                <p className="text-text-muted">Beheer je offertes en verkoopkansen</p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowAddModal(true)}
                  className="btn-primary flex items-center space-x-2"
                >
                  <Plus className="w-5 h-5" />
                  <span>Nieuwe offerte</span>
                </button>
                <div className="text-right">
                  <p className="text-text-secondary text-sm">Totaal waarde</p>
                  <p className="text-primary-gold font-semibold">
                    €{offertes.reduce((sum, o) => sum + o.bedrag, 0).toLocaleString()}
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
                  <p className="text-text-muted text-sm">Totaal offertes</p>
                  <p className="text-3xl font-bold text-text">{offertes.length}</p>
                </div>
                <FileText className="w-8 h-8 text-primary-gold" />
              </div>
              <p className="text-text-muted text-xs mt-2">+3 deze maand</p>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Geaccepteerd</p>
                  <p className="text-3xl font-bold text-text">{offertes.filter(o => o.status === 'geaccepteerd').length}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <p className="text-text-muted text-xs mt-2">
                {Math.round((offertes.filter(o => o.status === 'geaccepteerd').length / offertes.length) * 100)}% conversie
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Openstaand</p>
                  <p className="text-3xl font-bold text-text">{offertes.filter(o => o.status === 'verzonden').length}</p>
                </div>
                <Clock className="w-8 h-8 text-blue-400" />
              </div>
              <p className="text-text-muted text-xs mt-2">wachtend op reactie</p>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Gemiddelde waarde</p>
                  <p className="text-3xl font-bold text-text">
                    €{Math.round(offertes.reduce((sum, o) => sum + o.bedrag, 0) / offertes.length).toLocaleString()}
                  </p>
                </div>
                <TrendingUp className="w-8 h-8 text-primary-gold" />
              </div>
              <p className="text-text-muted text-xs mt-2">per offerte</p>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="glass-effect rounded-2xl p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-gold" />
                <input
                  type="text"
                  placeholder="Zoek offertes..."
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
                  <option value="concept">Concept</option>
                  <option value="verzonden">Verzonden</option>
                  <option value="geaccepteerd">Geaccepteerd</option>
                  <option value="verlopen">Verlopen</option>
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

          {/* Offertes Lijst */}
          <div className="space-y-6">
            {filteredOffertes.map((offerte) => (
              <div key={offerte.id} className="glass-effect rounded-2xl p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  {/* Main Info */}
                  <div className="flex-1 mb-4 lg:mb-0">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-text">{offerte.titel}</h3>
                          <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(offerte.status)}`}>
                            {getStatusIcon(offerte.status)}
                            <span className="capitalize">{offerte.status}</span>
                          </span>
                        </div>
                        <p className="text-text-muted mb-2">{offerte.beschrijving}</p>
                        <div className="flex items-center space-x-6 text-sm text-text-muted">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>{offerte.klant}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Building className="w-4 h-4" />
                            <span>{offerte.bedrijf}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>Vervalt: {new Date(offerte.vervaldatum).toLocaleDateString('nl-NL')}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Items Preview */}
                    <div className="bg-surface rounded-xl p-4 mb-4">
                      <h4 className="font-semibold text-text mb-3">Offerte items:</h4>
                      <div className="space-y-2">
                        {offerte.items.slice(0, 3).map((item, index) => (
                          <div key={index} className="flex justify-between items-center text-sm">
                            <span className="text-text">{item.naam}</span>
                            <span className="text-primary-gold font-semibold">€{item.totaal}</span>
                          </div>
                        ))}
                        {offerte.items.length > 3 && (
                          <p className="text-text-muted text-sm">+{offerte.items.length - 3} meer items</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Financial Info & Actions */}
                  <div className="lg:ml-6 lg:min-w-[300px]">
                    <div className="bg-surface rounded-xl p-4 mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-text-muted">Subtotaal:</span>
                        <span className="text-text font-semibold">€{offerte.bedrag.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-text-muted">BTW ({offerte.btwPercentage}%):</span>
                        <span className="text-text font-semibold">€{calculateBtw(offerte.bedrag, offerte.btwPercentage).toLocaleString()}</span>
                      </div>
                      <div className="border-t border-gray-700 pt-2">
                        <div className="flex justify-between items-center">
                          <span className="text-text font-bold">Totaal:</span>
                          <span className="text-primary-gold font-bold text-lg">€{calculateTotaal(offerte.bedrag, offerte.btwPercentage).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <button 
                        onClick={() => {
                          setSelectedOfferte(offerte)
                          setShowViewModal(true)
                        }}
                        className="flex items-center space-x-2 px-4 py-2 bg-primary-gold/10 text-primary-gold rounded-xl hover:bg-primary-gold/20 transition-colors text-sm"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Bekijk</span>
                      </button>
                      <button 
                        onClick={() => {
                          setSelectedOfferte(offerte)
                          setShowEditModal(true)
                        }}
                        className="flex items-center space-x-2 px-4 py-2 bg-surface border border-gray-700 text-text rounded-xl hover:border-primary-gold/30 transition-colors text-sm"
                      >
                        <Edit className="w-4 h-4" />
                        <span>Bewerk</span>
                      </button>
                      <button 
                        onClick={() => {
                          alert(`PDF wordt gedownload voor ${offerte.titel}`)
                        }}
                        className="flex items-center space-x-2 px-4 py-2 bg-surface border border-gray-700 text-text rounded-xl hover:border-primary-gold/30 transition-colors text-sm"
                      >
                        <Download className="w-4 h-4" />
                        <span>PDF</span>
                      </button>
                      <button 
                        onClick={() => {
                          if (confirm(`Weet je zeker dat je ${offerte.titel} wilt verwijderen?`)) {
                            alert('Offerte verwijderd!')
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

      {/* View Offerte Modal */}
      {showViewModal && selectedOfferte && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text">Offerte details</h2>
              <button
                onClick={() => setShowViewModal(false)}
                className="p-2 text-text-muted hover:text-text transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-text mb-4">{selectedOfferte.titel}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-text-muted text-sm">Klant</p>
                    <p className="text-text font-semibold">{selectedOfferte.klant}</p>
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">Bedrijf</p>
                    <p className="text-text font-semibold">{selectedOfferte.bedrijf}</p>
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">Beschrijving</p>
                    <p className="text-text">{selectedOfferte.beschrijving}</p>
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">Status</p>
                    <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(selectedOfferte.status)}`}>
                      {getStatusIcon(selectedOfferte.status)}
                      <span className="capitalize">{selectedOfferte.status}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-text mb-4">Financiële details</h4>
                <div className="bg-surface rounded-xl p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Subtotaal:</span>
                    <span className="text-text font-semibold">€{selectedOfferte.bedrag.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">BTW ({selectedOfferte.btwPercentage}%):</span>
                    <span className="text-text font-semibold">€{calculateBtw(selectedOfferte.bedrag, selectedOfferte.btwPercentage).toLocaleString()}</span>
                  </div>
                  <div className="border-t border-gray-700 pt-3">
                    <div className="flex justify-between">
                      <span className="text-text font-bold">Totaal:</span>
                      <span className="text-primary-gold font-bold text-lg">€{calculateTotaal(selectedOfferte.bedrag, selectedOfferte.btwPercentage).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-primary-gold/10 text-primary-gold rounded-xl hover:bg-primary-gold/20 transition-colors">
                    <Download className="w-5 h-5" />
                    <span>PDF downloaden</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-green-500/10 text-green-400 rounded-xl hover:bg-green-500/20 transition-colors">
                    <Send className="w-5 h-5" />
                    <span>Verstuur naar klant</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Offerte Modal */}
      {showEditModal && selectedOfferte && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text">Offerte bewerken</h2>
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
                    defaultValue={selectedOfferte.titel}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Status</label>
                  <select className="input-field" defaultValue={selectedOfferte.status}>
                    <option value="concept">Concept</option>
                    <option value="verzonden">Verzonden</option>
                    <option value="geaccepteerd">Geaccepteerd</option>
                    <option value="verlopen">Verlopen</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text mb-2">Beschrijving</label>
                <textarea
                  defaultValue={selectedOfferte.beschrijving}
                  rows={4}
                  className="input-field"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Bedrag</label>
                  <input
                    type="number"
                    defaultValue={selectedOfferte.bedrag}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-2">BTW percentage</label>
                  <input
                    type="number"
                    defaultValue={selectedOfferte.btwPercentage}
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
                    alert('Offerte bijgewerkt!')
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

      {/* Add Offerte Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text">Nieuwe offerte</h2>
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
                  <label className="block text-sm font-medium text-text mb-2">Offerte nummer</label>
                  <input type="text" className="input-field" placeholder="OFF-2024-006" />
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
                  <label className="block text-sm font-medium text-text mb-2">BTW percentage</label>
                  <input type="number" className="input-field" placeholder="21" />
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
                    alert('Nieuwe offerte toegevoegd!')
                    setShowAddModal(false)
                  }}
                  className="btn-primary flex items-center space-x-2"
                >
                  <Save className="w-5 h-5" />
                  <span>Offerte maken</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
