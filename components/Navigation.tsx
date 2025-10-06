'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Crown, 
  Home, 
  Heart, 
  Target, 
  User,
  Menu,
  X,
  LogOut,
  Settings,
  Bell,
  Calendar,
  FileText,
  Lightbulb,
  Compass,
  Users,
  Plane,
  TrendingUp,
  Package
} from 'lucide-react'

export default function Navigation() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  // Determine if user is admin based on current path
  const isAdmin = pathname.startsWith('/admin')
  
  const deelnemerNavigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Intake', href: '/intake', icon: FileText },
    { name: 'Persoonlijke Groei', href: '/groei', icon: Heart },
    { name: 'Missie Definitie', href: '/missie', icon: Target },
    { name: 'Programma', href: '/programma', icon: Calendar },
    { name: 'Reflectie', href: '/reflectie', icon: Lightbulb },
    { name: 'Voortgang', href: '/voortgang', icon: Compass },
    { name: 'Profiel', href: '/profiel', icon: User },
    { name: 'Notificaties', href: '/notificaties', icon: Bell },
    { name: 'Instellingen', href: '/instellingen', icon: Settings },
  ]

  const adminNavigation = [
    { name: 'Admin Dashboard', href: '/admin', icon: Home },
    { name: 'Deelnemers', href: '/admin/deelnemers', icon: Users },
    { name: 'Facturatie', href: '/admin/facturatie', icon: FileText },
    { name: 'Vliegtickets', href: '/admin/vliegtickets', icon: Plane },
    { name: 'Intakes', href: '/admin/intakes', icon: FileText },
    { name: 'Voortgang', href: '/admin/voortgang', icon: TrendingUp },
    { name: 'Logistiek', href: '/admin/logistiek', icon: Package },
    { name: 'Notificaties', href: '/admin/notificaties', icon: Bell },
    { name: 'Instellingen', href: '/admin/instellingen', icon: Settings },
  ]

  const navigation = isAdmin ? adminNavigation : deelnemerNavigation

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
            <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-xl flex items-center justify-center luxury-glow flex-shrink-0">
              <Crown className="w-6 h-6 text-black" />
            </div>
            {!isCollapsed && (
              <div>
                <h1 className="text-xl font-bold text-text">Curacao Retraite</h1>
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
                    ? 'bg-primary-blue/20 text-primary-blue'
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
              <div className="ml-auto w-2 h-2 bg-primary-blue rounded-full"></div>
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
            <div className="w-8 h-8 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">{isAdmin ? 'J' : 'M'}</span>
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-text font-medium text-sm">{isAdmin ? 'Jonnhy de Vries' : 'Maria Rodriguez'}</p>
                <p className="text-text-muted text-xs">{isAdmin ? 'Retraite Begeleider' : 'Retraite Deelnemer'}</p>
              </div>
            )}
          </div>

          {/* Admin Dashboard Link - Only show for deelnemers */}
          {!isAdmin && (
            <a 
              href="/admin"
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-text-muted hover:text-primary-blue hover:bg-primary-blue/10 transition-all duration-200 mt-2 ${
                isCollapsed ? 'justify-center' : ''
              }`} 
              title={isCollapsed ? 'Admin Dashboard' : undefined}
            >
              <Settings className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && <span className="font-medium">Admin Dashboard</span>}
            </a>
          )}

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
