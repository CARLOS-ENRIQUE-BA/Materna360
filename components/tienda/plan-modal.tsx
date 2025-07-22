import { X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PlanModalProps {
  isOpen: boolean
  onClose: () => void
  user: any // Simulación, idealmente tipar según tu modelo de usuario
  setCurrentView: (view: string) => void
}

export default function PlanModal({ isOpen, onClose, user, setCurrentView }: PlanModalProps) {
  if (!isOpen) return null

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
            <Star className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-[#790B5A] mb-2">Tu Plan Actual</h2>
          <div className="mb-4">
            <span className="inline-block bg-[#F6DCD0] text-[#790B5A] px-4 py-2 rounded-xl font-semibold text-lg">
              Paquete Gratuito
            </span>
          </div>
          <p className="text-[#62615F] mb-6">
            ¿Quieres más beneficios? Descubre nuestras suscripciones premium en el apartado de <b>Paquetes</b> de la tienda y accede a ofertas, productos exclusivos y mucho más.
          </p>
          <Button
            onClick={() => {
              onClose()
              setTimeout(() => setCurrentView("plans"), 200)
            }}
            className="bg-gradient-to-r from-[#790B5A] to-[#C15DA4] text-white rounded-xl px-6 py-3 font-semibold"
          >
            Ver Planes
          </Button>
        </div>
      </div>
    </div>
  )
} 