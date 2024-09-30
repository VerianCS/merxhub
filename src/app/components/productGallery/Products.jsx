'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const products = [
  { id: 1, name: 'Premium Hammer', price: '$29.99', image: '/placeholder.svg?height=400&width=600' },
  { id: 2, name: 'Organic Apples', price: '$4.99/lb', image: '/placeholder.svg?height=400&width=600' },
  { id: 3, name: 'All-Purpose Cleaner', price: '$7.99', image: '/placeholder.svg?height=400&width=600' },
  { id: 4, name: 'Power Drill', price: '$89.99', image: '/placeholder.svg?height=400&width=600' },
  { id: 5, name: 'Fresh Bread', price: '$3.49', image: '/placeholder.svg?height=400&width=600' },
]

export default function ProductSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl">
      <div className="relative h-[400px]">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              priority={index === currentIndex}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <h2 className="text-2xl font-bold text-white">{product.name}</h2>
              <p className="text-xl text-orange-300">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"
        aria-label="Previous product"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"
        aria-label="Next product"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-orange-500' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  )
}