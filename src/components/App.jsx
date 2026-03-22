import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Certifications from './components/sections/Certifications'
import Achievements from './components/sections/Achievements'
import Resume from './components/sections/Resume'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-futuristic text-white font-sans overflow-x-hidden selection:bg-accent-lavender selection:text-white">
      <Navbar />
      
      <main className="w-full relative">
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
