import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Feature from './components/Feature'
import Service from './components/Service'
import Explore from './components/Explore'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
   
    <Feature/>
    <Service/>
    <Explore/>
   
    </>
  )
}

export default App
