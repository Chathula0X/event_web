import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Ticket, QrCode } from "lucide-react";

function TicketView() {
  const tickets = [
    { id: "TKT-123456", eventName: "Music Fest 2025", date: "September 10, 2025", time: "7:00 PM", venue: "Lotus Tower, Colombo", seat: "A12" },
    { id: "TKT-654321", eventName: "Tech Meetup Night", date: "August 02, 2025", time: "6:30 PM", venue: "Tech Hub, SF", seat: "B07" },
    { id: "TKT-112233", eventName: "Food & Wine Gala", date: "October 03, 2025", time: "5:00 PM", venue: "Convention Center, Chicago", seat: "VIP-03" },
    { id: "TKT-445566", eventName: "Drama Night Live", date: "July 22, 2025", time: "8:00 PM", venue: "Majestic Theatre, NYC", seat: "C14" },
    { id: "TKT-778899", eventName: "Gaming Convention", date: "November 12, 2025", time: "10:00 AM", venue: "Expo Hall, Seattle", seat: "G21" },
    { id: "TKT-990011", eventName: "City Marathon", date: "September 29, 2025", time: "7:00 AM", venue: "City Center, Boston", seat: "Wave 2" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-6">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {tickets.map((t, idx) => (
          <motion.div
            key={t.id}
            className="bg-white shadow-xl rounded-2xl p-6 border border-purple-100/60 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.04 * idx }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 truncate pr-3">{t.eventName}</h2>
              <span className="text-xs px-2 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">Ticket</span>
            </div>

            {/* Info */}
            <div className="space-y-3 border-b border-dashed pb-4 mb-4">
              <div className="flex items-center text-gray-700">
                <Calendar className="w-4 h-4 mr-2 text-purple-500" />
                <span className="text-sm">{t.date} • {t.time}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="w-4 h-4 mr-2 text-purple-500" />
                <span className="text-sm truncate">{t.venue}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Ticket className="w-4 h-4 mr-2 text-purple-500" />
                <span className="text-sm">Seat: <b>{t.seat}</b></span>
              </div>
            </div>

            {/* Bottom row */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Ticket ID</p>
                <p className="font-mono font-semibold text-gray-900">{t.id}</p>
              </div>
              <div className="w-16 h-16 flex justify-center items-center bg-gray-100 rounded-lg border">
                <QrCode className="w-9 h-9 text-gray-500" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default TicketView;
