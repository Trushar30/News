import React, { useState, useEffect } from 'react'
import NCard from '../components/news-card'
import { BookMarked } from 'lucide-react'

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    setBookmarks(saved)
  }, [])

  return (
    <div className="p-3 md:p-6">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-center">Your Bookmarks</h1>
      {bookmarks.length === 0 ? (
        <div className="relative max-w-md mx-auto">
          <div className="relative z-10 bg-white border-2 border-black rounded-lg p-8 text-center">
            <BookMarked className="w-20 h-20 mx-auto mb-4" />
            <p className="text-gray-600">No bookmarks yet. Start saving articles!</p>
          </div>
          <div className="absolute top-2 left-2 w-full h-full bg-black rounded-lg -z-10"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {bookmarks.map((item, i) => (
            <NCard key={i} img={item.img} title={item.title} desc={item.desc} url={item.url} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Bookmarks
