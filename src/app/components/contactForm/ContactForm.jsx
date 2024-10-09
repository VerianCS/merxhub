'use client'

import { useState } from 'react'
import { Send, Phone, Mail, Building } from 'lucide-react'

export default function EnhancedContactForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    cellphone: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const validateForm = () => {
    let newErrors = {}
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required'
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.cellphone.trim()) newErrors.cellphone = 'Cellphone is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length === 0) {
      const recipientEmail = 'contact@example.com'
      const subject = 'New Contact Form Submission'
      const body = `
        Company Name: ${formData.companyName}
        Name: ${formData.name}
        Cellphone: ${formData.cellphone}
        Email: ${formData.email}
        Message: ${formData.message}
      `
      window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <div className="max-w-6xl mx-auto my-16 p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-orange-200 opacity-20 z-0" 
           style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23FFA500\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        <div className="flex flex-col justify-center space-y-8">
          <h2 className="text-4xl font-bold mb-4 text-orange-800">Pongase en contacto</h2>
          <p className="text-xl text-orange-600 mb-4">Le atenderemos lo mas rapido posible!</p>
          <div className="bg-white p-6 rounded-lg shadow-inner space-y-4">
            <div className="flex items-center space-x-4 text-orange-700">
              <Phone className="w-6 h-6" />
              <span>+34 695 04 70 81</span>
            </div>
            <div className="flex items-center space-x-4 text-orange-700">
              <Mail className="w-6 h-6" />
              <span>contacto@merxhub.es</span>
            </div>
            <div className="flex items-center space-x-4 text-orange-700">
              <Building className="w-6 h-6" />
              <span>Passeig Les Vilares 14 B, Montgat, Barcelona, España.</span>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
            {['companyName', 'name', 'cellphone', 'email'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                  {field.replace(/([A-Z])/g, ' $1').trim()}
                </label>
                <input
                  type={field === 'email' ? 'email' : field === 'cellphone' ? 'tel' : 'text'}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className={`block w-full px-4 py-2 rounded-md border-2 bg-orange-50 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out ${errors[field] ? 'border-red-500' : 'border-orange-200'}`}
                />
                {errors[field] && <p className="mt-1 text-sm text-red-600">{errors[field]}</p>}
              </div>
            ))}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`block w-full px-4 py-2 rounded-md border-2 bg-orange-50 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out ${errors.message ? 'border-red-500' : 'border-orange-200'}`}
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Enviar mensaje
                <Send className="ml-2 w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300"></div>
    </div>
  )
}