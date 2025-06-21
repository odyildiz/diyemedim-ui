import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SuggestionForm: React.FC = () => {
  const [suggestion, setSuggestion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');
    
    // Form validation
    if (!suggestion) {
      setFormError(t('suggestionForm.error.suggestion'));
      return;
    }
    
    if (!email) {
      setFormError(t('suggestionForm.error.email'));
      return;
    }

    // Submit form logic would go here
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSuccess(t('suggestionForm.success'));
      setSuggestion('');
      setName('');
      setEmail('');
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      
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
          <label htmlFor="suggestion" className="block text-sm font-medium text-gray-700 mb-1">
            {t('suggestionForm.title')}
          </label>
          <textarea
            id="suggestion"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder={t('placeHolder.suggestion-text')}
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
          ></textarea>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              {t('suggestionForm.name')}
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder={t('suggestionForm.name')}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              {t('suggestionForm.email')}
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder={t('suggestionForm.email')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
          disabled={isSubmitting}
        >
          <Send size={18} className="mr-2" />
          {isSubmitting ? t('suggestionForm.sending') : t('suggestionForm.send')}
        </button>
      </form>
    </div>
  );
};

export default SuggestionForm;