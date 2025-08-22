// EventDetails.js
import React from 'react'
import { useParams, Link } from 'react-router-dom'

// ✅ Temporary events data (can be moved to a separate file)
const events = [
  { id: 1, title: 'Summer Music Festival 2025', category: 'Music', date: '2025-07-15', time: '6:00 PM', location: 'Central Park, NYC', price: '$45', img: 'https://img.pikbest.com/templates/2022/11/29010116/fading-style-singer-concert-poster-design_331357.jpg!sw800', description: 'Join us for an unforgettable night of music with top bands and artists.' },
  { id: 2, title: 'Startup & Tech Meetup', category: 'Business', date: '2025-06-28', time: '7:00 PM', location: 'Tech Hub, SF', price: 'Free', img: 'https://cdn.venngage.com/template/thumbnail/full/6f7e01e4-6202-447e-8412-84dc2474637f.webp', description: 'Network with entrepreneurs, developers, and innovators shaping the future.' },
  { id: 3, title: 'International Food & Wine', category: 'Food', date: '2025-08-10', time: '5:00 PM', location: 'Convention Center, Chicago', price: '$120', img: 'https://www.123creative.com/1943-thickbox/rock-concert-poster-template.jpg', description: 'Taste dishes and wines from around the world in one grand festival.' },
  { id: 4, title: 'Yoga & Wellness Retreat', category: 'Health', date: '2025-07-20', time: '9:00 AM', location: 'Mountain Resort, CO', price: '$299', img: 'https://img.elegantflyer.com/templates/preview/free-concert-flyer-psd-template-161601.jpg' },
  { id: 5, title: 'Modern Art Expo', category: 'Art', date: '2025-06-30', time: '6:30 PM', location: 'Modern Art Museum, LA', price: '$25', img: 'https://cdn.vectorstock.com/i/1000v/89/80/jazz-band-poster-party-invitation-music-concert-vector-49808980.jpg' },
  { id: 6, title: 'City Marathon & 5K', category: 'Sports', date: '2025-09-15', time: '7:00 AM', location: 'City Center, Boston', price: '$65', img: 'https://cdn.shopify.com/s/files/1/0558/6413/1764/files/2_4982613e-cff2-4476-93c7-c75ca34170f8.jpg?v=1636601364' },
  { id: 7, title: 'Drama Night Live', category: 'Theatre', date: '2025-07-05', time: '8:00 PM', location: 'Majestic Theatre, NYC', price: '$40', img: 'https://www.shutterstock.com/image-vector/rock-music-festival-flyer-vector-600nw-641256826.jpg' },
  { id: 8, title: 'Gaming Convention', category: 'Tech', date: '2025-07-22', time: '10:00 AM', location: 'Expo Hall, Seattle', price: '$30', img: 'https://cdn.europosters.eu/image/750/rock-guitar-retro-poster-music-festival-concert-i190754.jpg' },
  { id: 9, title: 'Sports Gala', category: 'Sports', date: '2025-07-29', time: '7:00 PM', location: 'Stadium, Miami', price: '$55', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJINSMdyl06unr1d6HEWCfthvdeYQScQ069YK5KXSM2oK0_g1OqW_4GJSY7RzTeIpcp9g&usqp=CAU' },
  // ... add other events here
]

function EventDetails() {
  const { id } = useParams()
  const event = events.find(e => e.id === parseInt(id))

  if (!event) return <h2 className="text-center text-red-600 mt-10">Event not found!</h2>

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <img src={event.img} alt={event.title} className="w-full h-80 object-cover rounded-2xl shadow-lg mb-6" />
      <h1 className="text-3xl font-bold text-purple-700 mb-4">{event.title}</h1>
      <p className="text-gray-600 mb-6">{event.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-700">
        <p><strong>Date:</strong> {event.date} at {event.time}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Category:</strong> {event.category}</p>
        <p><strong>Price:</strong> {event.price}</p>
      </div>

      <div className="mt-8 flex justify-between">
        <Link to="/events" className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
          ← Back to Events
        </Link>
        <Link to="/ticket" className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full hover:from-purple-700 hover:to-indigo-700 transition">
          Book Ticket
        </Link>
      </div>
    </div>
  )
}

export default EventDetails
