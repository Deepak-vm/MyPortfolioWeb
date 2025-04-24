import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Router>
  )
}

export default App
