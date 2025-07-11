import type { Product } from "@/components/tienda/cart-context"

// Base de datos centralizada de todos los productos
export const allProducts: Product[] = [
  // Productos físicos - Ropa Materna
  {
    id: 1,
    name: "Vestido de Maternidad Elegante",
    price: 89.99,
    image: "/Productos-fisicos/img1.jpg",
    category: "Ropa Materna",
    description:
      "Vestido cómodo y elegante para todas las etapas del embarazo. Confeccionado con materiales suaves y transpirables que se adaptan perfectamente a tu cuerpo en crecimiento.",
    featured: true,
  },
  {
    id: 14,
    name: "Blusa de Lactancia Moderna",
    price: 45.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Ropa Materna",
    description: "Blusa con acceso discreto para lactancia, perfecta para el día a día. Diseño moderno y funcional.",
  },
  {
    id: 15,
    name: "Pantalón Maternal Ajustable",
    price: 65.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Ropa Materna",
    description: "Pantalón con banda elástica ajustable para máxima comodidad durante todo el embarazo.",
  },

  // Lactancia
  {
    id: 2,
    name: "Cojín de Lactancia Premium",
    price: 45.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Lactancia",
    description:
      "Cojín ergonómico diseñado para brindar el máximo confort durante la lactancia. Su forma especial reduce la tensión en brazos, espalda y cuello.",
    featured: true,
  },
  {
    id: 6,
    name: "Sujetador de Lactancia",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Lactancia",
    description: "Sujetador cómodo y funcional para madres lactantes. Diseño sin costuras con copas removibles.",
    featured: true,
  },
  {
    id: 16,
    name: "Extractor de Leche Eléctrico",
    price: 159.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Lactancia",
    description: "Extractor silencioso y eficiente con múltiples velocidades y sistema de masaje natural.",
  },

  // Ropa Bebé
  {
    id: 3,
    name: "Body para Bebé Orgánico",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Ropa Bebé",
    description:
      "Body 100% algodón orgánico certificado, libre de químicos y colorantes artificiales. Suave como una caricia para la piel sensible del bebé.",
    featured: true,
  },
  {
    id: 17,
    name: "Pijama de Bebé Térmico",
    price: 32.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Ropa Bebé",
    description: "Pijama térmico para mantener al bebé cálido toda la noche. Tejido transpirable y suave.",
  },
  {
    id: 18,
    name: "Conjunto de Bebé 3 Piezas",
    price: 48.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Ropa Bebé",
    description: "Conjunto completo: body, pantalón y gorro en algodón suave. Perfecto para recién nacidos.",
  },

  // Cuidado Personal
  {
    id: 4,
    name: "Crema Antiestrías Natural",
    price: 32.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Cuidado Personal",
    description:
      "Crema hidratante formulada con ingredientes 100% naturales como manteca de karité, aceite de rosa mosqueta y vitamina E.",
    featured: true,
  },
  {
    id: 19,
    name: "Aceite Corporal Maternal",
    price: 28.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Cuidado Personal",
    description: "Aceite nutritivo para hidratar y relajar la piel durante el embarazo. Fórmula natural y segura.",
  },
  {
    id: 20,
    name: "Champú para Bebé Sin Lágrimas",
    price: 18.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Cuidado Personal",
    description: "Champú suave y natural, perfecto para el cabello delicado del bebé. Fórmula sin lágrimas.",
  },

  // Accesorios Bebé
  {
    id: 5,
    name: "Manta de Bebé Suave",
    price: 38.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accesorios Bebé",
    description:
      "Manta ultra suave tejida con fibras hipoalergénicas. Perfecta para mantener al bebé cálido y cómodo durante el descanso.",
    featured: true,
  },
  {
    id: 21,
    name: "Móvil Musical para Cuna",
    price: 54.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accesorios Bebé",
    description: "Móvil con melodías relajantes y figuras coloridas. Estimula el desarrollo visual y auditivo.",
  },
  {
    id: 22,
    name: "Chupetes Ortodónticos Pack 2",
    price: 15.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accesorios Bebé",
    description: "Chupetes diseñados para el desarrollo oral saludable. Pack de 2 unidades en diferentes colores.",
  },

  // Planes Alimenticios
  {
    id: 101,
    name: "Plan Nutricional Primer Trimestre",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Planes Alimenticios",
    description:
      "Plan personalizado con recetas balanceadas, guías nutricionales y seguimiento profesional para las primeras 12 semanas de embarazo.",
  },
  {
    id: 102,
    name: "Suplementos Ácido Fólico Premium",
    price: 34.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Planes Alimenticios",
    description: "Suplementos esenciales para el desarrollo neural del bebé. Fórmula de alta absorción.",
  },
  {
    id: 103,
    name: "Plan Nutricional Segundo Trimestre",
    price: 94.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Planes Alimenticios",
    description: "Alimentación balanceada para el crecimiento acelerado del bebé durante el segundo trimestre.",
  },
  {
    id: 104,
    name: "Plan Nutricional Postparto",
    price: 99.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Planes Alimenticios",
    description: "Recuperación y nutrición especializada para madres lactantes. Incluye recetas y suplementos.",
  },

  // Material Educativo
  {
    id: 201,
    name: "Guía Completa del Embarazo",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Material Educativo",
    description:
      "Manual completo con información actualizada y basada en evidencia científica sobre cada etapa del embarazo, parto y postparto.",
  },
  {
    id: 202,
    name: "Diario de Embarazo Personalizado",
    price: 19.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Material Educativo",
    description: "Registra cada momento especial de tu embarazo. Incluye espacios para fotos y reflexiones.",
  },
  {
    id: 203,
    name: "Curso Online de Lactancia",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Material Educativo",
    description: "Aprende técnicas y resuelve dudas sobre lactancia materna con especialistas certificados.",
  },

  // Snacks Nutritivos
  {
    id: 301,
    name: "Galletas de Avena y Hierro",
    price: 12.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Snacks Nutritivos",
    description:
      "Galletas artesanales fortificadas con hierro natural para prevenir la anemia durante el embarazo. Deliciosas y nutritivas.",
  },
  {
    id: 302,
    name: "Galletas de Lactancia",
    price: 14.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Snacks Nutritivos",
    description: "Galletas con ingredientes que estimulan la producción de leche materna. Sabor chocolate y avena.",
  },
  {
    id: 303,
    name: "Barritas de Proteína Maternal",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Snacks Nutritivos",
    description: "Pack de 12 barritas con proteína vegetal y vitaminas esenciales para embarazadas.",
  },
  {
    id: 304,
    name: "Multivitamínico Prenatal",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Snacks Nutritivos",
    description:
      "Vitaminas completas para embarazo y lactancia. Fórmula desarrollada por nutricionistas especializados.",
  },

  // Productos adicionales
  {
    id: 11,
    name: "Kit Esencial de Maternidad",
    price: 129.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Kit Completo",
    description:
      "Todo lo que necesitas para tu embarazo en un solo kit. Incluye productos de cuidado, lactancia y bienestar.",
  },
  {
    id: 12,
    name: "Almohada de Embarazo Premium",
    price: 69.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accesorios Materna",
    description:
      "Almohada ergonómica para un descanso perfecto durante el embarazo. Soporte total para cuerpo y vientre.",
  },
  {
    id: 13,
    name: "Set de Biberones Anticólicos",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Alimentación Bebé",
    description: "Set completo de biberones con sistema anticólicos. Incluye tetinas de diferentes flujos.",
  },
]

