import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/HeroSection/Hero'
import Home from './Pages/Home'
import Ticketview from './components/HomeComp/Ticketview'
import Footer from './components/Footer'
import Events from './Pages/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Navbar />
    <div className="pt-16">
      <Routes>
        <Route path="/" element={<>
          <Hero />
          <Home />
          <Ticketview />
        </>} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </div>
   </div>
  )
}

export default App
