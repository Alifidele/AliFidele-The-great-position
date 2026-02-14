
import React from 'react';
import { Service } from '../types';

interface Props {
  service: Service;
}

const ServiceCard: React.FC<Props> = ({ service }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all group">
      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
        <i className={`fas ${service.icon} text-2xl text-blue-600 group-hover:text-white`}></i>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
      <div className="flex items-center text-blue-600 font-semibold cursor-pointer">
        Learn More <i className="fas fa-arrow-right ml-2 text-sm"></i>
      </div>
    </div>
  );
};

export default ServiceCard;
