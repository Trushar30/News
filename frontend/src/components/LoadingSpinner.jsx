import React from 'react'
import { Loader2 } from 'lucide-react'

const funnyMessages = [
  "Waking up the hamsters...",
  "Bribing the servers...",
  "Asking nicely for data...",
  "Consulting the magic 8-ball...",
  "Sacrificing a USB cable...",
  "Downloading more RAM...",
  "Untangling the internet cables...",
  "Feeding the code monkeys...",
]

const LoadingSpinner = () => {
  const [message, setMessage] = React.useState(funnyMessages[0])

  React.useEffect(() => {
    const interval = setInterval(() => {
      setMessage(funnyMessages[Math.floor(Math.random() * funnyMessages.length)])
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center p-12">
      <div className="relative">
        <div className="relative z-10 bg-white border-2 border-black rounded-lg p-8 text-center">
          <Loader2 className="w-16 h-16 mx-auto mb-4 animate-spin" />
          <p className="text-lg font-semibold">{message}</p>
        </div>
        <div className="absolute top-2 left-2 w-full h-full bg-black rounded-lg -z-10"></div>
      </div>
    </div>
  )
}

export default LoadingSpinner
