import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.blog': 'Blog',
    'nav.contact': 'İletişim',
    'nav.suggestions': 'Önerileriniz',
    'contact.title': 'İçinde Kalacağına',
    'contact.email': 'E-Posta Adresi',
    'contact.message': 'Gönderilecek Mesaj',
    'contact.content': 'Mesaj İçeriği',
    'contact.send': 'Gönder',
    'homepage.latestPosts': 'Son Blog Yazıları',
    'homepage.latestPostsDesc': 'En son eklenen blog yazılarımızı keşfedin. Düşüncelerimizi, deneyimlerimizi ve önerilerimizi sizlerle paylaşıyoruz.',
    // Add more translations as needed
  },
  en: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.suggestions': 'Suggestions',
    'contact.title': 'Don’t bottle it up',
    'contact.email': 'Email Address',
    'contact.message': 'Message Type',
    'contact.content': 'Message Content',
    'contact.send': 'Send',
    'homepage.latestPosts': 'Latest Blog Posts',
    'homepage.latestPostsDesc': 'Discover our latest blog posts. We share our thoughts, experiences, and suggestions with you.',
    // Add more translations as needed
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.tr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};