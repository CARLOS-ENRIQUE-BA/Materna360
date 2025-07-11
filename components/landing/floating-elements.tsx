"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import ParallaxElement from "./parallax-element"

export default function FloatingElements() {
  const { scrollY } = useScrollAnimation()

  return (
    <>
      {/* Elementos flotantes con diferentes velocidades de parallax */}
      <ParallaxElement speed={0.3} className="fixed top-20 left-8 pointer-events-none">
        <div
          className="w-6 h-6 bg-[#97C4C6] rounded-full opacity-30 animate-bounce"
          style={{
            animationDelay: "0s",
            animationDuration: "4s",
            transform: `rotate(${scrollY * 0.1}deg)`,
          }}
        />
      </ParallaxElement>

      <ParallaxElement speed={0.4} className="fixed top-1/3 right-12 pointer-events-none">
        <div
          className="w-4 h-4 bg-[#E985A6] rounded-full opacity-40 animate-bounce"
          style={{
            animationDelay: "2s",
            animationDuration: "5s",
            transform: `rotate(${scrollY * -0.05}deg)`,
          }}
        />
      </ParallaxElement>

      <ParallaxElement speed={0.2} className="fixed bottom-1/4 left-16 pointer-events-none">
        <div
          className="w-8 h-8 bg-[#BDCCB4] rounded-full opacity-25 animate-bounce"
          style={{
            animationDelay: "1s",
            animationDuration: "3.5s",
            transform: `rotate(${scrollY * 0.08}deg)`,
          }}
        />
      </ParallaxElement>

      <ParallaxElement speed={0.6} className="fixed top-1/2 right-8 pointer-events-none">
        <div
          className="w-3 h-3 bg-[#C15DA4] rounded-full opacity-35 animate-bounce"
          style={{
            animationDelay: "3s",
            animationDuration: "4.2s",
            transform: `rotate(${scrollY * -0.12}deg)`,
          }}
        />
      </ParallaxElement>

      {/* Elementos adicionales que aparecen al hacer scroll */}
      <ParallaxElement speed={0.5} className="fixed top-1/4 left-1/4 pointer-events-none">
        <div
          className="w-2 h-2 bg-[#F6DCD0] rounded-full opacity-20 animate-pulse"
          style={{
            animationDelay: "1.5s",
            opacity: Math.min(scrollY / 500, 0.3),
          }}
        />
      </ParallaxElement>

      <ParallaxElement speed={0.7} className="fixed bottom-1/3 right-1/4 pointer-events-none">
        <div
          className="w-5 h-5 bg-[#97C4C6] rounded-full opacity-15 animate-pulse"
          style={{
            animationDelay: "2.5s",
            opacity: Math.min(scrollY / 800, 0.25),
          }}
        />
      </ParallaxElement>
    </>
  )
}
