"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"

interface ParallaxElementProps {
  children: ReactNode
  speed?: number
  className?: string
}

export default function ParallaxElement({ children, speed = 0.5, className = "" }: ParallaxElementProps) {
  const { scrollY } = useScrollAnimation()

  return (
    <div
      className={className}
      style={{
        transform: `translateY(${scrollY * speed}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}
    </div>
  )
}
