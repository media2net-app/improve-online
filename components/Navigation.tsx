'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Crown, 
  Home, 
  BookOpen, 
  Trophy, 
  User,
  Menu,
  X,
  LogOut,
  Settings,
  Bell,
  Users,
  Calendar,
  FileText,
  CreditCard
} from 'lucide-react'

export default function Navigation() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Academy', href: '/academy', icon: BookOpen },
    { name: 'Klantbeheer', href: '/klanten', icon: Users },
    { name: 'Agenda', href: '/agenda', icon: Calendar },
    { name: 'Offertes', href: '/offertes', icon: FileText },
    { name: 'Facturering', href: '/facturering', icon: CreditCard },
    { name: 'Prestaties', href: '/prestaties', icon: Trophy },
    { name: 'Profiel', href: '/profiel', icon: User },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <>
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-surface border-r border-gray-800 transition-all duration-300 z-50 ${
        isCollapsed ? 'w-16' : 'w-64'
      } ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-800">
          <Link href="/dashboard" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-gold to-primary-gold-dark rounded-xl flex items-center justify-center luxury-glow flex-shrink-0">
              <Crown className="w-6 h-6 text-black" />
            </div>
            {!isCollapsed && (
              <div>
                <h1 className="text-xl font-bold text-text">Dorette</h1>
                <p className="text-text-muted text-xs">Academy</p>
              </div>
            )}
          </Link>
        </div>

        {/* Navigation */}
        <div className="p-4 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive(item.href)
                    ? 'bg-primary-gold/20 text-primary-gold'
                    : 'text-text-muted hover:text-text hover:bg-surface-light'
                }`}
                title={isCollapsed ? item.name : undefined}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && (
                  <span className="font-medium">{item.name}</span>
                )}
                {isCollapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    {item.name}
                  </div>
                )}
              </Link>
            )
          })}
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
          {/* Notifications */}
          <button className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-text-muted hover:text-text hover:bg-surface-light transition-all duration-200 mb-2 ${
            isCollapsed ? 'justify-center' : ''
          }`} title={isCollapsed ? 'Notificaties' : undefined}>
            <Bell className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span className="font-medium">Notificaties</span>}
            {!isCollapsed && (
              <div className="ml-auto w-2 h-2 bg-primary-gold rounded-full"></div>
            )}
          </button>

          {/* Settings */}
          <button className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-text-muted hover:text-text hover:bg-surface-light transition-all duration-200 mb-2 ${
            isCollapsed ? 'justify-center' : ''
          }`} title={isCollapsed ? 'Instellingen' : undefined}>
            <Settings className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span className="font-medium">Instellingen</span>}
          </button>

          {/* User Profile */}
          <div className={`flex items-center space-x-3 px-4 py-3 rounded-xl bg-surface-light ${
            isCollapsed ? 'justify-center' : ''
          }`}>
            <div className="w-8 h-8 bg-gradient-to-br from-primary-gold to-primary-gold-dark rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-black font-bold text-sm">S</span>
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-text font-medium text-sm">Sarah Johnson</p>
                <p className="text-text-muted text-xs">Gemiddelde VA</p>
              </div>
            )}
          </div>

          {/* Logout */}
          <button className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-text-muted hover:text-red-400 hover:bg-red-400/10 transition-all duration-200 mt-2 ${
            isCollapsed ? 'justify-center' : ''
          }`} title={isCollapsed ? 'Uitloggen' : undefined}>
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span className="font-medium">Uitloggen</span>}
          </button>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-6 w-6 h-6 bg-surface border border-gray-700 rounded-full flex items-center justify-center text-text-muted hover:text-text transition-colors"
        >
          {isCollapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-60 lg:hidden p-2 bg-surface border border-gray-700 rounded-xl text-text-muted hover:text-text transition-colors"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}
    </>
  )
}
