import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/HeroSection/Hero'
import Home from './Pages/Home'
import Ticketview from './components/HomeComp/Ticketview'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Navbar />
    <div className="pt-16">
      <Hero />
      <Home />
      <Ticketview />
    </div>
   </div>
  )
}

export default App
