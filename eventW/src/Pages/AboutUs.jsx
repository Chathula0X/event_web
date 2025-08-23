import React from "react";
import { motion } from "framer-motion";
import { Users, CalendarDays, Sparkles } from "lucide-react";

function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-white to-purple-50 text-gray-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center py-16 px-6"
      >
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-4">
          About <span className="text-purple-600">Us</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We are passionate about bringing people together through unforgettable
          events that inspire, connect, and celebrate creativity.
        </p>
      </motion.div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-10">
        <motion.img
          src="https://colesclassroom.com/wp-content/uploads/2019/02/pexels-photo-1105666.jpeg"
          alt="Event"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            Our mission is to craft events that go beyond ordinary gatherings —
            creating meaningful experiences where ideas are shared, memories are
            made, and communities are strengthened. Whether it’s a festival,
            conference, or celebration, we make it extraordinary.
          </p>
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-md transition">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Highlights Section */}
      <div className="bg-white py-16 px-6 mt-10">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-indigo-50 rounded-2xl shadow-lg text-center"
          >
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-gray-600">
              Our events bring together people of all walks of life to connect,
              share, and grow.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-indigo-50 rounded-2xl shadow-lg text-center"
          >
            <CalendarDays className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Well Organized</h3>
            <p className="text-gray-600">
              We plan every detail with precision, ensuring smooth and
              unforgettable experiences.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-indigo-50 rounded-2xl shadow-lg text-center"
          >
            <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Memorable Moments</h3>
            <p className="text-gray-600">
              We don’t just host events — we create stories and memories that
              last a lifetime.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">Meet Our Team</h2>
        <p className="text-gray-600 mb-10">
          Behind every successful event is a passionate and creative team
          dedicated to making it special.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Team member"
              className="w-28 h-28 mx-auto rounded-full mb-4 shadow-md"
            />
            <h3 className="text-xl font-semibold">Sarah Johnson</h3>
            <p className="text-gray-500">Event Manager</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Team member"
              className="w-28 h-28 mx-auto rounded-full mb-4 shadow-md"
            />
            <h3 className="text-xl font-semibold">Michael Smith</h3>
            <p className="text-gray-500">Creative Director</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Team member"
              className="w-28 h-28 mx-auto rounded-full mb-4 shadow-md"
            />
            <h3 className="text-xl font-semibold">Emily Brown</h3>
            <p className="text-gray-500">Marketing Lead</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
