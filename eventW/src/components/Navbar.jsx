import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mr-2 shadow-lg">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <Link to="/" className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">EventWeb</Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
              >
                Home
              </Link>
              <Link
                to="/events"
                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
              >
                Events
              </Link>
              <Link
                to="/ticket"
                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
              >
                Tickets
              </Link>
              <a
                href="#about"
                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
              >
                Contact
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-purple-700 hover:to-indigo-700 transition duration-150 ease-in-out shadow-lg hover:shadow-purple-500/25">
              Create Event
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-purple-600 focus:outline-none focus:text-purple-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md shadow-lg border-b border-purple-100">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/events"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out"
            >
              Events
            </Link>
            <Link
              to="/ticket"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out"
            >
              Tickets
            </Link>
            <a
              href="#about"
              className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out"
            >
              Contact
            </a>
            <div className="pt-4 pb-3 border-t border-purple-100">
              <button className="w-full text-left text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out">
                Sign In
              </button>
              <button className="w-full mt-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-purple-700 hover:to-indigo-700 transition duration-150 ease-in-out shadow-lg">
                Create Event
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar