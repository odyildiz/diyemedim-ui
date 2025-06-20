import React, { useState } from 'react';
import { Send } from 'lucide-react';

const SuggestionForm: React.FC = () => {
  const [suggestion, setSuggestion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');
    
    // Form validation
    if (!suggestion) {
      setFormError('Lütfen önerinizi yazınız');
      return;
    }
    
    if (!email) {
      setFormError('Lütfen e-posta adresinizi giriniz');
      return;
    }

    // Submit form logic would go here
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSuccess('Öneriniz başarıyla gönderildi. Katkınız için teşekkür ederiz!');
      setSuggestion('');
      setName('');
      setEmail('');
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Önerileriniz</h2>
      
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
            Öneriniz
          </label>
          <textarea
            id="suggestion"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="Önerinizi buraya yazınız..."
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
          ></textarea>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Adınız (İsteğe Bağlı)
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Adınız"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="suggestionEmail" className="block text-sm font-medium text-gray-700 mb-1">
              E-Posta Adresi
            </label>
            <input
              type="email"
              id="suggestionEmail"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="ornek@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors duration-200"
        >
          {isSubmitting ? (
            <span>Gönderiliyor...</span>
          ) : (
            <>
              <Send size={18} className="mr-2" />
              <span>Gönder</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default SuggestionForm;