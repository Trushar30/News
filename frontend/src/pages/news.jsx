import React, { useState, useEffect } from 'react'
import NCard from '../components/news-card'
import LoadingSpinner from '../components/LoadingSpinner'

const News = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/news`)
      .then(res => res.json())
      .then(data => {
        setNews(data.articles || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) return <LoadingSpinner />

  return (
    <div className="p-3 md:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      {news.slice(0, 8).map((item, index) => (
        <NCard 
          key={index}
          img={item.urlToImage}
          title={item.title}
          desc={item.description}
          url={item.url}
        />
      ))}
    </div>
  )
}

export default News
