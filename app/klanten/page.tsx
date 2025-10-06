'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { 
  Search, 
  Filter, 
  Plus, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  DollarSign,
  Star,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Copy,
  CheckCircle,
  Clock,
  AlertCircle,
  User,
  Building,
  TrendingUp,
  Users,
  X,
  Save,
  UserPlus,
  Briefcase,
  FileText,
  CreditCard
} from 'lucide-react'

export default function KlantenBeheer() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [sortBy, setSortBy] = useState('name')
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [selectedKlant, setSelectedKlant] = useState(null)
  const [klanten, setKlanten] = useState([
    {
      id: 1,
      naam: 'Sarah van der Berg',
      bedrijf: 'TechStart BV',
      email: 'sarah@techstart.nl',
      telefoon: '+31 6 12345678',
      locatie: 'Amsterdam, NL',
      status: 'actief',
      projecten: 3,
      totaleWaarde: 12500,
      laatsteContact: '2024-01-15',
      rating: 5,
      tags: ['Premium', 'Tech', 'Startup']
    },
    {
      id: 2,
      naam: 'Mark Janssen',
      bedrijf: 'Marketing Pro',
      email: 'mark@marketingpro.nl',
      telefoon: '+31 6 87654321',
      locatie: 'Rotterdam, NL',
      status: 'prospect',
      projecten: 1,
      totaleWaarde: 3500,
      laatsteContact: '2024-01-10',
      rating: 4,
      tags: ['Marketing', 'SME']
    },
    {
      id: 3,
      naam: 'Lisa Chen',
      bedrijf: 'Global Solutions',
      email: 'lisa@globalsolutions.com',
      telefoon: '+31 6 11223344',
      locatie: 'Utrecht, NL',
      status: 'actief',
      projecten: 5,
      totaleWaarde: 25000,
      laatsteContact: '2024-01-12',
      rating: 5,
      tags: ['Enterprise', 'International']
    },
    {
      id: 4,
      naam: 'Tom de Vries',
      bedrijf: 'Local Business',
      email: 'tom@localbusiness.nl',
      telefoon: '+31 6 55667788',
      locatie: 'Den Haag, NL',
      status: 'inactief',
      projecten: 0,
      totaleWaarde: 0,
      laatsteContact: '2023-12-20',
      rating: 3,
      tags: ['Local', 'Small Business']
    },
    {
      id: 5,
      naam: 'Anna Kowalski',
      bedrijf: 'Creative Agency',
      email: 'anna@creative.nl',
      telefoon: '+31 6 99887766',
      locatie: 'Eindhoven, NL',
      status: 'actief',
      projecten: 2,
      totaleWaarde: 8500,
      laatsteContact: '2024-01-14',
      rating: 4,
      tags: ['Creative', 'Design']
    }
  ])

  const [newKlant, setNewKlant] = useState({
    naam: '',
    bedrijf: '',
    email: '',
    telefoon: '',
    locatie: '',
    status: 'prospect',
    tags: []
  })

  const filteredKlanten = klanten.filter(klant => {
    const matchesSearch = klant.naam.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         klant.bedrijf.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         klant.email.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = filterStatus === 'all' || klant.status === filterStatus
    
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'actief': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'prospect': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'inactief': return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'actief': return <CheckCircle className="w-4 h-4" />
      case 'prospect': return <Clock className="w-4 h-4" />
      case 'inactief': return <AlertCircle className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  const handleAddKlant = () => {
    if (newKlant.naam && newKlant.email) {
      const klant = {
        id: Math.max(...klanten.map(k => k.id)) + 1,
        ...newKlant,
        projecten: 0,
        totaleWaarde: 0,
        laatsteContact: new Date().toISOString().split('T')[0],
        rating: 0
      }
      setKlanten([...klanten, klant])
      setNewKlant({
        naam: '',
        bedrijf: '',
        email: '',
        telefoon: '',
        locatie: '',
        status: 'prospect',
        tags: []
      })
      setShowAddModal(false)
    }
  }

  const handleEditKlant = (klant) => {
    setSelectedKlant(klant)
    setShowEditModal(true)
  }

  const handleViewKlant = (klant) => {
    setSelectedKlant(klant)
    setShowDetailModal(true)
  }

  const handleDeleteKlant = (klantId) => {
    if (confirm('Weet je zeker dat je deze klant wilt verwijderen?')) {
      setKlanten(klanten.filter(k => k.id !== klantId))
    }
  }

  const handleCallKlant = (klant) => {
    window.open(`tel:${klant.telefoon}`)
  }

  const handleEmailKlant = (klant) => {
    window.open(`mailto:${klant.email}`)
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
                <h1 className="text-3xl font-bold text-text">Klantenbeheer</h1>
                <p className="text-text-muted">Beheer je klanten en hun projecten</p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowAddModal(true)}
                  className="btn-primary flex items-center space-x-2"
                >
                  <Plus className="w-5 h-5" />
                  <span>Nieuwe klant</span>
                </button>
                <div className="text-right">
                  <p className="text-text-secondary text-sm">Totaal klanten</p>
                  <p className="text-primary-gold font-semibold">{klanten.length}</p>
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
                  <p className="text-text-muted text-sm">Totaal klanten</p>
                  <p className="text-3xl font-bold text-text">{klanten.length}</p>
                </div>
                <Users className="w-8 h-8 text-primary-gold" />
              </div>
              <p className="text-text-muted text-xs mt-2">+12% deze maand</p>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Actieve klanten</p>
                  <p className="text-3xl font-bold text-text">{klanten.filter(k => k.status === 'actief').length}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <p className="text-text-muted text-xs mt-2">85% actief</p>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Totale waarde</p>
                  <p className="text-3xl font-bold text-text">€{klanten.reduce((sum, k) => sum + k.totaleWaarde, 0).toLocaleString()}</p>
                </div>
                <DollarSign className="w-8 h-8 text-primary-gold" />
              </div>
              <p className="text-text-muted text-xs mt-2">+8% deze maand</p>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Gemiddelde rating</p>
                  <p className="text-3xl font-bold text-text">{(klanten.reduce((sum, k) => sum + k.rating, 0) / klanten.length).toFixed(1)}</p>
                </div>
                <Star className="w-8 h-8 text-primary-gold" />
              </div>
              <p className="text-text-muted text-xs mt-2">Uitstekend</p>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="glass-effect rounded-2xl p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-gold" />
                <input
                  type="text"
                  placeholder="Zoek klanten..."
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
                  <option value="actief">Actief</option>
                  <option value="prospect">Prospect</option>
                  <option value="inactief">Inactief</option>
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="input-field"
                >
                  <option value="name">Sorteer op naam</option>
                  <option value="bedrijf">Sorteer op bedrijf</option>
                  <option value="waarde">Sorteer op waarde</option>
                  <option value="laatsteContact">Sorteer op laatste contact</option>
                </select>
              </div>
            </div>
          </div>

          {/* Klanten Lijst */}
          <div className="glass-effect rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-surface border-b border-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-text-muted">Klant</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-text-muted">Bedrijf</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-text-muted">Contact</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-text-muted">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-text-muted">Projecten</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-text-muted">Waarde</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-text-muted">Rating</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-text-muted">Acties</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {filteredKlanten.map((klant) => (
                    <tr key={klant.id} className="hover:bg-surface-light transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary-gold to-primary-gold-dark rounded-full flex items-center justify-center">
                            <span className="text-black font-bold text-sm">
                              {klant.naam.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-text">{klant.naam}</p>
                            <p className="text-text-muted text-sm">{klant.locatie}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-text">{klant.bedrijf}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {klant.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-primary-gold/10 text-primary-gold text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2 text-sm text-text">
                            <Mail className="w-4 h-4 text-primary-gold" />
                            <span>{klant.email}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-text-muted">
                            <Phone className="w-4 h-4" />
                            <span>{klant.telefoon}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(klant.status)}`}>
                          {getStatusIcon(klant.status)}
                          <span className="capitalize">{klant.status}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-text font-semibold">{klant.projecten}</p>
                        <p className="text-text-muted text-sm">projecten</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-text font-semibold">€{klant.totaleWaarde.toLocaleString()}</p>
                        <p className="text-text-muted text-sm">totaal</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-primary-gold fill-current" />
                          <span className="text-text font-semibold">{klant.rating}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => handleViewKlant(klant)}
                            className="p-2 text-primary-gold hover:bg-primary-gold/10 rounded-lg transition-colors"
                            title="Bekijk details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleEditKlant(klant)}
                            className="p-2 text-text-muted hover:bg-surface-light rounded-lg transition-colors"
                            title="Bewerken"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleCallKlant(klant)}
                            className="p-2 text-green-400 hover:bg-green-400/10 rounded-lg transition-colors"
                            title="Bellen"
                          >
                            <Phone className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleEmailKlant(klant)}
                            className="p-2 text-blue-400 hover:bg-blue-400/10 rounded-lg transition-colors"
                            title="E-mailen"
                          >
                            <Mail className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDeleteKlant(klant.id)}
                            className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                            title="Verwijderen"
                          >
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

      {/* Add Klant Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text">Nieuwe klant toevoegen</h2>
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
                  <label className="block text-sm font-medium text-text mb-2">Volledige naam *</label>
                  <input
                    type="text"
                    value={newKlant.naam}
                    onChange={(e) => setNewKlant({...newKlant, naam: e.target.value})}
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Bedrijf</label>
                  <input
                    type="text"
                    value={newKlant.bedrijf}
                    onChange={(e) => setNewKlant({...newKlant, bedrijf: e.target.value})}
                    className="input-field"
                    placeholder="Bedrijf BV"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">E-mailadres *</label>
                  <input
                    type="email"
                    value={newKlant.email}
                    onChange={(e) => setNewKlant({...newKlant, email: e.target.value})}
                    className="input-field"
                    placeholder="john@bedrijf.nl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Telefoonnummer</label>
                  <input
                    type="tel"
                    value={newKlant.telefoon}
                    onChange={(e) => setNewKlant({...newKlant, telefoon: e.target.value})}
                    className="input-field"
                    placeholder="+31 6 12345678"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Locatie</label>
                  <input
                    type="text"
                    value={newKlant.locatie}
                    onChange={(e) => setNewKlant({...newKlant, locatie: e.target.value})}
                    className="input-field"
                    placeholder="Amsterdam, NL"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Status</label>
                  <select
                    value={newKlant.status}
                    onChange={(e) => setNewKlant({...newKlant, status: e.target.value})}
                    className="input-field"
                  >
                    <option value="prospect">Prospect</option>
                    <option value="actief">Actief</option>
                    <option value="inactief">Inactief</option>
                  </select>
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
                  onClick={handleAddKlant}
                  className="btn-primary flex items-center space-x-2"
                >
                  <Save className="w-5 h-5" />
                  <span>Klant toevoegen</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Klant Detail Modal */}
      {showDetailModal && selectedKlant && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text">Klant details</h2>
              <button
                onClick={() => setShowDetailModal(false)}
                className="p-2 text-text-muted hover:text-text transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Klant Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-surface rounded-xl p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-gold to-primary-gold-dark rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-xl">
                        {selectedKlant.naam.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-text">{selectedKlant.naam}</h3>
                      <p className="text-text-muted">{selectedKlant.bedrijf}</p>
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(selectedKlant.status)} mt-2`}>
                        {getStatusIcon(selectedKlant.status)}
                        <span className="capitalize">{selectedKlant.status}</span>
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary-gold" />
                      <div>
                        <p className="text-text-muted text-sm">E-mail</p>
                        <p className="text-text">{selectedKlant.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary-gold" />
                      <div>
                        <p className="text-text-muted text-sm">Telefoon</p>
                        <p className="text-text">{selectedKlant.telefoon}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary-gold" />
                      <div>
                        <p className="text-text-muted text-sm">Locatie</p>
                        <p className="text-text">{selectedKlant.locatie}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-primary-gold" />
                      <div>
                        <p className="text-text-muted text-sm">Laatste contact</p>
                        <p className="text-text">{new Date(selectedKlant.laatsteContact).toLocaleDateString('nl-NL')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Projecten */}
                <div className="bg-surface rounded-xl p-6">
                  <h4 className="text-lg font-bold text-text mb-4">Projecten</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary-gold">{selectedKlant.projecten}</p>
                      <p className="text-text-muted text-sm">Totaal projecten</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-400">€{selectedKlant.totaleWaarde.toLocaleString()}</p>
                      <p className="text-text-muted text-sm">Totale waarde</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-yellow-400">{selectedKlant.rating}</p>
                      <p className="text-text-muted text-sm">Rating</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <div className="bg-surface rounded-xl p-6">
                  <h4 className="text-lg font-bold text-text mb-4">Snelle acties</h4>
                  <div className="space-y-3">
                    <button 
                      onClick={() => handleCallKlant(selectedKlant)}
                      className="w-full flex items-center space-x-3 p-3 bg-green-500/10 text-green-400 rounded-xl hover:bg-green-500/20 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Bellen</span>
                    </button>
                    <button 
                      onClick={() => handleEmailKlant(selectedKlant)}
                      className="w-full flex items-center space-x-3 p-3 bg-blue-500/10 text-blue-400 rounded-xl hover:bg-blue-500/20 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <span>E-mailen</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 bg-primary-gold/10 text-primary-gold rounded-xl hover:bg-primary-gold/20 transition-colors">
                      <Briefcase className="w-5 h-5" />
                      <span>Nieuw project</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 bg-orange-500/10 text-orange-400 rounded-xl hover:bg-orange-500/20 transition-colors">
                      <FileText className="w-5 h-5" />
                      <span>Offerte maken</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 bg-purple-500/10 text-purple-400 rounded-xl hover:bg-purple-500/20 transition-colors">
                      <CreditCard className="w-5 h-5" />
                      <span>Factuur maken</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}