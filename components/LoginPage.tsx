'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Eye, EyeOff, Mail, Lock, ArrowRight, Crown, GraduationCap, Star, Sparkles } from 'lucide-react'

const loginSchema = z.object({
  email: z.string().email('Voer een geldig e-mailadres in'),
  password: z.string().min(6, 'Wachtwoord moet minimaal 6 karakters bevatten'),
  rememberMe: z.boolean().optional(),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [userRole, setUserRole] = useState<'deelnemer' | 'admin'>('deelnemer')

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'deelnemer@curacao-retraite.com',
      password: 'retraite2024',
      rememberMe: true
    }
  })

  // Update credentials when role changes
  React.useEffect(() => {
    if (userRole === 'admin') {
      setValue('email', 'admin@curacao-retraite.com')
      setValue('password', 'admin2024')
    } else {
      setValue('email', 'deelnemer@curacao-retraite.com')
      setValue('password', 'retraite2024')
    }
  }, [userRole, setValue])

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    // Simuleer API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Demo login - redirect naar juiste dashboard
    if (data.email === 'deelnemer@curacao-retraite.com' && data.password === 'retraite2024') {
      window.location.href = '/dashboard'
    } else if (data.email === 'admin@curacao-retraite.com' && data.password === 'admin2024') {
      window.location.href = '/admin'
    } else {
      alert(`Demo login:\nDeelnemer: deelnemer@curacao-retraite.com / retraite2024\nAdmin: admin@curacao-retraite.com / admin2024`)
    }
    
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background">
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Logo/Brand */}
          <div className="text-center mb-4 animate-fade-in">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-xl mb-3 luxury-glow">
              <Crown className="w-6 h-6 text-white" />
            </div>
              <h1 className="text-2xl font-bold text-text mb-1 bg-gradient-to-r from-text to-primary-blue bg-clip-text text-transparent">
                Curacao Retraite
              </h1>
              <p className="text-text-secondary text-sm">Persoonlijke groei en missie herdefiniëren</p>
          </div>

          {/* Role Switcher */}
          <div className="glass-effect rounded-xl p-4 mb-4">
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setUserRole('deelnemer')}
                className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                  userRole === 'deelnemer'
                    ? 'border-primary-blue bg-primary-blue/10'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="text-center">
                  <div className={`w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center ${
                    userRole === 'deelnemer' ? 'bg-primary-blue' : 'bg-gray-700'
                  }`}>
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-medium text-text text-sm">Deelnemer</h4>
                </div>
              </button>
              
              <button
                type="button"
                onClick={() => setUserRole('admin')}
                className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                  userRole === 'admin'
                    ? 'border-primary-blue bg-primary-blue/10'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="text-center">
                  <div className={`w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center ${
                    userRole === 'admin' ? 'bg-primary-blue' : 'bg-gray-700'
                  }`}>
                    <Crown className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-medium text-text text-sm">Admin</h4>
                </div>
              </button>
            </div>
            
            <div className="mt-3 p-2 bg-primary-blue/10 border border-primary-blue/20 rounded-lg">
              <p className="text-primary-blue text-xs text-center">
                {userRole === 'deelnemer' ? 'Deelnemer geselecteerd' : 'Admin geselecteerd'}
              </p>
            </div>
          </div>

          {/* Login Form */}
          <div className="glass-effect rounded-xl p-6 animate-slide-up">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
                  E-mailadres
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-blue" />
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="input-field pl-12"
                    placeholder="jouw@email.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-text mb-2">
                  Wachtwoord
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-blue" />
                  <input
                    {...register('password')}
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="input-field pl-12 pr-12"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-muted hover:text-primary-blue transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-2 text-sm text-red-400">{errors.password.message}</p>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    {...register('rememberMe')}
                    type="checkbox"
                    id="rememberMe"
                    className="w-4 h-4 text-primary-blue bg-surface border-gray-600 rounded focus:ring-primary-blue focus:ring-2"
                  />
                  <label htmlFor="rememberMe" className="ml-2 text-sm text-text-secondary">
                    Onthoud mij
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm text-primary-blue hover:text-primary-blue/80 transition-colors"
                >
                  Wachtwoord vergeten?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>🚀 {userRole === 'deelnemer' ? 'Start Retraite' : 'Admin Dashboard'}</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="mt-8 mb-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-surface text-text-muted">Of</span>
                </div>
              </div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center px-4 py-4 border border-gray-700 rounded-xl text-text hover:bg-surface-light transition-all duration-300 hover:border-primary-blue/30">
                <GraduationCap className="w-5 h-5 mr-3 text-primary-blue" />
                <span className="font-medium">{userRole === 'deelnemer' ? 'Retraite Demo' : 'Admin Demo'}</span>
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-text-secondary">
                Nog geen account?{' '}
                <a href="#" className="text-primary-blue hover:text-primary-blue/80 transition-colors font-semibold">
                  Start je VA reis
                </a>
              </p>
              <div className="mt-4 flex items-center justify-center space-x-2 text-text-muted text-sm">
                <Star className="w-4 h-4 text-primary-blue" />
                <span>Premium Virtual Assistant Training</span>
                <Star className="w-4 h-4 text-primary-blue" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
