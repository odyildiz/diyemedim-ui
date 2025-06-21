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
    'bother.title': 'İçinde Kalacağına',
    'bother.header': 'Gönder gitsin!',
    'bother.email': 'E-Posta Adresi',
    'bother.message': 'Neyi içinde tutuyorsun?',
    'bother.content': 'Mesaj İçeriği',
    'bother.send': 'Gönder',
    'bother.sending': 'Gönderiliyor...',
    'bother.success': 'Mesajınız başarıyla gönderildi. Çaktırmadan arkadaşınızı yoklayın, bakalım maili almış mı?',
    'homepage.latestPosts': 'Son Blog Yazıları',
    'homepage.latestPostsDesc': 'En son eklenen blog yazılarımızı keşfedin. Düşüncelerimizi, deneyimlerimizi ve önerilerimizi sizlerle paylaşıyoruz.',
    'suggestionForm.title': 'Önerileriniz',
    'suggestionForm.email': 'E-Posta Adresi',
    'suggestionForm.name': 'Adınız (İsteğe Bağlı)',
    'suggestionForm.send': 'Gönder',
    'suggestionForm.sending': 'Gönderiliyor...',
    'suggestionForm.success': 'Öneriniz başarıyla gönderildi. Katkınız için teşekkür ederiz!',
    'placeHolder.email': 'ornek@email.com',
    'placeHolder.name': 'Adınız',
    'placeHolder.suggestion-text': 'İçinde kalacağına, önerini Gönder!'
    // Add more translations as needed
  },
  en: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.suggestions': 'Suggestions',
    'bother.title': 'Don’t bottle it up',
    'bother.header': 'Just hit Send and pray for the best!',
    'bother.email': 'Email Address',
    'bother.message': 'What do you keep inside?',
    'bother.content': 'Message Content',
    'bother.send': 'Send',
    'bother.sending': 'Sending...',
    'bother.success': 'Your message has been successfully sent. Check with your friend to see if they received the email without raising suspicion.',
    'homepage.latestPosts': 'Latest Blog Posts',
    'homepage.latestPostsDesc': 'Discover our latest blog posts. We share our thoughts, experiences, and suggestions with you.',
    'suggestionForm.title': 'Your Suggestions',
    'suggestionForm.email': 'Email Address',
    'suggestionForm.name': 'Your Name (Optional)',
    'suggestionForm.send': 'Send',
    'suggestionForm.sending': 'Sending...',
    'suggestionForm.success': 'Your suggestion has been successfully sent. Thank you for your contribution!',
    'placeHolder.email': 'example@email.com',
    'placeHolder.name': 'Your Name',
    'placeHolder.suggestion-text': 'Instead of bottling it up, Send your suggestion!'
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