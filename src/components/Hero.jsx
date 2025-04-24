import React from 'react'
import MyImage from '../assets/image.png'

function Hero() {
  return (
    <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] bg-[length:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">WELCOME</h1>
            <p className="text-xl text-gray-300 max-w-md">
              I'm Deepak Vishwakarma, a Full-Stack Developer passionate about building innovative web applications that solve real-world
              problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-md flex items-center gap-2 text-lg">
                View My Work
              </button>
              <button
                variant="outline"
                className="border-purple-500 text-white hover:bg-purple-500/20 px-8 py-6 rounded-md text-lg"
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-full overflow-hidden border-4 border-purple-500 w-64 h-64 md:w-80 md:h-80 object-position-left">
              <img 
                src={MyImage} 
                alt="My Profile Pic"
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero