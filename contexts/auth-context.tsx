"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  email: string
  name: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string, rememberMe: boolean) => Promise<boolean>
  logout: () => void
  register: (name: string, email: string, password: string) => Promise<boolean>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Verificar sesión guardada al cargar la aplicación
  useEffect(() => {
    const checkSavedSession = () => {
      try {
        // Primero verificar localStorage (recordar sesión)
        const savedUser = localStorage.getItem("materna360_user")
        const savedRemember = localStorage.getItem("materna360_remember")

        if (savedUser && savedRemember === "true") {
          setUser(JSON.parse(savedUser))
          setIsLoading(false)
          return
        }

        // Luego verificar sessionStorage (sesión temporal)
        const sessionUser = sessionStorage.getItem("materna360_user")
        if (sessionUser) {
          setUser(JSON.parse(sessionUser))
          setIsLoading(false)
          return
        }

        setIsLoading(false)
      } catch (error) {
        console.error("Error al verificar sesión guardada:", error)
        setIsLoading(false)
      }
    }

    checkSavedSession()
  }, [])

  const login = async (email: string, password: string, rememberMe: boolean): Promise<boolean> => {
    try {
      // Simular llamada a API
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simular validación (en producción esto sería una llamada real a la API)
      if (email && password) {
        const userData: User = {
          id: "user_" + Date.now(),
          email: email,
          name: email.split("@")[0], // Usar parte del email como nombre
        }

        setUser(userData)

        // Guardar sesión según la preferencia del usuario
        if (rememberMe) {
          localStorage.setItem("materna360_user", JSON.stringify(userData))
          localStorage.setItem("materna360_remember", "true")
          // Limpiar sessionStorage si existe
          sessionStorage.removeItem("materna360_user")
        } else {
          sessionStorage.setItem("materna360_user", JSON.stringify(userData))
          // Limpiar localStorage si existe
          localStorage.removeItem("materna360_user")
          localStorage.removeItem("materna360_remember")
        }

        return true
      }

      return false
    } catch (error) {
      console.error("Error en login:", error)
      return false
    }
  }

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      // Simular llamada a API
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simular registro exitoso
      if (name && email && password) {
        const userData: User = {
          id: "user_" + Date.now(),
          email: email,
          name: name,
        }

        setUser(userData)

        // Guardar sesión temporal después del registro
        sessionStorage.setItem("materna360_user", JSON.stringify(userData))

        return true
      }

      return false
    } catch (error) {
      console.error("Error en registro:", error)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    // Limpiar ambos storages
    localStorage.removeItem("materna360_user")
    localStorage.removeItem("materna360_remember")
    sessionStorage.removeItem("materna360_user")
  }

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    register,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
