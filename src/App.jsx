import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import About from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <Navbar/>
      <Hero/>
      <About/>
      <Contact/>
    </Router>
  )
}

export default App
