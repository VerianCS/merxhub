"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Package, Truck, BarChart, Search, ChevronRight} from 'lucide-react'

const products = [
  {
    id: 1,
    name: "Manta lisa y granulada",
    category: "Construcción",
    stock: 500,
    unit: "pieces",
    price: 1200,
    image: "/placeholder.svg?height=200&width=200&text=Steel+Beams"
  },
  {
    id: 10,
    name: "Frijoles negros",
    category: "Alimentos",
    stock: 500,
    unit: "pieces",
    price: 500,
    image: "/placeholder.svg?height=200&width=200&text=Steel+Beams"
  },
  {
    id: 11,
    name: "Detergente en polvo",
    category: "Limpieza",
    stock: 500,
    unit: "pieces",
    price: 500,
    image: "/placeholder.svg?height=200&width=200&text=Steel+Beams"
  },

]

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <div className="absolute top-0 right-0 bg-orange-500 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
          {product.category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <div className="flex justify-between items-center mb-2">
        </div>
        <div className="flex justify-between items-center mb-4">
        </div>
      <Link href="/#contact">
      <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300 flex items-center justify-center">
          <Package className="w-5 h-5 mr-2" />
          Más detalles
        </button>
      </Link>

      </div>
    </div>
  )
}

export default function WarehouseProductDisplay() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === "All" || product.category === selectedCategory)
  )

  const categories = ["All", ...new Set(products.map(product => product.category))]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Nuestro <span className="text-orange-600">Almacén</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Productos ya disponibles
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-700 hover:bg-orange-100"
                } transition duration-300`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Package className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No se encuentran productos</h3>
            <p className="mt-1 text-sm text-gray-500">
              Intenta ajustar el filtro a lo que buscas
            </p>
          </div>
        )}

        <div className="mt-12 flex justify-between items-center bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <Truck className="w-8 h-8 text-orange-500" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Envío rapido</h2>
              <p className="text-sm text-gray-600">Domicilio rapido a tu ubicación.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <BarChart className="w-8 h-8 text-orange-500" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Actualizacion de disponibilidad</h2>
              <p className="text-sm text-gray-600">Actualizacion de inventario en tiempo real.</p>
            </div>
          </div>
        <Link href="/#contact">
        <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300">
            Saber más.
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </Link>

          

        </div>
      </div>
    </div>
  )
}