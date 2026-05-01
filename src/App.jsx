import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Home.jsx";
import About from "./components/About.jsx";
import SignatureBrews from "./components/SignatureBrews.jsx";
import WhyChooseUs from "./components/WhyChoose.jsx";
import BookingSection from "./components/BookingSection.jsx";
import Gallery from "./components/Gallery.jsx";
import Footer from "./components/Footer.jsx";
import EventPopup from "./components/EventPopUp.jsx";

function App() {


  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <SignatureBrews />
        <WhyChooseUs />
        <BookingSection />
        <Gallery />
        <Footer />
        <EventPopup />

    </>
  )
}

export default App
