import React from 'react'
import { Coffee, Zap, Heart, Laugh, Rocket } from 'lucide-react'

const About = () => {
  return (
    <div className="p-3 md:p-6 max-w-4xl mx-auto">
      <div className="relative mb-6 md:mb-8">
        <div className="relative z-10 bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-black rounded-lg p-6 md:p-12 text-center">
          <Laugh className="w-12 h-12 md:w-20 md:h-20 mx-auto mb-3 md:mb-4" />
          <h1 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4">About This Crazy Project</h1>
          <p className="text-base md:text-xl text-gray-700">Built with coffee, chaos, and questionable life choices</p>
        </div>
        <div className="absolute top-2 left-2 w-full h-full bg-black rounded-lg -z-10"></div>
      </div>

      <div className="grid gap-4 md:gap-6">
        {[
          {Icon: Coffee, title: "Powered by Coffee", desc: "Approximately 47 cups were consumed during development. We lost count after Tuesday.", color: "bg-amber-100"},
          {Icon: Zap, title: "Lightning Fast*", desc: "*Results may vary. Speed depends on your internet, our server's mood, and planetary alignment.", color: "bg-yellow-100"},
          {Icon: Heart, title: "Made with Love", desc: "And a concerning amount of energy drinks. Our hearts are racing, but it's fine.", color: "bg-pink-100"},
          {Icon: Rocket, title: "To The Moon!", desc: "We're not sure where we're going, but we're going there FAST!", color: "bg-purple-100"}
        ].map((item, i) => (
          <div key={i} className="relative">
            <div className={`relative z-10 ${item.color} border-2 border-black rounded-lg p-4 md:p-6 flex gap-3 md:gap-4`}>
              <item.Icon className="w-8 h-8 md:w-12 md:h-12 flex-shrink-0" />
              <div>
                <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-700">{item.desc}</p>
              </div>
            </div>
            <div className="absolute top-2 left-2 w-full h-full bg-black rounded-lg -z-10"></div>
          </div>
        ))}
      </div>

      <div className="relative mt-6 md:mt-8">
        <div className="relative z-10 bg-white border-2 border-black rounded-lg p-4 md:p-8 text-center">
          <p className="text-sm md:text-base text-gray-600 italic">"This is either genius or madness. Probably both." - The Developer, 3 AM</p>
        </div>
        <div className="absolute top-2 left-2 w-full h-full bg-black rounded-lg -z-10"></div>
      </div>
    </div>
  )
}

export default About
