import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import About from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar/>
      <Hero/>
      <About/>
      <Contact/>
      <Footer/>
    </Router>
  )
}

export default App
