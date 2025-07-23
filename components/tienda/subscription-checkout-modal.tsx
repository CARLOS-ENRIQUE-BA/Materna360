import { X, CreditCard, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState, useEffect } from "react"

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
  
  // Estados para errores de validación
  const [cardNumberError, setCardNumberError] = useState("")
  const [expiryError, setExpiryError] = useState("")
  const [cvvError, setCvvError] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)

  // Validar formulario cuando cambian los valores
  useEffect(() => {
    const timer = setTimeout(() => {
      validateForm()
    }, 100) // Pequeño delay para asegurar que los estados se actualicen
    
    return () => clearTimeout(timer)
  }, [cardNumber, expiry, cvv])

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

  // Función para formatear el número de tarjeta (solo dígitos)
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '')
    if (value.length <= 16) {
      setCardNumber(value)
    }
  }

  // Función para formatear la fecha de vencimiento (MM/AA)
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '')
    
    if (value.length > 0) {
      // Limitar el mes a valores entre 01-12
      if (value.length === 1 && parseInt(value) > 1) {
        value = '0' + value
      } else if (value.length === 2 && parseInt(value) > 12) {
        value = '12'
      }
      
      // Formatear como MM/AA
      if (value.length > 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4)
      }
    }
    
    if (value.length <= 5) {
      setExpiry(value)
    }
  }

  // Función para formatear el CVV (solo 3 dígitos)
  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '')
    if (value.length <= 3) {
      setCvv(value)
    }
  }

  // Validar todos los campos del formulario
  const validateForm = () => {
    let cardValid = false
    let expiryValid = false
    let cvvValid = false
    let newCardError = ""
    let newExpiryError = ""
    let newCvvError = ""

    // Validar número de tarjeta
    if (!cardNumber) {
      newCardError = ""
      cardValid = false
    } else if (cardNumber.length !== 16) {
      newCardError = "El número de tarjeta debe tener 16 dígitos"
      cardValid = false
    } else {
      newCardError = ""
      cardValid = true
    }

    // Validar fecha de vencimiento
    if (!expiry) {
      newExpiryError = ""
      expiryValid = false
    } else {
      const expiryPattern = /^(0[1-9]|1[0-2])\/([0-9]{2})$/
      if (!expiryPattern.test(expiry)) {
        newExpiryError = "Formato inválido. Use MM/AA"
        expiryValid = false
      } else {
        // Verificar que la fecha no esté vencida
        const [month, year] = expiry.split('/')
        const expiryDate = new Date(2000 + parseInt(year), parseInt(month), 0)
        const currentDate = new Date()
        
        if (expiryDate < currentDate) {
          newExpiryError = "La tarjeta está vencida"
          expiryValid = false
        } else {
          newExpiryError = ""
          expiryValid = true
        }
      }
    }

    // Validar CVV
    if (!cvv) {
      newCvvError = ""
      cvvValid = false
    } else if (cvv.length !== 3) {
      newCvvError = "El CVV debe tener 3 dígitos"
      cvvValid = false
    } else {
      newCvvError = ""
      cvvValid = true
    }

    // Actualizar estados de error
    setCardNumberError(newCardError)
    setExpiryError(newExpiryError)
    setCvvError(newCvvError)

    // Verificar si el formulario es válido
    const isValid = cardValid && expiryValid && cvvValid
    
    setIsFormValid(isValid)
    return isValid
  }

  const handlePay = () => {
    // Validar una última vez antes de procesar
    validateForm()
    
    if (isFormValid) {
      setIsPaying(true)
      setTimeout(() => {
        setIsPaying(false)
        onSubscribe(plan.name, plan.billingType, nextBillingDateStr)
        onClose()
      }, 1500)
    }
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
              placeholder="1234567890123456"
              value={cardNumber}
              onChange={handleCardNumberChange}
              required
              className={`border-2 ${cardNumberError ? 'border-red-500' : 'border-[#BDCCB4]'} focus:border-[#C15DA4] rounded-xl`}
            />
            {cardNumberError && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="w-3 h-3 mr-1" />
                {cardNumberError}
              </div>
            )}
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
                onChange={handleExpiryChange}
                required
                className={`border-2 ${expiryError ? 'border-red-500' : 'border-[#BDCCB4]'} focus:border-[#C15DA4] rounded-xl`}
              />
              {expiryError && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {expiryError}
                </div>
              )}
            </div>
            <div>
              <Label htmlFor="cvv" className="text-[#790B5A]">
                CVV
              </Label>
              <Input
                id="cvv"
                placeholder="123"
                value={cvv}
                onChange={handleCvvChange}
                required
                className={`border-2 ${cvvError ? 'border-red-500' : 'border-[#BDCCB4]'} focus:border-[#C15DA4] rounded-xl`}
              />
              {cvvError && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {cvvError}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Button
            onClick={handlePay}
            disabled={isPaying || !isFormValid}
            className="bg-gradient-to-r from-[#790B5A] to-[#C15DA4] text-white rounded-xl px-6 py-3 font-semibold w-full"
          >
            {isPaying ? "Procesando pago..." : "Confirmar y Suscribirme"}
          </Button>
        </div>
      </div>
    </div>
  )
}