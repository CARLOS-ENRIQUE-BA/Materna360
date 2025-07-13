"use client"

import LandingNavbar from "./landing-navbar"
import HeroSection from "./hero-section"
import MissionSection from "./mission-section"
import VisionSection from "./vision-section"
import ValuesSection from "./values-section"
import Footer from "./landing-footer"
import ScrollProgress from "./scroll-progress"
import FloatingElements from "./floating-elements"
import CatalogSection from "./catalog-section"
import PromotionalBannerSection from "./promotional-banner-section" 

export default function LandingLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] via-[#F6DCD0] to-[#E985A6] scroll-smooth">
      <ScrollProgress />
      <LandingNavbar />

      <main>
        <HeroSection />
        <MissionSection />
        <VisionSection />
        <ValuesSection />
        <PromotionalBannerSection /> 
        <CatalogSection />
      </main>

      <Footer />

      <FloatingElements />
    </div>
  )
}
