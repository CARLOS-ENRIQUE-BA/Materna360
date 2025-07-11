"use client"

import { useState } from "react"
import { Heart, ShoppingCart, ArrowLeft, Package, BookOpen, Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart, type Product } from "./cart-context"
import { useFavorites } from "./favorites-context"
import { getProductsByCategory } from "@/data/products"
import ProductModal from "@/components/landing/product-modal"

interface CategoryViewProps {
  category: string
  setCurrentView: (view: "tienda" | "ofertas" | "category" | "cart" | "checkout") => void
}

export default function CategoryView({ category, setCurrentView }: CategoryViewProps) {
  const { addToCart } = useCart()
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()

  const products = getProductsByCategory(category)

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

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

  const handleImageClick = (product: Product) => {
    // Renamed to clarify it's for image click
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

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
                  <div className="relative mb-4 cursor-pointer" onClick={() => handleImageClick(product)}>
                    {" "}
                    {/* Only image click opens modal */}
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleFavorite(product)
                      }} // Stop propagation for favorite button
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
                      onClick={(e) => {
                        e.stopPropagation()
                        handleAddToCart(product)
                      }} // Stop propagation for add to cart button
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
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        showCallToAction={false}
      />
    </div>
  )
}
