import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import EventPageBanner from '../components/EventComp/EventPageBanner'

function Events() {
  const [category, setCategory] = useState('All')

  // Sample events data
  const events = useMemo(() => ([
    { id: 1, title: 'Summer Music Festival 2025', category: 'Music', date: '2025-07-15', time: '6:00 PM', location: 'Central Park, NYC', price: '$45', img: 'https://img.pikbest.com/templates/2022/11/29010116/fading-style-singer-concert-poster-design_331357.jpg!sw800' },
    { id: 2, title: 'Startup & Tech Meetup', category: 'Business', date: '2025-06-28', time: '7:00 PM', location: 'Tech Hub, SF', price: 'Free', img: 'https://cdn.venngage.com/template/thumbnail/full/6f7e01e4-6202-447e-8412-84dc2474637f.webp' },
    { id: 3, title: 'International Food & Wine', category: 'Food', date: '2025-08-10', time: '5:00 PM', location: 'Convention Center, Chicago', price: '$120', img: 'https://www.123creative.com/1943-thickbox/rock-concert-poster-template.jpg' },
    { id: 4, title: 'Yoga & Wellness Retreat', category: 'Health', date: '2025-07-20', time: '9:00 AM', location: 'Mountain Resort, CO', price: '$299', img: 'https://img.elegantflyer.com/templates/preview/free-concert-flyer-psd-template-161601.jpg' },
    { id: 5, title: 'Modern Art Expo', category: 'Art', date: '2025-06-30', time: '6:30 PM', location: 'Modern Art Museum, LA', price: '$25', img: 'https://cdn.vectorstock.com/i/1000v/89/80/jazz-band-poster-party-invitation-music-concert-vector-49808980.jpg' },
    { id: 6, title: 'City Marathon & 5K', category: 'Sports', date: '2025-09-15', time: '7:00 AM', location: 'City Center, Boston', price: '$65', img: 'https://cdn.shopify.com/s/files/1/0558/6413/1764/files/2_4982613e-cff2-4476-93c7-c75ca34170f8.jpg?v=1636601364' },
    { id: 7, title: 'Drama Night Live', category: 'Theatre', date: '2025-07-05', time: '8:00 PM', location: 'Majestic Theatre, NYC', price: '$40', img: 'https://www.shutterstock.com/image-vector/rock-music-festival-flyer-vector-600nw-641256826.jpg' },
    { id: 8, title: 'Gaming Convention', category: 'Tech', date: '2025-07-22', time: '10:00 AM', location: 'Expo Hall, Seattle', price: '$30', img: 'https://cdn.europosters.eu/image/750/rock-guitar-retro-poster-music-festival-concert-i190754.jpg' },
    { id: 9, title: 'Sports Gala', category: 'Sports', date: '2025-07-29', time: '7:00 PM', location: 'Stadium, Miami', price: '$55', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJINSMdyl06unr1d6HEWCfthvdeYQScQ069YK5KXSM2oK0_g1OqW_4GJSY7RzTeIpcp9g&usqp=CAU' },
  ]), [])

  const categories = ['All', 'Music', 'Business', 'Food', 'Health', 'Art', 'Sports', 'Theatre', 'Tech']

  const filtered = useMemo(() => (
    category === 'All' ? events : events.filter(e => e.category === category)
  ), [category, events])

  const formatDate = (iso) => new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

  return (
    <section id="events" className="bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50">
      <EventPageBanner />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-10">
        {/* Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-100 shadow-sm p-5 mb-8">
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((c, i) => (
              <motion.button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${category === c ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md' : 'bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100'}`}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: 0.03 * i }}
              >
                {c}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Count */}
        <div className="mb-4 text-sm text-gray-600">
          Showing <span className="font-semibold text-purple-700">{filtered.length}</span> event{filtered.length !== 1 ? 's' : ''}{category !== 'All' ? ` in ${category}` : ''}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((e, idx) => (
            <motion.div
              key={e.id}
              className="bg-white/90 backdrop-blur rounded-2xl border border-purple-100 shadow hover:shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * idx }}
            >
              <div className="relative h-48">
                <img src={e.img} alt={e.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition" />
                <span className="absolute top-3 left-3 text-xs font-medium bg-white/25 text-white px-2 py-1 rounded-full border border-white/30 backdrop-blur-sm">
                  {e.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors line-clamp-2">{e.title}</h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    {formatDate(e.date)} • {e.time}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    {e.location}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-purple-700 font-bold">{e.price}</span>
                  <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-purple-700 hover:to-indigo-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
