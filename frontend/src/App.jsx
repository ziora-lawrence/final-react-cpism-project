import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/nav/nav.jsx'
import Home from './components/pages/home.jsx'
import Aboutus from './components/pages/aboutus.jsx'
import Tourpackages from './components/pages/tourpackages.jsx'
import Contactus from './components/pages/contactus.jsx'
import Footer from './components/footer/footer.jsx'
const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/tours" element={<Tourpackages />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
