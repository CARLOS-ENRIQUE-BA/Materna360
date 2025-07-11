"use client"

import type React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { useState } from "react"
import { Eye, EyeOff, Heart, Baby } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useAuth } from "@/contexts/auth-context"
import Logo from "../assets/Logo-M360.png"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const success = await login(email, password, rememberMe)

      if (success) {
        // Redirigir a la tienda después del login exitoso
        router.push("/tienda")
      } else {
        setError("Credenciales incorrectas. Por favor, intenta de nuevo.")
      }
    } catch (error) {
      setError("Error al iniciar sesión. Por favor, intenta de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Contenedor principal con animación de entrada */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-[#F6DCD0] animate-in slide-in-from-bottom-2 duration-1000 ease-out">
        {/* Logo y título */}
        <div className="text-center mb-8 animate-in fade-in duration-1200 delay-300 ease-out">
          <div className="relative mb-4">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#790B5A] to-[#C15DA4] rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-1">
                <img
                  src={Logo.src}
                  alt="Logo Materna 360"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#97C4C6] rounded-full animate-pulse"></div>
          </div>
          <h1 className="text-3xl font-bold text-[#790B5A] mb-2">Materna 360</h1>
          <p className="text-[#62615F] text-sm">Tu tienda de confianza para mamá y bebé</p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Mensaje de error */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 animate-in fade-in duration-300">
              <p className="text-red-600 text-sm text-center">{error}</p>
            </div>
          )}

          <div className="space-y-4 animate-in slide-in-from-left-2 duration-900 delay-400 ease-out">
            {/* Campo Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#790B5A] font-medium">
                Correo electrónico
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 border-2 border-[#BDCCB4] focus:border-[#C15DA4] focus:ring-[#C15DA4] rounded-xl transition-all duration-300 hover:border-[#97C4C6]"
              />
            </div>

            {/* Campo Contraseña */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#790B5A] font-medium">
                Contraseña
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12 border-2 border-[#BDCCB4] focus:border-[#C15DA4] focus:ring-[#C15DA4] rounded-xl pr-12 transition-all duration-300 hover:border-[#97C4C6]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#62615F] hover:text-[#790B5A] transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Opciones adicionales */}
          <div className="flex items-center justify-between animate-in slide-in-from-right-2 duration-900 delay-500 ease-out">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                className="border-[#BDCCB4] data-[state=checked]:bg-[#C15DA4] data-[state=checked]:border-[#C15DA4]"
              />
              <Label htmlFor="remember" className="text-sm text-[#62615F] cursor-pointer">
                Recordar sesión
              </Label>
            </div>
            <button
              type="button"
              className="text-sm text-[#C15DA4] hover:text-[#790B5A] transition-colors duration-200 hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          {/* Botón de inicio de sesión */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-gradient-to-r from-[#790B5A] to-[#C15DA4] hover:from-[#C15DA4] hover:to-[#790B5A] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] animate-in slide-in-from-bottom-2 duration-1000 delay-600 ease-out"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Iniciando sesión...</span>
              </div>
            ) : (
              "Iniciar Sesión"
            )}
          </Button>
        </form>

        {/* Enlace de registro */}
        <div className="text-center mt-12 animate-in fade-in duration-1200 delay-700 ease-out">
          <p className="text-[#62615F] text-sm">
            ¿No tienes una cuenta?{" "}
            <Link
              href="/register"
              className="text-[#C15DA4] hover:text-[#790B5A] font-semibold transition-colors duration-200 hover:underline"
            >
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>

      {/* Elementos decorativos flotantes con diferentes tamaños */}
      <div
        className="fixed top-16 left-12 w-8 h-8 bg-[#97C4C6] rounded-full opacity-40 animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      ></div>
      <div
        className="fixed top-32 right-16 w-3 h-3 bg-[#E985A6] rounded-full opacity-50 animate-bounce"
        style={{ animationDelay: "1.5s", animationDuration: "4s" }}
      ></div>
      <div
        className="fixed top-1/4 left-8 w-12 h-12 bg-[#BDCCB4] rounded-full opacity-30 animate-bounce"
        style={{ animationDelay: "2.5s", animationDuration: "5s" }}
      ></div>
      <div
        className="fixed bottom-32 left-24 w-6 h-6 bg-[#C15DA4] rounded-full opacity-45 animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "3.5s" }}
      ></div>
      <div
        className="fixed bottom-16 right-12 w-4 h-4 bg-[#F6DCD0] rounded-full opacity-60 animate-bounce"
        style={{ animationDelay: "0.8s", animationDuration: "4.2s" }}
      ></div>
      <div
        className="fixed top-1/2 right-8 w-10 h-10 bg-[#97C4C6] rounded-full opacity-25 animate-bounce"
        style={{ animationDelay: "3s", animationDuration: "4.8s" }}
      ></div>
      <div
        className="fixed bottom-1/4 right-32 w-2 h-2 bg-[#E985A6] rounded-full opacity-70 animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "3.8s" }}
      ></div>
      <div
        className="fixed top-3/4 left-16 w-5 h-5 bg-[#BDCCB4] rounded-full opacity-35 animate-bounce"
        style={{ animationDelay: "1.2s", animationDuration: "4.5s" }}
      ></div>
    </div>
  )
}
