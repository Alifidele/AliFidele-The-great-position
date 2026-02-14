
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'Education' | 'Career' | 'Government' | 'Business';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
}
