"use client"

import { useState } from "react"
import { Heart, ShoppingCart, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getBooks, type Product } from "@/data/products"
import { useCart } from "@/components/tienda/cart-context"
import { useFavorites } from "@/components/tienda/favorites-context"

interface BooksViewProps {
  setCurrentView: (view: "tienda" | "books" | "cart" | "checkout") => void
}

export default function BooksView({ setCurrentView }: BooksViewProps) {
  const { addToCart } = useCart()
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()

  const [selectedBook, setSelectedBook] = useState<Product | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Obtener productos de la categoría "Libros"
  const books = getBooks()

  const toggleFavorite = (book: Product) => {
    if (isFavorite(book.id)) {
      removeFromFavorites(book.id)
    } else {
      addToFavorites(book)
    }
  }

  const handleAddToCart = (book: Product) => {
    addToCart(book)
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="animate-in fade-in duration-700">
        <div className="bg-gradient-to-r from-[#790B5A] via-[#C15DA4] to-[#E985A6] rounded-3xl p-8 shadow-lg text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Libros y Guías</h1>
          <p className="text-xl opacity-90 mb-6">
            Explora nuestra colección de libros y guías educativas diseñadas para acompañarte en cada etapa de tu maternidad.
          </p>
          <Badge className="bg-white/20 text-white px-4 py-2">{books.length} libros disponibles</Badge>
        </div>
      </section>

      {/* Controles de vista */}
      <section className="animate-in slide-in-from-top duration-700 delay-200">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-[#F6DCD0]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Controles de vista */}
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
                Grid
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
                Lista
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid/Lista de libros */}
      <section className="animate-in slide-in-from-bottom duration-700 delay-400">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-[#F6DCD0]">
          {books.length > 0 ? (
            <div
              className={`${
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "space-y-4"
              }`}
            >
              {books.map((book, index) => (
                <div
                  key={book.id}
                  className={`${
                    viewMode === "grid"
                      ? "bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-[#F6DCD0]"
                      : "bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-[#F6DCD0] flex items-center space-x-4"
                  } animate-in slide-in-from-bottom duration-500`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {viewMode === "grid" ? (
                    <>
                      <div className="relative mb-4">
                        <img
                          src={book.image || "/placeholder.svg"}
                          alt={book.name}
                          className="w-full h-48 object-cover rounded-xl"
                        />
                      </div>
                      <h3 className="font-semibold text-[#790B5A] mb-2 line-clamp-2">{book.name}</h3>
                      <p className="text-sm text-[#62615F] mb-4 line-clamp-2">{book.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-[#790B5A]">${book.price}</span>
                        <Button
                          onClick={() => handleAddToCart(book)}
                          className="bg-gradient-to-r from-[#790B5A] to-[#C15DA4] hover:from-[#C15DA4] hover:to-[#790B5A] text-white rounded-xl transition-all duration-300"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Agregar
                        </Button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative flex-shrink-0">
                        <img
                          src={book.image || "/placeholder.svg"}
                          alt={book.name}
                          className="w-24 h-24 object-cover rounded-xl"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-[#790B5A]">{book.name}</h3>
                        <p className="text-sm text-[#62615F] mb-3 line-clamp-2">{book.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-[#790B5A]">${book.price}</span>
                          <Button
                            onClick={() => handleAddToCart(book)}
                            className="bg-gradient-to-r from-[#790B5A] to-[#C15DA4] hover:from-[#C15DA4] hover:to-[#790B5A] text-white rounded-xl transition-all duration-300"
                          >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Agregar
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-[#790B5A] mb-4">No se encontraron libros</h3>
              <p className="text-[#62615F] mb-6">Intenta ajustar tu búsqueda o explora otros productos</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}