// Funciones utilitarias para filtrar productos
export const getProductsByCategory = (category: string): Product[] => {
  return allProducts.filter((product) => product.category === category)
}

export const getFeaturedProducts = (): Product[] => {
  return allProducts.filter((product) => product.featured === true)
}

export const getProductById = (id: number): Product | undefined => {
  return allProducts.find((product) => product.id === id)
}

export const searchProducts = (query: string): Product[] => {
  if (!query.trim()) return allProducts

  const searchTerm = query.toLowerCase().trim()
  return allProducts.filter((product) => {
    const matchesName = product.name.toLowerCase().includes(searchTerm)
    const matchesCategory = product.category.toLowerCase().includes(searchTerm)
    const matchesDescription = product.description.toLowerCase().includes(searchTerm)

    // Búsqueda por palabras clave específicas
    const keywords = searchTerm.split(" ")
    const matchesKeywords = keywords.some(
      (keyword) =>
        product.name.toLowerCase().includes(keyword) ||
        product.category.toLowerCase().includes(keyword) ||
        product.description.toLowerCase().includes(keyword),
    )

    return matchesName || matchesCategory || matchesDescription || matchesKeywords
  })
}

export const getProductsWithOffers = (): (Product & { originalPrice: number; discount: number; endDate: string })[] => {
  // Simulamos ofertas para algunos productos
  const productsWithOffers = [
    { ...getProductById(1)!, originalPrice: 89.99, discount: 30, endDate: "2024-12-31" },
    { ...getProductById(3)!, originalPrice: 24.99, discount: 30, endDate: "2024-12-25" },
    { ...getProductById(4)!, originalPrice: 32.99, discount: 30, endDate: "2024-12-28" },
    { ...getProductById(6)!, originalPrice: 29.99, discount: 30, endDate: "2024-12-30" },
  ]

  return productsWithOffers.map((product) => ({
    ...product,
    price: product.originalPrice * (1 - product.discount / 100),
  }))
}

export const getBestSellers = (): Product[] => {
  // Productos más vendidos (simulado)
  return [
    getProductById(11)!, // Kit Esencial de Maternidad
    getProductById(12)!, // Almohada de Embarazo Premium
    getProductById(13)!, // Set de Biberones Anticólicos
  ].filter(Boolean)
}

export const getCategories = (): string[] => {
  return Array.from(new Set(allProducts.map((product) => product.category)))
}

export const getProductsForLanding = (): Product[] => {
  // Selección curada para la landing page
  return [
    ...getFeaturedProducts().slice(0, 4), // 4 productos destacados
    ...getProductsByCategory("Planes Alimenticios").slice(0, 1),
    ...getProductsByCategory("Material Educativo").slice(0, 1),
    ...getProductsByCategory("Snacks Nutritivos").slice(0, 1),
    ...getProductsByCategory("Cuidado Personal").slice(0, 1),
  ]
}
