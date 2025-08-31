import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Certification from './Components/Certification'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <div className='bg-backgroundColor font-Poppins'>
     <NavBar/>
     <Home/>
     <About/>
     <Skills/>
     <Projects/>
     <Certification/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
