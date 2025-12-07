import React, { useState } from 'react'
import NCard from '../components/news-card'

const Search = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!query) return
    setLoading(true)
    try {
      const res = await fetch(`https://news-km1k.onrender.com/api/search?q=${query}`)
      const data = await res.json()
      setResults(data.articles || [])
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }

  return (
    <div className="p-3 md:p-6">
      <div className="max-w-2xl mx-auto mb-6 md:mb-8">
        <div className="relative">
          <form onSubmit={handleSearch} className="relative z-10 bg-white border-2 border-black rounded-lg p-3 md:p-4 flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search news..."
              className="flex-1 px-3 md:px-4 py-2 border-2 border-black rounded-lg focus:outline-none text-sm md:text-base"
            />
            <button type="submit" className="px-4 md:px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm md:text-base">
              Search
            </button>
          </form>
          <div className="absolute top-2 left-2 w-full h-full bg-black rounded-lg -z-10"></div>
        </div>
      </div>
      {loading && <div className="text-center">Searching...</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {results.map((item, i) => (
          <NCard key={i} img={item.urlToImage} title={item.title} desc={item.description} url={item.url} />
        ))}
      </div>
    </div>
  )
}

export default Search
