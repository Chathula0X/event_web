import React from 'react'
import { motion } from 'framer-motion'

function Home() {
  const posters = [
    { id: 1, image: 'https://img.pikbest.com/templates/2022/11/29010116/fading-style-singer-concert-poster-design_331357.jpg!sw800', title: 'Music Fest' },
    { id: 2, image: 'https://cdn.venngage.com/template/thumbnail/full/6f7e01e4-6202-447e-8412-84dc2474637f.webp', title: 'Tech Meetup' },
    { id: 3, image: 'https://www.123creative.com/1943-thickbox/rock-concert-poster-template.jpg', title: 'Food Carnival' },
    { id: 4, image: 'https://img.elegantflyer.com/templates/preview/free-concert-flyer-psd-template-161601.jpg', title: 'Wellness Camp' },
    { id: 5, image: 'https://cdn.vectorstock.com/i/1000v/89/80/jazz-band-poster-party-invitation-music-concert-vector-49808980.jpg', title: 'Art Expo' },
    { id: 6, image: 'https://cdn.shopify.com/s/files/1/0558/6413/1764/files/2_4982613e-cff2-4476-93c7-c75ca34170f8.jpg?v=1636601364', title: 'Marathon' },
    { id: 7, image: 'https://www.shutterstock.com/image-vector/rock-music-festival-flyer-vector-600nw-641256826.jpg', title: 'Drama Night' },
    { id: 8, image: 'https://cdn.europosters.eu/image/750/rock-guitar-retro-poster-music-festival-concert-i190754.jpg', title: 'Gaming Con' },
    { id: 9, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJINSMdyl06unr1d6HEWCfthvdeYQScQ069YK5KXSM2oK0_g1OqW_4GJSY7RzTeIpcp9g&usqp=CAU', title: 'Sports Gala' },
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100 overflow-hidden">
      {/* Floating gradient blobs for depth */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 rounded-full blur-3xl opacity-30 animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Event Posters
        </motion.h2>

        {/* Posters row */}
        <motion.div
          className="flex gap-6 md:gap-8 justify-center flex-wrap"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {posters.slice(0, 5).map((poster, index) => (
            <motion.div
              key={poster.id}
              className="relative group"
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Card */}
              <div className="relative w-[200px] h-[280px] sm:w-[220px] sm:h-[320px] md:w-[260px] md:h-[360px] lg:w-[280px] lg:h-[400px] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
                <img
                  src={poster.image}
                  alt={poster.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition duration-300" />
                {/* Title */}
                <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white font-semibold text-base md:text-lg text-center px-2">
                  {poster.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="/events">
            <motion.button
              className="relative px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg hover:shadow-xl overflow-hidden"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">✨ View More Events</span>
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-40 blur-2xl transition duration-300" />
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
