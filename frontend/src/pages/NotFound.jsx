import React from 'react'
import { Link } from 'react-router-dom'
import { AlertCircle, Home } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-3 md:p-6">
      <div className="relative max-w-2xl">
        <div className="relative z-10 bg-gradient-to-r from-red-100 to-pink-100 border-2 border-black rounded-lg p-6 md:p-12 text-center">
          <AlertCircle className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 animate-bounce" />
          <h1 className="text-6xl md:text-8xl font-bold mb-3 md:mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Oops! Page Not Found</h2>
          <p className="text-base md:text-xl text-gray-700 mb-2">This page went on vacation and forgot to tell us.</p>
          <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">Or maybe it never existed. We're not sure. We're just developers.</p>
          <Link to="/">
            <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 mx-auto">
              <Home className="w-5 h-5" /> Take Me Home
            </button>
          </Link>
        </div>
        <div className="absolute top-2 left-2 w-full h-full bg-black rounded-lg -z-10"></div>
      </div>
    </div>
  )
}

export default NotFound
