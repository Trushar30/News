import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Bookmark, Calendar, User, Share2 } from 'lucide-react'

const NewsDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const handleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    localStorage.setItem('bookmarks', JSON.stringify([...bookmarks, { id }]))
    alert('Bookmarked!')
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <button onClick={() => navigate(-1)} className="mb-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center gap-2">
        <ArrowLeft className="w-4 h-4" /> Back
      </button>
      <div className="relative">
        <div className="relative z-10 bg-white border-2 border-black rounded-lg overflow-hidden">
          <img src="https://via.placeholder.com/800x400" alt="News" className="w-full h-96 object-cover" />
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">News Article Title</h1>
            <div className="flex gap-4 mb-6 text-sm text-gray-600">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Dec 7, 2025</span>
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> Author Name</span>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Full article content goes here. This would be fetched from the API based on the article ID.
            </p>
            <div className="flex gap-4">
              <button onClick={handleBookmark} className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center gap-2">
                <Bookmark className="w-4 h-4" /> Bookmark
              </button>
              <button className="px-6 py-2 border-2 border-black rounded-lg hover:bg-gray-100 flex items-center gap-2">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-2 left-2 w-full h-full bg-black rounded-lg -z-10"></div>
      </div>
    </div>
  )
}

export default NewsDetail
