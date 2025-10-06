'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { 
  Package, 
  Car, 
  Utensils, 
  Home, 
  Calendar, 
  MapPin, 
  Clock, 
  Users,
  CheckCircle,
  AlertCircle,
  Info,
  Edit,
  Plus
} from 'lucide-react'

export default function LogistiekPage() {
  const [activeTab, setActiveTab] = useState('accommodatie')

  // Mock data voor logistiek
  const accommodatieData = {
    naam: 'Morena Resort - Jan Thiel',
    locatie: 'Jan Thiel, Curaçao',
    checkIn: '2025-03-15',
    checkOut: '2025-03-22',
    kamers: [
      { id: 1, nummer: '101', type: '1-slaapkamer appartement', bezetting: 'Maria Rodriguez', status: 'bevestigd' },
      { id: 2, nummer: '102', type: '1-slaapkamer appartement', bezetting: 'Sarah van der Berg', status: 'bevestigd' },
      { id: 3, nummer: '103', type: '1-slaapkamer appartement', bezetting: 'Michael Chen', status: 'bevestigd' },
      { id: 4, nummer: '104', type: '1-slaapkamer appartement', bezetting: 'Vrij', status: 'beschikbaar' },
      { id: 5, nummer: '201', type: '2-slaapkamer appartement', bezetting: 'Jonnhy de Vries', status: 'bevestigd' }
    ]
  }

  const transportData = {
    vluchten: [
      { id: 1, type: 'heen', vlucht: 'KL 737', datum: '2025-03-15', tijd: '14:30', van: 'AMS', naar: 'CUR', status: 'geboekt' },
      { id: 2, type: 'terug', vlucht: 'KL 738', datum: '2025-03-22', tijd: '18:00', van: 'CUR', naar: 'AMS', status: 'geboekt' }
    ],
    transfers: [
      { id: 1, type: 'luchthaven-hotel', datum: '2025-03-15', tijd: '16:00', passagiers: 4, status: 'geboekt' },
      { id: 2, type: 'hotel-luchthaven', datum: '2025-03-22', tijd: '15:00', passagiers: 4, status: 'geboekt' }
    ],
    huurautos: [
      { id: 1, type: 'KIA Picanto', datum: '2025-03-19', passagier: 'Vrijwillig', status: 'reservering' }
    ]
  }

  const cateringData = {
    restaurants: [
      { id: 1, naam: 'Zest Restaurant', locatie: 'Jan Thiel Beach', type: 'Ontbijt', datum: '2025-03-16 t/m 2025-03-21', status: 'geboekt' },
      { id: 2, naam: 'Lokaal Restaurant', locatie: 'Christoffelpark', type: 'Lunch', datum: '2025-03-17', status: 'geboekt' },
      { id: 3, naam: 'BBQ Klein Curaçao', locatie: 'Klein Curaçao', type: 'Lunch', datum: '2025-03-16', status: 'geboekt' }
    ],
    specialeBehoeften: [
      { deelnemer: 'Sarah van der Berg', behoefte: 'Vegetarisch', status: 'geregeld' },
      { deelnemer: 'Michael Chen', behoefte: 'Glutenvrij', status: 'geregeld' }
    ]
  }

  const activiteitenData = {
    dagprogramma: [
      { id: 1, dag: 'Dag 2', datum: '2025-03-16', activiteit: 'Klein Curaçao & IKIGAI', locatie: 'Klein Curaçao', status: 'georganiseerd' },
      { id: 2, dag: 'Dag 3', datum: '2025-03-17', activiteit: 'Christoffelberg & Intervisie', locatie: 'Christoffelpark', status: 'georganiseerd' },
      { id: 3, dag: 'Dag 4', datum: '2025-03-18', activiteit: 'Vrije dag', locatie: 'Jan Thiel', status: 'georganiseerd' },
      { id: 4, dag: 'Dag 5', datum: '2025-03-19', activiteit: 'Shete Boka & Mission Statement', locatie: 'Shete Boka National Park', status: 'georganiseerd' },
      { id: 5, dag: 'Dag 6', datum: '2025-03-20', activiteit: 'Hofi Mango & Willemstad', locatie: 'Hofi Mango & Willemstad', status: 'georganiseerd' }
    ]
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'bevestigd':
      case 'geboekt':
      case 'geregeld':
      case 'georganiseerd': return 'bg-green-500/20 text-green-400'
      case 'beschikbaar': return 'bg-blue-500/20 text-blue-400'
      case 'reservering': return 'bg-yellow-500/20 text-yellow-400'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

  const tabs = [
    { id: 'accommodatie', label: 'Accommodatie', icon: Home },
    { id: 'transport', label: 'Transport', icon: Car },
    { id: 'catering', label: 'Catering', icon: Utensils },
    { id: 'activiteiten', label: 'Activiteiten', icon: Calendar }
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
                <h1 className="text-2xl font-bold text-text">Logistiek Beheer</h1>
                <p className="text-text-muted">Beheer alle logistieke aspecten van de retraite</p>
              </div>
              <div className="text-right">
                <p className="text-text font-medium">7 dagen programma</p>
                <p className="text-text-muted text-sm">15-22 maart 2025</p>
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

          {/* Accommodatie Tab */}
          {activeTab === 'accommodatie' && (
            <div className="space-y-6">
              <div className="glass-effect rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-text">{accommodatieData.naam}</h3>
                    <p className="text-text-muted">{accommodatieData.locatie}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-text font-medium">Check-in: {accommodatieData.checkIn}</p>
                    <p className="text-text-muted">Check-out: {accommodatieData.checkOut}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {accommodatieData.kamers.map((kamer) => (
                    <div key={kamer.id} className="bg-surface border border-gray-700 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-text font-bold">Kamer {kamer.nummer}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(kamer.status)}`}>
                          {kamer.status}
                        </span>
                      </div>
                      <p className="text-text-muted text-sm mb-2">{kamer.type}</p>
                      <p className="text-text font-medium">Bewoner: {kamer.bezetting}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Transport Tab */}
          {activeTab === 'transport' && (
            <div className="space-y-6">
              {/* Vluchten */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold text-text mb-6">Vluchten</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {transportData.vluchten.map((vlucht) => (
                    <div key={vlucht.id} className="bg-surface border border-gray-700 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-text font-bold">{vlucht.vlucht}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(vlucht.status)}`}>
                          {vlucht.status}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-text-muted" />
                          <span className="text-text">{vlucht.datum}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-text-muted" />
                          <span className="text-text">{vlucht.tijd}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-text-muted" />
                          <span className="text-text">{vlucht.van} → {vlucht.naar}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transfers */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold text-text mb-6">Transfers</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {transportData.transfers.map((transfer) => (
                    <div key={transfer.id} className="bg-surface border border-gray-700 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-text font-bold">{transfer.type}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(transfer.status)}`}>
                          {transfer.status}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-text-muted" />
                          <span className="text-text">{transfer.datum}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-text-muted" />
                          <span className="text-text">{transfer.tijd}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-text-muted" />
                          <span className="text-text">{transfer.passagiers} passagiers</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Huurautos */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold text-text mb-6">Huurautos</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {transportData.huurautos.map((auto) => (
                    <div key={auto.id} className="bg-surface border border-gray-700 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-text font-bold">{auto.type}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(auto.status)}`}>
                          {auto.status}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-text-muted" />
                          <span className="text-text">{auto.datum}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-text-muted" />
                          <span className="text-text">Voor: {auto.passagier}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Catering Tab */}
          {activeTab === 'catering' && (
            <div className="space-y-6">
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold text-text mb-6">Restaurant Reserveringen</h3>
                <div className="space-y-4">
                  {cateringData.restaurants.map((restaurant) => (
                    <div key={restaurant.id} className="bg-surface border border-gray-700 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="text-text font-bold">{restaurant.naam}</h4>
                          <p className="text-text-muted text-sm">{restaurant.locatie}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(restaurant.status)}`}>
                          {restaurant.status}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Utensils className="w-4 h-4 text-text-muted" />
                          <span className="text-text">{restaurant.type}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-text-muted" />
                          <span className="text-text">{restaurant.datum}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold text-text mb-6">Speciale Dieetwensen</h3>
                <div className="space-y-4">
                  {cateringData.specialeBehoeften.map((behoefte, index) => (
                    <div key={index} className="bg-surface border border-gray-700 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-text font-bold">{behoefte.deelnemer}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(behoefte.status)}`}>
                          {behoefte.status}
                        </span>
                      </div>
                      <p className="text-text">{behoefte.behoefte}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Activiteiten Tab */}
          {activeTab === 'activiteiten' && (
            <div className="glass-effect rounded-2xl p-6">
              <h3 className="text-xl font-bold text-text mb-6">Dagprogramma</h3>
              <div className="space-y-4">
                {activiteitenData.dagprogramma.map((dag) => (
                  <div key={dag.id} className="bg-surface border border-gray-700 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="text-text font-bold">{dag.dag}</h4>
                        <p className="text-text-muted text-sm">{dag.datum}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(dag.status)}`}>
                        {dag.status}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-text-muted" />
                        <span className="text-text font-medium">{dag.activiteit}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-text-muted" />
                        <span className="text-text">{dag.locatie}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
