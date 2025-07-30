"use client"

import type React from "react"

import { useState } from "react"
import { CreditCard, Truck, MapPin, User, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useCart } from "./cart-context"

interface CheckoutProps {
  setCurrentView: (view: "tienda" | "cart" | "checkout") => void
}

export default function Checkout({ setCurrentView }: CheckoutProps) {
  const [step, setStep] = useState<"info" | "payment" | "success">("info")
  const [shippingMethod, setShippingMethod] = useState("standard")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)
  const { cart, getTotalPrice, clearCart } = useCart()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (step === "info") {
      setStep("payment")
    } else if (step === "payment") {
      setIsProcessing(true)
      // Simular procesamiento de pago
      setTimeout(() => {
        setIsProcessing(false)
        setStep("success")

        // Descargar automáticamente los libros comprados
        const booksInCart = cart.filter((item) => item.category === "Libros")
        if (booksInCart.length > 0) {
          booksInCart.forEach((book) => {
            if (book.downloadUrl) {
              const link = document.createElement("a")
              link.href = book.downloadUrl // Usar la URL específica del producto
              link.download = `${book.name}.pdf`
              link.click()
            }
          })
        }

        clearCart()
      }, 3000)
    }
  }

  const shippingCost = shippingMethod === "express" ? 15.99 : 0
  const totalWithShipping = getTotalPrice() + shippingCost

  if (step === "success") {
    return (
      <div className="animate-in fade-in duration-700">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#F6DCD0] text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-[#790B5A] mb-4">¡Pedido Confirmado!</h2>
          <p className="text-[#62615F] mb-6">
            Tu pedido ha sido procesado exitosamente. Recibirás un email de confirmación en breve.
          </p>
          <div className="bg-[#FAF8F5] rounded-2xl p-4 mb-6">
            <p className="text-sm text-[#62615F]">
              <strong>Número de pedido:</strong> #MT360-{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
          </div>
          <Button
            onClick={() => setCurrentView("tienda")}
            className="bg-gradient-to-r from-[#790B5A] to-[#C15DA4] hover:from-[#C15DA4] hover:to-[#790B5A] text-white rounded-xl px-8 py-3"
          >
            Continuar Comprando
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-700">
      {/* Formulario */}
      <div className="lg:col-span-2 space-y-6">
        {/* Progress indicator */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-[#F6DCD0]">
          <div className="flex items-center justify-center space-x-4">
            <div className={`flex items-center space-x-2 ${step === "info" ? "text-[#790B5A]" : "text-[#BDCCB4]"}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${step === "info" ? "bg-[#C15DA4] text-white" : "bg-[#BDCCB4] text-white"}`}
              >
                1
              </div>
              <span className="font-medium">Información</span>
            </div>
            <div className="w-8 h-0.5 bg-[#BDCCB4]"></div>
            <div className={`flex items-center space-x-2 ${step === "payment" ? "text-[#790B5A]" : "text-[#BDCCB4]"}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${step === "payment" ? "bg-[#C15DA4] text-white" : "bg-[#BDCCB4] text-white"}`}
              >
                2
              </div>
              <span className="font-medium">Pago</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === "info" && (
            <>
              {/* Información de contacto */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-[#F6DCD0]">
                <h3 className="text-xl font-bold text-[#790B5A] mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Información de Contacto
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-[#790B5A]">
                      Nombre
                    </Label>
                    <Input
                      id="firstName"
                      required
                      className="border-2 border-[#BDCCB4] focus:border-[#C15DA4] rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-[#790B5A]">
                      Apellido
                    </Label>
                    <Input
                      id="lastName"
                      required
                      className="border-2 border-[#BDCCB4] focus:border-[#C15DA4] rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-[#790B5A]">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="border-2 border-[#BDCCB4] focus:border-[#C15DA4] rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-[#790B5A]">
                      Teléfono
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      className="border-2 border-[#BDCCB4] focus:border-[#C15DA4] rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Dirección de envío */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-[#F6DCD0]">
                <h3 className="text-xl font-bold text-[#790B5A] mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Dirección de Envío
                </h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address" className="text-[#790B5A]">
                      Dirección
                    </Label>
                    <Input
                      id="address"
                      required
                      className="border-2 border-[#BDCCB4] focus:border-[#C15DA4] rounded-xl"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city" className="text-[#790B5A]">
                        Ciudad
                      </Label>
                      <Input
                        id="city"
                        required
                        className="border-2 border-[#BDCCB4] focus:border-[#C15DA4] rounded-xl"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state" className="text-[#790B5A]">
                        Estado/Provincia
                      </Label>
                      <Input
                        id="state"
                        required
                        className="border-2 border-[#BDCCB4] focus:border-[#C15DA4] rounded-xl"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zip" className="text-[#790B5A]">
                        Código Postal
                      </Label>
                      <Input
                        id="zip"
                        required
                        className="border-2 border-[#BDCCB4] focus:border-[#C15DA4] rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Método de envío */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-[#F6DCD0]">
                <h3 className="text-xl font-bold text-[#790B5A] mb-4 flex items-center">
                  <Truck className="w-5 h-5 mr-2" />
                  Método de Envío
                </h3>
                <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
                  <div className="flex items-center space-x-2 p-3 border border-[#BDCCB4] rounded-xl">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="flex-1 cursor-pointer">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-medium text-[#790B5A]">Envío Estándar</p>
                          <p className="text-sm text-[#62615F]">5-7 días hábiles</p>
                        </div>
                        <span className="font-bold text-[#790B5A]">Gratis</span>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border border-[#BDCCB4] rounded-xl">
                    <RadioGroupItem value="express" id="express" />
                    <Label htmlFor="express" className="flex-1 cursor-pointer">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-medium text-[#790B5A]">Envío Express</p>
                          <p className="text-sm text-[#62615F]">2-3 días hábiles</p>
                        </div>
                        <span className="font-bold text-[#790B5A]">$15.99</span>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </>
          )}

          {step === "payment" && (
            <>
              {/* Método de pago */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-[#F6DCD0]">
                <h3 className="text-xl font-bold text-[#790B5A] mb-4 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Método de Pago
                </h3>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-2 p-3 border border-[#BDCCB4] rounded-xl">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="cursor-pointer">
                      Tarjeta de Crédito/Débito
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border border-[#BDCCB4] rounded-xl">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className="cursor-pointer">
                      PayPal
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border border-[#BDCCB4] rounded-xl">
                    <RadioGroupItem value="transfer" id="transfer" />
                    <Label htmlFor="transfer" className="cursor-pointer">
                      Transferencia Bancaria
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "card" && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <Label htmlFor="cardNumber" className="text-[#790B5A]">
                        Número de Tarjeta
                      </Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
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
                          required
                          className="border-2 border-[#BDCCB4] focus:border-[#C15DA4] rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Notas adicionales */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-[#F6DCD0]">
                <h3 className="text-xl font-bold text-[#790B5A] mb-4">Notas Adicionales (Opcional)</h3>
                <Textarea
                  placeholder="Instrucciones especiales para la entrega..."
                  className="border-2 border-[#BDCCB4] focus:border-[#C15DA4] rounded-xl"
                />
              </div>
            </>
          )}

          <div className="flex space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => (step === "payment" ? setStep("info") : setCurrentView("cart"))}
              className="flex-1 border-2 border-[#BDCCB4] hover:border-[#C15DA4] hover:bg-[#FAF8F5] rounded-xl"
            >
              {step === "payment" ? "Volver" : "Volver al Carrito"}
            </Button>

            <Button
              type="submit"
              disabled={isProcessing}
              className="flex-1 bg-gradient-to-r from-[#790B5A] to-[#C15DA4] hover:from-[#C15DA4] hover:to-[#790B5A] text-white rounded-xl"
            >
              {isProcessing ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Procesando...</span>
                </div>
              ) : step === "info" ? (
                "Continuar al Pago"
              ) : (
                "Confirmar Pedido"
              )}
            </Button>
          </div>
        </form>
      </div>

      {/* Resumen del pedido */}
      <div className="space-y-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-[#F6DCD0] sticky top-24">
          <h3 className="text-xl font-bold text-[#790B5A] mb-4">Resumen del Pedido</h3>

          <div className="space-y-3 mb-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-[#62615F]">
                  {item.name} x{item.quantity}
                </span>
                <span className="font-medium text-[#790B5A]">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-[#F6DCD0] pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-[#62615F]">Subtotal:</span>
              <span className="font-medium text-[#790B5A]">${getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#62615F]">Envío:</span>
              <span className="font-medium text-[#790B5A]">${shippingCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold border-t border-[#F6DCD0] pt-2">
              <span className="text-[#790B5A]">Total:</span>
              <span className="text-[#790B5A]">${totalWithShipping.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}