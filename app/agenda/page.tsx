'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { 
  Calendar,
  Clock,
  Plus,
  Filter,
  Search,
  MapPin,
  Users,
  Video,
  Phone,
  Mail,
  Edit,
  Trash2,
  CheckCircle,
  AlertCircle,
  Star,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  X,
  Save
} from 'lucide-react'

export default function Agenda() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [view, setView] = useState('week')
  const [showAddModal, setShowAddModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [showMeetingModal, setShowMeetingModal] = useState(false)
  const [showCallModal, setShowCallModal] = useState(false)
  const [showTeamModal, setShowTeamModal] = useState(false)
  const [showReminderModal, setShowReminderModal] = useState(false)

  // Demo afspraken data
  const afspraken = [
    {
      id: 1,
      titel: 'Client meeting - Sarah van der Berg',
      type: 'meeting',
      start: '2024-01-15T09:00:00',
      end: '2024-01-15T10:00:00',
      locatie: 'Zoom',
      beschrijving: 'Wekelijkse voortgangsbespreking',
      klant: 'Sarah van der Berg',
      status: 'bevestigd',
      kleur: 'blue'
    },
    {
      id: 2,
      titel: 'Project kickoff - TechStart',
      type: 'project',
      start: '2024-01-15T14:00:00',
      end: '2024-01-15T16:00:00',
      locatie: 'Kantoor Amsterdam',
      beschrijving: 'Start van nieuw VA project',
      klant: 'TechStart BV',
      status: 'bevestigd',
      kleur: 'green'
    },
    {
      id: 3,
      titel: 'Training sessie - Email automatisering',
      type: 'training',
      start: '2024-01-16T10:00:00',
      end: '2024-01-16T12:00:00',
      locatie: 'Online',
      beschrijving: 'Interne training voor team',
      klant: 'Intern',
      status: 'gepland',
      kleur: 'purple'
    },
    {
      id: 4,
      titel: 'Client call - Mark Janssen',
      type: 'call',
      start: '2024-01-16T15:30:00',
      end: '2024-01-16T16:00:00',
      locatie: 'Telefoon',
      beschrijving: 'Follow-up gesprek',
      klant: 'Mark Janssen',
      status: 'bevestigd',
      kleur: 'orange'
    },
    {
      id: 5,
      titel: 'Team standup',
      type: 'meeting',
      start: '2024-01-17T09:00:00',
      end: '2024-01-17T09:30:00',
      locatie: 'Kantoor',
      beschrijving: 'Dagelijkse standup meeting',
      klant: 'Intern',
      status: 'bevestigd',
      kleur: 'blue'
    },
    {
      id: 6,
      titel: 'Project review - Global Solutions',
      type: 'project',
      start: '2024-01-18T11:00:00',
      end: '2024-01-18T12:00:00',
      locatie: 'Zoom',
      beschrijving: 'Maandelijkse project review',
      klant: 'Lisa Chen',
      status: 'gepland',
      kleur: 'green'
    }
  ]

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'meeting': return <Users className="w-4 h-4" />
      case 'project': return <CheckCircle className="w-4 h-4" />
      case 'training': return <Star className="w-4 h-4" />
      case 'call': return <Phone className="w-4 h-4" />
      default: return <Calendar className="w-4 h-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'bevestigd': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'gepland': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'uitgesteld': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'geannuleerd': return 'bg-red-500/20 text-red-400 border-red-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getEventColor = (kleur: string) => {
    switch (kleur) {
      case 'blue': return 'border-l-blue-500 bg-blue-500/5'
      case 'green': return 'border-l-green-500 bg-green-500/5'
      case 'purple': return 'border-l-purple-500 bg-purple-500/5'
      case 'orange': return 'border-l-orange-500 bg-orange-500/5'
      default: return 'border-l-gray-500 bg-gray-500/5'
    }
  }

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('nl-NL', { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('nl-NL', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    })
  }

  // Calendar functions
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()
    
    const days = []
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }
    
    return days
  }

  const getWeekDays = (date: Date) => {
    const startOfWeek = new Date(date)
    startOfWeek.setDate(date.getDate() - date.getDay() + 1) // Start on Monday
    
    const weekDays = []
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek)
      day.setDate(startOfWeek.getDate() + i)
      weekDays.push(day)
    }
    return weekDays
  }

  const getEventsForDate = (date: Date) => {
    const dateString = date.toISOString().split('T')[0]
    return afspraken.filter(event => {
      const eventDate = new Date(event.start).toISOString().split('T')[0]
      return eventDate === dateString
    })
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }

  const isSelected = (date: Date) => {
    return date.toDateString() === selectedDate.toDateString()
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate)
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1)
    } else {
      newDate.setMonth(newDate.getMonth() + 1)
    }
    setCurrentDate(newDate)
  }

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate)
    if (direction === 'prev') {
      newDate.setDate(newDate.getDate() - 7)
    } else {
      newDate.setDate(newDate.getDate() + 7)
    }
    setCurrentDate(newDate)
  }

  const navigateDay = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate)
    if (direction === 'prev') {
      newDate.setDate(newDate.getDate() - 1)
    } else {
      newDate.setDate(newDate.getDate() + 1)
    }
    setCurrentDate(newDate)
  }

  const renderCalendarGrid = () => {
    if (view === 'month') {
      const days = getDaysInMonth(currentDate)
      return (
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => (
            <div
              key={index}
              className={`min-h-[120px] p-2 border border-gray-700 rounded-lg ${
                day ? 'bg-surface hover:bg-surface-light cursor-pointer' : 'bg-gray-900'
              } ${isToday(day) ? 'ring-2 ring-primary-gold' : ''} ${
                isSelected(day) ? 'bg-primary-gold/20' : ''
              }`}
              onClick={() => day && setSelectedDate(day)}
            >
              {day && (
                <>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm font-medium ${
                      isToday(day) ? 'text-primary-gold' : 'text-text'
                    }`}>
                      {day.getDate()}
                    </span>
                    {getEventsForDate(day).length > 0 && (
                      <span className="w-2 h-2 bg-primary-gold rounded-full"></span>
                    )}
                  </div>
                  <div className="space-y-1">
                    {getEventsForDate(day).slice(0, 2).map((event) => (
                      <div
                        key={event.id}
                        className={`p-1 rounded text-xs ${getEventColor(event.kleur)}`}
                      >
                        <p className="text-text font-medium truncate">{event.titel}</p>
                        <p className="text-text-muted">{formatTime(event.start)}</p>
                      </div>
                    ))}
                    {getEventsForDate(day).length > 2 && (
                      <p className="text-xs text-text-muted">
                        +{getEventsForDate(day).length - 2} meer
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )
    } else if (view === 'week') {
      const weekDays = getWeekDays(currentDate)
      return (
        <div className="grid grid-cols-7 gap-1">
          {weekDays.map((day, index) => (
            <div
              key={index}
              className={`min-h-[200px] p-2 border border-gray-700 rounded-lg ${
                'bg-surface hover:bg-surface-light cursor-pointer'
              } ${isToday(day) ? 'ring-2 ring-primary-gold' : ''} ${
                isSelected(day) ? 'bg-primary-gold/20' : ''
              }`}
              onClick={() => setSelectedDate(day)}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-sm font-medium ${
                  isToday(day) ? 'text-primary-gold' : 'text-text'
                }`}>
                  {day.getDate()}
                </span>
                <span className="text-xs text-text-muted">
                  {day.toLocaleDateString('nl-NL', { weekday: 'short' })}
                </span>
              </div>
              <div className="space-y-1">
                {getEventsForDate(day).map((event) => (
                  <div
                    key={event.id}
                    className={`p-2 rounded text-xs ${getEventColor(event.kleur)}`}
                  >
                    <p className="text-text font-medium truncate">{event.titel}</p>
                    <p className="text-text-muted">{formatTime(event.start)}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )
    } else {
      // Day view
      const day = currentDate
      const events = getEventsForDate(day)
      return (
        <div className="space-y-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-text">
              {day.toLocaleDateString('nl-NL', { 
                weekday: 'long', 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
              })}
            </h3>
          </div>
          <div className="space-y-4">
            {events.length > 0 ? (
              events.map((event) => (
                <div
                  key={event.id}
                  className={`p-4 rounded-xl border-l-4 ${getEventColor(event.kleur)}`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    {getEventIcon(event.type)}
                    <h4 className="font-semibold text-text">{event.titel}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(event.status)}`}>
                      {event.status}
                    </span>
                  </div>
                  <p className="text-text-muted text-sm mb-2">{event.beschrijving}</p>
                  <div className="flex items-center space-x-4 text-sm text-text-muted">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{formatTime(event.start)} - {formatTime(event.end)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{event.locatie}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <Calendar className="w-16 h-16 text-text-muted mx-auto mb-4" />
                <p className="text-text-muted">Geen afspraken voor deze dag</p>
              </div>
            )}
          </div>
        </div>
      )
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
                <h1 className="text-3xl font-bold text-text">Agenda</h1>
                <p className="text-text-muted">Beheer je afspraken en planning</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setView('day')}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                      view === 'day' ? 'bg-primary-gold text-black' : 'bg-surface text-text-muted hover:text-text'
                    }`}
                  >
                    Dag
                  </button>
                  <button
                    onClick={() => setView('week')}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                      view === 'week' ? 'bg-primary-gold text-black' : 'bg-surface text-text-muted hover:text-text'
                    }`}
                  >
                    Week
                  </button>
                  <button
                    onClick={() => setView('month')}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                      view === 'month' ? 'bg-primary-gold text-black' : 'bg-surface text-text-muted hover:text-text'
                    }`}
                  >
                    Maand
                  </button>
                </div>
                <button
                  onClick={() => setShowAddModal(true)}
                  className="btn-primary flex items-center space-x-2"
                >
                  <Plus className="w-5 h-5" />
                  <span>Nieuwe afspraak</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 py-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Vandaag</p>
                  <p className="text-3xl font-bold text-text">{afspraken.filter(a => {
                    const today = new Date().toDateString()
                    return new Date(a.start).toDateString() === today
                  }).length}</p>
                </div>
                <Calendar className="w-8 h-8 text-primary-gold" />
              </div>
              <p className="text-text-muted text-xs mt-2">afspraken</p>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Deze week</p>
                  <p className="text-3xl font-bold text-text">{afspraken.filter(a => {
                    const startOfWeek = new Date()
                    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay())
                    const endOfWeek = new Date(startOfWeek)
                    endOfWeek.setDate(endOfWeek.getDate() + 6)
                    const eventDate = new Date(a.start)
                    return eventDate >= startOfWeek && eventDate <= endOfWeek
                  }).length}</p>
                </div>
                <Clock className="w-8 h-8 text-primary-gold" />
              </div>
              <p className="text-text-muted text-xs mt-2">gepland</p>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Volgende</p>
                  <p className="text-lg font-semibold text-text">
                    {afspraken
                      .filter(a => new Date(a.start) > new Date())
                      .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())[0]?.titel || 'Geen'}
                  </p>
                </div>
                <AlertCircle className="w-8 h-8 text-primary-gold" />
              </div>
              <p className="text-text-muted text-xs mt-2">aankomende afspraak</p>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Bevestigd</p>
                  <p className="text-3xl font-bold text-text">
                    {afspraken.filter(a => a.status === 'bevestigd').length}
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <p className="text-text-muted text-xs mt-2">van de {afspraken.length}</p>
            </div>
          </div>

          {/* Calendar Navigation */}
          <div className="glass-effect rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => {
                    if (view === 'day') navigateDay('prev')
                    else if (view === 'week') navigateWeek('prev')
                    else navigateMonth('prev')
                  }}
                  className="p-2 text-text-muted hover:bg-surface-light rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h2 className="text-xl font-bold text-text">
                  {currentDate.toLocaleDateString('nl-NL', { 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </h2>
                <button
                  onClick={() => {
                    if (view === 'day') navigateDay('next')
                    else if (view === 'week') navigateWeek('next')
                    else navigateMonth('next')
                  }}
                  className="p-2 text-text-muted hover:bg-surface-light rounded-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <button
                onClick={() => setCurrentDate(new Date())}
                className="px-4 py-2 bg-surface border border-gray-700 rounded-xl text-text hover:border-primary-gold/30 transition-colors"
              >
                Vandaag
              </button>
            </div>

            {/* Calendar Grid */}
            <div className="glass-effect rounded-2xl p-6">
              {view === 'month' && (
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'].map(day => (
                    <div key={day} className="text-center text-text-muted text-sm font-medium py-2">
                      {day}
                    </div>
                  ))}
                </div>
              )}
              {view === 'week' && (
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {getWeekDays(currentDate).map((day, index) => (
                    <div key={index} className="text-center text-text-muted text-sm font-medium py-2">
                      {day.toLocaleDateString('nl-NL', { weekday: 'short' })}
                    </div>
                  ))}
                </div>
              )}
              {renderCalendarGrid()}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-effect rounded-2xl p-6">
              <h2 className="text-xl font-bold text-text mb-4">Aankomende afspraken</h2>
              <div className="space-y-4">
                {afspraken
                  .filter(a => new Date(a.start) > new Date())
                  .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
                  .slice(0, 5)
                  .map((afspraak) => (
                    <div key={afspraak.id} className={`p-4 rounded-xl border-l-4 ${getEventColor(afspraak.kleur)}`}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            {getEventIcon(afspraak.type)}
                            <h3 className="font-semibold text-text">{afspraak.titel}</h3>
                          </div>
                          <p className="text-text-muted text-sm mb-2">{afspraak.beschrijving}</p>
                          <div className="flex items-center space-x-4 text-sm text-text-muted">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{formatTime(afspraak.start)} - {formatTime(afspraak.end)}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{afspraak.locatie}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(afspraak.status)}`}>
                            {afspraak.status}
                          </span>
                          <button className="p-1 text-text-muted hover:bg-surface-light rounded transition-colors">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-effect rounded-2xl p-6">
              <h2 className="text-xl font-bold text-text mb-4">Snelle acties</h2>
              <div className="space-y-3">
                <button 
                  onClick={() => setShowMeetingModal(true)}
                  className="w-full flex items-center space-x-3 p-3 bg-surface rounded-xl hover:bg-surface-light transition-colors"
                >
                  <Video className="w-5 h-5 text-primary-gold" />
                  <span>Nieuwe meeting</span>
                </button>
                <button 
                  onClick={() => setShowCallModal(true)}
                  className="w-full flex items-center space-x-3 p-3 bg-surface rounded-xl hover:bg-surface-light transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary-gold" />
                  <span>Telefoon afspraak</span>
                </button>
                <button 
                  onClick={() => setShowTeamModal(true)}
                  className="w-full flex items-center space-x-3 p-3 bg-surface rounded-xl hover:bg-surface-light transition-colors"
                >
                  <Users className="w-5 h-5 text-primary-gold" />
                  <span>Team meeting</span>
                </button>
                <button 
                  onClick={() => setShowReminderModal(true)}
                  className="w-full flex items-center space-x-3 p-3 bg-surface rounded-xl hover:bg-surface-light transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary-gold" />
                  <span>Email herinnering</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meeting Modal */}
      {showMeetingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-2xl p-8 w-full max-w-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text">Nieuwe meeting</h2>
              <button
                onClick={() => setShowMeetingModal(false)}
                className="p-2 text-text-muted hover:text-text transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text mb-2">Meeting titel</label>
                <input type="text" className="input-field" placeholder="Client meeting" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Start tijd</label>
                  <input type="datetime-local" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Eind tijd</label>
                  <input type="datetime-local" className="input-field" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-2">Locatie</label>
                <input type="text" className="input-field" placeholder="Zoom, Kantoor, etc." />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-2">Beschrijving</label>
                <textarea className="input-field" rows={3} placeholder="Meeting details..."></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowMeetingModal(false)}
                  className="px-6 py-3 bg-surface border border-gray-700 rounded-xl text-text hover:border-primary-gold/30 transition-colors"
                >
                  Annuleren
                </button>
                <button
                  onClick={() => {
                    alert('Meeting toegevoegd!')
                    setShowMeetingModal(false)
                  }}
                  className="btn-primary flex items-center space-x-2"
                >
                  <Save className="w-5 h-5" />
                  <span>Meeting toevoegen</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call Modal */}
      {showCallModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-2xl p-8 w-full max-w-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text">Telefoon afspraak</h2>
              <button
                onClick={() => setShowCallModal(false)}
                className="p-2 text-text-muted hover:text-text transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text mb-2">Gesprek titel</label>
                <input type="text" className="input-field" placeholder="Client call" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Start tijd</label>
                  <input type="datetime-local" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Duur (minuten)</label>
                  <input type="number" className="input-field" placeholder="30" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-2">Telefoonnummer</label>
                <input type="tel" className="input-field" placeholder="+31 6 12345678" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-2">Gespreksonderwerp</label>
                <textarea className="input-field" rows={3} placeholder="Wat wordt besproken..."></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowCallModal(false)}
                  className="px-6 py-3 bg-surface border border-gray-700 rounded-xl text-text hover:border-primary-gold/30 transition-colors"
                >
                  Annuleren
                </button>
                <button
                  onClick={() => {
                    alert('Telefoon afspraak toegevoegd!')
                    setShowCallModal(false)
                  }}
                  className="btn-primary flex items-center space-x-2"
                >
                  <Save className="w-5 h-5" />
                  <span>Afspraak toevoegen</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Team Meeting Modal */}
      {showTeamModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-2xl p-8 w-full max-w-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text">Team meeting</h2>
              <button
                onClick={() => setShowTeamModal(false)}
                className="p-2 text-text-muted hover:text-text transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text mb-2">Meeting titel</label>
                <input type="text" className="input-field" placeholder="Team standup" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Start tijd</label>
                  <input type="datetime-local" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Eind tijd</label>
                  <input type="datetime-local" className="input-field" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-2">Locatie</label>
                <select className="input-field">
                  <option>Kantoor</option>
                  <option>Zoom</option>
                  <option>Teams</option>
                  <option>Google Meet</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-2">Agenda</label>
                <textarea className="input-field" rows={4} placeholder="1. Standup updates&#10;2. Project status&#10;3. Planning"></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowTeamModal(false)}
                  className="px-6 py-3 bg-surface border border-gray-700 rounded-xl text-text hover:border-primary-gold/30 transition-colors"
                >
                  Annuleren
                </button>
                <button
                  onClick={() => {
                    alert('Team meeting toegevoegd!')
                    setShowTeamModal(false)
                  }}
                  className="btn-primary flex items-center space-x-2"
                >
                  <Save className="w-5 h-5" />
                  <span>Meeting toevoegen</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reminder Modal */}
      {showReminderModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-2xl p-8 w-full max-w-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text">Email herinnering</h2>
              <button
                onClick={() => setShowReminderModal(false)}
                className="p-2 text-text-muted hover:text-text transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text mb-2">Ontvanger</label>
                <input type="email" className="input-field" placeholder="klant@bedrijf.nl" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-2">Onderwerp</label>
                <input type="text" className="input-field" placeholder="Herinnering: Afspraak morgen" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-2">Wanneer versturen</label>
                <select className="input-field">
                  <option>Nu</option>
                  <option>1 uur voor afspraak</option>
                  <option>1 dag voor afspraak</option>
                  <option>1 week voor afspraak</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-2">Bericht</label>
                <textarea className="input-field" rows={6} placeholder="Beste [Naam],&#10;&#10;Dit is een herinnering voor onze afspraak..."></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowReminderModal(false)}
                  className="px-6 py-3 bg-surface border border-gray-700 rounded-xl text-text hover:border-primary-gold/30 transition-colors"
                >
                  Annuleren
                </button>
                <button
                  onClick={() => {
                    alert('Email herinnering gepland!')
                    setShowReminderModal(false)
                  }}
                  className="btn-primary flex items-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Herinnering versturen</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}