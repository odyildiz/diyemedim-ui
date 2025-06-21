import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [messageType, setMessageType] = useState('');
  const [messageContent, setMessageContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const { t } = useLanguage();

  const messageTypes = [
    { id: 'ter-kokusu', label: 'Ter Kokusunu' },
    { id: 'agiz-kokusu', label: 'Ağız Kokusunu' },
    { id: 'kotu-saka', label: 'Kötü Şakaları' },
    { id: 'bahane-uretilmesi', label: 'Bahane Üretilmesini' },
    { id: 'yuksek-sesle-konusma', label: 'Yüksek Sesle Konuşulmasını' },
    { id: 'mesaja-gec-donulmesi', label: 'Mesajlarıma Geç Dönülmesini' },
    { id: 'gurultulu-yemek-yenmesi', label: 'Gürültülü Yemek Yenmesini' },
    { id: 'unutkanlık', label: 'Unutkanlıkları' },
    { id: 'odaklanamamak', label: 'Odaklanamamaları' },
    { id: 'telefonla-ugrasmak', label: 'Yanımda Telefonla Uğraşılmasını' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');
    
    // Form validation
    if (!email) {
      setFormError('Lütfen e-posta adresinizi giriniz');
      return;
    }
    
    if (!messageType) {
      setFormError('Lütfen mesaj türünü seçiniz');
      return;
    }

    // Submit form logic would go here
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSuccess(t('bother.success'));
      setEmail('');
      setMessageType('');
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">{t('bother.header')}</h2>
      
      {formSuccess && (
        <div className="mb-6 p-3 bg-green-100 text-green-800 rounded-md">
          {formSuccess}
        </div>
      )}
      
      {formError && (
        <div className="mb-6 p-3 bg-red-100 text-red-800 rounded-md">
          {formError}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            {t('bother.email')}
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder={t('placeHolder.email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div>
          <label htmlFor="messageType" className="block text-sm font-medium text-gray-700 mb-1">
            {t('bother.message')}
          </label>
          <select
            id="messageType"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            value={messageType}
            onChange={(e) => {
              setMessageType(e.target.value);
              setMessageContent('');
            }}
          >
            <option value="">Seçiniz</option>
            {messageTypes.map(type => (
              <option key={type.id} value={type.id}>{type.label}</option>
            ))}
          </select>
        </div>
         
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors duration-200"
        >
          {isSubmitting ? (
            <span>{t('bother.sending')}</span>
          ) : (
            <>
              <Send size={18} className="mr-2" />
              <span>{t('bother.send')}</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;