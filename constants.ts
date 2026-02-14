
import { Service, ContactInfo } from './types';

export const CONTACT_INFO: ContactInfo = {
  email: 'alifideleirihagije@gmail.com',
  phone: '0785753125',
  whatsapp: '+250785753125',
  address: 'Kigali, Rwanda'
};

export const SERVICES: Service[] = [
  {
    id: 'academic-apply',
    title: 'Academic Applications',
    description: 'Assistance for students applying to local and international universities, schools, and scholarship programs.',
    icon: 'fa-graduation-cap',
    category: 'Education'
  },
  {
    id: 'job-apply',
    title: 'Job Seekers Support',
    description: 'CV writing, cover letter optimization, and applying for vacancies on various job portals.',
    icon: 'fa-briefcase',
    category: 'Career'
  },
  {
    id: 'rra-services',
    title: 'RRA Services',
    description: 'Expert help with Rwanda Revenue Authority services including E-Tax filing, RRA portal navigation, and tax clearance.',
    icon: 'fa-file-invoice-dollar',
    category: 'Government'
  },
  {
    id: 'rura-services',
    title: 'RURA Services',
    description: 'Assistance with RURA permits, licensing, and compliance for transport, energy, and ICT sectors.',
    icon: 'fa-tower-broadcast',
    category: 'Government'
  },
  {
    id: 'rdb-services',
    title: 'RDB Services',
    description: 'Business registration, investment permits, and tourism-related services through the Rwanda Development Board.',
    icon: 'fa-building',
    category: 'Business'
  },
  {
    id: 'irembo-services',
    title: 'Irembo Assistance',
    description: 'Helping citizens access various government services like ID application, driving license, and birth certificates.',
    icon: 'fa-landmark',
    category: 'Government'
  }
];
