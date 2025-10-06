'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { 
  Bell, 
  Settings, 
  Check, 
  X, 
  Filter,
  Archive,
  Trash2,
  Eye,
  EyeOff,
  Calendar,
  Users,
  BookOpen,
  MessageCircle,
  AlertCircle,
  Info,
  Star,
  Heart
} from 'lucide-react'

export default function NotificatiesPage() {
  const [filter, setFilter] = useState('all')
  const [selectedNotifications, setSelectedNotifications] = useState<number[]>([])

  const notifications = [
    {
      id: 1,
      type: 'reminder',
      title: 'Intake sessie gepland',
      message: 'Je intake sessie staat gepland voor morgen om 14:00. Zorg dat je de vragenlijst hebt ingevuld.',
      timestamp: '2 uur geleden',
      read: false,
      priority: 'high',
      icon: Calendar,
      color: 'blue'
    },
    {
      id: 2,
      type: 'achievement',
      title: 'Module voltooid! 🎉',
      message: 'Gefeliciteerd! Je hebt de module "Zelfkennis & Identiteit" succesvol afgerond.',
      timestamp: '1 dag geleden',
      read: false,
      priority: 'medium',
      icon: Star,
      color: 'green'
    },
    {
      id: 3,
      type: 'social',
      title: 'Nieuwe groepsactiviteit',
      message: 'Er is een nieuwe groepsreflectie sessie gepland voor volgende week. Schrijf je in!',
      timestamp: '2 dagen geleden',
      read: true,
      priority: 'medium',
      icon: Users,
      color: 'purple'
    },
    {
      id: 4,
      type: 'reminder',
      title: 'Dagelijkse reflectie',
      message: 'Vergeet niet om je dagelijkse reflectie in te vullen. Dit helpt bij je persoonlijke groei.',
      timestamp: '3 dagen geleden',
      read: true,
      priority: 'low',
      icon: BookOpen,
      color: 'orange'
    },
    {
      id: 5,
      type: 'system',
      title: 'Welkom bij Curacao Retraite!',
      message: 'Welkom bij het Curacao Retraite programma. Begin met het invullen van je intake om te starten.',
      timestamp: '1 week geleden',
      read: true,
      priority: 'high',
      icon: Heart,
      color: 'blue'
    },
    {
      id: 6,
      type: 'message',
      title: 'Bericht van je begeleider',
      message: 'Hoi Maria! Ik heb je intake doorgelezen. Laten we volgende week een gesprek plannen.',
      timestamp: '1 week geleden',
      read: true,
      priority: 'medium',
      icon: MessageCircle,
      color: 'blue'
    },
    {
      id: 7,
      type: 'reminder',
      title: 'Mindfulness sessie',
      message: 'Je volgende mindfulness sessie staat gepland voor vrijdag. Bereid je voor op een meditatie sessie.',
      timestamp: '1 week geleden',
      read: true,
      priority: 'low',
      icon: Heart,
      color: 'green'
    },
    {
      id: 8,
      type: 'achievement',
      title: 'Voortgang mijlpaal',
      message: 'Je hebt 25% van het programma voltooid! Blijf zo doorgaan.',
      timestamp: '2 weken geleden',
      read: true,
      priority: 'medium',
      icon: Star,
      color: 'green'
    }
  ]

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'all') return true
    if (filter === 'unread') return !notification.read
    if (filter === 'high') return notification.priority === 'high'
    return notification.type === filter
  })

  const unreadCount = notifications.filter(n => !n.read).length

  const handleSelectNotification = (id: number) => {
    setSelectedNotifications(prev => 
      prev.includes(id) 
        ? prev.filter(nId => nId !== id)
        : [...prev, id]
    )
  }

  const handleMarkAsRead = (id: number) => {
    // In een echte app zou dit een API call zijn
    console.log(`Mark notification ${id} as read`)
  }

  const handleArchive = (id: number) => {
    // In een echte app zou dit een API call zijn
    console.log(`Archive notification ${id}`)
  }

  const handleDelete = (id: number) => {
    // In een echte app zou dit een API call zijn
    console.log(`Delete notification ${id}`)
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'reminder': return Calendar
      case 'achievement': return Star
      case 'social': return Users
      case 'system': return Info
      case 'message': return MessageCircle
      default: return Bell
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400'
      case 'medium': return 'text-yellow-400'
      case 'low': return 'text-green-400'
      default: return 'text-gray-400'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'reminder': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'achievement': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'social': return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      case 'system': return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
      case 'message': return 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
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
                <h1 className="text-2xl font-bold text-text">Notificaties</h1>
                <p className="text-text-muted">Beheer je meldingen en updates</p>
              </div>
              <div className="flex items-center space-x-4">
                {unreadCount > 0 && (
                  <div className="bg-primary-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                    {unreadCount} ongelezen
                  </div>
                )}
                <button className="flex items-center space-x-2 px-4 py-2 bg-surface-light border border-gray-700 rounded-xl hover:bg-gray-700 transition-colors">
                  <Settings className="w-4 h-4" />
                  <span>Instellingen</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 py-8">
          {/* Filters */}
          <div className="glass-effect rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Filter className="w-5 h-5 text-text-muted" />
                <span className="text-text font-medium">Filter:</span>
                <div className="flex space-x-2">
                  {[
                    { key: 'all', label: 'Alle', count: notifications.length },
                    { key: 'unread', label: 'Ongelezen', count: unreadCount },
                    { key: 'high', label: 'Belangrijk', count: notifications.filter(n => n.priority === 'high').length },
                    { key: 'reminder', label: 'Herinneringen', count: notifications.filter(n => n.type === 'reminder').length },
                    { key: 'achievement', label: 'Prestaties', count: notifications.filter(n => n.type === 'achievement').length }
                  ].map((filterOption) => (
                    <button
                      key={filterOption.key}
                      onClick={() => setFilter(filterOption.key)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                        filter === filterOption.key
                          ? 'bg-primary-blue text-white'
                          : 'bg-surface text-text-muted hover:text-text hover:bg-surface-light border border-gray-700'
                      }`}
                    >
                      {filterOption.label} ({filterOption.count})
                    </button>
                  ))}
                </div>
              </div>
              
              {selectedNotifications.length > 0 && (
                <div className="flex items-center space-x-2">
                  <span className="text-text-muted text-sm">{selectedNotifications.length} geselecteerd</span>
                  <button className="flex items-center space-x-2 px-3 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors">
                    <Check className="w-4 h-4" />
                    <span>Markeer als gelezen</span>
                  </button>
                  <button className="flex items-center space-x-2 px-3 py-2 bg-orange-500/20 text-orange-400 rounded-lg hover:bg-orange-500/30 transition-colors">
                    <Archive className="w-4 h-4" />
                    <span>Archiveer</span>
                  </button>
                  <button className="flex items-center space-x-2 px-3 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors">
                    <Trash2 className="w-4 h-4" />
                    <span>Verwijder</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Notifications List */}
          <div className="space-y-4">
            {filteredNotifications.length === 0 ? (
              <div className="glass-effect rounded-2xl p-12 text-center">
                <Bell className="w-16 h-16 text-text-muted mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-text mb-2">Geen notificaties</h3>
                <p className="text-text-muted">
                  {filter === 'all' ? 'Je hebt nog geen notificaties ontvangen.' : 
                   filter === 'unread' ? 'Alle notificaties zijn gelezen.' :
                   'Geen notificaties gevonden voor dit filter.'}
                </p>
              </div>
            ) : (
              filteredNotifications.map((notification) => {
                const Icon = getNotificationIcon(notification.type)
                return (
                  <div 
                    key={notification.id}
                    className={`glass-effect rounded-2xl p-6 transition-all duration-200 hover:border-primary-blue/30 ${
                      !notification.read ? 'border-l-4 border-l-primary-blue' : ''
                    } ${selectedNotifications.includes(notification.id) ? 'ring-2 ring-primary-blue/50' : ''}`}
                  >
                    <div className="flex items-start space-x-4">
                      <input
                        type="checkbox"
                        checked={selectedNotifications.includes(notification.id)}
                        onChange={() => handleSelectNotification(notification.id)}
                        className="mt-1 w-4 h-4 text-primary-blue bg-surface border-gray-600 rounded focus:ring-primary-blue/50"
                      />
                      
                      <div className={`w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <h3 className={`font-semibold ${!notification.read ? 'text-text' : 'text-text-muted'}`}>
                              {notification.title}
                            </h3>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                            )}
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(notification.type)}`}>
                              {notification.type}
                            </span>
                            <span className={`text-xs ${getPriorityColor(notification.priority)}`}>
                              {notification.priority}
                            </span>
                          </div>
                          <span className="text-text-muted text-sm">{notification.timestamp}</span>
                        </div>
                        
                        <p className={`text-sm mb-3 ${!notification.read ? 'text-text-secondary' : 'text-text-muted'}`}>
                          {notification.message}
                        </p>
                        
                        <div className="flex items-center space-x-2">
                          {!notification.read && (
                            <button
                              onClick={() => handleMarkAsRead(notification.id)}
                              className="flex items-center space-x-1 px-3 py-1 bg-primary-blue/20 text-primary-blue rounded-lg hover:bg-primary-blue/30 transition-colors text-xs"
                            >
                              <Eye className="w-3 h-3" />
                              <span>Markeer als gelezen</span>
                            </button>
                          )}
                          <button
                            onClick={() => handleArchive(notification.id)}
                            className="flex items-center space-x-1 px-3 py-1 bg-orange-500/20 text-orange-400 rounded-lg hover:bg-orange-500/30 transition-colors text-xs"
                          >
                            <Archive className="w-3 h-3" />
                            <span>Archiveer</span>
                          </button>
                          <button
                            onClick={() => handleDelete(notification.id)}
                            className="flex items-center space-x-1 px-3 py-1 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors text-xs"
                          >
                            <Trash2 className="w-3 h-3" />
                            <span>Verwijder</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            )}
          </div>

          {/* Bulk Actions */}
          {filteredNotifications.length > 0 && (
            <div className="mt-8 glass-effect rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-text mb-4">Bulk Acties</h3>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-primary-blue/20 text-primary-blue rounded-xl hover:bg-primary-blue/30 transition-colors">
                  <Check className="w-4 h-4" />
                  <span>Alles markeren als gelezen</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-orange-500/20 text-orange-400 rounded-xl hover:bg-orange-500/30 transition-colors">
                  <Archive className="w-4 h-4" />
                  <span>Alles archiveren</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-xl hover:bg-red-500/30 transition-colors">
                  <Trash2 className="w-4 h-4" />
                  <span>Alles verwijderen</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
