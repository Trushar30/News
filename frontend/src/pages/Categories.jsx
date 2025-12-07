import React from 'react'
import { Link } from 'react-router-dom'
import { Laptop, Trophy, Briefcase, Film, Heart, Microscope } from 'lucide-react'

const categories = [
  { name: 'Technology', Icon: Laptop, color: 'bg-blue-100' },
  { name: 'Sports', Icon: Trophy, color: 'bg-green-100' },
  { name: 'Business', Icon: Briefcase, color: 'bg-yellow-100' },
  { name: 'Entertainment', Icon: Film, color: 'bg-pink-100' },
  { name: 'Health', Icon: Heart, color: 'bg-red-100' },
  { name: 'Science', Icon: Microscope, color: 'bg-purple-100' },
]

const Categories = () => {
  return (
    <div className="p-3 md:p-6">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-center">Browse by Category</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
        {categories.map((cat, i) => (
          <Link key={i} to={`/category/${cat.name.toLowerCase()}`}>
            <div className="relative">
              <div className={`relative z-10 ${cat.color} border-2 border-black rounded-lg p-6 md:p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:-translate-x-1`}>
                <cat.Icon className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4" />
                <h3 className="text-xl md:text-2xl font-bold">{cat.name}</h3>
              </div>
              <div className="absolute top-2 left-2 w-full h-full bg-black rounded-lg -z-10"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Categories
