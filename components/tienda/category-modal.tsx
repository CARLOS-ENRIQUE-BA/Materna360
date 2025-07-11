"use client"

import { useState } from "react"
import { X, ChevronRight, Package, BookOpen, Cookie, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CategoryModalProps {
  isOpen: boolean
  onClose: () => void
  onCategorySelect: (category: string) => void
}

const categories = [
  {
    name: "Planes Alimenticios",
    icon: Package,
    color: "from-[#790B5A] to-[#C15DA4]",
    subcategories: [
      "Embarazo - Primer Trimestre",
      "Embarazo - Segundo Trimestre",
      "Embarazo - Tercer Trimestre",
      "Postparto y Lactancia",
      "Alimentación para Bebés",
      "Nutrición Infantil",
    ],
  },
  {
    name: "Material Educativo",
    icon: BookOpen,
    color: "from-[#97C4C6] to-[#BDCCB4]",
    subcategories: [
      "Guías de Embarazo",
      "Cuidado del Recién Nacido",
      "Lactancia Materna",
      "Desarrollo Infantil",
      "Primeros Auxilios",
      "Psicología Maternal",
    ],
  },
  {
    name: "Snacks Nutritivos",
    icon: Cookie,
    color: "from-[#E985A6] to-[#C15DA4]",
    subcategories: [
      "Galletas Nutritivas",
      "Barritas Energéticas",
      "Pastillas Vitamínicas",
      "Frutos Secos",
      "Smoothies en Polvo",
      "Tés Maternales",
    ],
  },
  {
    name: "Productos Físicos",
    icon: ShoppingBag,
    color: "from-[#BDCCB4] to-[#97C4C6]",
    subcategories: ["Ropa Materna", "Ropa Bebé", "Lactancia", "Cuidado Personal", "Accesorios Bebé", "Juguetes"],
  },
]

export default function CategoryModal({ isOpen, onClose, onCategorySelect }: CategoryModalProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  if (!isOpen) return null

  const handleCategoryClick = (subcategory: string) => {
    onCategorySelect(subcategory)
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed left-0 top-0 h-full w-80 bg-white/95 backdrop-blur-sm shadow-2xl z-50 animate-in slide-in-from-left duration-500 ease-out">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#790B5A] to-[#C15DA4] p-6 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Categorías</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full p-2"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-white/80 mt-2">Explora nuestras líneas de producto</p>
        </div>

        {/* Categories List */}
        <div className="p-4 space-y-2">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <div
                key={category.name}
                className="relative"
                onMouseEnter={() => setHoveredCategory(category.name)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div
                  className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    hoveredCategory === category.name
                      ? "bg-gradient-to-r " + category.color + " text-white shadow-lg"
                      : "bg-[#FAF8F5] hover:bg-[#F6DCD0] text-[#790B5A]"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        hoveredCategory === category.name ? "bg-white/20" : "bg-gradient-to-r " + category.color
                      }`}
                    >
                      <IconComponent
                        className={`w-5 h-5 ${hoveredCategory === category.name ? "text-white" : "text-white"}`}
                      />
                    </div>
                    <span className="font-semibold">{category.name}</span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      hoveredCategory === category.name ? "text-white" : "text-[#62615F]"
                    }`}
                  />
                </div>

                {/* Submenu */}
                {hoveredCategory === category.name && (
                  <div className="absolute left-full top-0 ml-2 w-64 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#F6DCD0] z-60 animate-in slide-in-from-left duration-300">
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-[#790B5A] mb-3 border-b border-[#F6DCD0] pb-2">
                        {category.name}
                      </h3>
                      <div className="space-y-1">
                        {category.subcategories.map((subcategory) => (
                          <Button
                            key={subcategory}
                            variant="ghost"
                            onClick={() => handleCategoryClick(subcategory)}
                            className="w-full justify-start text-sm text-[#62615F] hover:text-[#790B5A] hover:bg-[#FAF8F5] rounded-xl transition-all duration-200 h-10"
                          >
                            <div className="w-2 h-2 bg-[#C15DA4] rounded-full mr-3"></div>
                            {subcategory}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#FAF8F5] to-transparent">
          <div className="text-center">
            <p className="text-sm text-[#62615F] mb-2">¿Necesitas ayuda?</p>
            <Button
              onClick={() => window.open("https://instagram.com/materna360oficial", "_blank")}
              className="w-full bg-gradient-to-r from-[#790B5A] to-[#C15DA4] hover:from-[#C15DA4] hover:to-[#790B5A] text-white rounded-xl transition-all duration-300"
            >
              Contáctanos por Instagram
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
