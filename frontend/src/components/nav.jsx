import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Flame, Search, Bookmark, Menu, X } from 'lucide-react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative mx-3 md:mx-6 mt-3 md:mt-6 z-50">
      <div className="relative bg-white min-h-[60px] md:h-20 border-2 border-black rounded-lg flex items-center justify-between px-4 md:px-8 z-50">
        <Link to="/" className="text-xl md:text-2xl font-bold">News</Link>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full left-0 right-0 md:top-0 flex-col md:flex-row gap-4 md:gap-6 bg-white md:bg-transparent p-4 md:p-0 mt-2 md:mt-0 border-2 md:border-0 border-black rounded-lg md:rounded-none z-50`}>
          <Link to="/" className="hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/news" className="hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>Latest</Link>
          <Link to="/trending" className="hover:text-blue-600 transition-colors flex items-center gap-1" onClick={() => setIsOpen(false)}><Flame className="w-4 h-4" /> Trending</Link>
          <Link to="/categories" className="hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>Categories</Link>
          <Link to="/search" className="hover:text-blue-600 transition-colors flex items-center gap-1" onClick={() => setIsOpen(false)}><Search className="w-4 h-4" /> Search</Link>
          <Link to="/bookmarks" className="hover:text-blue-600 transition-colors flex items-center gap-1" onClick={() => setIsOpen(false)}><Bookmark className="w-4 h-4" /> Saved</Link>
          <Link to="/about" className="hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>About</Link>
        </nav>
      </div>
      <div className="absolute top-2 left-2 w-full h-full bg-black rounded-lg z-40"></div>
    </div>
  )
}

export default Nav
