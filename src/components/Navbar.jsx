import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll event to change navbar appearance
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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

        // Close mobile menu after clicking a link
        setMobileMenuOpen(false);
    };

    return (
        <div className={`container mx-auto py-4 px-4 flex items-center justify-between sticky top-0 bg-[#0a0e17]/${scrolled ? '90' : '80'} backdrop-blur-md z-50 border-b border-cyan-500/10 transition-all duration-300 ${scrolled ? 'shadow-lg shadow-cyan-900/10' : ''}`}>
            <a href="#" onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }} className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-600 to-blue-500 flex items-center justify-center shadow-lg">
                    <h1 className="text-white font-bold">DV</h1>
                </div>
                <span className="font-bold text-lg text-white">Deepak's Portfolio</span>
            </a>

            {/* Desktop Navigation */}
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

            {/* Desktop Resume Button */}
            <button className="hidden md:block px-4 py-2 text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-cyan-500/25"
                onClick={() => window.open('https://drive.google.com/file/d/1Ekmk4YHySdfALzmSb6FY2NmhDqcdpWo7/view?usp=sharing', '_blank')}>
                Resume
            </button>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden w-10 h-10 flex items-center justify-center text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-cyan-500/25"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
            </button>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden fixed top-[72px] left-0 right-0 bg-[#0a0e17] border-b border-cyan-500/20 py-4 shadow-lg shadow-cyan-900/10 animate-fade-in">
                    <div className="container mx-auto px-4">
                        <nav className="flex flex-col gap-4">
                            <a href="#" onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                setMobileMenuOpen(false);
                            }} className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2 border-b border-cyan-500/10">
                                Home
                            </a>
                            <a href="#skills" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('skills');
                            }} className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2 border-b border-cyan-500/10">
                                Skills
                            </a>
                            <a href="#projects" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('projects');
                            }} className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2 border-b border-cyan-500/10">
                                Projects
                            </a>
                            <a href="#contact" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('contact');
                            }} className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2 border-b border-cyan-500/10">
                                Contact
                            </a>
                            <button className="w-full mt-2 py-2 px-4 text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-cyan-500/25"
                                onClick={() => {
                                    window.open('https://drive.google.com/file/d/1V0nJ76sEHHoiOHojlPzN2NJAPgpU2Vaf/view?usp=sharing', '_blank');
                                    setMobileMenuOpen(false);
                                }}>
                                View Resume
                            </button>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar