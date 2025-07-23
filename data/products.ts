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
    image: "/Productos-fisicos/img2.jpg",
    category: "Ropa Materna",
    description: "Blusa con acceso discreto para lactancia, perfecta para el día a día. Diseño moderno y funcional.",
  },
  {
    id: 15,
    name: "Pantalón Maternal Ajustable",
    price: 65.99,
    image: "/Productos-fisicos/img3.jpg",
    category: "Ropa Materna",
    description: "Pantalón con banda elástica ajustable para máxima comodidad durante todo el embarazo.",
  },

  // Lactancia
  {
    id: 2,
    name: "Cojín de Lactancia",
    price: 45.99,
    image: "/Lactancia/img4.jpg",
    category: "Lactancia",
    description:
      "Cojín ergonómico diseñado para brindar el máximo confort durante la lactancia. Su forma especial reduce la tensión en brazos, espalda y cuello.",
    featured: true,
  },
  {
    id: 6,
    name: "Sujetador de Lactancia",
    price: 29.99,
    image: "/Lactancia/img5.jpg",
    category: "Lactancia",
    description: "Sujetador cómodo y funcional para madres lactantes. Diseño sin costuras con copas removibles.",
    featured: true,
  },
  {
    id: 16,
    name: "Extractor de Leche Eléctrico",
    price: 159.99,
    image: "/Lactancia/img6.jpg",
    category: "Lactancia",
    description: "Extractor silencioso y eficiente con múltiples velocidades y sistema de masaje natural.",
  },

  // Ropa Bebé
  {
    id: 3,
    name: "Body para Bebé Orgánico",
    price: 24.99,
    image: "/Ropa-bebe/img7.jpg",
    category: "Ropa Bebé",
    description:
      "Body 100% algodón orgánico certificado, libre de químicos y colorantes artificiales. Suave como una caricia para la piel sensible del bebé.",
    featured: true,
  },
  {
    id: 17,
    name: "Pijama de Bebé Térmico",
    price: 32.99,
    image: "/Ropa-bebe/img8.jpg",
    category: "Ropa Bebé",
    description: "Pijama térmico para mantener al bebé cálido toda la noche. Tejido transpirable y suave.",
  },
  {
    id: 18,
    name: "Conjunto de Bebé 3 Piezas",
    price: 48.99,
    image: "/Ropa-bebe/img9.jpg",
    category: "Ropa Bebé",
    description: "Conjunto completo: body, pantalón y gorro en algodón suave. Perfecto para recién nacidos.",
  },

  // Cuidado Personal 
  {
    id: 4,
    name: "Crema Antiestrías Natural",
    price: 32.99,
    image: "/Cuidado-personal/img10.jpg",
    category: "Cuidado Personal",
    description:
      "Crema hidratante formulada con ingredientes 100% naturales como manteca de karité, aceite de rosa mosqueta y vitamina E.",
    featured: true,
  },
  {
    id: 19,
    name: "Aceite Corporal Maternal",
    price: 28.99,
    image: "/Cuidado-personal/img11.jpg",
    category: "Cuidado Personal",
    description: "Aceite nutritivo para hidratar y relajar la piel durante el embarazo. Fórmula natural y segura.",
  },
  {
    id: 20,
    name: "Champú para Bebé Sin Lágrimas",
    price: 18.99,
    image: "/Cuidado-personal/img12.jpg",
    category: "Cuidado Personal",
    description: "Champú suave y natural, perfecto para el cabello delicado del bebé. Fórmula sin lágrimas.",
  },

  // Acesorios-bebe
  {
    id: 5,
    name: "Manta de Bebé Suave",
    price: 38.99,
    image: "/Acesorios-bebe/img13.jpg",
    category: "Accesorios Bebé",
    description:
      "Manta ultra suave tejida con fibras hipoalergénicas. Perfecta para mantener al bebé cálido y cómodo durante el descanso.",
    featured: true,
  },
  {
    id: 21,
    name: "Móvil Musical para Cuna",
    price: 54.99,
    image: "/Acesorios-bebe/img14.jpg",
    category: "Accesorios Bebé",
    description: "Móvil con melodías relajantes y figuras coloridas. Estimula el desarrollo visual y auditivo.",
  },
  {
    id: 22,
    name: "Chupetes Ortodónticos Pack 2",
    price: 15.99,
    image: "/Acesorios-bebe/img15.jpg",
    category: "Accesorios Bebé",
    description: "Chupetes diseñados para el desarrollo oral saludable. Pack de 2 unidades en diferentes colores.",
  },

  // Planes-aimenticios
  {
    id: 101,
    name: "Plan Nutricional Primer Trimestre",
    price: 89.99,
    image: "/Planes-aimenticios/img16.jpg",
    category: "Planes Alimenticios",
    description:
      "Plan personalizado con recetas balanceadas, guías nutricionales y seguimiento profesional para las primeras 12 semanas de embarazo.",
  },
  {
    id: 102,
    name: "Suplementos Ácido Fólico Premium",
    price: 34.99,
    image: "/Planes-aimenticios/img17.jpg",
    category: "Planes Alimenticios",
    description: "Suplementos esenciales para el desarrollo neural del bebé. Fórmula de alta absorción.",
  },
  {
    id: 103,
    name: "Plan Nutricional Segundo Trimestre",
    price: 94.99,
    image: "/Planes-aimenticios/img18.jpg",
    category: "Planes Alimenticios",
    description: "Alimentación balanceada para el crecimiento acelerado del bebé durante el segundo trimestre.",
  },
  {
    id: 104,
    name: "Plan Nutricional Postparto",
    price: 99.99,
    image: "/Planes-aimenticios/img19.jpg",
    category: "Planes Alimenticios",
    description: "Recuperación y nutrición especializada para madres lactantes. Incluye recetas y suplementos.",
  },
  {
    id: 105,
    name: "Plan Alimenticio Personalizado para Embarazadas",
    price: 119.99,
    image: "/Planes-aimenticios/img20.jpeg",
    category: "Planes Alimenticios",
    description: "Plan nutricional adaptado a tus necesidades y etapa del embarazo. Incluye menú semanal, recetas, lista de compras y seguimiento profesional.",
  },
  {
    id: 106,
    name: "Plan Nutricional Postparto y Lactancia",
    price: 109.99,
    image: "/Planes-aimenticios/img21.jpg",
    category: "Planes Alimenticios",
    description: "Plan alimenticio diseñado para la recuperación postparto y apoyo a la lactancia. Incluye recetas energéticas, guía de hidratación y asesoría personalizada.",
  },
  {
    id: 107,
    name: "Plan de Alimentación Complementaria para Bebés (6-12 meses)",
    price: 89.99,
    image: "/Planes-aimenticios/img22.jpg",
    category: "Planes Alimenticios",
    description: "Guía paso a paso para la introducción de alimentos sólidos, recetas, menú semanal y recomendaciones para prevenir alergias.",
  },
  {
    id: 108,
    name: "Plan Nutricional para Niños Pequeños (1-5 años)",
    price: 99.99,
    image: "/Planes-aimenticios/img23.jpg",
    category: "Planes Alimenticios",
    description: "Plan personalizado para niños pequeños, con menús balanceados, recetas divertidas y consejos para fomentar hábitos saludables.",
  },
  {
    id: 109,
    name: "Plan Familiar Saludable",
    price: 129.99,
    image: "/Planes-aimenticios/img24.png",
    category: "Planes Alimenticios",
    description: "Plan alimenticio integral para toda la familia, adaptado a las necesidades de cada miembro, con recetas fáciles y nutritivas.",
  },

  // Material-educativo
  {
    id: 201,
    name: "Guía Completa del Embarazo",
    price: 29.99,
    image: "/Material-educativo/img20.jpg",
    category: "Material Educativo",
    description:
      "Manual completo con información actualizada y basada en evidencia científica sobre cada etapa del embarazo, parto y postparto.",
  },
  {
    id: 202,
    name: "Diario de Embarazo Personalizado",
    price: 19.99,
    image: "/Material-educativo/img21.jpg",
    category: "Material Educativo",
    description: "Registra cada momento especial de tu embarazo. Incluye espacios para fotos y reflexiones.",
  },
  {
    id: 203,
    name: "Curso Online de Lactancia",
    price: 49.99,
    image: "/Material-educativo/img22.jpg",
    category: "Material Educativo",
    description: "Aprende técnicas y resuelve dudas sobre lactancia materna con especialistas certificados.",
  },

  // Snacks-nutritivos
  {
    id: 301,
    name: "Galletas de Avena y Hierro",
    price: 12.99,
    image: "/Snacks-nutritivos/img23.jpg",
    category: "Snacks Nutritivos",
    description:
      "Galletas artesanales fortificadas con hierro natural para prevenir la anemia durante el embarazo. Deliciosas y nutritivas.",
  },
  {
    id: 302,
    name: "Galletas de Lactancia",
    price: 14.99,
    image: "/Snacks-nutritivos/img24.webp",
    category: "Snacks Nutritivos",
    description: "Galletas con ingredientes que estimulan la producción de leche materna. Sabor chocolate y avena.",
  },
  {
    id: 303,
    name: "Barritas de Proteína Maternal",
    price: 24.99,
    image: "/Snacks-nutritivos/img25.jpg",
    category: "Snacks Nutritivos",
    description: "Pack de 12 barritas con proteína vegetal y vitaminas esenciales para embarazadas.",
  },
  {
    id: 304,
    name: "Multivitamínico Prenatal",
    price: 39.99,
    image: "/Snacks-nutritivos/img26.avif",
    category: "Snacks Nutritivos",
    description:
      "Vitaminas completas para embarazo y lactancia. Fórmula desarrollada por nutricionistas especializados.",
  },{
    id: 305,
    name: "MIX PACK NÜWA KETO",
    price: 19.99,
    image: "/Snacks-nutritivos/img27.jpg",
    category: "Snacks Nutritivos",
    description: "Barritas de Cacao, Coco y Quinoa - Veganas - Snack Saludable - Vitamina E - Sin Azúcar Añadida - 15 pz - Ingredientes Naturales - Sin Conservadores - Sin Gluten",
  },

  // Productos-adicionales
  {
    id: 11,
    name: "Kit Esencial de Maternidad",
    price: 129.99,
    image: "/Productos-adicionales/img27.jpg",
    category: "Kit Completo",
    description:
      "Todo lo que necesitas para tu embarazo en un solo kit. Incluye productos de cuidado, lactancia y bienestar.",
  },
  {
    id: 12,
    name: "Almohada de Embarazo",
    price: 69.99,
    image: "/Productos-adicionales/img28.jpg",
    category: "Accesorios Materna",
    description:
      "Almohada ergonómica para un descanso perfecto durante el embarazo. Soporte total para cuerpo y vientre.",
  },
  {
    id: 13,
    name: "Set de Biberones Anticólicos",
    price: 49.99,
    image: "/Productos-adicionales/img29.jpg",
    category: "Alimentación Bebé",
    description: "Set completo de biberones con sistema anticólicos. Incluye tetinas de diferentes flujos.",
  },

  // PRODUCTOS EXCLUSIVOS PARA USUARIOS PREMIUM
  {
    id: 401,
    name: "Kit Premium de Cuidado Maternal Deluxe",
    price: 189.99,
    image: "/Productos-Exclusivos/Exclusivo1.webp",
    category: "Cuidado Personal Premium",
    description: "Kit exclusivo con cremas antiestrías de lujo, aceites esenciales importados, masajeador facial y guía personalizada de cuidado. Solo disponible para miembros premium.",
    exclusive: true,
    featured: false,
  },
  {
    id: 402,
    name: "Plan Nutricional VIP con Chef Personal",
    price: 299.99,
    image: "/Productos-Exclusivos/Exclusivo2.webp",
    category: "Planes Alimenticios Premium",
    description: "Plan alimenticio personalizado con consultas semanales con chef especializado en nutrición maternal, recetas gourmet y ingredientes premium incluidos.",
    exclusive: true,
  },
  {
    id: 403,
    name: "Ropa de Maternidad Diseñador Exclusiva",
    price: 249.99,
    image: "/Productos-Exclusivos/Exclusivo3.webp",
    category: "Ropa Materna Premium",
    description: "Colección exclusiva de vestidos y conjuntos de maternidad diseñados por reconocidos diseñadores. Materiales de lujo y cortes únicos para ocasiones especiales.",
    exclusive: true,
  },
  {
    id: 404,
    name: "Set de Lactancia Profesional Avanzado",
    price: 349.99,
    image: "/Productos-Exclusivos/Exclusivo4.webp",
    category: "Lactancia Premium",
    description: "Extractor de leche hospitalario, almohadas ergonómicas premium, sujetadores de lactancia de diseñador y consultoría personalizada con especialista en lactancia.",
    exclusive: true,
    featured: false,
  },
  {
    id: 405,
    name: "Accesorios de Bebé Artesanales Premium",
    price: 159.99,
    image: "/Productos-Exclusivos/Exclusivo5.jpg",
    category: "Accesorios Bebé Premium",
    description: "Mantas tejidas a mano con hilos orgánicos, móviles musicales personalizados y juguetes sensoriales únicos. Cada pieza es una obra de arte funcional.",
    exclusive: true,
  },
  {
    id: 406,
    name: "Suplementos Nutricionales de Laboratorio Exclusivo",
    price: 129.99,
    image: "/Productos-Exclusivos/Exclusivo6.webp",
    category: "Snacks Nutritivos Premium",
    description: "Suplementos formulados exclusivamente para miembros premium con ingredientes raros y de alta biodisponibilidad. Incluye vitaminas prenatales de grado farmacéutico y superalimentos.",
    exclusive: true,
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
    { ...getProductById(1)!, originalPrice: 89.99, discount: 30, endDate: "2025-12-31" },
    { ...getProductById(3)!, originalPrice: 24.99, discount: 30, endDate: "2025-12-25" },
    { ...getProductById(4)!, originalPrice: 32.99, discount: 30, endDate: "2025-12-28" },
    { ...getProductById(6)!, originalPrice: 29.99, discount: 30, endDate: "2025-12-30" },
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
    ...getFeaturedProducts().filter(p => p.category === "Planes Alimenticios" || p.category === "Snacks Nutritivos"),
    ...getProductsByCategory("Planes Alimenticios").slice(0, 5),
    ...getProductsByCategory("Material Educativo").slice(0, 4),
    ...getProductsByCategory("Snacks Nutritivos").slice(0, 5),
    ...getProductsByCategory("Cuidado Personal").slice(0, 3),
  ]
}

// Nueva función para obtener productos exclusivos
export const getExclusiveProducts = (): Product[] => {
  return allProducts.filter((product) => product.exclusive === true)
}

// Función para filtrar productos según el estado premium del usuario
export const getAvailableProducts = (isPremium: boolean): Product[] => {
  if (isPremium) {
    return allProducts // Los usuarios premium ven todos los productos
  }
  return allProducts.filter((product) => !product.exclusive) // Los usuarios gratuitos no ven productos exclusivos
}
