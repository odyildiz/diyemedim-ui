import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
    'placeHolder.suggestion-text': 'İçinde kalacağına, önerini Gönder!',
    'blog.title': 'Blog',
    'blog.description': 'Düşüncelerimizi, deneyimlerimizi ve önerilerimizi sizlerle paylaşıyoruz.',
    'blog.searchPlaceholder': 'Blog yazılarında ara...',
    'blog.allCategories': 'Tüm Kategoriler',
    'blog.noResults': 'Aradığınız kriterlere uygun blog yazısı bulunamadı.',
    'blog.backToAll': 'Tüm yazılara dön',
    'blog.tags': 'Etiketler',
    'blog.relatedPosts': 'İlgili Yazılar',
    'notfound.title': '404',
    'notfound.description': 'Üzgünüz, aradığınız sayfa bulunamadı.',
    'notfound.home': 'Ana Sayfaya Dön',
    'contactForm.type.sweat': 'Ter Kokusunu',
    'contactForm.type.breath': 'Ağız Kokusunu',
    'contactForm.type.joke': 'Kötü Şakaları',
    'contactForm.type.excuse': 'Bahane Üretilmesini',
    'contactForm.type.loud': 'Yüksek Sesle Konuşulmasını',
    'contactForm.type.lateReply': 'Mesajlarıma Geç Dönülmesini',
    'contactForm.type.noisyEat': 'Gürültülü Yemek Yenmesini',
    'contactForm.type.forgetful': 'Unutkanlıkları',
    'contactForm.type.unfocused': 'Odaklanamamalarını',
    'contactForm.type.phone': 'Yanımda Telefonla Uğraşılmasını',
    'contactForm.error.email': 'Lütfen e-posta adresinizi giriniz',
    'contactForm.error.type': 'Lütfen mesaj türünü seçiniz',
    'suggestionForm.error.suggestion': 'Lütfen önerinizi yazınız',
    'suggestionForm.error.email': 'Lütfen e-posta adresinizi giriniz',
    'contactInfo.title': 'Bize de yazın',
    'contactInfo.location': 'Dünyada bir yerdeyiz',
    'contactInfo.social': 'Sosyal Medya',
    'footer.desc': 'Tüm düşüncelerinizi, önerilerinizi ve sorularınızı bize iletebilirsiniz.',
    'footer.quickLinks': 'Hızlı Linkler',
    'footer.contact': 'İletişim',
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
    'placeHolder.suggestion-text': 'Instead of bottling it up, Send your suggestion!',
    'blog.title': 'Blog',
    'blog.description': 'We share our thoughts, experiences, and suggestions with you.',
    'blog.searchPlaceholder': 'Search blog posts...',
    'blog.allCategories': 'All Categories',
    'blog.noResults': 'No blog posts found matching your criteria.',
    'blog.backToAll': 'Back to all posts',
    'blog.tags': 'Tags',
    'blog.relatedPosts': 'Related Posts',
    'notfound.title': '404',
    'notfound.description': 'Sorry, the page you are looking for does not exist.',
    'notfound.home': 'Go to Home',
    'contactForm.type.sweat': 'Body Odor',
    'contactForm.type.breath': 'Bad Breath',
    'contactForm.type.joke': 'Bad Jokes',
    'contactForm.type.excuse': 'Making Excuses',
    'contactForm.type.loud': 'Speaking Loudly',
    'contactForm.type.lateReply': 'Late Replies to My Messages',
    'contactForm.type.noisyEat': 'Noisy Eating',
    'contactForm.type.forgetful': 'Forgetfulness',
    'contactForm.type.unfocused': 'Lack of Focus',
    'contactForm.type.phone': 'Using the Phone Next to Me',
    'contactForm.error.email': 'Please enter your email address',
    'contactForm.error.type': 'Please select a message type',
    'suggestionForm.error.suggestion': 'Please enter your suggestion',
    'suggestionForm.error.email': 'Please enter your email address',
    'contactInfo.title': 'Write to Us',
    'contactInfo.location': 'Somewhere in the world',
    'contactInfo.social': 'Social Media',
    'footer.desc': 'You can send us all your thoughts, suggestions, and questions.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  // Determine initial language from URL
  const getLangFromPath = (pathname: string): Language => {
    return pathname.startsWith('/en') ? 'en' : 'tr';
  };
  const [language, setLanguageState] = useState<Language>(getLangFromPath(location.pathname));

  // Update language state when URL changes
  useEffect(() => {
    const urlLang = getLangFromPath(location.pathname);
    if (urlLang !== language) {
      setLanguageState(urlLang);
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  // Update URL when language changes via setLanguage
  const setLanguage = (lang: Language) => {
    if (lang === language) return;
    let newPath = location.pathname;
    if (lang === 'en') {
      if (!newPath.startsWith('/en')) {
        newPath = '/en' + (newPath === '/' ? '' : newPath);
      }
    } else {
      if (newPath.startsWith('/en')) {
        newPath = newPath.replace(/^\/en/, '') || '/';
      }
    }
    navigate(newPath + location.search, { replace: true });
    setLanguageState(lang);
  };

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