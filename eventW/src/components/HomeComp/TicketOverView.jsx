import React from "react";
import { Ticket } from "lucide-react";
import { motion } from "framer-motion";

const tickets = [
  { id: 1, name: "Music Fest 2025", price: "$50", date: "Sept 12" },
  { id: 2, name: "Tech Meetup", price: "$30", date: "Oct 03" },
  { id: 3, name: "Food Carnival", price: "$20", date: "Nov 15" },
  { id: 4, name: "Yoga Retreat", price: "$40", date: "Dec 02" },
];

function TicketOverView() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-indigo-700">
            <Ticket size={28} className="text-yellow-500" />
            Tickets Available Now!
          </h2>
          <a href="/ticket" className="inline-block">
            <button className="px-5 py-2 bg-yellow-400 text-black font-semibold rounded-xl shadow-md hover:bg-yellow-300 transition">
              View All
            </button>
          </a>
        </div>

        {/* Horizontal Loop Section */}
        <div className="overflow-hidden relative w-full">
          {/* Edge gradient mask for smooth fade-in/out */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 [background:linear-gradient(to_right,rgba(255,255,255,1),rgba(255,255,255,0))]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 [background:linear-gradient(to_left,rgba(255,255,255,1),rgba(255,255,255,0))]" />

          <motion.div
            className="flex gap-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            role="list"
            aria-label="Available tickets"
          >
            {/* Duplicate tickets to make loop smooth */}
            {[...tickets, ...tickets].map((ticket, index) => (
              <motion.div
                key={`${ticket.id}-${index}`}
                className="min-w-[220px] md:min-w-[260px] p-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                role="listitem"
                aria-label={`${ticket.name}, ${ticket.date}, ${ticket.price}`}
              >
                <h3 className="text-lg md:text-xl font-bold truncate">{ticket.name}</h3>
                <p className="text-white/80">{ticket.date}</p>
                <p className="mt-2 font-semibold text-yellow-300">{ticket.price}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TicketOverView;
