import React from 'react'
import { Code } from 'lucide-react' // Assuming you're using lucide-react for the icon

function Footer() {
  return (
    <div className="bg-[#0d1219] px-20 py-5 border-t border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Deepak. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm mt-4 justify-center">
            <span>Made with</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24"
              viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-heart w-4 h-4 text-red-500 animate-pulse"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            <span>
              by <a href="https://github.com/deepak-vm" className="underline hover:text-white">Deepak</a>
            </span>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Footer
