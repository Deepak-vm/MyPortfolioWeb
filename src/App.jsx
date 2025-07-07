import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
    </>
  )
}

export default App
