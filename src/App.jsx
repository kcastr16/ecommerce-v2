import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import Contact from './pages/Contact';



function App() {

  return (
    <>
    <main className='background'>
      <Navbar />
      <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/vehicles' element={<Vehicles />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
      </div>
    </main>
    </>
  )
}

export default App
