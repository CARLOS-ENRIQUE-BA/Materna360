import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/contexts/auth-context"
import { CartProvider } from "@/components/tienda/cart-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Materna 360 - Nutrición integral materno-infantil",
  description:
    "Acompañamos a madres y familias con atención nutricional especializada, educación basada en evidencia y productos funcionales para el bienestar desde el inicio de la vida.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CartProvider>
          <AuthProvider>{children}</AuthProvider>
        </CartProvider>
      </body>
    </html>
  )
}
