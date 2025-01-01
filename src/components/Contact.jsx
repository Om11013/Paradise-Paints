import React from 'react'

const Contact = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-800">
      <div className="w-full max-w-3xl text-center bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <div className="mb-4 text-center">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <p className="text-gray-700">Paradise Paints</p>
        </div>
        <div className="mb-4 text-center">
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <p className="text-gray-700">150 ft Ring Road, ShunShine Complex, Rajkot</p>
        </div>
        <div className="mb-4 text-center">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <p className="text-gray-700">contact@paradisepaints.com</p>
        </div>
        <div className="mb-4 text-center">
          <label htmlFor="query" className="block text-sm font-medium text-gray-700">
            Query
          </label>
          <textarea
            id="query"
            name="query"
            rows="2"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default Contact
