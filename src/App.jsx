import React from 'react'
import ParticlesComponent from './components/ParticleBg'
import Navbar from './components/Navbar'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'



const App = () => {
  return (
    <>
      <ParticlesComponent id="particlebg"/>
      <Navbar />

      <section id='about'>
      <About />
      </section>
    
      <section id='projects'>
      <Projects />
      </section>

      <section id='contact'>
      <Contact />
      </section>
    

    </>
  )
}

export default App
