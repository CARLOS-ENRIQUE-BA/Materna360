"use client"

import { useState } from "react"
import { Heart, ShoppingCart, Tag, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart, type Product } from "./cart-context"
import { useFavorites } from "./favorites-context"
import { getProductsWithOffers } from "@/data/products"
import ProductModal from "@/components/landing/product-modal"

interface OfertasSectionProps {
  setCurrentView: (view: "tienda" | "ofertas" | "categorias" | "cart" | "checkout") => void
}

export default function OfertasSection({ setCurrentView }: OfertasSectionProps) {
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
            {getProductsWithOffers().map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-[#F6DCD0] relative overflow-hidden"
              >
                {/* Badge de descuento */}
                <div className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-bl-2xl font-bold text-sm z-10">
                  -{product.discount}%
                </div>

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
                  <span className="text-xl font-bold text-[#790B5A]">${product.price.toFixed(2)}</span>
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
                  onClick={(e) => {
                    e.stopPropagation()
                    handleAddToCart(product)
                  }} // Stop propagation for add to cart button
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

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}
