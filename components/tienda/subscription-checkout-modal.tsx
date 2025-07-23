import { X, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

interface SubscriptionCheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  plan: {
    name: string
    price: string
    billingType: "mensual" | "anual"
  }
  onSubscribe: (plan: string, billingType: string, nextBillingDate: string) => void
}

export default function SubscriptionCheckoutModal({ isOpen, onClose, plan, onSubscribe }: SubscriptionCheckoutModalProps) {
  const [isPaying, setIsPaying] = useState(false)
  const [cardNumber, setCardNumber] = useState("")
  const [expiry, setExpiry] = useState("")
  const [cvv, setCvv] = useState("")

  if (!isOpen) return null

  // Calcular fecha de facturación
  const now = new Date()
  let nextBillingDate: Date
  if (plan.billingType === "anual") {
    nextBillingDate = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate())
  } else {
    nextBillingDate = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate())
  }
  const nextBillingDateStr = nextBillingDate.toLocaleDateString()

  const handlePay = () => {
    setIsPaying(true)
    setTimeout(() => {
      setIsPaying(false)
      onSubscribe(plan.name, plan.billingType, nextBillingDateStr)
      onClose()
    }, 1500)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl border border-[#F6DCD0] max-w-md w-full p-8 relative animate-in fade-in duration-300">
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-4 right-4 text-[#790B5A] hover:bg-[#FAF8F5] rounded-full p-2"
        >
          <X className="w-5 h-5" />
        </Button>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#790B5A] to-[#C15DA4] rounded-full flex items-center justify-center mb-4">
            <CreditCard className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-[#790B5A] mb-2">Confirmar Suscripción</h2>
          <div className="mb-4">
            <span className="inline-block bg-[#F6DCD0] text-[#790B5A] px-4 py-2 rounded-xl font-semibold text-lg">
              {plan.name} ({plan.billingType === "anual" ? "Anual" : "Mensual"})
            </span>
          </div>
          <p className="text-[#62615F] mb-2">Monto a pagar: <b>${plan.price} {plan.billingType === "anual" ? "/año" : "/mes"}</b></p>
          <p className="text-[#62615F] mb-6">Próxima facturación: <b>{nextBillingDateStr}</b></p>
        </div>

        {/* Formulario de pago */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="cardNumber" className="text-[#790B5A]">
              Número de Tarjeta
            </Label>
            <Input
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
              className="border-2 border-[#BDCCB4] focus:border-[#C15DA4] rounded-xl"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiry" className="text-[#790B5A]">
                Fecha de Vencimiento
              </Label>
              <Input
                id="expiry"
                placeholder="MM/AA"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                required
                className="border-2 border-[#BDCCB4] focus:border-[#C15DA4] rounded-xl"
              />
            </div>
            <div>
              <Label htmlFor="cvv" className="text-[#790B5A]">
                CVV
              </Label>
              <Input
                id="cvv"
                placeholder="123"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
                className="border-2 border-[#BDCCB4] focus:border-[#C15DA4] rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Button
            onClick={handlePay}
            disabled={isPaying || !cardNumber || !expiry || !cvv}
            className="bg-gradient-to-r from-[#790B5A] to-[#C15DA4] text-white rounded-xl px-6 py-3 font-semibold w-full"
          >
            {isPaying ? "Procesando pago..." : "Confirmar y Suscribirme"}
          </Button>
        </div>
      </div>
    </div>
  )
}