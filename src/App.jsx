import React from "react"
import Home from "./pages/Home"
import Navbar from "./layout/Navbar"
import About from "./pages/About"
import Skills from "./pages/Skills"
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div>
      <AnimatedCursor innerSize={20} color='39, 217, 186' />
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
    </div>
    
  )
}

export default App