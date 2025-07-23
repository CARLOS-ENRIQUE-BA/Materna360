"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Header from "./header"
import ProductGrid from "./product-grid"
import Cart from "./cart"
import Checkout from "./checkout"
import { CartProvider } from "./cart-context"
import OfertasSection from "./ofertas-section"
import CategoryView from "./category-view"
import Footer from "./footer"
import { FavoritesProvider } from "./favorites-context"
import FavoritesView from "./favorites-view"
import CatalogView from "./catalog-view"
import { useAuth } from "@/contexts/auth-context"
import PlansSection from "./plans-section"

export default function TiendaLayout() {
  const [currentView, setCurrentView] = useState<
    "tienda" | "ofertas" | "category" | "cart" | "checkout" | "favorites" | "catalog" | "plans"
  >("tienda")
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()
  const headerRef = useRef<{ updateUserPlan: (planName: string, billingType: "mensual" | "anual", nextBillingDate: string) => void }>(null)

  // Proteger la ruta - redirigir si no está autenticado
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, isLoading, router])

  // Mostrar loading mientras se verifica la autenticación
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] via-[#F6DCD0] to-[#E985A6] flex items-center justify-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#F6DCD0] text-center">
          <div className="w-16 h-16 border-4 border-[#C15DA4] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#790B5A] font-medium">Verificando sesión...</p>
        </div>
      </div>
    )
  }

  // No renderizar nada si no está autenticado (se está redirigiendo)
  if (!isAuthenticated) {
    return null
  }

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    setCurrentView("category")
  }

  const handleUserPlanUpdate = (planName: string, billingType: "mensual" | "anual", nextBillingDate: string) => {
    if (headerRef.current) {
      headerRef.current.updateUserPlan(planName, billingType, nextBillingDate)
    }
  }

  return (
    <FavoritesProvider>
      <CartProvider>
        <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] via-[#F6DCD0] to-[#E985A6]">
          <Header 
            ref={headerRef}
            currentView={currentView} 
            setCurrentView={setCurrentView} 
            onCategorySelect={handleCategorySelect} 
          />

          <main className="container mx-auto px-4 py-8">
            {currentView === "tienda" && <ProductGrid setCurrentView={setCurrentView} />}
            {currentView === "ofertas" && <OfertasSection setCurrentView={setCurrentView} />}
            {currentView === "category" && <CategoryView category={selectedCategory} setCurrentView={setCurrentView} />}
            {currentView === "cart" && <Cart setCurrentView={setCurrentView} />}
            {currentView === "checkout" && <Checkout setCurrentView={setCurrentView} />}
            {currentView === "favorites" && <FavoritesView setCurrentView={setCurrentView} />}
            {currentView === "catalog" && <CatalogView setCurrentView={setCurrentView} />}
            {currentView === "plans" && <PlansSection setCurrentView={setCurrentView} onUserPlanUpdate={handleUserPlanUpdate} />}
          </main>

          <Footer />

          {/* Elementos decorativos flotantes */}
          <div
            className="fixed top-20 left-8 w-6 h-6 bg-[#97C4C6] rounded-full opacity-30 animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "4s" }}
          ></div>
          <div
            className="fixed top-1/3 right-12 w-4 h-4 bg-[#E985A6] rounded-full opacity-40 animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "5s" }}
          ></div>
          <div
            className="fixed bottom-1/4 left-16 w-8 h-8 bg-[#BDCCB4] rounded-full opacity-25 animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "3.5s" }}
          ></div>
        </div>
      </CartProvider>
    </FavoritesProvider>
  )
}
