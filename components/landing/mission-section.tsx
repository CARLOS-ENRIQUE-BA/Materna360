"use client"

import { Target, Heart, Users } from "lucide-react"
import AnimatedSection from "./animated-section"
import Ilustracion2 from "../../assets/Ilustracion2.png"

export default function MissionSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Encabezado */}
        <AnimatedSection animation="fade-up" delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-[#F6DCD0] shadow-lg mb-6">
              <Target className="w-5 h-5 text-[#C15DA4]" />
              <span className="text-[#790B5A] font-medium">Nuestra Misión</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#790B5A] mb-6">Acompañamiento Integral</h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de la misión */}
          <AnimatedSection animation="fade-right" delay={200}>
            <div className="space-y-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#F6DCD0]">
                <blockquote className="text-xl text-[#62615F] leading-relaxed italic">
                  "Acompañar integralmente a madres y familias durante el embarazo, postparto y lactancia a través de
                  <span className="text-[#790B5A] font-semibold"> atención nutricional</span>,
                  <span className="text-[#C15DA4] font-semibold"> educación basada en evidencia</span> y
                  <span className="text-[#E985A6] font-semibold"> herramientas accesibles</span> que promuevan el
                  bienestar físico, emocional y alimentario desde el inicio de la vida."
                </blockquote>
              </div>

              {/* Características */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#97C4C6]/20 to-[#BDCCB4]/20 rounded-2xl p-6 border border-[#F6DCD0]">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#97C4C6] to-[#BDCCB4] rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-white fill-current" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#790B5A] mb-2">Atención Personalizada</h3>
                  <p className="text-[#62615F]">
                    Adaptamos nuestro cuidado a las necesidades específicas de cada madre y bebé.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#E985A6]/20 to-[#C15DA4]/20 rounded-2xl p-6 border border-[#F6DCD0]">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#E985A6] to-[#C15DA4] rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#790B5A] mb-2">Apoyo Familiar</h3>
                  <p className="text-[#62615F]">
                    Involucramos a toda la familia en el proceso de cuidado y nutrición materno-infantil.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Ilustración de la misión */}
          <AnimatedSection animation="fade-left" delay={400}>
            <div className="relative">
              {/* Contenedor de la ilustración */}
              <div className="w-full max-w-[70rem] h-auto aspect-square mx-auto bg-gradient-to-br from-[#790B5A]/10 via-[#C15DA4]/10 to-[#E985A6]/10 rounded-3xl flex items-center justify-center backdrop-blur-sm border-2 border-[#F6DCD0] shadow-2xl overflow-hidden">
                {/* Placeholder para ilustración */}
                <div className="w-full h-full max-w-[66rem] max-h-[66rem] bg-gradient-to-br from-white/80 to-white/60 rounded-2xl flex flex-col items-center justify-center shadow-xl border border-[#F6DCD0] relative">
                  {/* Indicador de ilustración */}

                  <div className="text-center p-6">
                    <div className="w-full h-full max-w-[60rem] max-h-[60rem] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg overflow-hidden bg-white">
                      <img
                        src={Ilustracion2.src}
                        alt="Ilustración principal maternidad"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Decoración del placeholder */}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-[#C15DA4] rounded-full opacity-60"></div>
                  <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-[#97C4C6] rounded-full opacity-40"></div>
                  <div className="absolute top-1/2 right-3 w-1 h-1 bg-[#E985A6] rounded-full opacity-50"></div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div
                className="absolute top-6 left-6 w-8 h-8 bg-[#97C4C6] rounded-full opacity-40 animate-bounce"
                style={{ animationDelay: "0s", animationDuration: "3s" }}
              ></div>
              <div
                className="absolute top-12 right-8 w-6 h-6 bg-[#E985A6] rounded-full opacity-50 animate-bounce"
                style={{ animationDelay: "1s", animationDuration: "4s" }}
              ></div>
              <div
                className="absolute bottom-12 left-12 w-4 h-4 bg-[#BDCCB4] rounded-full opacity-30 animate-bounce"
                style={{ animationDelay: "2s", animationDuration: "3.5s" }}
              ></div>
              <div
                className="absolute bottom-6 right-6 w-7 h-7 bg-[#F6DCD0] rounded-full opacity-60 animate-bounce"
                style={{ animationDelay: "1.5s", animationDuration: "4.2s" }}
              ></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
