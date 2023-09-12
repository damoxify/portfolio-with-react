import React from "react"
import Home from "./pages/Home"
import Navbar from "./layout/Navbar"
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div>
      <AnimatedCursor innerSize={20} color='39, 217, 186' />
      <Navbar/>
      <Home/>
    </div>
    
  )
}

export default App