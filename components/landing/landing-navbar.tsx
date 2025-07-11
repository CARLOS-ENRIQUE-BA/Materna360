"use client"

import Link from "next/link"
import { Heart, Baby, User, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Logo from "../../assets/Logo-M360.png"

export default function LandingNavbar() {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-[#F6DCD0] sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-in fade-in duration-700">
            <div className="relative">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg overflow-hidden bg-white">
                <img
                  src={Logo.src}
                  alt="Logo Materna 360"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#97C4C6] rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#790B5A]">Materna 360</h1>
              <p className="text-xs text-[#62615F]">Nutrición con ciencia, maternidad con corazón</p>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button
                variant="outline"
                className="border-2 border-[#BDCCB4] hover:border-[#C15DA4] hover:bg-[#FAF8F5] text-[#790B5A] rounded-xl transition-all duration-300 bg-transparent"
              >
                <User className="w-4 h-4 mr-2" />
                Iniciar Sesión
              </Button>
            </Link>

            <Link href="/register">
              <Button className="bg-gradient-to-r from-[#790B5A] to-[#C15DA4] hover:from-[#C15DA4] hover:to-[#790B5A] text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                <UserPlus className="w-4 h-4 mr-2" />
                Crear Cuenta
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
