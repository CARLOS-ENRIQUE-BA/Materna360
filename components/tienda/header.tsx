"use client"

import { useState } from "react"
import { ShoppingCart, Heart, Baby, User, Menu, X, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "./cart-context"
import CategoryModal from "./category-modal"
import SearchBox from "./search-box"
import { useFavorites } from "./favorites-context"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import Logo from "../../assets/Logo-M360.png"

interface HeaderProps {
  currentView: "tienda" | "ofertas" | "category" | "cart" | "checkout" | "favorites" | "catalog" | "plans"
  setCurrentView: (view: "tienda" | "ofertas" | "category" | "cart" | "checkout" | "favorites" | "catalog" | "plans") => void
  onCategorySelect: (category: string) => void
}

export default function Header({ currentView, setCurrentView, onCategorySelect }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { getTotalItems } = useCart()
  const { getTotalFavorites } = useFavorites()
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleCategorySelect = (category: string) => {
    onCategorySelect(category)
    setIsCategoryModalOpen(false)
  }

  const handleSearchCategorySelect = (category: string) => {
    onCategorySelect(category)
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-[#F6DCD0] sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3 animate-in fade-in duration-700">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#790B5A] to-[#C15DA4] rounded-full flex items-center justify-center shadow-lg">
                  <div className="flex items-center space-x-1">
                    <img
                      src={Logo.src}
                      alt="Logo Materna 360"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#97C4C6] rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#790B5A]">Materna 360</h1>
                <p className="text-xs text-[#62615F]">Nutrición con ciencia, maternidad con corazón</p>
              </div>
            </div>

            {/* Search bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <SearchBox onCategorySelect={handleSearchCategorySelect} className="w-full" />
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Cart button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentView(currentView === "cart" ? "tienda" : "cart")}
                className="relative border-2 border-[#BDCCB4] hover:border-[#C15DA4] hover:bg-[#FAF8F5] transition-all duration-300"
              >
                <ShoppingCart className="w-4 h-4" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#C15DA4] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {getTotalItems()}
                  </span>
                )}
              </Button>

              {/* Favorites button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentView(currentView === "favorites" ? "tienda" : "favorites")}
                className="relative border-2 border-[#BDCCB4] hover:border-[#E985A6] hover:bg-[#FAF8F5] transition-all duration-300"
              >
                <Heart className={`w-4 h-4 ${currentView === "favorites" ? "fill-[#E985A6] text-[#E985A6]" : ""}`} />
                {getTotalFavorites() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#E985A6] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {getTotalFavorites()}
                  </span>
                )}
              </Button>

              {/* User menu */}
              <div className="relative">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="border-2 border-[#BDCCB4] hover:border-[#C15DA4] hover:bg-[#FAF8F5] transition-all duration-300 bg-transparent"
                >
                  <User className="w-4 h-4" />
                </Button>

                {/* User dropdown */}
                {showUserMenu && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#F6DCD0] z-50 animate-in slide-in-from-top duration-300">
                    <div className="p-4">
                      <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-[#F6DCD0]">
                        <div className="w-10 h-10 bg-gradient-to-r from-[#790B5A] to-[#C15DA4] rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#790B5A]">{user?.name}</p>
                          <p className="text-sm text-[#62615F]">{user?.email}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-[#62615F] hover:text-[#790B5A] hover:bg-[#FAF8F5]"
                        >
                          <User className="w-4 h-4 mr-3" />
                          Mi Perfil
                        </Button>

                        <Button
                          variant="ghost"
                          onClick={handleLogout}
                          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <LogOut className="w-4 h-4 mr-3" />
                          Cerrar Sesión
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile menu toggle */}
              <Button
                variant="outline"
                size="sm"
                className="md:hidden border-2 border-[#BDCCB4] hover:border-[#C15DA4] bg-transparent"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile search */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 animate-in slide-in-from-top duration-300">
              <SearchBox onCategorySelect={handleSearchCategorySelect} className="w-full" />
            </div>
          )}

          {/* Navigation */}
          <nav className="border-t border-[#F6DCD0] py-3">
            <div className="flex items-center justify-center space-x-8">
              <Button
                variant="ghost"
                onClick={() => setCurrentView("tienda")}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentView === "tienda"
                    ? "text-[#790B5A] border-b-2 border-[#C15DA4]"
                    : "text-[#62615F] hover:text-[#790B5A]"
                }`}
              >
                Tienda
              </Button>


              {/* Catalog Button */}
              <Button
                variant="ghost"
                onClick={() => setCurrentView("catalog")}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentView === "catalog"
                    ? "text-[#790B5A] border-b-2 border-[#C15DA4]"
                    : "text-[#62615F] hover:text-[#790B5A]"
                }`}
              >
                Catálogo
              </Button>

              <Button
                variant="ghost"
                onClick={() => setCurrentView("ofertas")}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentView === "ofertas"
                    ? "text-[#790B5A] border-b-2 border-[#C15DA4]"
                    : "text-[#62615F] hover:text-[#790B5A]"
                }`}
              >
                Ofertas
              </Button>

              {/* Plans Button */}
              <Button
                variant="ghost"
                onClick={() => setCurrentView("plans")}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentView === "plans"
                    ? "text-[#790B5A] border-b-2 border-[#C15DA4]"
                    : "text-[#62615F] hover:text-[#790B5A]"
                }`}
              >
                Planes
              </Button>
            </div>
          </nav>
        </div>

        {/* Click outside to close user menu */}
        {showUserMenu && <div className="fixed inset-0 z-40" onClick={() => setShowUserMenu(false)} />}
      </header>

      {/* Category Modal */}
      <CategoryModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        onCategorySelect={handleCategorySelect}
      />
    </>
  )
}
