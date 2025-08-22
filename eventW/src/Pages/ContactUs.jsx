import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

function ContactUs() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Left Side: Contact Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h2>
            <p className="mb-6 text-gray-600">
              Have questions about the event? Reach out to us and we’ll get back
              to you as soon as possible.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-purple-600" />
                <span>+94 71 234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-purple-600" />
                <span>eventhub@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-purple-600" />
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 mt-6">
            <a href="#" className="hover:text-purple-600 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-purple-600 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-purple-600 transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col space-y-5 bg-gray-50 rounded-xl shadow-inner p-6 border border-gray-200"
        >
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none bg-white"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none bg-white"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none bg-white"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold shadow-md transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}

export default ContactUs;
