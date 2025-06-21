import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { div } from 'framer-motion/client';
import dunyaImage from '../assets/our-home.webp';
import { useLanguage } from '../contexts/LanguageContext';

const ContactInfo: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">{t('contactInfo.title')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-4">
            
            <div className="flex items-start">
              <MapPin className="text-teal-600 mt-1 mr-3" size={20} />
              <div>
                <p className="text-gray-800">{t('contactInfo.location')}</p>
              </div>
            </div>
          
            
            <div className="flex items-center">
              <Mail className="text-teal-600 mr-3" size={20} />
              <p className="text-gray-800">info@diyemedim.com</p>
            </div>
            
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">{t('contactInfo.social')}</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-teal-600 hover:text-teal-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="text-teal-600 hover:text-teal-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className="text-teal-600 hover:text-teal-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="text-teal-600 hover:text-teal-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden items-center-safe">
          <img
            src={dunyaImage}
            alt="Dünya Haritası"
            className="w-[250px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;