import React from 'react'
import Ticketview from '../components/HomeComp/Ticketview'

function TicketPage() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-10">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Tickets</h1>
          <p className="text-slate-600 mt-2">Browse available tickets and passes</p>
        </div>
      </div>
      <Ticketview />
    </section>
  )
}

export default TicketPage
