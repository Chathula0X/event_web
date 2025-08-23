import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Wallet, Shield, CheckCircle, Clock, MapPin, Calendar } from 'lucide-react'

function PaymentForm() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card')
  const [orderSummary] = useState({
    eventName: 'Music Fest 2025',
    date: 'September 10, 2025',
    time: '7:00 PM',
    venue: 'Lotus Tower, Colombo',
    ticketType: 'VIP Pass',
    quantity: 2,
    pricePerTicket: 150,
    serviceFee: 12,
    total: 312
  })

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: CreditCard,
      description: 'Pay with Visa, Mastercard, or American Express'
    },
    {
      id: 'wallet',
      name: 'Digital Wallet',
      icon: Wallet,
      description: 'Pay with PayPal, Apple Pay, or Google Pay'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Order Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-xl border border-purple-100/60 p-6"
      >
        <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Order Summary
        </h2>
        
        <div className="space-y-4">
          {/* Event Details */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4 border border-purple-200/50">
            <h3 className="font-semibold text-gray-900 mb-2">{orderSummary.eventName}</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-purple-500" />
                <span>{orderSummary.date} at {orderSummary.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-purple-500" />
                <span>{orderSummary.venue}</span>
              </div>
            </div>
          </div>

          {/* Ticket Details */}
          <div className="border-b border-gray-200 pb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700">{orderSummary.ticketType}</span>
              <span className="text-gray-900 font-medium">x{orderSummary.quantity}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Price per ticket</span>
              <span className="text-gray-900">${orderSummary.pricePerTicket}</span>
            </div>
          </div>

          {/* Service Fee */}
          <div className="border-b border-gray-200 pb-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Service fee</span>
              <span className="text-gray-900">${orderSummary.serviceFee}</span>
            </div>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center pt-2">
            <span className="text-lg font-semibold text-gray-900">Total</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              ${orderSummary.total}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Payment Methods */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white rounded-2xl shadow-xl border border-purple-100/60 p-6"
      >
        <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Payment Method
        </h2>
        
        <div className="space-y-3">
          {paymentMethods.map((method) => {
            const IconComponent = method.icon
            return (
              <motion.div
                key={method.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative cursor-pointer border-2 rounded-lg p-4 transition-all duration-200 ${
                  selectedPaymentMethod === method.id
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300'
                }`}
                onClick={() => setSelectedPaymentMethod(method.id)}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                    selectedPaymentMethod === method.id
                      ? 'border-purple-500 bg-purple-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedPaymentMethod === method.id && (
                      <CheckCircle className="w-3 h-3 text-white" />
                    )}
                  </div>
                  <div className="flex items-center flex-1">
                    <IconComponent className="w-6 h-6 text-purple-500 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-900">{method.name}</h3>
                      <p className="text-sm text-gray-500">{method.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Security Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-2xl shadow-xl border border-purple-100/60 p-6"
      >
        <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Security & Protection
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">SSL Encrypted</h3>
              <p className="text-sm text-gray-600">All transactions are protected with 256-bit SSL encryption</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Clock className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">Instant Confirmation</h3>
              <p className="text-sm text-gray-600">Receive your tickets immediately after payment</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Important Notes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4"
      >
        <div className="flex items-start">
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
            <span className="text-white text-xs font-bold">!</span>
          </div>
          <div>
            <h4 className="text-sm font-medium text-blue-800 mb-1">Important Information</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Tickets are non-refundable unless the event is cancelled</li>
              <li>• Please arrive 30 minutes before the event starts</li>
              <li>• Valid ID may be required for entry</li>
              <li>• Tickets will be sent to your email address</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Payment Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
      >
        Pay ${orderSummary.total}
      </motion.button>
    </div>
  )
}

export default PaymentForm