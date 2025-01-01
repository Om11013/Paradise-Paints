import React, { useEffect, useState } from 'react'
import servicesData from './services.json'
import exteriorPaint from '../assets/exterior_paint.jpg'
import interiorPaint from '../assets/interior_paint.jpg'
import wallTexture from '../assets/wall_texture.jpg'
import waterProofing from '../assets/waterproofing.jpg'

const imageMap = {
  exteriorPaint,
  interiorPaint,
  wallTexture,
  waterProofing,
}

const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    // Simulate API fetch with setTimeout
    setTimeout(() => {
      setServices(servicesData.services)
    }, 1000) // 1 second delay to simulate loading
  }, [])

  if (services.length === 0) {
    return <div className="h-screen flex justify-center items-center">Loading...</div>
  }

  return (
    <div className="inset-0 items-center justify-center fixed container mx-auto my-10 py-8">
      <h2 className="text-center text-2xl font-bold mb-6">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md p-4 text-center">
            <img
              src={imageMap[service.imageKey]}
              alt={service.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
            <p className="text-sm text-gray-700">Stock: {service.stock ? 'Available' : 'Out of Stock'}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
