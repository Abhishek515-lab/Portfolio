import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
   
      <div className="mt-4 space-x-6">
        <Link 
          to="https://github.com/Abhishek515-lab" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-gray-400 transition-colors"
        >
          GitHub
        </Link>
        <Link 
          to="https://www.linkedin.com/in/abhishek-gupta-373029287/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-gray-400 transition-colors"
        >
          LinkedIn
        </Link>
      </div>
    </div>
      <p className="text-center text-sm">&copy; {new Date().getFullYear()} Abhishek Gupta. All Rights Reserved.</p>
  </footer>
  )
}

export default Footer
