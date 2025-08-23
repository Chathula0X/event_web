import React from 'react'
import CheckOutForm from '../components/Checkout/CheckOutForm'
import PaymentForm from '../components/Checkout/PaymentForm'
import { motion } from 'framer-motion'
import { ArrowLeft, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

function CheckoutPage() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center mb-4">
            <Link
              to="/ticket"
              className="flex items-center text-purple-600 hover:text-purple-700 transition-colors duration-200 mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Tickets
            </Link>
            <ShoppingCart className="w-6 h-6 text-purple-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Complete Your Purchase
          </h1>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
            Secure checkout process. Your tickets will be sent to your email immediately after payment.
          </p>
        </motion.div>

        {/* Checkout Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Checkout Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:order-1"
          >
            <CheckOutForm />
          </motion.div>

          {/* Right Column - Payment Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:order-2"
          >
            <PaymentForm />
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-100/60 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Trusted by Thousands of Event Goers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">50K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Secure Payments</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Customer Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">SSL</div>
                <div className="text-sm text-gray-600">Encrypted</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CheckoutPage