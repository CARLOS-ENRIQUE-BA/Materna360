"use client"

import Link from "next/link"
import { Heart, Baby, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedSection from "./animated-section"
import Ilustracion1 from "../../assets/Ilustracion1.png"

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <AnimatedSection animation="fade-up" delay={0}>
            <div className="space-y-8">
              {/* Badge de bienvenida */}
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-[#F6DCD0] shadow-lg">
                <Sparkles className="w-5 h-5 text-[#C15DA4]" />
                <span className="text-[#790B5A] font-medium">Bienvenida a tu espacio maternal</span>
              </div>

              {/* Título principal */}
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold text-[#790B5A] leading-tight">
                    Materna
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C15DA4] to-[#E985A6]">
                      360
                    </span>
                  </h1>
                  <h2 className="text-2xl lg:text-3xl text-[#62615F] font-light">
                    Nutrición integral para mamá y bebé
                  </h2>
                </div>
              </AnimatedSection>

              {/* Descripción */}
              <AnimatedSection animation="fade-up" delay={400}>
                <p className="text-lg text-[#62615F] leading-relaxed max-w-xl">
                  Acompañamos integralmente a madres y familias durante el embarazo, postparto y lactancia a través de
                  <strong className="text-[#790B5A]"> atención nutricional especializada</strong>, educación basada en
                  evidencia y productos funcionales que promuevan el bienestar desde el inicio de la vida.
                </p>
              </AnimatedSection>

              {/* Características destacadas */}
              <AnimatedSection animation="fade-up" delay={600}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <AnimatedSection animation="fade-right" delay={800}>
                    <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-[#F6DCD0]">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#97C4C6] to-[#BDCCB4] rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5 text-white fill-current" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#790B5A]">Consultas Especializadas</h3>
                        <p className="text-sm text-[#62615F]">Nutrición y lactancia</p>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection animation="fade-left" delay={1000}>
                    <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-[#F6DCD0]">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#E985A6] to-[#C15DA4] rounded-full flex items-center justify-center">
                        <Baby className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#790B5A]">Productos Funcionales</h3>
                        <p className="text-sm text-[#62615F]">Para tu bienestar</p>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </AnimatedSection>

              {/* Botones de acción */}
              <AnimatedSection animation="fade-up" delay={1200}>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link href="/register">
                    <Button className="w-full sm:w-auto bg-gradient-to-r from-[#790B5A] to-[#C15DA4] hover:from-[#C15DA4] hover:to-[#790B5A] text-white rounded-xl px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                      Comenzar Ahora
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>

                  <Link href="/login">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto border-2 border-[#BDCCB4] hover:border-[#C15DA4] hover:bg-[#FAF8F5] text-[#790B5A] rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    >
                      Ya tengo cuenta
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>

          {/* Ilustración principal */}
          <AnimatedSection animation="scale" delay={400}>
            <div className="relative">
              {/* Contenedor principal de la ilustración */}
              <div className="w-full max-w-[70rem] h-auto aspect-square mx-auto bg-gradient-to-br from-[#790B5A]/10 via-[#C15DA4]/10 to-[#E985A6]/10 rounded-3xl flex items-center justify-center backdrop-blur-sm border-2 border-[#F6DCD0] shadow-2xl overflow-hidden">
                {/* Placeholder para ilustración */}
                <div className="w-full h-full max-w-[66rem] max-h-[66rem] bg-gradient-to-br from-white/80 to-white/60 rounded-2xl flex flex-col items-center justify-center shadow-xl border border-[#F6DCD0] relative">
                  {/* Indicador de ilustración */}

                  <div className="text-center p-6">
                    <div className="w-full h-full max-w-[60rem] max-h-[60rem] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg overflow-hidden bg-white">
                      <img
                        src={Ilustracion1.src}
                        alt="Ilustración principal maternidad"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Decoración del placeholder */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-[#C15DA4] rounded-full opacity-60"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#97C4C6] rounded-full opacity-40"></div>
                  <div className="absolute top-1/2 left-4 w-1 h-1 bg-[#E985A6] rounded-full opacity-50"></div>
                </div>
              </div>

              {/* Elementos flotantes decorativos */}
              <div
                className="absolute top-8 left-8 w-12 h-12 bg-[#97C4C6] rounded-full opacity-60 animate-bounce"
                style={{ animationDelay: "0s", animationDuration: "3s" }}
              ></div>
              <div
                className="absolute top-16 right-12 w-8 h-8 bg-[#E985A6] rounded-full opacity-70 animate-bounce"
                style={{ animationDelay: "1s", animationDuration: "4s" }}
              ></div>
              <div
                className="absolute bottom-16 left-16 w-6 h-6 bg-[#BDCCB4] rounded-full opacity-50 animate-bounce"
                style={{ animationDelay: "2s", animationDuration: "3.5s" }}
              ></div>
              <div
                className="absolute bottom-8 right-8 w-10 h-10 bg-[#F6DCD0] rounded-full opacity-80 animate-bounce"
                style={{ animationDelay: "1.5s", animationDuration: "4.2s" }}
              ></div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Ondas decorativas de fondo */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent"></div>
    </section>
  )
}
