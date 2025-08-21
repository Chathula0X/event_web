import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      {/* Enhanced Floating Glow Background */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"
        animate={{ 
          y: [0, 30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl"
        animate={{ 
          y: [0, -40, 0],
          x: [0, -30, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      
      {/* Additional floating elements */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-pink-500/25 rounded-full blur-2xl"
        animate={{ 
          y: [0, 25, 0],
          rotate: [360, 180, 0]
        }}
        transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
      />

      {/* Particle Effects */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl space-y-8">
        {/* Enhanced Headline with Stagger Animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
            variants={{
              hidden: { opacity: 0, y: -50, scale: 0.8 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }
              },
            }}
          >
            Find & Create
            <motion.span
              className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400"
              variants={{
                hidden: { opacity: 0, scale: 0.5, rotateX: -90 },
                visible: { 
                  opacity: 1, 
                  scale: 1, 
                  rotateX: 0,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: 0.5,
                  }
                },
              }}
            >
              Amazing Events
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Enhanced Subheadline with Typewriter Effect */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 1.5,
            type: "spring",
            stiffness: 50,
          }}
        >
          Discover exciting events near you or create your own.  
          <motion.span 
            className="block mt-3 text-yellow-300 font-semibold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            Connect with people who share your interests.
          </motion.span>
        </motion.p>

        {/* Enhanced Action Buttons with Hover Effects */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { 
                delayChildren: 2.5, 
                staggerChildren: 0.3,
                type: "spring",
                stiffness: 100,
              },
            },
          }}
        >
          <motion.button
            className="group relative bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold px-10 py-5 rounded-full shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 text-lg overflow-hidden"
            variants={{ 
              hidden: { y: 50, opacity: 0, scale: 0.8 }, 
              visible: { 
                y: 0, 
                opacity: 1, 
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }
              } 
            }}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              🔍 Browse Events
            </span>
          </motion.button>

          <motion.button
            className="group relative bg-white/10 backdrop-blur-sm text-white font-bold px-10 py-5 rounded-full border-2 border-white/30 hover:border-white/50 transition-all duration-300 text-lg overflow-hidden"
            variants={{ 
              hidden: { y: 50, opacity: 0, scale: 0.8 }, 
              visible: { 
                y: 0, 
                opacity: 1, 
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  delay: 0.3,
                }
              } 
            }}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              ➕ Create Event
            </span>
          </motion.button>
        </motion.div>

        {/* Floating Stats Cards */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delayChildren: 3,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            { number: "500+", label: "Events This Month", icon: "🎉" },
            { number: "50K+", label: "Happy Attendees", icon: "👥" },
            { number: "100+", label: "Cities Covered", icon: "🌍" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }
                },
              }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                className="text-3xl mb-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: index * 0.5 }}
              >
                {stat.icon}
              </motion.div>
              <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-white/80 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4, duration: 1 }}
      >
        <div className="text-center">
          <motion.p 
            className="text-white/60 text-sm mb-3"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Scroll to explore
          </motion.p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <svg className="w-6 h-6 text-white/60 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
