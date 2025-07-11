"use client"

import { useState } from "react"
import { Heart, ShoppingCart, Star, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart, type Product } from "./cart-context"
import { useFavorites } from "./favorites-context"

// Productos destacados expandidos
const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Vestido de Maternidad Elegante",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Ropa Materna",
    description: "Vestido cómodo y elegante para todas las etapas del embarazo",
    featured: true,
  },
  {
    id: 3,
    name: "Body para Bebé Orgánico",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Ropa Bebé",
    description: "Body 100% algodón orgánico, suave para la piel del bebé",
    featured: true,
  },
  {
    id: 6,
    name: "Sujetador de Lactancia",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Lactancia",
    description: "Sujetador cómodo y funcional para madres lactantes",
    featured: true,
  },
  {
    id: 2,
    name: "Cojín de Lactancia Premium",
    price: 45.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Lactancia",
    description: "Cojín ergonómico para una lactancia cómoda y relajada",
    featured: true,
  },
  {
    id: 5,
    name: "Manta de Bebé Suave",
    price: 38.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accesorios Bebé",
    description: "Manta ultra suave y cálida para el descanso del bebé",
    featured: true,
  },
  {
    id: 4,
    name: "Crema Antiestrías Natural",
    price: 32.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Cuidado Personal",
    description: "Crema hidratante con ingredientes naturales para prevenir estrías",
    featured: true,
  },
]

// Productos más vendidos
const bestSellers: Product[] = [
  {
    id: 11,
    name: "Kit Esencial de Maternidad",
    price: 129.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Kit Completo",
    description: "Todo lo que necesitas para tu embarazo en un solo kit",
  },
  {
    id: 12,
    name: "Almohada de Embarazo Premium",
    price: 69.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accesorios Materna",
    description: "Almohada ergonómica para un descanso perfecto",
  },
  {
    id: 13,
    name: "Set de Biberones Anticólicos",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Alimentación Bebé",
    description: "Set completo de biberones con sistema anticólicos",
  },
]

interface ProductGridProps {
  setCurrentView: (view: "tienda" | "ofertas" | "categorias" | "cart" | "checkout") => void
}

export default function ProductGrid({ setCurrentView }: ProductGridProps) {
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
      {/* Hero Section */}
      <section className="animate-in fade-in duration-700">
        <div className="bg-gradient-to-r from-[#790B5A] via-[#C15DA4] to-[#E985A6] rounded-3xl p-8 shadow-lg text-white text-center">
          <h1 className="text-4xl font-bold mb-4">¡Bienvenida a Materna 360!</h1>
          <p className="text-xl opacity-90 mb-6">Descubre productos especialmente seleccionados para ti y tu bebé</p>
          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => setCurrentView("ofertas")}
              className="bg-white text-[#790B5A] hover:bg-gray-100 font-semibold px-6 py-3 rounded-xl transition-all duration-300"
            >
              Ver Ofertas
            </Button>
            <Button
              onClick={() => setCurrentView("categorias")}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#790B5A] font-semibold px-6 py-3 rounded-xl transition-all duration-300"
            >
              Explorar Categorías
            </Button>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="animate-in slide-in-from-left duration-700 delay-200">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-[#F6DCD0]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Star className="w-6 h-6 text-[#C15DA4] mr-2" />
              <h2 className="text-2xl font-bold text-[#790B5A]">Productos Destacados</h2>
            </div>
            <Button
              variant="outline"
              onClick={() => setCurrentView("categorias")}
              className="border-[#BDCCB4] hover:border-[#C15DA4] hover:bg-[#FAF8F5] text-[#790B5A]"
            >
              Ver Todos
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-[#F6DCD0]"
              >
                <div className="relative mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <Badge className="absolute top-2 left-2 bg-[#C15DA4] text-white">Destacado</Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleFavorite(product)}
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
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
                <p className="text-sm text-[#62615F] mb-3">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#790B5A]">${product.price}</span>
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="bg-gradient-to-r from-[#790B5A] to-[#C15DA4] hover:from-[#C15DA4] hover:to-[#790B5A] text-white rounded-xl transition-all duration-300"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Agregar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productos Más Vendidos */}
      <section className="animate-in slide-in-from-right duration-700 delay-400">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-[#F6DCD0]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <TrendingUp className="w-6 h-6 text-[#97C4C6] mr-2" />
              <h2 className="text-2xl font-bold text-[#790B5A]">Más Vendidos</h2>
            </div>
            <Badge className="bg-[#97C4C6] text-white">Populares</Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestSellers.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-[#F6DCD0]"
              >
                <div className="relative mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <Badge className="absolute top-2 left-2 bg-[#97C4C6] text-white">Más Vendido</Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleFavorite(product)}
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
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
                <p className="text-sm text-[#62615F] mb-3">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#790B5A]">${product.price}</span>
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="bg-gradient-to-r from-[#790B5A] to-[#C15DA4] hover:from-[#C15DA4] hover:to-[#790B5A] text-white rounded-xl transition-all duration-300"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Agregar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="animate-in fade-in duration-700 delay-600">
        <div className="bg-gradient-to-r from-[#BDCCB4] to-[#97C4C6] rounded-3xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-white mb-4">¿No encuentras lo que buscas?</h3>
          <p className="text-white opacity-90 mb-6">
            Explora todas nuestras categorías o descubre nuestras ofertas especiales
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => setCurrentView("categorias")}
              className="bg-white text-[#790B5A] hover:bg-gray-100 font-semibold px-6 py-3 rounded-xl transition-all duration-300"
            >
              Ver Categorías
            </Button>
            <Button
              onClick={() => setCurrentView("ofertas")}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#790B5A] font-semibold px-6 py-3 rounded-xl transition-all duration-300"
            >
              Ver Ofertas
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
