
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Professional Digital Solutions</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            ALIFIDELE TECHLAB <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              DIGITAL ASSISTANCE
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10">
            Expert assistance for all your academic, career, and government service needs in Rwanda. 
            From RRA taxes to RDB business registration, we bridge the digital gap for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all">
              Explore Our Services
            </a>
            <a href="#assistant" className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all">
              Talk to AI Assistant
            </a>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
           <div className="flex flex-col items-center">
             <span className="text-2xl font-bold">RRA</span>
             <span className="text-xs">Authorized Support</span>
           </div>
           <div className="flex flex-col items-center">
             <span className="text-2xl font-bold">RDB</span>
             <span className="text-xs">Business Hub</span>
           </div>
           <div className="flex flex-col items-center">
             <span className="text-2xl font-bold">RURA</span>
             <span className="text-xs">Compliance</span>
           </div>
           <div className="flex flex-col items-center">
             <span className="text-2xl font-bold">IREMBO</span>
             <span className="text-xs">E-Gov Services</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
