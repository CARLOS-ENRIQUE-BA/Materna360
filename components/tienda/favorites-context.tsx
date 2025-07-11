"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import type { Product } from "./cart-context"

interface FavoritesContextType {
  favorites: Product[]
  addToFavorites: (product: Product) => void
  removeFromFavorites: (productId: number) => void
  isFavorite: (productId: number) => boolean
  clearFavorites: () => void
  getTotalFavorites: () => number
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Product[]>([])

  const addToFavorites = (product: Product) => {
    setFavorites((prev) => {
      const isAlreadyFavorite = prev.some((item) => item.id === product.id)
      if (isAlreadyFavorite) {
        return prev // No agregar duplicados
      }
      return [...prev, product]
    })
  }

  const removeFromFavorites = (productId: number) => {
    setFavorites((prev) => prev.filter((item) => item.id !== productId))
  }

  const isFavorite = (productId: number) => {
    return favorites.some((item) => item.id === productId)
  }

  const clearFavorites = () => {
    setFavorites([])
  }

  const getTotalFavorites = () => {
    return favorites.length
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        clearFavorites,
        getTotalFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider")
  }
  return context
}
