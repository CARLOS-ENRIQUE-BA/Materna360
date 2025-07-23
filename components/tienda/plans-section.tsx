"use client"

import { useState } from "react"
import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/landing/animated-section"
import SubscriptionCheckoutModal from "./subscription-checkout-modal"

const plans = [
  {
    name: "Premium Básico",
    price: "7.99",
    billingType: "mensual",
    features: [
      "Acceso anticipado a ofertas",
      "Envíos rápidos",
    ],
    highlight: false,
  },
  {
    name: "Premium Plus",
    price: "12.99",
    billingType: "mensual",
    features: [
      "Todo lo del Básico",
      "Productos exclusivos (ediciones limitadas)",
      "Soporte prioritario",
    ],
    highlight: true,
  },
  {
    name: "Premium Plus Anual",
    price: "130.99",
    billingType: "anual",
    features: [
      "Todo lo del Plus",
      "Productos exclusivos (ediciones limitadas)",
      "Soporte prioritario",
      "Ahorra 16% pagando anual",
    ],
    highlight: false,
    discount: "16% de descuento anual"
  },
]

interface PlansSectionProps {
  setCurrentView: (view: string) => void
  onUserPlanUpdate?: (planName: string, billingType: "mensual" | "anual", nextBillingDate: string) => void
}

export default function PlansSection({ setCurrentView, onUserPlanUpdate }: PlansSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)

  const handleSubscribeClick = (plan) => {
    setSelectedPlan(plan)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedPlan(null)
  }

  const handleSubscribe = (planName, billingType, nextBillingDate) => {
    console.log(`Suscripción confirmada: ${planName}, ${billingType}, próxima facturación: ${nextBillingDate}`)
    
    // Actualizar el plan del usuario en el header
    if (onUserPlanUpdate) {
      onUserPlanUpdate(planName, billingType, nextBillingDate)
    }
    
    // Redirigir a la tienda después de la compra
    setTimeout(() => {
      setCurrentView("tienda")
    }, 1000)
  }

  return (
    <AnimatedSection animation="fade-up">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-[#F6DCD0]">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#790B5A] mb-4">Elige tu Suscripción Premium</h1>
          <p className="text-xl text-[#62615F] max-w-3xl mx-auto">
            Accede a beneficios exclusivos y lleva tu experiencia maternal al siguiente nivel.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 shadow-lg flex flex-col border-2 ${
                plan.highlight
                  ? "bg-gradient-to-br from-[#790B5A] to-[#C15DA4] text-white border-[#E985A6] ring-4 ring-[#E985A6]"
                  : "bg-gradient-to-br from-[#FAF8F5] to-[#F6DCD0] text-[#790B5A] border-gray-200"
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                {plan.highlight && (
                  <div className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Más Popular
                  </div>
                )}
              </div>
              <div className="text-4xl font-bold mb-6">
                ${plan.price}
                <span className="text-lg opacity-80">/mes</span>
              </div>
              <ul className={`space-y-3 flex-grow ${plan.highlight ? "opacity-90" : "text-[#62615F]"}`}>
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center">
                    <Check className={`w-5 h-5 mr-2 ${plan.highlight ? "text-green-300" : "text-green-500"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => handleSubscribeClick(plan)}
                className={`mt-8 w-full font-bold rounded-xl shadow-lg transform hover:scale-105 transition-transform ${
                  plan.highlight
                    ? "bg-white text-[#790B5A] hover:bg-gray-100"
                    : "bg-gradient-to-r from-[#790B5A] to-[#C15DA4] text-white"
                }`}
              >
                Suscribirme
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <SubscriptionCheckoutModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        plan={selectedPlan}
        onSubscribe={handleSubscribe}
      />
    </AnimatedSection>
  )
}