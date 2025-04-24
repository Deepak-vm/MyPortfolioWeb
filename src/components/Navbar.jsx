import React from 'react'

function Navbar() {
    return (
        <div className="bg-black py-2 px-6 border-b border-gray-800">
            <div className="container mx-auto flex items-center justify-between">
                <a href="/" className="text-purple-400 font-bold">
                    DevPortfolio
                </a>

                {/* Navigation Links - Centered in a single line */}
                <nav className="flex items-center gap-4">
                    <a href="/" className="text-white hover:text-purple-400 transition-colors">
                        Home
                    </a>
                    <a href="#skills" className="text-white hover:text-purple-400 transition-colors">
                        Skills
                    </a>
                    <a href="#projects" className="text-white hover:text-purple-400 transition-colors">
                        Projects
                    </a>
                    <a href="#about" className="text-white hover:text-purple-400 transition-colors">
                        About
                    </a>
                    <a href="#contact" className="text-white hover:text-purple-400 transition-colors">
                        Contact
                    </a>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
