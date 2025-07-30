"use client"

import { Heart, Baby, Instagram, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Logo from "../../assets/Logo-M360.png"

export default function Footer() {
  return (
    <footer className="bg-white/95 backdrop-blur-sm border-t border-[#F6DCD0] mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="md:col-span-2 animate-in fade-in duration-700">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#790B5A] to-[#C15DA4] rounded-full flex items-center justify-center shadow-lg">
                  <div className="flex items-center space-x-1">
                    <img
                      src={Logo.src}
                      alt="Logo Materna 360"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#97C4C6] rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#790B5A]">Materna 360</h3>
                <p className="text-sm text-[#62615F]">Nutrición con ciencia, maternidad con corazón</p>
              </div>
            </div>
            <p className="text-[#62615F] mb-6 max-w-md">
              Dedicados a acompañarte en cada etapa de tu maternidad con productos de calidad, cuidado y amor para ti y
              tu bebé.
            </p>

            {/* Instagram destacado */}
            <div className="bg-gradient-to-r from-[#F6DCD0] to-[#FAF8F5] rounded-2xl p-4 border border-[#BDCCB4]">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#790B5A]">Síguenos en Instagram</h4>
                  <p className="text-sm text-[#62615F]">@360materna</p>
                </div>
              </div>
              <p className="text-sm text-[#62615F] mb-3">Consejos, productos y comunidad maternal</p>
              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl transition-all duration-300"
                onClick={() => window.open("https://www.instagram.com/360materna?igsh=NTRydm5nNWxkNGQ1", "_blank")}
              >
                <Instagram className="w-4 h-4 mr-2" />
                Seguir en Instagram
              </Button>
            </div>
          </div>

          {/* Quick links */}
          <div className="animate-in slide-in-from-bottom duration-700 delay-200">
            <h4 className="text-lg font-semibold text-[#790B5A] mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/downloads/Sobre_Nosotros.pdf" // Ruta del archivo PDF
                  download="Sobre Nosotros.pdf" // Nombre del archivo al descargar
                  className="text-[#62615F] hover:text-[#790B5A] transition-colors duration-200"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="/downloads/Política_de_Privacidad.pdf" // Ruta del archivo PDF
                  download="Política de Privacidad.pdf" // Nombre del archivo al descargar
                  className="text-[#62615F] hover:text-[#790B5A] transition-colors duration-200"
                >
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="/downloads/terminos-y-condiciones.pdf" // Ruta del archivo PDF
                  download="Términos y Condiciones - Materna 360.pdf" // Nombre del archivo al descargar
                  className="text-[#62615F] hover:text-[#790B5A] transition-colors duration-200"
                >
                  Términos y Condiciones
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
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#F6DCD0] pt-6 animate-in fade-in duration-700 delay-400">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-[#62615F] text-center md:text-left">
              © 2024 Materna 360. Todos los derechos reservados. Hecho con{" "}
              <Heart className="w-3 h-3 inline text-[#C15DA4] fill-current" /> para mamás y bebés.
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-[#62615F] hover:text-[#790B5A] transition-colors duration-200"
                onClick={() => window.open("https://www.instagram.com/360materna?igsh=NTRydm5nNWxkNGQ1", "_blank")}
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <div className="flex items-center space-x-2 text-sm text-[#62615F]">
                <span>Síguenos:</span>
                <span className="font-medium text-[#790B5A]">@360materna</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div
        className="fixed bottom-4 left-4 w-3 h-3 bg-[#97C4C6] rounded-full opacity-30 animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "4s" }}
      ></div>
      <div
        className="fixed bottom-8 right-8 w-2 h-2 bg-[#E985A6] rounded-full opacity-40 animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "3s" }}
      ></div>
    </footer>
  )
}