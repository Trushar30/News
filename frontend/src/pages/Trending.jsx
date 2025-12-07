import React, { useState, useEffect } from 'react'
import NCard from '../components/news-card'
import LoadingSpinner from '../components/LoadingSpinner'
import { TrendingUp } from 'lucide-react'

const Trending = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://news-km1k.onrender.com/api/trending')
      .then(res => res.json())
      .then(data => {
        setNews(data.articles || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) return <LoadingSpinner />

  return (
    <div className="p-3 md:p-6">
      <div className="relative max-w-md mx-auto mb-6 md:mb-8">
        <div className="relative z-10 bg-gradient-to-r from-orange-100 to-red-100 border-2 border-black rounded-lg p-4 md:p-6 text-center">
          <div className="flex items-center justify-center gap-2 md:gap-3">
            <TrendingUp className="w-8 h-8 md:w-10 md:h-10" />
            <h1 className="text-2xl md:text-4xl font-bold">Trending Now</h1>
          </div>
        </div>
        <div className="absolute top-2 left-2 w-full h-full bg-black rounded-lg -z-10"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {news.slice(0, 12).map((item, i) => (
          <NCard key={i} img={item.urlToImage} title={item.title} desc={item.description} url={item.url} />
        ))}
      </div>
    </div>
  )
}

export default Trending
