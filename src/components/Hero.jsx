import React from 'react'
import MyImage from '../assets/image.jpeg'

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="home" className="container mx-auto px-4 py-12 md:py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] bg-[length:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-lg text-cyan-400 font-medium">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Deepak Vishwakarma
            </h1>
          </div>
          <p className="text-lg text-gray-300 max-w-md leading-relaxed">
            Passionate about building innovative web applications that solve real-world problems with modern technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-full overflow-hidden border-4 border-cyan-500 w-64 h-64 md:w-72 md:h-72">
              <img
                src={MyImage}
                alt="My Profile Pic"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero