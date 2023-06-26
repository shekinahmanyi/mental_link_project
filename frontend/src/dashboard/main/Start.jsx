import React from 'react'
import { FaLink} from "react-icons/fa";

function Start() {
  return (
   
     <nav className="navbar mb-2 shadow-lg bg-white text-neutral-content fixed top-0 inset-x-0 z-50">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="px-2 text-2xl mb-6 mt-6">
          <span className="text-green-500 tracking-tight">
            Mental<span className="text-gray-800">Link </span>
            <FaLink className="inline pr-2 md:inline-block text-3xl" />
          </span>
        </div>
        </div>
        </nav>
  )
}

export default Start
