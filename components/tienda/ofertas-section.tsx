"use client"

import { useState } from "react"
import { Heart, ShoppingCart, Tag, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart, type Product } from "./cart-context"
import { useFavorites } from "./favorites-context"

// Productos con ofertas especiales
const ofertasProducts: (Product & { originalPrice: number; discount: number; endDate: string })[] = [
  {
    id: 1,
    name: "Vestido de Maternidad Elegante",
    price: 62.99,
    originalPrice: 89.99,
    discount: 30,
    image: "/placeholder.svg?height=300&width=300",
    category: "Ropa Materna",
    description: "Vestido cómodo y elegante para todas las etapas del embarazo",
    endDate: "2024-12-31",
  },
  {
    id: 3,
    name: "Body para Bebé Orgánico",
    price: 17.49,
    originalPrice: 24.99,
    discount: 30,
    image: "/placeholder.svg?height=300&width=300",
    category: "Ropa Bebé",
    description: "Body 100% algodón orgánico, suave para la piel del bebé",
    endDate: "2024-12-25",
  },
  {
    id: 4,
    name: "Crema Antiestrías Natural",
    price: 22.99,
    originalPrice: 32.99,
    discount: 30,
    image: "/placeholder.svg?height=300&width=300",
    category: "Cuidado Personal",
    description: "Crema hidratante con ingredientes naturales para prevenir estrías",
    endDate: "2024-12-28",
  },
  {
    id: 6,
    name: "Sujetador de Lactancia",
    price: 20.99,
    originalPrice: 29.99,
    discount: 30,
    image: "/placeholder.svg?height=300&width=300",
    category: "Lactancia",
    description: "Sujetador cómodo y funcional para madres lactantes",
    endDate: "2024-12-30",
  },
  {
    id: 9,
    name: "Kit de Cuidado Maternal",
    price: 79.99,
    originalPrice: 119.99,
    discount: 33,
    image: "/placeholder.svg?height=300&width=300",
    category: "Cuidado Personal",
    description: "Kit completo con productos esenciales para el cuidado durante el embarazo",
    endDate: "2024-12-31",
  },
  {
    id: 10,
    name: "Pijama de Lactancia Premium",
    price: 44.99,
    originalPrice: 64.99,
    discount: 31,
    image: "/placeholder.svg?height=300&width=300",
    category: "Ropa Materna",
    description: "Pijama súper cómodo con acceso fácil para lactancia",
    endDate: "2024-12-29",
  },
]

interface OfertasSectionProps {
  setCurrentView: (view: "tienda" | "ofertas" | "categorias" | "cart" | "checkout") => void
}

export default function OfertasSection({ setCurrentView }: OfertasSectionProps) {
  const [favorites, setFavorites] = useState<number[]>([])
  const { addToCart } = useCart()
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()

  const toggleFavorite = (product: Product) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id)
    } else {
      addToFavorites(product)
    }
  }

  const handleAddToCart = (product: Product) => {
    addToCart(product)
  }

  return (
    <div className="space-y-8">
      {/* Header de ofertas */}
      <section className="animate-in fade-in duration-700">
        <div className="bg-gradient-to-r from-[#790B5A] to-[#C15DA4] rounded-3xl p-8 shadow-lg text-white text-center">
          <div className="flex items-center justify-center mb-4">
            <Tag className="w-8 h-8 mr-3" />
            <h1 className="text-4xl font-bold">¡Ofertas Especiales!</h1>
          </div>
          <p className="text-xl opacity-90 mb-6">Descuentos increíbles en productos seleccionados para mamá y bebé</p>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <Clock className="w-5 h-5" />
            <span>Ofertas por tiempo limitado</span>
          </div>
        </div>
      </section>

      {/* Productos en oferta */}
      <section className="animate-in slide-in-from-bottom duration-700 delay-200">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-[#F6DCD0]">
          <h2 className="text-2xl font-bold text-[#790B5A] mb-6 text-center">Productos con Descuento</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ofertasProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-[#F6DCD0] relative overflow-hidden"
              >
                {/* Badge de descuento */}
                <div className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-bl-2xl font-bold text-sm z-10">
                  -{product.discount}%
                </div>

                <div className="relative mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleFavorite(product)}
                    className="absolute top-2 left-2 bg-white/80 hover:bg-white"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isFavorite(product.id) ? "fill-[#C15DA4] text-[#C15DA4]" : "text-[#62615F]"
                      }`}
                    />
                  </Button>
                </div>

                <Badge variant="secondary" className="mb-2 bg-[#F6DCD0] text-[#790B5A]">
                  {product.category}
                </Badge>

                <h3 className="font-semibold text-[#790B5A] mb-2">{product.name}</h3>
                <p className="text-sm text-[#62615F] mb-3 line-clamp-2">{product.description}</p>

                {/* Precios */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold text-[#790B5A]">${product.price}</span>
                  <span className="text-sm text-[#62615F] line-through">${product.originalPrice}</span>
                  <Badge className="bg-green-100 text-green-800 text-xs">
                    Ahorra ${(product.originalPrice - product.price).toFixed(2)}
                  </Badge>
                </div>

                {/* Fecha límite */}
                <div className="flex items-center text-xs text-[#62615F] mb-4">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>Válido hasta: {new Date(product.endDate).toLocaleDateString()}</span>
                </div>

                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-gradient-to-r from-[#790B5A] to-[#C15DA4] hover:from-[#C15DA4] hover:to-[#790B5A] text-white rounded-xl transition-all duration-300"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Agregar al Carrito
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promoción especial */}
      <section className="animate-in slide-in-from-left duration-700 delay-400">
        <div className="bg-gradient-to-r from-[#97C4C6] to-[#BDCCB4] rounded-3xl p-8 shadow-lg">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-4">🎁 Promoción Especial</h3>
            <p className="text-lg mb-6">
              Compra 2 productos de cuidado personal y obtén <strong>20% de descuento adicional</strong>
            </p>
            <Button
              onClick={() => setCurrentView("tienda")}
              className="bg-white text-[#790B5A] hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl transition-all duration-300"
            >
              Ver Productos de Cuidado
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter para ofertas */}
      <section className="animate-in fade-in duration-700 delay-600">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#F6DCD0] text-center">
          <h3 className="text-2xl font-bold text-[#790B5A] mb-4">📧 No te pierdas nuestras ofertas</h3>
          <p className="text-[#62615F] mb-6">
            Suscríbete a nuestro newsletter y sé la primera en conocer nuestras promociones exclusivas
          </p>
          <div className="flex max-w-md mx-auto space-x-4">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 border-2 border-[#BDCCB4] focus:border-[#C15DA4] rounded-xl outline-none transition-all duration-300"
            />
            <Button className="bg-gradient-to-r from-[#790B5A] to-[#C15DA4] hover:from-[#C15DA4] hover:to-[#790B5A] text-white px-6 py-3 rounded-xl">
              Suscribirse
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
