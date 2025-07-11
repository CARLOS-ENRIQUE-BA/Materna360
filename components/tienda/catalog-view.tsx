"use client"

import { useState } from "react"
import { Heart, ShoppingCart, Package, Filter, Grid, List, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useCart, type Product } from "./cart-context"
import { useFavorites } from "./favorites-context"

// Base de datos completa de todos los productos
const allProducts: Product[] = [
  // Productos físicos - Ropa Materna
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
    id: 14,
    name: "Blusa de Lactancia Moderna",
    price: 45.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Ropa Materna",
    description: "Blusa con acceso discreto para lactancia, perfecta para el día a día",
  },
  {
    id: 15,
    name: "Pantalón Maternal Ajustable",
    price: 65.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Ropa Materna",
    description: "Pantalón con banda elástica ajustable para máxima comodidad",
  },

  // Lactancia
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
    id: 6,
    name: "Sujetador de Lactancia",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Lactancia",
    description: "Sujetador cómodo y funcional para madres lactantes",
    featured: true,
  },
  {
    id: 16,
    name: "Extractor de Leche Eléctrico",
    price: 159.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Lactancia",
    description: "Extractor silencioso y eficiente con múltiples velocidades",
  },

  // Ropa Bebé
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
    id: 17,
    name: "Pijama de Bebé Térmico",
    price: 32.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Ropa Bebé",
    description: "Pijama térmico para mantener al bebé cálido toda la noche",
  },
  {
    id: 18,
    name: "Conjunto de Bebé 3 Piezas",
    price: 48.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Ropa Bebé",
    description: "Conjunto completo: body, pantalón y gorro en algodón suave",
  },

  // Cuidado Personal
  {
    id: 4,
    name: "Crema Antiestrías Natural",
    price: 32.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Cuidado Personal",
    description: "Crema hidratante con ingredientes naturales para prevenir estrías",
    featured: true,
  },
  {
    id: 19,
    name: "Aceite Corporal Maternal",
    price: 28.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Cuidado Personal",
    description: "Aceite nutritivo para hidratar y relajar la piel durante el embarazo",
  },
  {
    id: 20,
    name: "Champú para Bebé Sin Lágrimas",
    price: 18.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Cuidado Personal",
    description: "Champú suave y natural, perfecto para el cabello delicado del bebé",
  },

  // Accesorios Bebé
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
    id: 21,
    name: "Móvil Musical para Cuna",
    price: 54.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accesorios Bebé",
    description: "Móvil con melodías relajantes y figuras coloridas",
  },
  {
    id: 22,
    name: "Chupetes Ortodónticos Pack 2",
    price: 15.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accesorios Bebé",
    description: "Chupetes diseñados para el desarrollo oral saludable",
  },

  // Planes Alimenticios
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
  {
    id: 103,
    name: "Plan Nutricional Segundo Trimestre",
    price: 94.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Planes Alimenticios",
    description: "Alimentación balanceada para el crecimiento acelerado del bebé",
  },
  {
    id: 104,
    name: "Plan Nutricional Postparto",
    price: 99.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Planes Alimenticios",
    description: "Recuperación y nutrición para madres lactantes",
  },

  // Material Educativo
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
  {
    id: 203,
    name: "Curso Online de Lactancia",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Material Educativo",
    description: "Aprende técnicas y resuelve dudas sobre lactancia materna",
  },

  // Snacks Nutritivos
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
  {
    id: 303,
    name: "Barritas de Proteína Maternal",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Snacks Nutritivos",
    description: "Pack de 12 barritas con proteína y vitaminas esenciales",
  },
  {
    id: 304,
    name: "Multivitamínico Prenatal",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Snacks Nutritivos",
    description: "Vitaminas completas para embarazo y lactancia",
  },

  // Productos adicionales
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

interface CatalogViewProps {
  setCurrentView: (view: "tienda" | "ofertas" | "category" | "cart" | "checkout" | "favorites" | "catalog") => void
}

