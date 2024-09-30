import Image from 'next/image'
import { useState } from 'react'

const products = [
  { id: 1, name: 'Premium Hammer', image: '/placeholder.svg?height=300&width=300' },
  { id: 2, name: 'Organic Apples', image: '/placeholder.svg?height=300&width=300' },
  { id: 3, name: 'All-Purpose Cleaner', image: '/placeholder.svg?height=300&width=300' },
  { id: 4, name: 'Power Drill', image: '/placeholder.svg?height=300&width=300' },
  { id: 5, name: 'Fresh Bread', image: '/placeholder.svg?height=300&width=300' },
  { id: 6, name: 'Stainless Steel Sink', image: '/placeholder.svg?height=300&width=300' },
]

export default function ProductGallery() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <div className="bg-gradient-to-br from-orange-100 to-orange-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Product Showcase
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our wide range of high-quality products, from building materials to fresh food and cleaning supplies. Each item is carefully selected to meet your needs and exceed your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Featured Products</h3>
            <ul className="list-disc pl-5 space-y-2">
              {products.map((product) => (
                <li key={product.id} className="text-gray-700 hover:text-orange-500 transition-colors duration-200 cursor-pointer" onClick={() => setSelectedProduct(product)}>
                  {product.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
            {selectedProduct ? (
              <div className="text-center">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  width={200}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">{selectedProduct.name}</h3>
              </div>
            ) : (
              <p className="text-gray-600 text-lg">Select a product to view details</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 text-center">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}