"use client"

import { useState } from "react"
import { Package, Search, Filter, Grid, Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import AnimatedSection from "./animated-section"
import ProductModal from "./product-modal"
import { getProductsForLanding, getCategories, searchProducts } from "../../data/products"
import type { Product } from "@/components/tienda/cart-context"

export default function CatalogSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  // Obtener productos y categorías desde la base de datos centralizada
  const allLandingProducts = getProductsForLanding()
  const categories = ["all", ...getCategories()]

  // Filtrar productos
  const filteredProducts = allLandingProducts.filter((product) => {
    const matchesSearch = searchQuery.trim() === "" || searchProducts(searchQuery).some((p) => p.id === product.id)
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <>
      <section className="py-20 px-4 bg-white/20 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <AnimatedSection animation="fade-up" delay={0}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-[#F6DCD0] shadow-lg mb-6">
                <Package className="w-5 h-5 text-[#C15DA4]" />
                <span className="text-[#790B5A] font-medium">Nuestro Catálogo</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#790B5A] mb-6">Productos Especializados</h2>
              <p className="text-xl text-[#62615F] max-w-3xl mx-auto">
                Descubre nuestra selección de productos cuidadosamente elegidos para acompañarte en cada etapa de tu
                maternidad
              </p>
            </div>
          </AnimatedSection>

          {/* Filtros */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-[#F6DCD0] mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
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
              </div>

              {/* Información de resultados */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#F6DCD0]">
                <div className="flex items-center space-x-2">
                  <Grid className="w-4 h-4 text-[#62615F]" />
                  <span className="text-sm text-[#62615F]">
                    Mostrando {filteredProducts.length} de {allLandingProducts.length} productos
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("all")
                  }}
                  className="border-[#BDCCB4] text-[#790B5A] hover:border-[#C15DA4] hover:bg-[#FAF8F5] rounded-xl"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Limpiar Filtros
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Grid de productos */}
          <AnimatedSection animation="fade-up" delay={400}>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                  <AnimatedSection key={product.id} animation="fade-up" delay={index * 100}>
                    <div
                      onClick={() => handleProductClick(product)}
                      className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-[#F6DCD0] cursor-pointer group"
                    >
                      {/* Imagen del producto */}
                      <div className="relative mb-4 overflow-hidden rounded-xl">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />

                        {/* Badges */}
                        <div className="absolute top-2 left-2 flex flex-col space-y-1">
                          <Badge variant="secondary" className="bg-[#F6DCD0] text-[#790B5A] text-xs">
                            {product.category}
                          </Badge>
                          {product.featured && (
                            <Badge className="bg-gradient-to-r from-[#E985A6] to-[#C15DA4] text-white text-xs">
                              <Star className="w-3 h-3 mr-1 fill-current" />
                              Destacado
                            </Badge>
                          )}
                        </div>

                        {/* Overlay de hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                          <span className="text-white font-medium text-sm">Click para ver detalles</span>
                        </div>
                      </div>

                      {/* Información del producto */}
                      <div className="space-y-3">
                        <h3 className="font-semibold text-[#790B5A] line-clamp-2 group-hover:text-[#C15DA4] transition-colors duration-200">
                          {product.name}
                        </h3>

                        <p className="text-sm text-[#62615F] line-clamp-2">{product.description}</p>

                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-[#790B5A]">${product.price}</span>
                          <div className="flex items-center space-x-1 text-[#C15DA4]">
                            <Heart className="w-4 h-4" />
                            <span className="text-sm font-medium">Ver más</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            ) : (
              // Estado sin resultados
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-br from-[#BDCCB4] to-[#97C4C6] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#790B5A] mb-4">No se encontraron productos</h3>
                <p className="text-[#62615F] mb-6">
                  Intenta ajustar tus filtros de búsqueda o explora otras categorías
                </p>
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
          </AnimatedSection>

          {/* Call to Action */}
          <AnimatedSection animation="fade-up" delay={600}>
            <div className="mt-16 bg-gradient-to-r from-[#790B5A] to-[#C15DA4] rounded-3xl p-8 shadow-lg text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Te gustó lo que viste?</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Regístrate para acceder a nuestra tienda completa, ofertas exclusivas, sistema de favoritos y mucho más
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  onClick={() => window.open("/register", "_blank")}
                  className="bg-white text-[#790B5A] hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl transition-all duration-300"
                >
                  Crear Cuenta Gratuita
                </Button>
                <Button
                  onClick={() => window.open("/login", "_blank")}
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#790B5A] font-semibold px-8 py-3 rounded-xl transition-all duration-300"
                >
                  Ya Tengo Cuenta
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Modal del producto */}
      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}
