import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div className="container mx-auto py-6 px-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center">
                    <h1>DV</h1>
                </div>
                <span className="font-bold text-xl">Deepak's Portfolio</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Home
                </Link>
                <Link href="#skills" className="text-gray-300 hover:text-white transition-colors">
                    Skills
                </Link>
                <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
                    Projects
                </Link>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                    About
                </Link>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                </Link>
            </nav>
            <button className="px-4 py-2 text-white border border-purple-500 rounded-md hover:bg-purple-500/20 transition-colors " onClick={() => window.open('https://drive.google.com/file/d/1V0nJ76sEHHoiOHojlPzN2NJAPgpU2Vaf/view?usp=sharing', '_blank')}>
                Resume
            </button>

        </div>
    )
}

export default Navbar
