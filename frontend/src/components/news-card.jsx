import React from 'react'
import { Link } from 'react-router-dom'
import { Bookmark, ArrowRight } from 'lucide-react'
import { getRandomMessage, funnyBookmarkMessages } from '../utils/funnyToasts'

const NCard = ({ img, title, desc, id, url }) => {
  const handleBookmark = (e) => {
    e.preventDefault()
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    localStorage.setItem('bookmarks', JSON.stringify([...bookmarks, { img, title, desc, url }]))
    alert(getRandomMessage(funnyBookmarkMessages))
  }
  return (
    <div className="relative w-full">
      <div className="relative z-10 rounded-lg overflow-hidden bg-white border-2 border-black transition-all duration-200 hover:-translate-y-1 hover:-translate-x-1">
        <img className="w-full h-40 md:h-48 object-cover" src={img} alt={title} />
        <div className="p-3 md:p-4">
          <h2 className="text-base md:text-lg font-bold mb-2 h-12 md:h-14 overflow-hidden">{title}</h2>
          <p className="text-gray-600 text-xs md:text-sm h-16 md:h-20 overflow-hidden">{desc}</p>
        </div>
        <div className="px-3 md:px-4 pb-3 md:pb-4 flex gap-2 flex-wrap">
          <button onClick={handleBookmark} className="text-xs md:text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"><Bookmark className="w-3 h-3 md:w-4 md:h-4" /> Save</button>
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">Read More <ArrowRight className="w-3 h-3 md:w-4 md:h-4" /></a>
        </div>
      </div>
      <div className="absolute top-2 left-2 w-full h-full bg-black rounded-lg -z-10"></div>
    </div>
  )
}

export default NCard