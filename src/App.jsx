import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'

function App() {

  return (
    <div className='bg-backgroundColor font-Poppins'>
     <NavBar/>
     <Home/>
     <About/>
     <Skills/>
     <Projects/>
    </div>
  )
}

export default App
