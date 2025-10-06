'use client'

import Navigation from '@/components/Navigation'
import { 
  Users, 
  UserCheck, 
  Clock,
  Plane,
  CheckCircle,
  AlertCircle,
  CreditCard,
  FileText,
  BarChart3,
  TrendingUp,
  Euro,
  DollarSign,
  Receipt
} from 'lucide-react'

export default function AdminDashboard() {
  // Mock data voor projecten
  const projecten = [
    {
      id: 1,
      naam: 'E-commerce Platform',
      client: 'TechCorp BV',
      status: 'actief',
      budget: {
        totaal: 25000,
        gebruikt: 18000,
        resterend: 7000,
        percentage: 72
      },
      deadline: '2025-03-15',
      team: ['Frontend Dev', 'Backend Dev', 'UI/UX Designer']
    },
    {
      id: 2,
      naam: 'Mobile App Development',
      client: 'StartupXYZ',
      status: 'actief',
      budget: {
        totaal: 15000,
        gebruikt: 5000,
        resterend: 10000,
        percentage: 33
      },
      deadline: '2025-04-20',
      team: ['React Native Dev', 'Backend Dev']
    },
    {
      id: 3,
      naam: 'Website Redesign',
      client: 'MarketingPro',
      status: 'voltooid',
      budget: {
        totaal: 8000,
        gebruikt: 8000,
        resterend: 0,
        percentage: 100
      },
      deadline: '2025-01-10',
      team: ['Frontend Dev', 'UI/UX Designer']
    },
    {
      id: 4,
      naam: 'Database Migration',
      client: 'DataFlow Inc',
      status: 'planning',
      budget: {
        totaal: 12000,
        gebruikt: 0,
        resterend: 12000,
        percentage: 0
      },
      deadline: '2025-05-01',
      team: ['Database Admin', 'Backend Dev']
    },
    {
      id: 5,
      naam: 'API Integration',
      client: 'ServiceHub',
      status: 'on_hold',
      budget: {
        totaal: 6000,
        gebruikt: 2000,
        resterend: 4000,
        percentage: 33
      },
      deadline: '2025-02-28',
      team: ['Backend Dev', 'DevOps Engineer']
    }
  ]

  // Bereken project statistieken
  const stats = {
    totaalProjecten: projecten.length,
    actief: projecten.filter(p => p.status === 'actief').length,
    voltooid: projecten.filter(p => p.status === 'voltooid').length,
    planning: projecten.filter(p => p.status === 'planning').length,
    onHold: projecten.filter(p => p.status === 'on_hold').length,
    // Budget stats
    totaalBudget: projecten.reduce((acc, p) => acc + p.budget.totaal, 0),
    gebruiktBudget: projecten.reduce((acc, p) => acc + p.budget.gebruikt, 0),
    resterendBudget: projecten.reduce((acc, p) => acc + p.budget.resterend, 0),
    gemiddeldeVoortgang: Math.round(projecten.reduce((acc, p) => acc + p.budget.percentage, 0) / projecten.length)
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
                <h1 className="text-2xl font-bold text-white">Improve Admin Dashboard</h1>
                <p className="text-gray-400">Project Management Platform</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-white font-medium">Chiel</p>
                  <p className="text-gray-400 text-sm">Project Manager</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-silver to-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">C</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 py-8">
          {/* Project Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Totaal Budget</p>
                  <p className="text-3xl font-bold text-green-400">€{stats.totaalBudget.toLocaleString()}</p>
                  <p className="text-gray-400 text-xs mt-1">Alle projecten</p>
                </div>
                <Euro className="w-12 h-12 text-green-400" />
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Gebruikt Budget</p>
                  <p className="text-3xl font-bold text-blue-400">€{stats.gebruiktBudget.toLocaleString()}</p>
                  <p className="text-gray-400 text-xs mt-1">{Math.round((stats.gebruiktBudget / stats.totaalBudget) * 100)}% gebruikt</p>
                </div>
                <CreditCard className="w-12 h-12 text-blue-400" />
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Resterend Budget</p>
                  <p className="text-3xl font-bold text-silver">€{stats.resterendBudget.toLocaleString()}</p>
                  <p className="text-gray-400 text-xs mt-1">Beschikbaar</p>
                </div>
                <AlertCircle className="w-12 h-12 text-silver" />
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Gemiddelde Voortgang</p>
                  <p className="text-3xl font-bold text-green-400">{stats.gemiddeldeVoortgang}%</p>
                  <p className="text-gray-400 text-xs mt-1">Alle projecten</p>
                </div>
                <CheckCircle className="w-12 h-12 text-green-400" />
              </div>
            </div>
          </div>

          {/* Project Status Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Actieve Projecten</p>
                  <p className="text-3xl font-bold text-white">{stats.actief}</p>
                  <p className="text-gray-400 text-xs mt-1">van {stats.totaalProjecten} totaal</p>
                </div>
                <Users className="w-12 h-12 text-silver" />
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Voltooide Projecten</p>
                  <p className="text-3xl font-bold text-green-400">{stats.voltooid}</p>
                  <p className="text-gray-400 text-xs mt-1">Succesvol afgerond</p>
                </div>
                <CheckCircle className="w-12 h-12 text-green-400" />
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">In Planning</p>
                  <p className="text-3xl font-bold text-yellow-400">{stats.planning}</p>
                  <p className="text-gray-400 text-xs mt-1">Wachten op start</p>
                </div>
                <Clock className="w-12 h-12 text-yellow-400" />
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-effect rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Recente Activiteiten</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Website Redesign project voltooid</p>
                    <p className="text-gray-400 text-sm">2 uur geleden</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <FileText className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Nieuwe project toegevoegd: Database Migration</p>
                    <p className="text-gray-400 text-sm">4 uur geleden</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <AlertCircle className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">API Integration project on hold gezet</p>
                    <p className="text-gray-400 text-sm">1 dag geleden</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <CreditCard className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Betaling ontvangen voor E-commerce Platform</p>
                    <p className="text-gray-400 text-sm">2 dagen geleden</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Project Voortgang</h3>
              <div className="space-y-4">
                {projecten.slice(0, 4).map((project) => (
                  <div key={project.id}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">{project.naam}</span>
                      <span className="text-gray-400 text-sm">{project.budget.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          project.budget.percentage >= 80 ? 'bg-green-400' :
                          project.budget.percentage >= 50 ? 'bg-blue-400' :
                          project.budget.percentage >= 25 ? 'bg-yellow-400' :
                          'bg-gray-500'
                        }`}
                        style={{ width: `${project.budget.percentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>{project.client}</span>
                      <span>€{project.budget.gebruikt.toLocaleString()} / €{project.budget.totaal.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Overzicht */}
          <div className="glass-effect rounded-2xl p-6 mt-8">
            <h3 className="text-xl font-bold text-white mb-6">Project Overzicht</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50 border-b border-gray-700">
                  <tr>
                    <th className="text-left p-4 text-white font-medium">Project</th>
                    <th className="text-left p-4 text-white font-medium">Client</th>
                    <th className="text-left p-4 text-white font-medium">Status</th>
                    <th className="text-left p-4 text-white font-medium">Budget</th>
                    <th className="text-left p-4 text-white font-medium">Voortgang</th>
                    <th className="text-left p-4 text-white font-medium">Deadline</th>
                    <th className="text-left p-4 text-white font-medium">Team</th>
                  </tr>
                </thead>
                <tbody>
                  {projecten.map((project) => (
                    <tr key={project.id} className="border-b border-gray-700 hover:bg-gray-800/30 transition-colors">
                      <td className="p-4">
                        <div>
                          <p className="text-white font-medium">{project.naam}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-gray-300">{project.client}</span>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'actief' ? 'bg-green-500/20 text-green-400' :
                          project.status === 'voltooid' ? 'bg-blue-500/20 text-blue-400' :
                          project.status === 'planning' ? 'bg-yellow-500/20 text-yellow-400' :
                          project.status === 'on_hold' ? 'bg-red-500/20 text-red-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {project.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="p-4">
                        <div>
                          <span className="text-white font-medium">€{project.budget.totaal.toLocaleString()}</span>
                          <p className="text-gray-400 text-xs">€{project.budget.gebruikt.toLocaleString()} gebruikt</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-700 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                project.budget.percentage >= 80 ? 'bg-green-400' :
                                project.budget.percentage >= 50 ? 'bg-blue-400' :
                                project.budget.percentage >= 25 ? 'bg-yellow-400' :
                                'bg-gray-500'
                              }`}
                              style={{ width: `${project.budget.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-gray-300 text-sm">{project.budget.percentage}%</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-gray-300 text-sm">{project.deadline}</span>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-wrap gap-1">
                          {project.team.slice(0, 2).map((member, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                              {member}
                            </span>
                          ))}
                          {project.team.length > 2 && (
                            <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                              +{project.team.length - 2}
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Project Informatie */}
          <div className="glass-effect rounded-2xl p-6 mt-8">
            <h3 className="text-xl font-bold text-white mb-6">Project Management Informatie</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Onze Diensten</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Web Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Mobile App Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">UI/UX Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Database Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">API Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">DevOps & Deployment</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Project Statistieken</h4>
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Totaal Projecten</span>
                      <span className="text-white font-medium">{stats.totaalProjecten}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Actieve Projecten</span>
                      <span className="text-green-400 font-medium">{stats.actief}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Voltooide Projecten</span>
                      <span className="text-blue-400 font-medium">{stats.voltooid}</span>
                    </div>
                    <div className="border-t border-gray-700 pt-3 flex justify-between">
                      <span className="text-white font-bold">Totaal Budget</span>
                      <span className="text-silver font-bold text-lg">€{stats.totaalBudget.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                  <p className="text-blue-400 text-sm">
                    <strong>Improve:</strong> Professional project management met focus op kwaliteit en efficiëntie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}