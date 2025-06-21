import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ReCAPTCHA from 'react-google-recaptcha';

const RECAPTCHA_SITE_KEY = 'YOUR_RECAPTCHA_SITE_KEY'; // Replace with your actual site key

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [messageType, setMessageType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const { t } = useLanguage();

  const messageTypes = [
    { id: 'ter-kokusu', label: t('contactForm.type.sweat') },
    { id: 'agiz-kokusu', label: t('contactForm.type.breath') },
    { id: 'kotu-saka', label: t('contactForm.type.joke') },
    { id: 'bahane-uretilmesi', label: t('contactForm.type.excuse') },
    { id: 'yuksek-sesle-konusma', label: t('contactForm.type.loud') },
    { id: 'mesaja-gec-donulmesi', label: t('contactForm.type.lateReply') },
    { id: 'gurultulu-yemek-yenmesi', label: t('contactForm.type.noisyEat') },
    { id: 'unutkanlik', label: t('contactForm.type.forgetful') },
    { id: 'odaklanamamak', label: t('contactForm.type.unfocused') },
    { id: 'telefonla-ugrasmak', label: t('contactForm.type.phone') }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');
    
    // Form validation
    if (!email) {
      setFormError(t('contactForm.error.email'));
      return;
    }
    if (!messageType) {
      setFormError(t('contactForm.error.type'));
      return;
    }
    if (!recaptchaToken) {
      setFormError('Lütfen reCAPTCHA doğrulamasını tamamlayın.');
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
      setRecaptchaToken(null);
      if (recaptchaRef.current) recaptchaRef.current.reset();
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
            }}
          >
            <option value="">Seçiniz</option>
            {messageTypes.map(type => (
              <option key={type.id} value={type.id}>{type.label}</option>
            ))}
          </select>
        </div>
        
        <div>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={(token: string | null) => setRecaptchaToken(token)}
          />
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