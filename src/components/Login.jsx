import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const [query, setQuery] = useState('')
  const maxChars = 250

  useEffect(() => {
    console.log('Footer Loaded ')
  }, [])

  // const handleInputChange = (e) => {
  //   if (e.target.value.length <= maxChars) {
  //     setQuery(e.target.value)
  //   }
  // }

  const handleSend = () => {
    console.log('Send button clicked!')
    console.log('Current query value:', query)

    alert('Send button clicked!')
    // Uncomment this when integrating with backend
    // try {
    //   const response = await fetch('https://your-backend-url.com/api/queries', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ query }),
    //   });

    //   if (response.ok) {
    //     alert('Query sent successfully!');
    //     setQuery(''); // Clear the textarea
    //   } else {
    //     alert('Failed to send query. Please try again.');
    //   }
    // } catch (error) {
    //   console.error('Error sending query:', error);
    //   alert('Error sending query. Please check the console for details.');
    // }
  }

  return (
    <footer className="fixed bg-[#64a8d2] bottom-0 start-0 end-0 text-center">
      <div className="container grid mx-auto md:grid-cols-3 gap-10">
        <div>
          {/* Query Section */}
          <h2 className="text-lg font-semibold my-1">Type Your Query Here</h2>
          <textarea
            value={query}
            // onChange={handleInputChange}
            className="w-full h-24 p-2 rounded-md"
            placeholder="Write your query here..."
          />
          <p className="text-sm text-gray-700">{maxChars - query.length} characters remaining</p>
          <button
            onClick={handleSend}
            className="bg-[#00bcd4] text-white border-none rounded-md px-3.5 py-1.5 cursor-pointer 
                         transition-colors duration-300 hover:bg-[#0196a4]"
          >
            Send
          </button>
          <p className="text-sm mt-2">We deliver quality services with customer satisfaction as our priority.</p>
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
