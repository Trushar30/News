import React from 'react'
import { Link } from 'react-router-dom'
import { Newspaper, Flame, Zap, Globe, Smartphone } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen p-3 md:p-6">
      <div className="relative max-w-4xl mx-auto mb-8 md:mb-12">
        <div className="relative z-10 bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-black rounded-lg p-6 md:p-12 text-center">
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-4">
            <Newspaper className="w-10 h-10 md:w-16 md:h-16" />
            <h1 className="text-3xl md:text-6xl font-bold">News Hub</h1>
          </div>
          <p className="text-gray-700 text-sm md:text-xl mb-6 md:mb-8">Stay updated with the latest news from around the world</p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link to="/news">
              <button className="px-6 md:px-8 py-2 md:py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm md:text-base">
                Latest News
              </button>
            </Link>
            <Link to="/trending">
              <button className="px-6 md:px-8 py-2 md:py-3 border-2 border-black rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center text-sm md:text-base">
                <Flame className="w-4 h-4 md:w-5 md:h-5" /> Trending
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute top-2 left-2 w-full h-full bg-black rounded-lg -z-10"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[{Icon:Zap,title:'Fast Updates',desc:'Real-time news'},{Icon:Globe,title:'Global Coverage',desc:'News worldwide'},{Icon:Smartphone,title:'Mobile Ready',desc:'Access anywhere'}].map((f,i)=>(
          <div key={i} className="relative">
            <div className="relative z-10 bg-white border-2 border-black rounded-lg p-4 md:p-6 text-center">
              <f.Icon className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2" />
              <h3 className="font-bold text-base md:text-xl mb-1">{f.title}</h3>
              <p className="text-gray-600 text-xs md:text-sm">{f.desc}</p>
            </div>
            <div className="absolute top-2 left-2 w-full h-full bg-black rounded-lg -z-10"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
