"use client"

import { useState } from "react"
import { Heart, ShoppingCart, Star, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart, type Product } from "./cart-context"
import { useFavorites } from "./favorites-context"
import { getFeaturedProducts, getBestSellers } from "@/data/products"
import ProductModal from "@/components/landing/product-modal"

interface ProductGridProps {
  setCurrentView: (view: "tienda" | "ofertas" | "categorias" | "cart" | "checkout") => void
}

export default function ProductGrid({ setCurrentView }: ProductGridProps) {
  const { addToCart } = useCart()
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()

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
              className="border-white text-[#C15DA4] hover:bg-white hover:text-[#790B5A] font-semibold px-6 py-3 rounded-xl transition-all duration-300"
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
            <Badge className="bg-[#97C4C6] text-white">Destacados</Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFeaturedProducts().map((product) => (
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
                  <Badge className="absolute top-2 left-2 bg-[#C15DA4] text-white">Destacado</Badge>
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
                <p className="text-sm text-[#62615F] mb-3">{product.description}</p>
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
            {getBestSellers().map((product) => (
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
                  <Badge className="absolute top-2 left-2 bg-[#97C4C6] text-white">Más Vendido</Badge>
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
                <p className="text-sm text-[#62615F] mb-3">{product.description}</p>
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

      {/* Call to Action */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        showCallToAction={false}
      />
    </div>
  )
}
