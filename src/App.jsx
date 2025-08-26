import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'

function App() {

  return (
    <div className=' bg-backgroundColor font-Poppins'>
     <NavBar/>
     <Home/>
    </div>
  )
}

export default App
