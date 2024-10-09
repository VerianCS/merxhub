"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import footerGeneral from "@/app/components/footerGeneral/FooterGeneral"
import EnterpriseFooter from '@/app/components/footerGeneral/FooterGeneral'

export default function ProductDescriptionPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>

    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] bg-orange-100 opacity-50"
             style={{backgroundImage: 'radial-gradient(circle, #FFA50022 2px, transparent 2px)',
                     backgroundSize: '30px 30px'}}>
        </div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-6xl w-full relative z-10">
        <div className={`bg-orange-50 rounded-3xl overflow-hidden transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} 
                         shadow-[inset_0_0_20px_rgba(255,165,0,0.2)] border border-orange-100`}>
          <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400 animate-fade-in">
                Deliciosos productos alimenticios
              </h1>
              
              <div className="prose prose-lg text-gray-700 animate-fade-in delay-200">
                <p className="leading-relaxed">
                  Introduciendo nuestra linea de productos alimenticios, para todos los paladares
                </p>
                <ul className="list-none pl-0 mt-6 space-y-3">
                  {[
                    "Carne de ave, cerdo, res",
                    "Todo tipo de quesos, blanco, gouda, etc",
                    "Cereales, granos, legumbres",
                    "Refrescos, bebidas enlatadas",
                    "Alimentos en conserva o enlatados"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center bg-orange-100 rounded-lg p-3 transition-all duration-300 hover:bg-orange-200 hover:shadow-inner">
                      <svg className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative h-96 rounded-2xl overflow-hidden animate-fade-in delay-400 
                              shadow-[inset_0_0_20px_rgba(255,165,0,0.2)] border border-orange-100 group">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Premium Eco-Friendly Water Bottle"
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="relative h-24 rounded-lg overflow-hidden 
                                              shadow-[inset_0_0_10px_rgba(255,165,0,0.2)] border border-orange-100
                                              transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <Image
                      src={`/placeholder.svg?height=200&width=200&text=Color ${index + 1}`}
                      alt={`Color variant ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Link href="/#products" className="inline-block mt-8 animate-fade-in delay-800">
          <button className="group relative overflow-hidden px-8 py-3 rounded-full font-semibold 
                             bg-orange-50 text-orange-500 
                             shadow-[inset_0_0_10px_rgba(255,165,0,0.2)] border border-orange-100
                             hover:shadow-[inset_0_0_20px_rgba(255,165,0,0.4)]
                             focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 
                             transition-all duration-300 hover:scale-105">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Atrás</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </Link>
      </div>
    </div>
    <EnterpriseFooter></EnterpriseFooter>
    </>
  )
}