import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [query, setQuery] = useState('')

  const handleQueryChange = (event) => {
    setQuery(event.target.value)
  }

  const handleSendQuery = async () => {
    console.log('User Query:', query)
    // try {
    //   const response = await fetch('https://your-backend-endpoint.com/api/send-query', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ query }),
    //   });
    //   if (response.ok) {
    //     alert('Query sent successfully!');
    //   } else {
    //     alert('Failed to send query. Please try again.');
    //   }
    // } catch (error) {
    //   console.error('Error sending query:', error);
    //   alert('An error occurred. Please try again later.');
    // }
  }

  return (
    <footer className="fixed bg-[#64a8d2] bottom-0 start-0 end-0 text-center">
      <div className="container grid mx-auto md:grid-cols-3 gap-10">
        <div>
          {/* About Section */}
          <h2 className="text-lg font-semibold my-1">Type Your Query Here</h2>
          <textarea
            value={query}
            onChange={handleQueryChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
          <br />
          <button
            onClick={handleSendQuery}
            className="bg-[#00bcd4] text-white border-none rounded-md px-3.5 py-1.5 cursor-pointer 
                         transition-colors duration-300 hover:bg-[#0196a4]"
          >
            Send
          </button>
          <p className="text-sm">We deliver quality services with customer satisfaction as our priority.</p>
        </div>
        <div>
          {/* Quick Links */}
          <h2 className="text-lg font-semibold my-1">Quick Links</h2>
          <ul>
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="#services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="#about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          {/* Contact */}
          <h2 className="text-lg font-semibold my-1">Contact</h2>
          <ul className="text-sm space-y-2">
            <li>Email: contact@example.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Main Street, City</li>
          </ul>
        </div>
      </div>
      <div className="text-center border-gray-700 border-t mt-2 p-3">
        <p>© {new Date().getFullYear()} Paradise Paints. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
