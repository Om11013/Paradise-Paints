import React, { useEffect, useState } from 'react'

const Services = () => {
  const [services, setServices] = useState([])

    // useEffect(() => {
    //   fetch('https://localhost/service/getAll') // Replace with your backend endpoint
    //     .then((response) => response.json())
    //     .then((data) => setServices(data))
    //     .catch((error) => console.error('Error fetching services:', error));
    // }, []);

  if (services.length === 0) {
    return <div className="h-screen flex justify-center items-center">Loading...</div>
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-center text-2xl font-bold mb-6">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md p-4 text-center">
            <img src={service.imageUrl} alt={service.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
            <p className="text-sm text-gray-700">Stock: {service.stock ? 'Available' : 'Out of Stock'}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
