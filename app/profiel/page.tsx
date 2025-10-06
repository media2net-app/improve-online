'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { 
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit,
  Save,
  Camera,
  Shield,
  Bell,
  Globe,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  Star,
  Award,
  TrendingUp,
  Clock,
  Target,
  BookOpen,
  Trophy,
  Settings,
  Key,
  Smartphone,
  Monitor,
  Moon,
  Sun,
  Palette
} from 'lucide-react'

export default function Profiel() {
  const [activeTab, setActiveTab] = useState('overview')
  const [isEditing, setIsEditing] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    marketing: false
  })

  // Demo gebruiker data
  const gebruiker = {
    naam: 'Maria Rodriguez',
    email: 'deelnemer@curacao-retraite.com',
    telefoon: '+31 6 12345678',
    locatie: 'Amsterdam, Nederland',
    functie: 'Retraite Deelnemer',
    bedrijf: 'Curacao Retraite',
    lidSinds: '2023-01-15',
    avatar: null,
    bio: 'Passionate deelnemer aan het Curacao Retraite programma, gericht op persoonlijke groei en het herdefiniëren van mijn levensmissie. Op zoek naar diepere zelfkennis en betekenisvol leven.',
    specialisaties: ['Zelfreflectie', 'Persoonlijke Groei', 'Missie Definitie', 'Mindfulness'],
    talen: ['Nederlands (Native)', 'Engels (Vloeiend)', 'Spaans (Basis)'],
    certificeringen: [
      { naam: 'Mindfulness Practitioner', organisatie: 'Curacao Retraite', datum: '2024-01-15' },
      { naam: 'Personal Growth Coach', organisatie: 'Retraite Academy', datum: '2024-02-20' },
      { naam: 'Life Mission Specialist', organisatie: 'Curacao Retraite', datum: '2024-03-10' }
    ]
  }

  const statistieken = {
    totaalReflecties: 24,
    persoonlijkeGroei: 8.2,
    retraiteStreak: '7 dagen',
    voltooideModules: 3,
    totaalUren: 45,
    volgendeMijlpaal: 'Mission Statement'
  }

  const recenteActiviteiten = [
    { id: 1, actie: 'Dagelijkse reflectie voltooid', details: 'Waar ben ik vandaag dankbaar voor?', tijd: '2 uur geleden', type: 'success' },
    { id: 2, actie: 'IKIGAI workshop voltooid', details: 'Persoonlijke waarden ontdekt op Klein Curaçao', tijd: '1 dag geleden', type: 'achievement' },
    { id: 3, actie: 'Christoffelberg beklommen', details: 'Uitdagende hike van 372 meter hoogte', tijd: '3 dagen geleden', type: 'challenge' },
    { id: 4, actie: 'Mission Statement gestart', details: 'Persoonlijke missie en visie formuleren', tijd: '1 week geleden', type: 'progress' }
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="w-5 h-5 text-green-400" />
      case 'info': return <User className="w-5 h-5 text-blue-400" />
      case 'achievement': return <Award className="w-5 h-5 text-primary-blue" />
      case 'financial': return <TrendingUp className="w-5 h-5 text-green-400" />
      default: return <Clock className="w-5 h-5 text-text-muted" />
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
                <h1 className="text-3xl font-bold text-text">Mijn Profiel</h1>
                <p className="text-text-muted">Beheer je account en voorkeuren</p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="btn-primary flex items-center space-x-2"
                >
                  {isEditing ? <Save className="w-5 h-5" /> : <Edit className="w-5 h-5" />}
                  <span>{isEditing ? 'Opslaan' : 'Bewerken'}</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 py-8">
          {/* Profile Header */}
          <div className="glass-effect rounded-2xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-full flex items-center justify-center luxury-glow">
                  <span className="text-black font-bold text-4xl">
                    {gebruiker.naam.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <button className="absolute bottom-0 right-0 w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center hover:bg-primary-blue-dark transition-colors">
                  <Camera className="w-5 h-5 text-black" />
                </button>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-4">
                  <h2 className="text-3xl font-bold text-text">{gebruiker.naam}</h2>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-primary-blue fill-current" />
                    <span className="text-primary-blue font-semibold">{statistieken.persoonlijkeGroei}/10</span>
                  </div>
                </div>
                <p className="text-text-secondary text-lg mb-2">{gebruiker.functie}</p>
                <p className="text-text-muted mb-4">{gebruiker.bio}</p>
                
                <div className="flex flex-wrap gap-2">
                  {gebruiker.specialisaties.map((spec, index) => (
                    <span key={index} className="px-3 py-1 bg-primary-blue/10 text-primary-blue text-sm rounded-full border border-primary-blue/20">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-text">{statistieken.totaalReflecties}</p>
                  <p className="text-text-muted text-sm">Reflecties</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-text">{statistieken.retraiteStreak}</p>
                  <p className="text-text-muted text-sm">Streak</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 mb-8 bg-surface rounded-2xl p-2">
            {[
              { id: 'overview', label: 'Overzicht', icon: User },
              { id: 'settings', label: 'Instellingen', icon: Settings },
              { id: 'security', label: 'Beveiliging', icon: Shield },
              { id: 'notifications', label: 'Notificaties', icon: Bell }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-medium transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-primary-blue text-black' 
                    : 'text-text-muted hover:text-text hover:bg-surface-light'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Statistics */}
              <div className="lg:col-span-2">
                <div className="glass-effect rounded-2xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-text mb-6">Statistieken</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <BookOpen className="w-8 h-8 text-black" />
                      </div>
                      <p className="text-2xl font-bold text-text">{statistieken.voltooideModules}</p>
                      <p className="text-text-muted text-sm">Modules voltooid</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-2xl font-bold text-text">{statistieken.retraiteStreak}</p>
                      <p className="text-text-muted text-sm">Reflectie streak</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-2xl font-bold text-text">{statistieken.totaalUren}h</p>
                      <p className="text-text-muted text-sm">Totaal reflectietijd</p>
                    </div>
                  </div>
                </div>

                {/* Recent Activities */}
                <div className="glass-effect rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-text mb-6">Recente activiteiten</h3>
                  <div className="space-y-4">
                    {recenteActiviteiten.map((activiteit) => (
                      <div key={activiteit.id} className="flex items-center space-x-4 p-4 bg-surface rounded-xl border border-gray-700">
                        {getActivityIcon(activiteit.type)}
                        <div className="flex-1">
                          <p className="font-semibold text-text">{activiteit.actie}</p>
                          <p className="text-text-muted text-sm">{activiteit.details}</p>
                        </div>
                        <span className="text-text-muted text-sm">{activiteit.tijd}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Certificeringen */}
                <div className="glass-effect rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-text mb-4">Certificeringen</h3>
                  <div className="space-y-4">
                    {gebruiker.certificeringen.map((cert, index) => (
                      <div key={index} className="p-4 bg-surface rounded-xl border border-gray-700">
                        <div className="flex items-center space-x-3 mb-2">
                          <Trophy className="w-5 h-5 text-primary-blue" />
                          <h4 className="font-semibold text-text">{cert.naam}</h4>
                        </div>
                        <p className="text-text-muted text-sm">{cert.organisatie}</p>
                        <p className="text-text-muted text-xs">{new Date(cert.datum).toLocaleDateString('nl-NL')}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Talen */}
                <div className="glass-effect rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-text mb-4">Talen</h3>
                  <div className="space-y-3">
                    {gebruiker.talen.map((taal, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Globe className="w-5 h-5 text-primary-blue" />
                        <span className="text-text">{taal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold text-text mb-6">Persoonlijke informatie</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Volledige naam</label>
                    <input
                      type="text"
                      defaultValue={gebruiker.naam}
                      disabled={!isEditing}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">E-mailadres</label>
                    <input
                      type="email"
                      defaultValue={gebruiker.email}
                      disabled={!isEditing}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Telefoonnummer</label>
                    <input
                      type="tel"
                      defaultValue={gebruiker.telefoon}
                      disabled={!isEditing}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Locatie</label>
                    <input
                      type="text"
                      defaultValue={gebruiker.locatie}
                      disabled={!isEditing}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Bio</label>
                    <textarea
                      defaultValue={gebruiker.bio}
                      disabled={!isEditing}
                      rows={4}
                      className="input-field resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold text-text mb-6">Voorkeuren</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-text">Donkere modus</h4>
                      <p className="text-text-muted text-sm">Gebruik donker thema</p>
                    </div>
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        darkMode ? 'bg-primary-blue' : 'bg-gray-600'
                      }`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        darkMode ? 'translate-x-7' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-text">Taal</h4>
                      <p className="text-text-muted text-sm">Interface taal</p>
                    </div>
                    <select className="input-field w-32">
                      <option>Nederlands</option>
                      <option>English</option>
                      <option>Deutsch</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-text">Tijdzone</h4>
                      <p className="text-text-muted text-sm">Amsterdam (GMT+1)</p>
                    </div>
                    <button className="text-primary-blue hover:text-primary-blue/80 transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Password */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold text-text mb-6">Wachtwoord</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Huidig wachtwoord</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="input-field pr-12"
                        placeholder="••••••••"
                      />
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-muted hover:text-text transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Nieuw wachtwoord</label>
                    <input
                      type="password"
                      className="input-field"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Bevestig wachtwoord</label>
                    <input
                      type="password"
                      className="input-field"
                      placeholder="••••••••"
                    />
                  </div>
                  <button className="btn-primary w-full">
                    Wachtwoord bijwerken
                  </button>
                </div>
              </div>

              {/* Two-Factor Authentication */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold text-text mb-6">Twee-factor authenticatie</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-surface rounded-xl border border-gray-700">
                    <div className="flex items-center space-x-3">
                      <Smartphone className="w-5 h-5 text-primary-blue" />
                      <div>
                        <h4 className="font-semibold text-text">SMS verificatie</h4>
                        <p className="text-text-muted text-sm">+31 6 12345678</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                      Actief
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-surface rounded-xl border border-gray-700">
                    <div className="flex items-center space-x-3">
                      <Monitor className="w-5 h-5 text-primary-blue" />
                      <div>
                        <h4 className="font-semibold text-text">Authenticator app</h4>
                        <p className="text-text-muted text-sm">Google Authenticator</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full border border-gray-500/30">
                      Inactief
                    </span>
                  </div>

                  <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-surface border border-gray-700 rounded-xl text-text hover:border-primary-blue/30 transition-colors">
                    <Key className="w-5 h-5" />
                    <span>2FA instellen</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="glass-effect rounded-2xl p-6">
              <h3 className="text-xl font-bold text-text mb-6">Notificatie voorkeuren</h3>
              <div className="space-y-6">
                {Object.entries(notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-text capitalize">{key}</h4>
                      <p className="text-text-muted text-sm">
                        {key === 'email' && 'Ontvang e-mail notificaties'}
                        {key === 'push' && 'Browser push notificaties'}
                        {key === 'sms' && 'SMS notificaties'}
                        {key === 'marketing' && 'Marketing e-mails'}
                      </p>
                    </div>
                    <button
                      onClick={() => setNotifications(prev => ({ ...prev, [key]: !value }))}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        value ? 'bg-primary-blue' : 'bg-gray-600'
                      }`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        value ? 'translate-x-7' : 'translate-x-1'
                      }`} />
                    </button>
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
