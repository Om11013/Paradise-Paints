import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavHeader from './components/NavHeader'
import Home from './components/Home'
import AboutUs from './components/AboutUs.jsx'
import Services from './components/Services'
import Contact from './components/Contact'
import Register from './components/Register'
import Login from './components/Login'

function App() {
  return (
    <Router>
      <NavHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  )
}

export default App
