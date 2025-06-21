import React from 'react'

function Navbar() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // Add a small delay to ensure DOM is fully processed
            setTimeout(() => {
                const yOffset = -80; // Add some offset to account for fixed navbar if needed
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({
                    top: y,
                    behavior: 'smooth'
                });
            }, 100);
        }
    };

    return (
        <div className="container mx-auto py-4 px-4 flex items-center justify-between sticky top-0 bg-[#0a0e17]/80 backdrop-blur-md z-50 border-b border-cyan-500/10">
            <a href="#" onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }} className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-600 to-blue-500 flex items-center justify-center shadow-lg">
                    <h1 className="text-white font-bold">DV</h1>
                </div>
                <span className="font-bold text-lg text-white">Deepak's Portfolio</span>
            </a>
            <nav className="hidden md:flex items-center gap-6">
                <a href="#" onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }} className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                    Home
                </a>
                <a href="#skills" onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('skills');
                }} className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                    Skills
                </a>
                <a href="#projects" onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('projects');
                }} className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                    Projects
                </a>
                <a href="#contact" onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                }} className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                    Contact
                </a>
            </nav>
            <button className="px-4 py-2 text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-cyan-500/25" onClick={() => window.open('https://drive.google.com/file/d/1V0nJ76sEHHoiOHojlPzN2NJAPgpU2Vaf/view?usp=sharing', '_blank')}>
                Resume
            </button>
        </div>
    )
}

export default Navbar