'use client'

import { useState } from 'react'
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'demo@dorette.com',
      password: 'demo123',
      rememberMe: true
    }
  })

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    // Simuleer API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Demo login - redirect naar dashboard
    if (data.email === 'demo@dorette.com' && data.password === 'demo123') {
      window.location.href = '/dashboard'
    } else {
      alert('Demo login: gebruik demo@dorette.com / demo123')
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
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-gold to-primary-gold-dark rounded-2xl mb-6 luxury-glow gold-shimmer">
              <Crown className="w-10 h-10 text-black" />
            </div>
              <h1 className="text-4xl font-bold text-text mb-3 bg-gradient-to-r from-text to-primary-gold bg-clip-text text-transparent">
                Dorette Academy
              </h1>
              <p className="text-text-secondary text-lg mb-2">Virtual Assistant uitmuntendheid</p>
              <p className="text-text-muted">Log in om toegang te krijgen tot je premium training</p>
            <div className="mt-4 p-3 bg-primary-gold/10 border border-primary-gold/20 rounded-lg">
              <p className="text-primary-gold text-sm font-medium">✨ Demo gegevens zijn al ingevuld!</p>
              <p className="text-text-secondary text-xs">Klik gewoon op "Inloggen" om te beginnen</p>
            </div>
          </div>

          {/* Login Form */}
          <div className="glass-effect rounded-2xl p-8 animate-slide-up">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                  E-mailadres
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-gold" />
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
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-gold" />
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
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-muted hover:text-primary-gold transition-colors"
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
                    className="w-4 h-4 text-primary-gold bg-surface border-gray-600 rounded focus:ring-primary-gold focus:ring-2"
                  />
                  <label htmlFor="rememberMe" className="ml-2 text-sm text-text-secondary">
                    Onthoud mij
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm text-primary-gold hover:text-primary-gold/80 transition-colors"
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
                    <span>🚀 Start Demo</span>
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
              <button className="w-full flex items-center justify-center px-4 py-4 border border-gray-700 rounded-xl text-text hover:bg-surface-light transition-all duration-300 hover:border-primary-gold/30">
                <GraduationCap className="w-5 h-5 mr-3 text-primary-gold" />
                <span className="font-medium">Doorgaan met Google</span>
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-text-secondary">
                Nog geen account?{' '}
                <a href="#" className="text-primary-gold hover:text-primary-gold/80 transition-colors font-semibold">
                  Start je VA reis
                </a>
              </p>
              <div className="mt-4 flex items-center justify-center space-x-2 text-text-muted text-sm">
                <Star className="w-4 h-4 text-primary-gold" />
                <span>Premium Virtual Assistant Training</span>
                <Star className="w-4 h-4 text-primary-gold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
