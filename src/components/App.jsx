import React from 'react'

import Navbar from "./Navbar";
import Footer from "./Footer";
import SiteBackground from "./SiteBackground";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Achievements from "./sections/Achievements";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-futuristic text-white font-sans selection:bg-accent-lavender selection:text-white">
      <SiteBackground />
      <Navbar />
      
      <main className="relative z-10 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
