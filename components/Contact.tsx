
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Get In Touch</h2>
            <h3 className="text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
              Ready to take the <br /> next step?
            </h3>
            <p className="text-lg text-gray-600 mb-10">
              We are available 24/7 for urgent consultations. Reach out to us directly via phone or visit our office.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Us</h4>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-phone-alt text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Call/WhatsApp</h4>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Location</h4>
                  <p className="text-gray-600">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 sm:p-12 rounded-3xl shadow-xl shadow-gray-200/50">
            <h4 className="text-2xl font-bold mb-6 text-gray-900">Quick Inquiry Form</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="bg-white w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition-all" />
                <input type="email" placeholder="Email Address" className="bg-white w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition-all" />
              </div>
              <input type="text" placeholder="Subject (e.g., RRA Help)" className="bg-white w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition-all" />
              <textarea placeholder="Tell us how we can assist you..." rows={4} className="bg-white w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition-all resize-none"></textarea>
              <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
