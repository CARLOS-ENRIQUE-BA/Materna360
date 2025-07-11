"use client"

import { Heart, Brain, Users, Leaf, Shield } from "lucide-react"
import AnimatedSection from "./animated-section"

export default function ValuesSection() {
  const values = [
    {
      icon: Heart,
      title: "Empatía",
      description: "Escuchamos y acompañamos sin juzgar. Sabemos que cada maternidad es única.",
      gradient: "from-[#E985A6] to-[#C15DA4]",
      bgGradient: "from-[#E985A6]/20 to-[#C15DA4]/20",
    },
    {
      icon: Brain,
      title: "Ciencia con corazón",
      description: "Usamos evidencia actualizada, pero comunicada con calidez y humanidad.",
      gradient: "from-[#790B5A] to-[#C15DA4]",
      bgGradient: "from-[#790B5A]/20 to-[#C15DA4]/20",
    },
    {
      icon: Users,
      title: "Accesibilidad",
      description:
        "Queremos que todas las mujeres tengan acceso a salud y nutrición de calidad.",
      gradient: "from-[#97C4C6] to-[#BDCCB4]",
      bgGradient: "from-[#97C4C6]/20 to-[#BDCCB4]/20",
    },
    {
      icon: Leaf,
      title: "Respeto por los procesos",
      description: "Honramos el ritmo natural del cuerpo, la lactancia y la crianza.",
      gradient: "from-[#BDCCB4] to-[#97C4C6]",
      bgGradient: "from-[#BDCCB4]/20 to-[#97C4C6]/20",
    },
    {
      icon: Shield,
      title: "Prevención como base",
      description: "Creemos que los primeros mil días de vida son clave para construir una salud duradera.",
      gradient: "from-[#C15DA4] to-[#E985A6]",
      bgGradient: "from-[#C15DA4]/20 to-[#E985A6]/20",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection animation="fade-up" delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-[#F6DCD0] shadow-lg mb-6">
              <Heart className="w-5 h-5 text-[#C15DA4] fill-current" />
              <span className="text-[#790B5A] font-medium">Nuestros Valores</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#790B5A] mb-6">Lo que nos guía</h2>
            <p className="text-xl text-[#62615F] max-w-3xl mx-auto">
              Estos valores fundamentales definen nuestra forma de trabajar y relacionarnos con cada familia que
              acompañamos.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <AnimatedSection key={value.title} animation="fade-up" delay={index * 150}>
                <div
                  className={`bg-gradient-to-br ${value.bgGradient} rounded-3xl p-8 border border-[#F6DCD0] hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-full flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#790B5A] mb-4">{value.title}</h3>
                  <p className="text-[#62615F] leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Call to action */}
        <AnimatedSection animation="scale" delay={800}>
          <div className="text-center mt-16">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#F6DCD0] max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-[#790B5A] mb-4">¿Lista para comenzar tu viaje con nosotras?</h3>
              <p className="text-lg text-[#62615F] mb-8">
                Únete a miles de madres que ya confían en Materna 360 para su cuidado nutricional integral.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="/register">
                  <button className="w-full sm:w-auto bg-gradient-to-r from-[#790B5A] to-[#C15DA4] hover:from-[#C15DA4] hover:to-[#790B5A] text-white rounded-xl px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    Crear mi cuenta gratuita
                  </button>
                </a>
                <a href="/login">
                  <button className="w-full sm:w-auto border-2 border-[#BDCCB4] hover:border-[#C15DA4] hover:bg-[#FAF8F5] text-[#790B5A] rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300 bg-white/80 backdrop-blur-sm">
                    Ya soy parte de la familia
                  </button>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
