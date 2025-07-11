"use client"

import { Heart, Baby, Instagram, Mail, MapPin, Phone } from "lucide-react"
import Logo from "../../assets/Logo-M360.png"

export default function LandingFooter() {
  return (
    <footer className="bg-white/95 backdrop-blur-sm border-t border-[#F6DCD0] mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and description */}
          <div className="animate-in fade-in duration-700">
            <div className="flex items-center space-x-3 mb-4">
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
                <h3 className="text-2xl font-bold text-[#790B5A]">Materna 360</h3>
                <p className="text-sm text-[#62615F]">Nutrición con ciencia, maternidad con corazón</p>
              </div>
            </div>
            <p className="text-[#62615F] mb-6 max-w-md">
              Acompañamos a madres y familias con atención nutricional especializada, educación basada en evidencia y
              productos funcionales para el bienestar desde el inicio de la vida.
            </p>
          </div>

          {/* Quick links */}
          <div className="animate-in slide-in-from-bottom duration-700 delay-200">
            <h4 className="text-lg font-semibold text-[#790B5A] mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="/login" className="text-[#62615F] hover:text-[#790B5A] transition-colors duration-200">
                  Iniciar Sesión
                </a>
              </li>
              <li>
                <a href="/register" className="text-[#62615F] hover:text-[#790B5A] transition-colors duration-200">
                  Crear Cuenta
                </a>
              </li>
              <li>
                <a href="#" className="text-[#62615F] hover:text-[#790B5A] transition-colors duration-200">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-[#62615F] hover:text-[#790B5A] transition-colors duration-200">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="text-[#62615F] hover:text-[#790B5A] transition-colors duration-200">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="animate-in slide-in-from-bottom duration-700 delay-300">
            <h4 className="text-lg font-semibold text-[#790B5A] mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-[#62615F]">
                <Mail className="w-4 h-4 text-[#C15DA4]" />
                <span className="text-sm">materna360@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-[#62615F]">
                <Phone className="w-4 h-4 text-[#C15DA4]" />
                <span className="text-sm">+52 1 961 458 1282</span>
              </div>
            </div>

            {/* Instagram destacado */}
            <div className="mt-6 p-4 bg-gradient-to-r from-[#F6DCD0] to-[#FAF8F5] rounded-xl border border-[#BDCCB4]">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-[#790B5A] text-sm">Síguenos</h5>
                  <p className="text-xs text-[#62615F]">@360materna</p>
                </div>
              </div>
              <button
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg py-2 text-sm font-medium transition-all duration-300"
                onClick={() => window.open("https://www.instagram.com/360materna?igsh=NTRydm5nNWxkNGQ1", "_blank")}
              >
                Seguir en Instagram
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#F6DCD0] pt-6 animate-in fade-in duration-700 delay-400">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-[#62615F] text-center md:text-left">
              © 2024 Materna 360. Todos los derechos reservados. Hecho con{" "}
              <Heart className="w-3 h-3 inline text-[#C15DA4] fill-current" /> para madres y bebés.
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/360materna?igsh=NTRydm5nNWxkNGQ1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#62615F] hover:text-[#790B5A] transition-colors duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <div className="flex items-center space-x-2 text-sm text-[#62615F]">
                <span>Síguenos:</span>
                <span className="font-medium text-[#790B5A]">@360materna</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
