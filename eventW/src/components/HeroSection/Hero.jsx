import React from 'react'

function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-blue-400 text-white py-20 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
        Welcome to Event Web
      </h1>
      <p className="text-lg md:text-2xl mb-8 text-center max-w-xl">
        Discover, create, and join amazing events near you!
      </p>
      <a
        href="#events"
        className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow hover:bg-blue-600 hover:text-white transition"
      >
        Explore Events
      </a>
    </section>
  )
}
export default Hero