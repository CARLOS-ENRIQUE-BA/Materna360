"use client"

import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/landing/animated-section"

interface PlansSectionProps {
  setCurrentView: (view: "tienda" | "ofertas" | "category" | "cart" | "checkout" | "favorites" | "catalog" | "plans") => void
}

export default function PlansSection({ setCurrentView }: PlansSectionProps) {
  return (
    <AnimatedSection animation="fade-up">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-[#F6DCD0]">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#790B5A] mb-4">Elige tu Plan Ideal</h1>
          <p className="text-xl text-[#62615F] max-w-3xl mx-auto">
            Accede a beneficios exclusivos y lleva tu experiencia maternal al siguiente nivel.
          </p>
        </div>

        {/* Grid de planes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plan Freemium */}
          <div className="bg-gradient-to-br from-[#FAF8F5] to-[#F6DCD0] rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col">
            <h3 className="text-3xl font-bold text-[#790B5A] mb-4">Freemium</h3>
            <p className="text-[#62615F] mb-6 min-h-[48px]">Ideal para explorar nuestros productos y comenzar tu viaje.</p>
            <div className="text-4xl font-bold text-[#790B5A] mb-6">
              Gratis
            </div>
            <ul className="space-y-3 text-[#62615F] flex-grow">
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> Navegar por productos</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> Agregar al carrito</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> Crear cuenta y recibir emails</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> Comprar sin beneficios</li>
            </ul>
            <Button
              onClick={() => setCurrentView("catalog")}
              variant="outline"
              className="mt-8 w-full border-2 border-[#C15DA4] text-[#790B5A] hover:bg-[#FAF8F5] font-semibold rounded-xl"
            >
              Explorar Catálogo
            </Button>
          </div>

          {/* Plan Premium */}
          <div className="bg-gradient-to-br from-[#790B5A] to-[#C15DA4] text-white rounded-2xl p-8 shadow-2xl flex flex-col ring-4 ring-[#E985A6]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-3xl font-bold">Premium</h3>
              <div className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                <Star className="w-4 h-4 mr-1 fill-current" />
                Más Popular
              </div>
            </div>
            <p className="opacity-90 mb-6 min-h-[48px]">La experiencia completa con acceso a todos nuestros beneficios.</p>
            <div className="text-4xl font-bold mb-6">
              $9.99<span className="text-lg opacity-80">/mes</span>
            </div>
            <ul className="space-y-3 opacity-90 flex-grow">
              <li className="flex items-center"><Check className="w-5 h-5 text-green-300 mr-2" /> Acceso anticipado a ofertas</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-300 mr-2" /> Descuentos exclusivos</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-300 mr-2" /> Envíos rápidos o gratuitos</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-300 mr-2" /> Productos de edición limitada</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-300 mr-2" /> Caja mensual con sorpresas</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-300 mr-2" /> Soporte prioritario</li>
            </ul>
            <Button
              onClick={() => {
                // Lógica para ir a la pasarela de pago
                alert("Redirigiendo a la pasarela de pago...")
              }}
              className="mt-8 w-full bg-white text-[#790B5A] hover:bg-gray-100 font-bold rounded-xl shadow-lg transform hover:scale-105 transition-transform"
            >
              Suscribirme Ahora
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
} 