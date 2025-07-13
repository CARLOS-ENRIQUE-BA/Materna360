"use client"

import { useState } from "react"
import { X, Star, Package, Info, ShoppingCart } from "lucide-react" // Added ShoppingCart icon
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/components/tienda/cart-context"
import { useCart } from "@/components/tienda/cart-context" // Import useCart

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
  showCallToAction?: boolean // New prop to control CTA visibility
}

export default function ProductModal({ product, isOpen, onClose, showCallToAction = true }: ProductModalProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const { addToCart } = useCart() // Use the cart context

  if (!isOpen || !product) return null

  const handleAddToCart = () => {
    if (product) {
      addToCart(product)
      onClose() // Optionally close modal after adding to cart
    }
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in zoom-in duration-300">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-[#F6DCD0] max-w-4xl w-full max-h-[90vh] overflow-hidden">
          {/* Header del modal */}
          <div className="bg-gradient-to-r from-[#790B5A] to-[#C15DA4] p-6 text-white relative">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2"
            >
              <X className="w-5 h-5" />
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Detalles del Producto</h2>
                <p className="text-white/80">Información completa</p>
              </div>
            </div>
          </div>

          {/* Contenido del modal */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Imagen del producto */}
              <div className="space-y-4">
                <div className="relative bg-gradient-to-br from-[#FAF8F5] to-[#F6DCD0] rounded-2xl p-4 border border-[#F6DCD0]">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className={`w-full h-80 object-cover rounded-xl transition-all duration-500 ${
                      imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                    onLoad={() => setImageLoaded(true)}
                  />
                  {!imageLoaded && (
                    <div className="absolute inset-4 bg-gradient-to-br from-[#BDCCB4]/20 to-[#97C4C6]/20 rounded-xl flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-[#C15DA4] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}

                  {/* Badge de categoría en la imagen */}
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-gradient-to-r from-[#790B5A] to-[#C15DA4] text-white">
                      {product.category}
                    </Badge>
                  </div>

                  {/* Badge de destacado si aplica */}
                  {product.featured && (
                    <div className="absolute top-6 right-6">
                      <Badge className="bg-gradient-to-r from-[#E985A6] to-[#C15DA4] text-white">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Destacado
                      </Badge>
                    </div>
                  )}
                </div>
              </div>

              {/* Información del producto */}
              <div className="space-y-6">
                {/* Título y precio */}
                <div>
                  <h3 className="text-3xl font-bold text-[#790B5A] mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-4xl font-bold text-[#790B5A]">${product.price}</span>
                    <Badge variant="secondary" className="bg-[#F6DCD0] text-[#790B5A]">
                      {product.category}
                    </Badge>
                  </div>
                </div>

                {/* Descripción */}
                <div className="bg-gradient-to-r from-[#FAF8F5] to-[#F6DCD0] rounded-2xl p-6 border border-[#F6DCD0]">
                  <div className="flex items-center space-x-2 mb-3">
                    <Info className="w-5 h-5 text-[#C15DA4]" />
                    <h4 className="text-lg font-semibold text-[#790B5A]">Descripción</h4>
                  </div>
                  <p className="text-[#62615F] leading-relaxed">{product.description}</p>
                </div>

                {/* Conditional Call to action or Add to Cart button */}
                {showCallToAction ? (
                  <div className="bg-gradient-to-r from-[#790B5A] to-[#C15DA4] rounded-2xl p-6 text-white text-center">
                    <h4 className="text-xl font-bold mb-2">¿Te interesa este producto?</h4>
                    <p className="text-white/90 mb-4">
                      Regístrate para acceder a nuestra tienda completa y realizar compras
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                      <Button
                        onClick={() => window.open("/register", "_blank")}
                        className="flex-1 bg-white text-[#790B5A] hover:bg-gray-100 font-semibold rounded-xl transition-all duration-300"
                      >
                        Crear Cuenta
                      </Button>
                      <Button
                        onClick={() => window.open("/login", "_blank")}
                        variant="outline"
                        className="flex-1 border-white text-[#C15DA4] hover:bg-white hover:text-[#790B5A] font-semibold rounded-xl transition-all duration-300"
                      >
                        Iniciar Sesión
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gradient-to-r from-[#790B5A] to-[#C15DA4] rounded-2xl p-6 text-white text-center">
                    <h4 className="text-xl font-bold mb-2">¡Listo para tu carrito!</h4>
                    <p className="text-white/90 mb-4">Añade este producto a tu carrito y continúa explorando.</p>
                    <Button
                      onClick={handleAddToCart}
                      className="w-full bg-white text-[#790B5A] hover:bg-gray-100 font-semibold rounded-xl transition-all duration-300 flex items-center justify-center"
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Agregar al Carrito
                    </Button>
                  </div>
                )}

                {/* Información adicional */}
                <div className="text-center text-sm text-[#62615F] bg-[#FAF8F5] rounded-xl p-4 border border-[#F6DCD0]">
                  <p>
                    💡 <strong>Tip:</strong> Al registrarte tendrás acceso a ofertas exclusivas, sistema de favoritos y
                    seguimiento de pedidos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
