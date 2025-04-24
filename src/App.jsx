import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import About from './components/Projects'

function App() {
  return (
    <Router>
      <Navbar/>
      <Hero/>
      <About/>
    </Router>
  )
}

export default App
