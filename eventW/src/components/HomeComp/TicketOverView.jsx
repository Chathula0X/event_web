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
  // Create enough duplicates to fill the screen width continuously
  const repeatedTickets = Array(10).fill(tickets).flat();

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
          <motion.div
            className="flex flex-nowrap"
            animate={{ x: ["0%", "-50%"] }} // move half the duplicated array
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            role="list"
            aria-label="Available tickets"
          >
            {repeatedTickets.map((ticket, index) => (
              <motion.div
                key={`${ticket.id}-${index}`}
                className="min-w-[220px] md:min-w-[260px] p-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl shadow-lg flex-shrink-0"
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
