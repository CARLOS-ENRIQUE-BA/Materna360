"use client"

import { Heart, ShoppingCart, Trash2, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useFavorites } from "./favorites-context"
import { useCart } from "./cart-context"

interface FavoritesViewProps {
  setCurrentView: (view: "tienda" | "ofertas" | "category" | "cart" | "checkout" | "favorites") => void
}

export default function FavoritesView({ setCurrentView }: FavoritesViewProps) {
  const { favorites, removeFromFavorites, clearFavorites, getTotalFavorites } = useFavorites()
  const { addToCart } = useCart()

  const handleAddToCart = (product: any) => {
    addToCart(product)
    // Mostrar feedback visual (opcional: podrías agregar una notificación)
  }

  const handleRemoveFromFavorites = (productId: number) => {
    removeFromFavorites(productId)
  }

  if (favorites.length === 0) {
    return (
      <div className="animate-in fade-in duration-700">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#F6DCD0] text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-[#E985A6] to-[#C15DA4] rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-[#790B5A] mb-4">Tu lista de favoritos está vacía</h2>
          <p className="text-[#62615F] mb-6">
            ¡Explora nuestros productos y guarda tus favoritos haciendo clic en el corazón!
          </p>
          <Button
            onClick={() => setCurrentView("tienda")}
            className="bg-gradient-to-r from-[#790B5A] to-[#C15DA4] hover:from-[#C15DA4] hover:to-[#790B5A] text-white rounded-xl px-8 py-3"
          >
            Explorar Productos
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      {/* Header de favoritos */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-[#F6DCD0]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#E985A6] to-[#C15DA4] rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white fill-current" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#790B5A]">Mis Favoritos</h2>
              <p className="text-[#62615F]">
                {getTotalFavorites()} {getTotalFavorites() === 1 ? "producto guardado" : "productos guardados"}
              </p>
            </div>
          </div>

          {/* Botón limpiar favoritos */}
          {favorites.length > 0 && (
            <Button
              variant="outline"
              onClick={clearFavorites}
              className="border-2 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 rounded-xl transition-all duration-300 bg-transparent"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Limpiar Todo
            </Button>
          )}
        </div>

        {/* Acciones rápidas */}
        <div className="flex space-x-4">
          <Button
            onClick={() => setCurrentView("tienda")}
            variant="outline"
            className="border-2 border-[#BDCCB4] hover:border-[#C15DA4] hover:bg-[#FAF8F5] rounded-xl"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Seguir Comprando
          </Button>

          <Button
            onClick={() => {
              favorites.forEach((product) => addToCart(product))
              setCurrentView("cart")
            }}
            className="bg-gradient-to-r from-[#790B5A] to-[#C15DA4] hover:from-[#C15DA4] hover:to-[#790B5A] text-white rounded-xl"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Agregar Todo al Carrito
          </Button>
        </div>
      </div>

      {/* Grid de productos favoritos */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-[#F6DCD0]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-[#F6DCD0] animate-in slide-in-from-bottom duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Imagen del producto */}
              <div className="relative mb-4 group">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                />

                {/* Badge de favorito */}
                <div className="absolute top-2 left-2">
                  <Badge className="bg-gradient-to-r from-[#E985A6] to-[#C15DA4] text-white">
                    <Heart className="w-3 h-3 mr-1 fill-current" />
                    Favorito
                  </Badge>
                </div>

                {/* Botón quitar de favoritos */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveFromFavorites(product.id)}
                  className="absolute top-2 right-2 bg-white/90 hover:bg-white shadow-md rounded-full w-8 h-8 p-0 transition-all duration-300 hover:scale-110"
                >
                  <Heart className="w-4 h-4 text-[#C15DA4] fill-current hover:text-red-500" />
                </Button>

                {/* Overlay con acciones rápidas */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center space-x-2">
                  <Button
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                    className="bg-white text-[#790B5A] hover:bg-[#FAF8F5] rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Agregar
                  </Button>
                </div>
              </div>

              {/* Información del producto */}
              <div className="space-y-3">
                <Badge variant="secondary" className="bg-[#F6DCD0] text-[#790B5A]">
                  {product.category}
                </Badge>

                <h3 className="font-semibold text-[#790B5A] line-clamp-2">{product.name}</h3>

                <p className="text-sm text-[#62615F] line-clamp-2">{product.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#790B5A]">${product.price}</span>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleRemoveFromFavorites(product.id)}
                      className="border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 rounded-xl w-8 h-8 p-0"
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>

                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(product)}
                      className="bg-gradient-to-r from-[#790B5A] to-[#C15DA4] hover:from-[#C15DA4] hover:to-[#790B5A] text-white rounded-xl"
                    >
                      <ShoppingCart className="w-3 h-3 mr-1" />
                      Agregar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recomendaciones basadas en favoritos */}
      <div className="bg-gradient-to-r from-[#97C4C6] to-[#BDCCB4] rounded-3xl p-8 shadow-lg text-center animate-in slide-in-from-bottom duration-700 delay-300">
        <h3 className="text-2xl font-bold text-white mb-4">💡 ¿Te gustaron estos productos?</h3>
        <p className="text-white opacity-90 mb-6">Explora productos similares o descubre nuestras ofertas especiales</p>
        <div className="flex justify-center space-x-4">
          <Button
            onClick={() => setCurrentView("ofertas")}
            className="bg-white text-[#790B5A] hover:bg-gray-100 font-semibold px-6 py-3 rounded-xl transition-all duration-300"
          >
            Ver Ofertas
          </Button>
          <Button
            onClick={() => setCurrentView("tienda")}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[#790B5A] font-semibold px-6 py-3 rounded-xl transition-all duration-300"
          >
            Explorar Más
          </Button>
        </div>
      </div>
    </div>
  )
}
