import React, { useState, useEffect } from 'react'
import { PartyPopper } from 'lucide-react'

const EasterEgg = () => {
  const [show, setShow] = useState(false)
  const [clicks, setClicks] = useState(0)

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'n' && e.ctrlKey && e.shiftKey) {
        setShow(true)
        setTimeout(() => setShow(false), 3000)
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 animate-fade-in">
      <div className="relative">
        <div className="relative z-10 bg-gradient-to-r from-yellow-200 to-pink-200 border-4 border-black rounded-lg p-12 text-center animate-bounce">
          <PartyPopper className="w-24 h-24 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-2">You Found It!</h2>
          <p className="text-xl">The secret easter egg! 🎉</p>
          <p className="text-sm mt-4 text-gray-600">Press Ctrl+Shift+N to see this again</p>
        </div>
        <div className="absolute top-2 left-2 w-full h-full bg-black rounded-lg -z-10"></div>
      </div>
    </div>
  )
}

export default EasterEgg
