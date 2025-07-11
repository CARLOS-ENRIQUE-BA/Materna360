"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function ScrollProgress() {
  const { scrollProgress } = useScrollAnimation()

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-white/20">
      <div
        className="h-full bg-gradient-to-r from-[#790B5A] via-[#C15DA4] to-[#E985A6] transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
