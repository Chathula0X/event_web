// App.js
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/HeroSection/Hero'
import Home from './Pages/Home'
import TicketOverView from './components/HomeComp/TicketOverView'
import Footer from './components/Footer'
import Events from './Pages/Events'
import EventDetails from './components/EventComp/EventDetails'
import TicketPage from './Pages/TicketPage'
function App() {
  return (
   <div>
    <Navbar />
    <div className="pt-16">
      <Routes>
        <Route path="/" element={<>
          <Hero />
          <Home />
          <TicketOverView />
        </>} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/ticket" element={<TicketPage />} />
      </Routes>
      <Footer />
    </div>
   </div>
  )
}

export default App
