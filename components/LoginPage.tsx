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
  const [userRole, setUserRole] = useState<'admin'>('admin')

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'chiel@improve.onl',
      password: 'improve2024',
      rememberMe: true
    }
  })

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    // Simuleer API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Admin login - redirect naar admin dashboard
    if (data.email === 'chiel@improve.onl' && data.password === 'improve2024') {
      window.location.href = '/admin'
    } else {
      alert(`Admin login:\nEmail: chiel@improve.onl\nPassword: improve2024`)
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-silver to-gray-300 rounded-2xl mb-4 luxury-glow shadow-2xl">
              <Crown className="w-8 h-8 text-black" />
            </div>
              <h1 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-silver to-white bg-clip-text text-transparent">
                IMPROVE
              </h1>
              <p className="text-gray-400 text-sm font-medium">Project Management Platform</p>
          </div>

          {/* Admin Access */}
          <div className="glass-effect rounded-xl p-4 mb-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-silver to-gray-300 flex items-center justify-center">
                <Crown className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-white font-semibold mb-1">Admin Access</h3>
              <p className="text-gray-400 text-sm">Project Management Dashboard</p>
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
                    <span>🚀 Access Admin Dashboard</span>
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

            {/* Demo Access */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center px-4 py-4 border border-gray-600 rounded-xl text-white hover:bg-gray-800/50 transition-all duration-300 hover:border-silver/30">
                <Crown className="w-5 h-5 mr-3 text-silver" />
                <span className="font-medium">Admin Demo Access</span>
              </button>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                Improve Project Management Platform
              </p>
              <div className="mt-4 flex items-center justify-center space-x-2 text-gray-500 text-xs">
                <Star className="w-3 h-3 text-silver" />
                <span>Professional Project Management</span>
                <Star className="w-3 h-3 text-silver" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
