import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#141414]/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        
        {/* Logo*/}
        <a href="#" className="text-xl font-black tracking-wider text-white">
          MOSTAFA
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          <a href="#home" className="hover:text-cyan-400 transition">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="bg-cyan-500 text-black text-xs uppercase tracking-wider px-6 py-2.5 rounded-full font-bold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20"
          >
            LET'S TALK
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-b border-gray-800 px-8 py-6 flex flex-col space-y-4 text-center">
          <a href="#home" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-cyan-400 transition py-2">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-cyan-400 transition py-2">About</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-cyan-400 transition py-2">Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-cyan-400 transition py-2">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="bg-cyan-500 text-black text-sm py-3 rounded-full font-bold">LET'S TALK</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;