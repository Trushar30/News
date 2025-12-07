import React from 'react'
import { Heart, Coffee, Code } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="p-3 md:p-6 mt-8 md:mt-12">
      <div className="relative max-w-4xl mx-auto">
        <div className="relative z-10 bg-gradient-to-r from-purple-100 to-blue-100 border-2 border-black rounded-lg p-4 md:p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <Coffee className="w-4 h-4 animate-bounce" />
            <span>and</span>
            <Code className="w-4 h-4" />
          </div>
          <p className="text-xs md:text-sm text-gray-600">© 2025 News Hub - Where news meets chaos</p>
          <p className="text-xs text-gray-500 mt-1 md:mt-2">No developers were harmed in the making of this app (much)</p>
        </div>
        <div className="absolute top-2 left-2 w-full h-full bg-black rounded-lg -z-10"></div>
      </div>
    </footer>
  )
}

export default Footer
