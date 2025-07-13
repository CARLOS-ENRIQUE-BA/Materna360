"use client"

import { UtensilsCrossed } from "lucide-react"
import Image from "next/image" // Import Image component
import AnimatedSection from "./animated-section"
import PlanesIMG from "../../assets/ImgSnack.png"

export default function PromotionalBannerSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-[#FFDAB9] via-[#FFC0CB] to-[#E985A6] text-white overflow-hidden relative">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left z-10">
          <AnimatedSection animation="fade-up" delay={0}>
            <div className="inline-flex items-center space-x-2 bg-white/30 backdrop-blur-sm rounded-full px-6 py-3 border border-white/50 shadow-lg mb-6">
              <UtensilsCrossed className="w-5 h-5 text-[#790B5A]" />
              <span className="text-[#790B5A] font-medium text-sm md:text-base">Nutrición Materna 360</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight drop-shadow-md">
              Planes Alimenticios y Snacks Nutritivos
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto md:mx-0 mb-8 drop-shadow-sm">
              Descubre cómo una nutrición adecuada puede transformar tu maternidad. Nuestros planes personalizados y
              snacks saludables te acompañan en cada etapa.
            </p>
          </AnimatedSection>
        </div>

        {/* Illustration Placeholder */}
        <div className="md:w-1/2 flex justify-center items-center z-10">
          <AnimatedSection animation="fade-left" delay={0.3}>
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-white/40 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/60 overflow-hidden">
              <Image
                src={PlanesIMG.src}
                alt="Ilustración de nutrición materna"
                width={300}
                height={300}
                className="object-contain w-full h-full p-4"
              />
              {/* You can replace this with your actual illustration */}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Decorative elements (optional) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse-slow delay-500"></div>
      </div>
    </section>
  )
}
