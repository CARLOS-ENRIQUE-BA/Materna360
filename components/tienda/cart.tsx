"use client"

import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "./cart-context"

interface CartProps {
  setCurrentView: (view: "tienda" | "cart" | "checkout") => void
}

export default function Cart({ setCurrentView }: CartProps) {
  const { cart, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart()

  if (cart.length === 0) {
    return (
      <div className="animate-in fade-in duration-700">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#F6DCD0] text-center">
          <ShoppingBag className="w-16 h-16 text-[#BDCCB4] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#790B5A] mb-4">Tu carrito está vacío</h2>
          <p className="text-[#62615F] mb-6">¡Descubre nuestros productos y comienza a llenar tu carrito!</p>
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
    <div className="space-y-6 animate-in fade-in duration-700">
      {/* Header del carrito */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-[#F6DCD0]">
        <h2 className="text-2xl font-bold text-[#790B5A] mb-2">Tu Carrito de Compras</h2>
        <p className="text-[#62615F]">
          {getTotalItems()} {getTotalItems() === 1 ? "producto" : "productos"} en tu carrito
        </p>
      </div>

      {/* Items del carrito */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-[#F6DCD0]">
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 p-4 bg-white rounded-2xl border border-[#F6DCD0] hover:shadow-md transition-all duration-300"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-xl"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-[#790B5A]">{item.name}</h3>
                <p className="text-sm text-[#62615F]">{item.category}</p>
                <p className="text-lg font-bold text-[#790B5A]">${item.price}</p>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 p-0 border-[#BDCCB4] hover:border-[#C15DA4]"
                >
                  <Minus className="w-3 h-3" />
                </Button>

                <span className="w-8 text-center font-semibold text-[#790B5A]">{item.quantity}</span>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 p-0 border-[#BDCCB4] hover:border-[#C15DA4]"
                >
                  <Plus className="w-3 h-3" />
                </Button>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Resumen del carrito */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-[#F6DCD0]">
        <div className="space-y-4">
          <div className="flex justify-between items-center text-lg">
            <span className="text-[#62615F]">Subtotal:</span>
            <span className="font-semibold text-[#790B5A]">${getTotalPrice().toFixed(2)}</span>
          </div>

          <div className="flex justify-between items-center text-lg">
            <span className="text-[#62615F]">Envío:</span>
            <span className="font-semibold text-[#790B5A]">Gratis</span>
          </div>

          <div className="border-t border-[#F6DCD0] pt-4">
            <div className="flex justify-between items-center text-xl">
              <span className="font-bold text-[#790B5A]">Total:</span>
              <span className="font-bold text-[#790B5A]">${getTotalPrice().toFixed(2)}</span>
            </div>
          </div>

          <div className="flex space-x-4 pt-4">
            <Button
              variant="outline"
              onClick={() => setCurrentView("tienda")}
              className="flex-1 border-2 border-[#BDCCB4] hover:border-[#C15DA4] hover:bg-[#FAF8F5] rounded-xl"
            >
              Continuar Comprando
            </Button>

            <Button
              onClick={() => setCurrentView("checkout")}
              className="flex-1 bg-gradient-to-r from-[#790B5A] to-[#C15DA4] hover:from-[#C15DA4] hover:to-[#790B5A] text-white rounded-xl"
            >
              Proceder al Pago
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
