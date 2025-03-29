import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ThemeSwitcher from './components/ThemeSwitcher'
import { BrowserRouter } from 'react-router-dom'
import Program from './components/Program'


function App() {
  return (
    <div className="App ">
        <Navbar />  
        <Footer />
    </div>
    
  )
}

export default App
