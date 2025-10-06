'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  Download,
  Upload,
  Trash2,
  Save,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Moon,
  Sun,
  Monitor,
  Volume2,
  VolumeX,
  Wifi,
  Smartphone,
  Laptop
} from 'lucide-react'

export default function InstellingenPage() {
  const [activeTab, setActiveTab] = useState('profiel')
  const [showPassword, setShowPassword] = useState(false)

  const tabs = [
    { id: 'profiel', label: 'Profiel', icon: User },
    { id: 'notificaties', label: 'Notificaties', icon: Bell },
    { id: 'privacy', label: 'Privacy & Veiligheid', icon: Shield },
    { id: 'weergave', label: 'Weergave', icon: Palette },
    { id: 'account', label: 'Account', icon: Lock }
  ]

  const profileData = {
    naam: 'Maria Rodriguez',
    email: 'deelnemer@curacao-retraite.com',
    telefoon: '+31 6 12345678',
    locatie: 'Amsterdam, Nederland',
    geboortedatum: '15 maart 1985',
    bio: 'Passionate about personal growth and self-discovery. Currently on a journey to redefine my life mission through the Curacao Retraite program.',
    voorkeurTaal: 'Nederlands',
    tijdzone: 'Europe/Amsterdam'
  }

  const notificationSettings = {
    email: {
      reminders: true,
      achievements: true,
      social: false,
      system: true,
      marketing: false
    },
    push: {
      enabled: true,
      reminders: true,
      achievements: true,
      social: true,
      system: true
    },
    frequency: 'daily'
  }

  const privacySettings = {
    profileVisibility: 'private',
    showProgress: false,
    allowMessages: true,
    dataCollection: true,
    analytics: false
  }

  const displaySettings = {
    theme: 'dark',
    language: 'nl',
    fontSize: 'medium',
    animations: true,
    compactMode: false
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
                <h1 className="text-2xl font-bold text-text">Instellingen</h1>
                <p className="text-text-muted">Beheer je account en voorkeuren</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-primary-blue text-white rounded-xl hover:bg-primary-blue-dark transition-colors">
                  <Save className="w-4 h-4" />
                  <span>Opslaan</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass-effect rounded-2xl p-6 sticky top-8">
                <nav className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-colors ${
                          activeTab === tab.id
                            ? 'bg-primary-blue text-white'
                            : 'text-text-muted hover:text-text hover:bg-surface-light'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{tab.label}</span>
                      </button>
                    )
                  })}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              {/* Profiel Tab */}
              {activeTab === 'profiel' && (
                <div className="space-y-6">
                  <div className="glass-effect rounded-2xl p-8">
                    <h2 className="text-xl font-bold text-text mb-6">Profiel Informatie</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-text font-medium mb-2">Volledige Naam</label>
                        <input
                          type="text"
                          value={profileData.naam}
                          className="w-full px-4 py-3 bg-surface border border-gray-700 rounded-xl text-text placeholder-text-muted focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/50 transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-text font-medium mb-2">E-mailadres</label>
                        <input
                          type="email"
                          value={profileData.email}
                          className="w-full px-4 py-3 bg-surface border border-gray-700 rounded-xl text-text placeholder-text-muted focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/50 transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-text font-medium mb-2">Telefoonnummer</label>
                        <input
                          type="tel"
                          value={profileData.telefoon}
                          className="w-full px-4 py-3 bg-surface border border-gray-700 rounded-xl text-text placeholder-text-muted focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/50 transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-text font-medium mb-2">Locatie</label>
                        <input
                          type="text"
                          value={profileData.locatie}
                          className="w-full px-4 py-3 bg-surface border border-gray-700 rounded-xl text-text placeholder-text-muted focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/50 transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-text font-medium mb-2">Geboortedatum</label>
                        <input
                          type="date"
                          value="1985-03-15"
                          className="w-full px-4 py-3 bg-surface border border-gray-700 rounded-xl text-text placeholder-text-muted focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/50 transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-text font-medium mb-2">Voorkeurstaal</label>
                        <select className="w-full px-4 py-3 bg-surface border border-gray-700 rounded-xl text-text focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/50 transition-colors">
                          <option value="nl">Nederlands</option>
                          <option value="en">English</option>
                          <option value="es">Español</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <label className="block text-text font-medium mb-2">Bio</label>
                      <textarea
                        value={profileData.bio}
                        rows={4}
                        className="w-full px-4 py-3 bg-surface border border-gray-700 rounded-xl text-text placeholder-text-muted focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/50 transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <div className="glass-effect rounded-2xl p-8">
                    <h2 className="text-xl font-bold text-text mb-6">Wachtwoord Wijzigen</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-text font-medium mb-2">Huidige Wachtwoord</label>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            className="w-full px-4 py-3 bg-surface border border-gray-700 rounded-xl text-text placeholder-text-muted focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/50 transition-colors pr-12"
                            placeholder="Voer je huidige wachtwoord in"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-muted hover:text-text"
                          >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-text font-medium mb-2">Nieuw Wachtwoord</label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 bg-surface border border-gray-700 rounded-xl text-text placeholder-text-muted focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/50 transition-colors"
                          placeholder="Voer je nieuwe wachtwoord in"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-text font-medium mb-2">Bevestig Nieuw Wachtwoord</label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 bg-surface border border-gray-700 rounded-xl text-text placeholder-text-muted focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/50 transition-colors"
                          placeholder="Bevestig je nieuwe wachtwoord"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notificaties Tab */}
              {activeTab === 'notificaties' && (
                <div className="space-y-6">
                  <div className="glass-effect rounded-2xl p-8">
                    <h2 className="text-xl font-bold text-text mb-6">E-mail Notificaties</h2>
                    
                    <div className="space-y-4">
                      {Object.entries(notificationSettings.email).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                          <div>
                            <h3 className="text-text font-medium capitalize">
                              {key === 'reminders' ? 'Herinneringen' :
                               key === 'achievements' ? 'Prestaties' :
                               key === 'social' ? 'Sociale Activiteiten' :
                               key === 'system' ? 'Systeem Updates' :
                               'Marketing Berichten'}
                            </h3>
                            <p className="text-text-muted text-sm">
                              {key === 'reminders' ? 'Ontvang herinneringen voor sessies en activiteiten' :
                               key === 'achievements' ? 'Krijg updates over je voortgang en prestaties' :
                               key === 'social' ? 'Notificaties over groepsactiviteiten en berichten' :
                               key === 'system' ? 'Belangrijke systeem updates en wijzigingen' :
                               'Marketing emails en promoties'}
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={value}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-blue"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass-effect rounded-2xl p-8">
                    <h2 className="text-xl font-bold text-text mb-6">Push Notificaties</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-text font-medium">Push Notificaties</h3>
                          <p className="text-text-muted text-sm">Ontvang meldingen op je apparaat</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notificationSettings.push.enabled}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-blue"></div>
                        </label>
                      </div>
                      
                      <div className="ml-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-text">Herinneringen</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={notificationSettings.push.reminders}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-blue"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-text">Prestaties</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={notificationSettings.push.achievements}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-blue"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Privacy Tab */}
              {activeTab === 'privacy' && (
                <div className="space-y-6">
                  <div className="glass-effect rounded-2xl p-8">
                    <h2 className="text-xl font-bold text-text mb-6">Privacy Instellingen</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-text font-medium mb-2">Profiel Zichtbaarheid</label>
                        <select className="w-full px-4 py-3 bg-surface border border-gray-700 rounded-xl text-text focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/50 transition-colors">
                          <option value="private">Privé - Alleen jij</option>
                          <option value="friends">Vrienden - Alleen groepsleden</option>
                          <option value="public">Openbaar - Iedereen</option>
                        </select>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-text font-medium">Voortgang Delen</h3>
                            <p className="text-text-muted text-sm">Laat anderen je voortgang zien</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={privacySettings.showProgress}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-blue"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-text font-medium">Berichten Toestaan</h3>
                            <p className="text-text-muted text-sm">Laat anderen je berichten sturen</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={privacySettings.allowMessages}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-blue"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="glass-effect rounded-2xl p-8">
                    <h2 className="text-xl font-bold text-text mb-6">Data & Analytics</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-text font-medium">Data Verzameling</h3>
                          <p className="text-text-muted text-sm">Verzamel gegevens om de service te verbeteren</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={privacySettings.dataCollection}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-blue"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-text font-medium">Gebruiks Analytics</h3>
                          <p className="text-text-muted text-sm">Help ons de app te verbeteren met anonieme data</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={privacySettings.analytics}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-blue"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Weergave Tab */}
              {activeTab === 'weergave' && (
                <div className="space-y-6">
                  <div className="glass-effect rounded-2xl p-8">
                    <h2 className="text-xl font-bold text-text mb-6">Thema & Weergave</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-text font-medium mb-3">Thema</label>
                        <div className="grid grid-cols-3 gap-4">
                          {[
                            { id: 'light', label: 'Licht', icon: Sun },
                            { id: 'dark', label: 'Donker', icon: Moon },
                            { id: 'auto', label: 'Automatisch', icon: Monitor }
                          ].map((theme) => {
                            const Icon = theme.icon
                            return (
                              <button
                                key={theme.id}
                                className={`flex flex-col items-center space-y-2 p-4 rounded-xl border-2 transition-colors ${
                                  displaySettings.theme === theme.id
                                    ? 'border-primary-blue bg-primary-blue/10'
                                    : 'border-gray-700 hover:border-gray-600'
                                }`}
                              >
                                <Icon className="w-6 h-6 text-text" />
                                <span className="text-text font-medium">{theme.label}</span>
                              </button>
                            )
                          })}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-text font-medium mb-2">Lettergrootte</label>
                        <select className="w-full px-4 py-3 bg-surface border border-gray-700 rounded-xl text-text focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/50 transition-colors">
                          <option value="small">Klein</option>
                          <option value="medium" selected>Normaal</option>
                          <option value="large">Groot</option>
                          <option value="xl">Extra Groot</option>
                        </select>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-text font-medium">Animaties</h3>
                            <p className="text-text-muted text-sm">Schakel animaties in/uit</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={displaySettings.animations}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-blue"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-text font-medium">Compacte Modus</h3>
                            <p className="text-text-muted text-sm">Gebruik minder ruimte op het scherm</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={displaySettings.compactMode}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-blue"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Account Tab */}
              {activeTab === 'account' && (
                <div className="space-y-6">
                  <div className="glass-effect rounded-2xl p-8">
                    <h2 className="text-xl font-bold text-text mb-6">Account Beheer</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-4 bg-surface border border-gray-700 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <Download className="w-5 h-5 text-primary-blue" />
                          <div>
                            <h3 className="text-text font-medium">Gegevens Exporteren</h3>
                            <p className="text-text-muted text-sm">Download een kopie van je gegevens</p>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-primary-blue/20 text-primary-blue rounded-lg hover:bg-primary-blue/30 transition-colors">
                          Exporteren
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-surface border border-gray-700 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <Upload className="w-5 h-5 text-green-400" />
                          <div>
                            <h3 className="text-text font-medium">Gegevens Importeren</h3>
                            <p className="text-text-muted text-sm">Importeer gegevens vanuit een backup</p>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors">
                          Importeren
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-surface border border-red-500/20 border-2 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <Trash2 className="w-5 h-5 text-red-400" />
                          <div>
                            <h3 className="text-text font-medium">Account Verwijderen</h3>
                            <p className="text-text-muted text-sm">Permanent verwijderen van je account en alle gegevens</p>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors">
                          Verwijderen
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="glass-effect rounded-2xl p-8">
                    <h2 className="text-xl font-bold text-text mb-6">Sessie Beheer</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-surface border border-gray-700 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <Laptop className="w-5 h-5 text-text-muted" />
                          <div>
                            <h3 className="text-text font-medium">Chrome - Windows</h3>
                            <p className="text-text-muted text-sm">Huidige sessie • Amsterdam, Nederland</p>
                          </div>
                        </div>
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Actief</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-surface border border-gray-700 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <Smartphone className="w-5 h-5 text-text-muted" />
                          <div>
                            <h3 className="text-text font-medium">Safari - iPhone</h3>
                            <p className="text-text-muted text-sm">Laatste activiteit 2 uur geleden</p>
                          </div>
                        </div>
                        <button className="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors text-sm">
                          Uitloggen
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
