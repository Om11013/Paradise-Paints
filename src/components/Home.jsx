import React from 'react'
import NavHeader from './NavHeader'
import { Link } from 'react-router-dom'

import Footer from './Footer'

const Home = () => {
  return (
    <home className="fixed inset-0 flex items-center justify-center text-white bg-slate-800">
      <NavHeader />
      <div className="max-w-[800px] mt-[-96px] w-full mx-auto h-screen text-center flex flex-col justify-center">
        <p className="text-red-300 font-bold text-2xl mb-4">Welcome to Paradise Paints</p>
        <div className="flex justify-center items-center my-4">
          <p className="text-white md:text-5xl sm:text-4xl text-xl font-bold">
            Your one-stop platform for all your needs
          </p>
        </div>
        <Link to="/register">
          <button className="bg-red-300 text-black py-2 px-6 rounded-full text-xl font-bold transition duration-300 ease-in-out hover:bg-red-400">
            Get Started
          </button>
        </Link>
      </div>
      <Footer />
    </home>
  )
}

export default Home
