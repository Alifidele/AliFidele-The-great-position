
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import Assistant from './components/Assistant';
import Contact from './components/Contact';
import { SERVICES, CONTACT_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Services Section */}
        <section id="services" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Complete Digital Assistance Hub</h3>
              <p className="text-gray-600 text-lg">
                We handle the technical complexities while you focus on your growth. 
                Our team specializes in Rwandan administrative portals and international applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        <Assistant />
        
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-gray-800 pb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <i className="fas fa-microchip text-blue-400 text-2xl"></i>
                <span className="font-bold text-xl uppercase tracking-tighter">Alifidele Techlab</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                Your trusted partner for all digital applications and government compliance in Rwanda.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#assistant" className="text-gray-400 hover:text-white transition-colors">AI Assistant</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Official Contacts</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center space-x-3">
                  <i className="fas fa-envelope text-blue-400"></i>
                  <span>{CONTACT_INFO.email}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fas fa-phone text-blue-400"></i>
                  <span>{CONTACT_INFO.phone}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fas fa-map-marker-alt text-blue-400"></i>
                  <span>{CONTACT_INFO.address}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} ALIFIDELE TECHLAB DIGITAL ASSISTANCE. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-white transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-white transition-colors"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="hover:text-white transition-colors"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
