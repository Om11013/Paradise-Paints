import React from 'react'
import logo from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-brand'>
          <img src="{logo}" alt="Logo" className='logo'/>
          <h1>Paradise</h1>
        </div>

        <ul className='navbar-links'>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li><button>Register</button></li>
        </ul>

      </nav>
    </>
  )
}

export default Navbar