import React from 'react'

function EventPageBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
            Explore Events
          </h1>
          <p className="mt-3 text-slate-200/90 max-w-2xl mx-auto">
            Browse by category and find your next unforgettable experience.
          </p>
        </div>
      </div>
    </section>
  )
}

export default EventPageBanner