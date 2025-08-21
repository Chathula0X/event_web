import React from 'react'
import { motion } from 'framer-motion'

function Ticketview() {
  const tickets = [
    { id: 1, title: 'Summer Music Fest', date: 'Jul 15, 2025', time: '6:00 PM', venue: 'Central Park, NYC', price: '$45', code: 'SMF-2025-045' },
    { id: 2, title: 'Tech Meetup', date: 'Jun 28, 2025', time: '7:00 PM', venue: 'Tech Hub, SF', price: 'Free', code: 'TM-628-INV' },
    { id: 3, title: 'Food & Wine Gala', date: 'Aug 10, 2025', time: '5:00 PM', venue: 'Convention Center, CHI', price: '$120', code: 'FW-810-120' },
    { id: 4, title: 'Yoga Retreat', date: 'Jul 20, 2025', time: '9:00 AM', venue: 'Mountain Resort, CO', price: '$299', code: 'YR-720-299' },
    { id: 5, title: 'Art Expo', date: 'Jun 30, 2025', time: '6:30 PM', venue: 'Modern Art, LA', price: '$25', code: 'AE-630-025' },
  ]

  // Vibrant gradient themes (static class names for Tailwind)
  const themes = [
    { main: 'from-purple-500 to-indigo-600', stub: 'from-indigo-600 to-purple-600', ring: 'ring-purple-300/30' },
    { main: 'from-rose-500 to-orange-500', stub: 'from-orange-500 to-rose-500', ring: 'ring-rose-300/30' },
    { main: 'from-emerald-500 to-teal-500', stub: 'from-teal-500 to-emerald-500', ring: 'ring-emerald-300/30' },
    { main: 'from-blue-500 to-cyan-500', stub: 'from-cyan-500 to-blue-500', ring: 'ring-cyan-300/30' },
    { main: 'from-fuchsia-500 to-pink-500', stub: 'from-pink-500 to-fuchsia-500', ring: 'ring-fuchsia-300/30' },
  ]

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ticket Views
        </motion.h3>

        <div className="overflow-x-auto">
          <div className="flex gap-6 min-w-max">
            {tickets.map((t, idx) => {
              const theme = themes[idx % themes.length]
              return (
                <motion.div
                  key={t.id}
                  className={`relative w-[320px] h-[160px] rounded-2xl shadow-xl overflow-hidden group ring-2 ${theme.ring}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.06 * idx }}
                  whileHover={{ y: -4 }}
                >
                  {/* Gloss sweep on hover */}
                  <motion.div
                    className="pointer-events-none absolute -top-1/2 -left-1/3 h-[300%] w-1/3 rotate-12 bg-white/10"
                    initial={{ x: '-150%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8 }}
                  />

                  <div className="flex h-full">
                    {/* Left main ticket area with vibrant gradient */}
                    <div className={`relative flex-1 p-4 pr-3 text-white bg-gradient-to-br ${theme.main}`}>
                      {/* Subtle texture */}
                      <div className="pointer-events-none absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:12px_12px]" />

                      <div className="relative">
                        <div className="text-xs/3 text-white/80 mb-1">Admit One</div>
                        <h4 className="text-lg font-bold leading-snug mb-1 drop-shadow-sm">{t.title}</h4>
                        <div className="text-sm text-white/90">{t.date} • {t.time}</div>
                        <div className="text-xs text-white/80 truncate">{t.venue}</div>

                        <div className="mt-4 flex items-center gap-2">
                          <span className="inline-flex items-center rounded-full bg-white/20 text-white px-2 py-0.5 text-xs font-medium border border-white/30">
                            {t.price}
                          </span>
                          <span className="inline-flex items-center rounded-full bg-black/20 text-white px-2 py-0.5 text-xs font-medium border border-white/20">
                            {t.code}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Perforation divider */}
                    <div className="relative w-px mx-2">
                      <div className="absolute inset-y-3 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-white/70 to-transparent [background-size:1px_10px] [background-image:linear-gradient(to_bottom,rgba(255,255,255,1)_6px,transparent_6px)] bg-no-repeat" />
                    </div>

                    {/* Right colorful stub */}
                    <div className={`relative w-28 p-3 pl-2 flex flex-col justify-between text-white bg-gradient-to-br ${theme.stub}`}>
                      {/* Subtle overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-black/10" />
                      <div className="relative">
                        <div className="text-[10px] uppercase tracking-wide text-white/80">Seat</div>
                        <div className="text-sm font-semibold drop-shadow-sm">GA • Row A</div>
                      </div>

                      {/* QR/Barcode placeholder */}
                      <div className="relative flex items-end justify-between">
                        <svg className="w-12 h-12 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M3 5h2M7 5h2M11 5h2M15 5h2M19 5h2M3 19h2M7 19h2M11 19h2M15 19h2M19 19h2" />
                          <rect x="4" y="8" width="4" height="8" fill="currentColor"/>
                          <rect x="10" y="10" width="2" height="6" fill="currentColor"/>
                          <rect x="14" y="8" width="3" height="8" fill="currentColor"/>
                        </svg>
                        <div className="text-[10px] text-white/80">Scan</div>
                      </div>
                    </div>
                  </div>

                  {/* Notches to mimic ticket cutouts */}
                  <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 rounded-full bg-white/80" />
                  <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-white/80" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ticketview