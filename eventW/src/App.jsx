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
import AboutUs from'./Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import CheckoutPage from './Pages/CheckoutPage'
import Login from './components/Login/Login'
import Register from './components/Registration/Register'
import Profile from './Pages/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
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
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/about" element={<AboutUs /> } />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
          </Routes>
          <Footer />
        </div>
      </div>
    </AuthProvider>
  )
}

export default App
