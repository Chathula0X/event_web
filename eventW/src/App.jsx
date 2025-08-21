import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/HeroSection/Hero'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Navbar />
    <div className="pt-16">
      <Hero />
      <Home />
    </div>
   </div>
  )
}

export default App
