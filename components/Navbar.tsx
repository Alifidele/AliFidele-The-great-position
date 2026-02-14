
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-morphism shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <i className="fas fa-microchip text-white text-xl"></i>
            </div>
            <span className="font-bold text-xl tracking-tight text-blue-900 hidden sm:block">
              ALIFIDELE TECHLAB
            </span>
            <span className="font-bold text-lg tracking-tight text-blue-900 sm:hidden">
              ALIFIDELE
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</a>
            <a href="#assistant" className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md">
              AI Assistant
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2 focus:outline-none">
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 animate-fade-in-down">
          <a href="#home" onClick={() => setIsOpen(false)} className="block text-gray-600 font-medium">Home</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block text-gray-600 font-medium">Services</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-gray-600 font-medium">Contact</a>
          <a href="#assistant" onClick={() => setIsOpen(false)} className="block bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-center">
            AI Assistant
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
