"use client"

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Construction, Utensils,ChevronRight, SprayCan } from 'lucide-react'

const products = [
  {
    href: "/productbuild",
    icon: Construction,
    title: "Materiales para la construcción.",
    description: "Suministros de alta calidad para la construcción",
    features: [
      "Soluciones de alta calidad",
      "Precios modicos y asequibles",
      "Opciones variadas."
    ]
  },
  {
    href: "/productfood",
    icon: Utensils,
    title: "Comidas y bebidas",
    description: "Opciones nutritivas y asequibles para todos los gustos",
    features: [
      "Productos frescos",
      "Opciones locales o importadas",
      "Precios asequibles y opciones variadas"
    ]
  },
  {
    href: "/productclean",
    icon: SprayCan,
    title: "Suministros de limpieza",
    description: "Soluciones para mantener tu entorno y hogar limpios",
    features: [
      "Productos bio degradables",
      "Opciones variadas industriales",
      "Opciones variadas para el hogar"
    ]
  }
]

export default function EnhancedProductHub() {
  const [activeIndex, setActiveIndex] = useState(0)
  const bgRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (bgRef.current) {
        const { left, top, width, height } = bgRef.current.getBoundingClientRect()
        const x = (e.clientX - left) / width
        const y = (e.clientY - top) / height

        bgRef.current.style.setProperty('--mouse-x', `${x * 100}%`)
        bgRef.current.style.setProperty('--mouse-y', `${y * 100}%`)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 to-orange-400 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.1) 0%, rgba(255,165,0,0.05) 40%, transparent 60%)',
          transition: 'background 0.3s ease',
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-300">
            Explora nuestros productos
          </span>
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {products.map((product, index) => (
            <div 
              key={product.title}
              className={`bg-orange-50 rounded-3xl p-8 flex flex-col
                          transition-all duration-500 transform
                          ${index === activeIndex ? 'scale-105 shadow-2xl' : 'scale-100 shadow-xl'}
                          hover:shadow-2xl relative overflow-hidden group`}
              onMouseEnter={() => setActiveIndex(index)}
            >
               <Link href={product.href} className="mt-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className={`w-20 h-20 bg-gradient-to-br from-orange-300 to-orange-500
                               rounded-full flex items-center justify-center mb-6
                               transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                <product.icon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-orange-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                {product.title}
              </h2>
              <p className="text-orange-600 text-center mb-6 group-hover:text-orange-700 transition-colors duration-300">
                {product.description}
              </p>
              <ul className="text-orange-700 text-sm space-y-2 mb-6 flex-grow">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <ChevronRight className="w-4 h-4 mr-2 text-orange-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
             
                <button className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold py-2 px-4 rounded-full
                                   hover:from-orange-500 hover:to-orange-700 transition-all duration-300
                                   focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                
                  Saber más
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}