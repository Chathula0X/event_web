import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/HeroSection/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Navbar />
    <div className="pt-16">
      <Hero />
      <h1>app</h1>
    </div>
   </div>
  )
}

export default App