export default function CatalogView({ setCurrentView }: CatalogViewProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState<"name" | "price-low" | "price-high" | "category">("name")

  const { addToCart } = useCart()
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()

  // Obtener categorías únicas
  const categories = ["all", ...Array.from(new Set(allProducts.map((product) => product.category)))]

  // Filtrar y ordenar productos
  const filteredProducts = allProducts
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "category":
          return a.category.localeCompare(b.category)
        default:
          return 0
      }
    })

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
      {/* Header del catálogo */}
      <section className="animate-in fade-in duration-700">
        <div className="bg-gradient-to-r from-[#790B5A] via-[#C15DA4] to-[#E985A6] rounded-3xl p-8 shadow-lg text-white text-center">
          <div className="flex items-center justify-center mb-4">
            <Package className="w-8 h-8 mr-3" />
            <h1 className="text-4xl font-bold">Catálogo Completo</h1>
          </div>
          <p className="text-xl opacity-90 mb-6">
            Explora todos nuestros {allProducts.length} productos disponibles para mamá y bebé
          </p>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <Badge className="bg-white/20 text-white px-4 py-2">{filteredProducts.length} productos mostrados</Badge>
          </div>
        </div>
      </section>

      {/* Controles de filtrado y búsqueda */}
      <section className="animate-in slide-in-from-top duration-700 delay-200">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-[#F6DCD0]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Búsqueda */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#790B5A] mb-2">Buscar productos</label>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Buscar por nombre o descripción..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-2 border-[#BDCCB4] focus:border-[#C15DA4] rounded-xl"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#62615F]" />
              </div>
            </div>

            {/* Filtro por categoría */}
            <div>
              <label className="block text-sm font-medium text-[#790B5A] mb-2">Categoría</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 border-2 border-[#BDCCB4] focus:border-[#C15DA4] rounded-xl bg-white text-[#790B5A] outline-none"
              >
                <option value="all">Todas las categorías</option>
                {categories.slice(1).map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Ordenar por */}
            <div>
              <label className="block text-sm font-medium text-[#790B5A] mb-2">Ordenar por</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full p-2 border-2 border-[#BDCCB4] focus:border-[#C15DA4] rounded-xl bg-white text-[#790B5A] outline-none"
              >
                <option value="name">Nombre A-Z</option>
                <option value="price-low">Precio: Menor a Mayor</option>
                <option value="price-high">Precio: Mayor a Menor</option>
                <option value="category">Categoría</option>
              </select>
            </div>
          </div>

          {/* Controles de vista */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#F6DCD0]">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-[#62615F]">Vista:</span>
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={`${
                  viewMode === "grid"
                    ? "bg-[#C15DA4] text-white"
                    : "border-[#BDCCB4] text-[#790B5A] hover:border-[#C15DA4]"
                } rounded-xl`}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={`${
                  viewMode === "list"
                    ? "bg-[#C15DA4] text-white"
                    : "border-[#BDCCB4] text-[#790B5A] hover:border-[#C15DA4]"
                } rounded-xl`}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-[#62615F]">
                Mostrando {filteredProducts.length} de {allProducts.length} productos
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                  setSortBy("name")
                }}
                className="border-[#BDCCB4] text-[#790B5A] hover:border-[#C15DA4] hover:bg-[#FAF8F5] rounded-xl"
              >
                <Filter className="w-4 h-4 mr-2" />
                Limpiar Filtros
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid/Lista de productos */}
      <section className="animate-in slide-in-from-bottom duration-700 delay-400">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-[#F6DCD0]">
          {filteredProducts.length > 0 ? (
            <div
              className={`${
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "space-y-4"
              }`}
            >
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`${
                    viewMode === "grid"
                      ? "bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-[#F6DCD0]"
                      : "bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-[#F6DCD0] flex items-center space-x-4"
                  } animate-in slide-in-from-bottom duration-500`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {viewMode === "grid" ? (
                    // Vista Grid
                    <>
                      <div className="relative mb-4">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-48 object-cover rounded-xl"
                        />
                        {product.featured && (
                          <Badge className="absolute top-2 left-2 bg-[#C15DA4] text-white">Destacado</Badge>
                        )}
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

                      <h3 className="font-semibold text-[#790B5A] mb-2 line-clamp-2">{product.name}</h3>
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
                    </>
                  ) : (
                    // Vista Lista
                    <>
                      <div className="relative flex-shrink-0">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-24 h-24 object-cover rounded-xl"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleFavorite(product)}
                          className="absolute -top-2 -right-2 bg-white/80 hover:bg-white w-6 h-6 p-0 rounded-full"
                        >
                          <Heart
                            className={`w-3 h-3 ${
                              isFavorite(product.id) ? "fill-[#C15DA4] text-[#C15DA4]" : "text-[#62615F]"
                            }`}
                          />
                        </Button>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-[#790B5A] mb-1">{product.name}</h3>
                            <Badge variant="secondary" className="bg-[#F6DCD0] text-[#790B5A] text-xs">
                              {product.category}
                            </Badge>
                          </div>
                          <span className="text-xl font-bold text-[#790B5A]">${product.price}</span>
                        </div>
                        <p className="text-sm text-[#62615F] mb-3 line-clamp-2">{product.description}</p>
                        <Button
                          onClick={() => handleAddToCart(product)}
                          className="bg-gradient-to-r from-[#790B5A] to-[#C15DA4] hover:from-[#C15DA4] hover:to-[#790B5A] text-white rounded-xl transition-all duration-300"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Agregar al Carrito
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          ) : (
            // Estado sin resultados
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-[#BDCCB4] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#790B5A] mb-4">No se encontraron productos</h3>
              <p className="text-[#62615F] mb-6">Intenta ajustar tus filtros de búsqueda o explora otras categorías</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}
                className="bg-gradient-to-r from-[#790B5A] to-[#C15DA4] hover:from-[#C15DA4] hover:to-[#790B5A] text-white rounded-xl px-8 py-3"
              >
                Ver Todos los Productos
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="animate-in fade-in duration-700 delay-600">
        <div className="bg-gradient-to-r from-[#97C4C6] to-[#BDCCB4] rounded-3xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-white mb-4">¿Necesitas ayuda para elegir?</h3>
          <p className="text-white opacity-90 mb-6">
            Nuestro equipo está aquí para ayudarte a encontrar los productos perfectos para ti y tu bebé
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => setCurrentView("ofertas")}
              className="bg-white text-[#790B5A] hover:bg-gray-100 font-semibold px-6 py-3 rounded-xl transition-all duration-300"
            >
              Ver Ofertas Especiales
            </Button>
            <Button
              onClick={() => window.open("https://instagram.com/materna360oficial", "_blank")}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#790B5A] font-semibold px-6 py-3 rounded-xl transition-all duration-300"
            >
              Contactar Asesor
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
