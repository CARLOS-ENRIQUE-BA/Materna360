"use client"

import { useState } from "react"
import { Heart, ShoppingCart, ArrowLeft, Package, BookOpen, Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart, type Product } from "./cart-context"
import { useFavorites } from "./favorites-context"

// Productos específicos por categoría
const categoryProducts: Record<string, Product[]> = {
  // Planes Alimenticios
  "Embarazo - Primer Trimestre": [
    {
      id: 101,
      name: "Plan Nutricional Primer Trimestre",
      price: 89.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Planes Alimenticios",
      description: "Plan personalizado con recetas y guías nutricionales para las primeras 12 semanas",
    },
    {
      id: 102,
      name: "Suplementos Ácido Fólico Premium",
      price: 34.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Planes Alimenticios",
      description: "Suplementos esenciales para el desarrollo neural del bebé",
    },
  ],
  "Embarazo - Segundo Trimestre": [
    {
      id: 103,
      name: "Plan Nutricional Segundo Trimestre",
      price: 94.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Planes Alimenticios",
      description: "Alimentación balanceada para el crecimiento acelerado del bebé",
    },
  ],
  "Postparto y Lactancia": [
    {
      id: 104,
      name: "Plan Nutricional Postparto",
      price: 99.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Planes Alimenticios",
      description: "Recuperación y nutrición para madres lactantes",
    },
  ],

  // Material Educativo
  "Guías de Embarazo": [
    {
      id: 201,
      name: "Guía Completa del Embarazo",
      price: 29.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Material Educativo",
      description: "Manual completo con todo lo que necesitas saber durante el embarazo",
    },
    {
      id: 202,
      name: "Diario de Embarazo Personalizado",
      price: 19.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Material Educativo",
      description: "Registra cada momento especial de tu embarazo",
    },
  ],
  "Lactancia Materna": [
    {
      id: 203,
      name: "Curso Online de Lactancia",
      price: 49.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Material Educativo",
      description: "Aprende técnicas y resuelve dudas sobre lactancia materna",
    },
  ],

  // Snacks Nutritivos
  "Galletas Nutritivas": [
    {
      id: 301,
      name: "Galletas de Avena y Hierro",
      price: 12.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Snacks Nutritivos",
      description: "Galletas fortificadas con hierro para prevenir anemia",
    },
    {
      id: 302,
      name: "Galletas de Lactancia",
      price: 14.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Snacks Nutritivos",
      description: "Galletas con ingredientes que estimulan la producción de leche",
    },
  ],
  "Barritas Energéticas": [
    {
      id: 303,
      name: "Barritas de Proteína Maternal",
      price: 24.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Snacks Nutritivos",
      description: "Pack de 12 barritas con proteína y vitaminas esenciales",
    },
  ],
  "Pastillas Vitamínicas": [
    {
      id: 304,
      name: "Multivitamínico Prenatal",
      price: 39.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Snacks Nutritivos",
      description: "Vitaminas completas para embarazo y lactancia",
    },
  ],

  // Productos Físicos (existentes)
  "Ropa Materna": [
    {
      id: 1,
      name: "Vestido de Maternidad Elegante",
      price: 89.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Ropa Materna",
      description: "Vestido cómodo y elegante para todas las etapas del embarazo",
    },
  ],
  Lactancia: [
    {
      id: 2,
      name: "Cojín de Lactancia Premium",
      price: 45.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Lactancia",
      description: "Cojín ergonómico para una lactancia cómoda y relajada",
    },
    {
      id: 6,
      name: "Sujetador de Lactancia",
      price: 29.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Lactancia",
      description: "Sujetador cómodo y funcional para madres lactantes",
    },
  ],
}

interface CategoryViewProps {
  category: string
  setCurrentView: (view: "tienda" | "ofertas" | "category" | "cart" | "checkout") => void
}

export default function CategoryView({ category, setCurrentView }: CategoryViewProps) {
  const [favorites, setFavorites] = useState<number[]>([])
  const { addToCart } = useCart()
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()

  const products = categoryProducts[category] || []

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

  const getCategoryIcon = (category: string) => {
    if (category.includes("Plan") || category.includes("Alimenticio")) return Package
    if (category.includes("Educativo") || category.includes("Guía") || category.includes("Curso")) return BookOpen
    if (category.includes("Snack") || category.includes("Galleta") || category.includes("Barrita")) return Cookie
    return Package
  }

  const CategoryIcon = getCategoryIcon(category)

  return (
    <div className="space-y-8">
      {/* Header de categoría */}
      <section className="animate-in fade-in duration-700">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#F6DCD0]">
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="outline"
              onClick={() => setCurrentView("tienda")}
              className="border-2 border-[#BDCCB4] hover:border-[#C15DA4] hover:bg-[#FAF8F5] transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Tienda
            </Button>
            <Badge className="bg-[#C15DA4] text-white px-4 py-2">
              {products.length} {products.length === 1 ? "producto" : "productos"}
            </Badge>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#790B5A] to-[#C15DA4] rounded-full flex items-center justify-center shadow-lg mr-4">
                <CategoryIcon className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-3xl font-bold text-[#790B5A]">{category}</h1>
                <p className="text-[#62615F]">Productos especializados para esta categoría</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos de la categoría */}
      {products.length > 0 ? (
        <section className="animate-in slide-in-from-bottom duration-700 delay-200">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-[#F6DCD0]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
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
                  <p className="text-sm text-[#62615F] mb-4 line-clamp-2">{product.description}</p>

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
      ) : (
        <section className="animate-in fade-in duration-700 delay-200">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-[#F6DCD0] text-center">
            <CategoryIcon className="w-16 h-16 text-[#BDCCB4] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#790B5A] mb-4">Próximamente</h2>
            <p className="text-[#62615F] mb-6">
              Estamos trabajando en traerte los mejores productos para esta categoría.
            </p>
            <Button
              onClick={() => setCurrentView("tienda")}
              className="bg-gradient-to-r from-[#790B5A] to-[#C15DA4] hover:from-[#C15DA4] hover:to-[#790B5A] text-white rounded-xl px-8 py-3"
            >
              Explorar Otros Productos
            </Button>
          </div>
        </section>
      )}

      {/* Recomendaciones */}
      {products.length > 0 && (
        <section className="animate-in slide-in-from-left duration-700 delay-400">
          <div className="bg-gradient-to-r from-[#97C4C6] to-[#BDCCB4] rounded-3xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-white mb-4">¿Necesitas más información?</h3>
            <p className="text-white opacity-90 mb-6">
              Nuestros especialistas pueden ayudarte a elegir el producto perfecto para ti
            </p>
            <Button
              onClick={() => window.open("https://instagram.com/materna360oficial", "_blank")}
              className="bg-white text-[#790B5A] hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl transition-all duration-300"
            >
              Consultar por Instagram
            </Button>
          </div>
        </section>
      )}
    </div>
  )
}
