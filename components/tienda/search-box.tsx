"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Search, ShoppingCart, ArrowRight, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart, type Product } from "./cart-context"

// Base de datos de productos expandida para búsqueda
const allProducts: Product[] = [
  // Productos físicos existentes
  {
    id: 1,
    name: "Vestido de Maternidad Elegante",
    price: 89.99,
    image: "../assets/Productos-físicos/im1.jpg",
    category: "Ropa Materna",
    description: "Vestido cómodo y elegante para todas las etapas del embarazo",
  },
  {
    id: 2,
    name: "Cojín de Lactancia Premium",
    price: 45.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Lactancia",
    description: "Cojín ergonómico para una lactancia cómoda y relajada",
  },
  {
    id: 3,
    name: "Body para Bebé Orgánico",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Ropa Bebé",
    description: "Body 100% algodón orgánico, suave para la piel del bebé",
  },
  {
    id: 4,
    name: "Crema Antiestrías Natural",
    price: 32.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Cuidado Personal",
    description: "Crema hidratante con ingredientes naturales para prevenir estrías",
  },
  {
    id: 5,
    name: "Manta de Bebé Suave",
    price: 38.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accesorios Bebé",
    description: "Manta ultra suave y cálida para el descanso del bebé",
  },
  {
    id: 6,
    name: "Sujetador de Lactancia",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Lactancia",
    description: "Sujetador cómodo y funcional para madres lactantes",
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
]

interface SearchBoxProps {
  onCategorySelect?: (category: string) => void
  className?: string
}

export default function SearchBox({ onCategorySelect, className = "" }: SearchBoxProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState<Product[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const { addToCart } = useCart()

  // Función de búsqueda inteligente
  const searchProducts = (query: string): Product[] => {
    if (!query.trim()) return []

    const searchTerm = query.toLowerCase().trim()

    return allProducts
      .filter((product) => {
        const matchesName = product.name.toLowerCase().includes(searchTerm)
        const matchesCategory = product.category.toLowerCase().includes(searchTerm)
        const matchesDescription = product.description.toLowerCase().includes(searchTerm)

        // Búsqueda por palabras clave específicas
        const keywords = searchTerm.split(" ")
        const matchesKeywords = keywords.some(
          (keyword) =>
            product.name.toLowerCase().includes(keyword) ||
            product.category.toLowerCase().includes(keyword) ||
            product.description.toLowerCase().includes(keyword),
        )

        return matchesName || matchesCategory || matchesDescription || matchesKeywords
      })
      .slice(0, 8) // Limitar a 8 sugerencias
  }

  // Actualizar sugerencias en tiempo real
  useEffect(() => {
    if (searchQuery.length >= 2) {
      const results = searchProducts(searchQuery)
      setSuggestions(results)
      setIsOpen(results.length > 0)
      setSelectedIndex(-1)
    } else {
      setSuggestions([])
      setIsOpen(false)
    }
  }, [searchQuery])

  // Cerrar al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSelectedIndex(-1)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Navegación con teclado
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || suggestions.length === 0) return

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev))
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
        break
      case "Enter":
        e.preventDefault()
        if (selectedIndex >= 0) {
          handleProductSelect(suggestions[selectedIndex])
        }
        break
      case "Escape":
        setIsOpen(false)
        setSelectedIndex(-1)
        inputRef.current?.blur()
        break
    }
  }

  const handleProductSelect = (product: Product) => {
    setSearchQuery(product.name)
    setIsOpen(false)
    setSelectedIndex(-1)

    // Si hay función de selección de categoría, usarla
    if (onCategorySelect) {
      onCategorySelect(product.category)
    }
  }

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation()
    addToCart(product)
    setIsOpen(false)
  }

  const clearSearch = () => {
    setSearchQuery("")
    setSuggestions([])
    setIsOpen(false)
    setSelectedIndex(-1)
    inputRef.current?.focus()
  }

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      {/* Input de búsqueda */}
      <div className="relative">
        <Input
          ref={inputRef}
          type="text"
          placeholder="Buscar productos, categorías..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => searchQuery.length >= 2 && suggestions.length > 0 && setIsOpen(true)}
          className="w-full h-10 pl-10 pr-10 border-2 border-[#BDCCB4] focus:border-[#C15DA4] rounded-xl transition-all duration-300 bg-white"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#62615F]" />

        {/* Botón limpiar */}
        {searchQuery && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0 hover:bg-[#F6DCD0] rounded-full"
          >
            <X className="w-3 h-3 text-[#62615F]" />
          </Button>
        )}
      </div>

      {/* Dropdown de sugerencias */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#F6DCD0] z-50 animate-in slide-in-from-top duration-300 max-h-96 overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-[#F6DCD0] bg-gradient-to-r from-[#FAF8F5] to-[#F6DCD0]">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-[#790B5A]">Sugerencias de búsqueda</h3>
              <Badge className="bg-[#C15DA4] text-white text-xs">
                {suggestions.length} {suggestions.length === 1 ? "resultado" : "resultados"}
              </Badge>
            </div>
          </div>

          {/* Lista de sugerencias */}
          <div className="max-h-80 overflow-y-auto custom-scrollbar">
            {suggestions.map((product, index) => (
              <div
                key={product.id}
                onClick={() => handleProductSelect(product)}
                className={`flex items-center space-x-3 p-3 cursor-pointer transition-all duration-200 border-b border-[#F6DCD0] last:border-b-0 ${
                  index === selectedIndex
                    ? "bg-gradient-to-r from-[#C15DA4] to-[#E985A6] text-white"
                    : "hover:bg-[#FAF8F5]"
                }`}
              >
                {/* Imagen del producto */}
                <div className="flex-shrink-0">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-xl"
                  />
                </div>

                {/* Información del producto */}
                <div className="flex-1 min-w-0">
                  <h4
                    className={`font-semibold text-sm truncate ${
                      index === selectedIndex ? "text-white" : "text-[#790B5A]"
                    }`}
                  >
                    {product.name}
                  </h4>
                  <p className={`text-xs truncate ${index === selectedIndex ? "text-white/80" : "text-[#62615F]"}`}>
                    {product.description}
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge
                      variant="secondary"
                      className={`text-xs ${
                        index === selectedIndex ? "bg-white/20 text-white" : "bg-[#F6DCD0] text-[#790B5A]"
                      }`}
                    >
                      {product.category}
                    </Badge>
                    <span className={`text-sm font-bold ${index === selectedIndex ? "text-white" : "text-[#790B5A]"}`}>
                      ${product.price}
                    </span>
                  </div>
                </div>

                {/* Acciones */}
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => handleAddToCart(product, e)}
                    className={`h-8 w-8 p-0 rounded-full transition-all duration-200 ${
                      index === selectedIndex
                        ? "bg-white/20 hover:bg-white/30 text-white"
                        : "bg-[#F6DCD0] hover:bg-[#C15DA4] text-[#790B5A] hover:text-white"
                    }`}
                  >
                    <ShoppingCart className="w-3 h-3" />
                  </Button>
                  <ArrowRight className={`w-4 h-4 ${index === selectedIndex ? "text-white" : "text-[#62615F]"}`} />
                </div>
              </div>
            ))}
          </div>

          {/* Footer con tip */}
          <div className="p-3 bg-gradient-to-r from-[#FAF8F5] to-[#F6DCD0] border-t border-[#F6DCD0]">
            <p className="text-xs text-[#62615F] text-center">
              💡 Usa las flechas ↑↓ para navegar y Enter para seleccionar
            </p>
          </div>
        </div>
      )}

      {/* Mensaje cuando no hay resultados */}
      {isOpen && searchQuery.length >= 2 && suggestions.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#F6DCD0] z-50 animate-in slide-in-from-top duration-300">
          <div className="p-6 text-center">
            <Search className="w-12 h-12 text-[#BDCCB4] mx-auto mb-3" />
            <h3 className="font-semibold text-[#790B5A] mb-2">No encontramos resultados</h3>
            <p className="text-sm text-[#62615F] mb-4">
              Intenta con otros términos como "embarazo", "bebé", "lactancia" o "cuidado"
            </p>
            <Button
              onClick={clearSearch}
              className="bg-gradient-to-r from-[#790B5A] to-[#C15DA4] hover:from-[#C15DA4] hover:to-[#790B5A] text-white rounded-xl text-sm px-4 py-2"
            >
              Limpiar búsqueda
            </Button>
          </div>
        </div>
      )}

      {/* Estilos para scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #F6DCD0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #C15DA4;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #790B5A;
        }
      `}</style>
    </div>
  )
}
