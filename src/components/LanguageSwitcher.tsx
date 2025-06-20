import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Languages } from 'lucide-react';
import { useLanguageUrlSwitcher } from '../hooks/useLanguageUrlSwitcher';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const switchLanguageUrl = useLanguageUrlSwitcher();

  const handleSwitch = () => {
    const newLang = language === 'tr' ? 'en' : 'tr';
    setLanguage(newLang);
    switchLanguageUrl(newLang);
  };

  return (
    <div className="relative group">
      <button
        className="flex items-center space-x-1 px-3 py-2 rounded-full bg-teal-600 hover:bg-teal-700 text-white transition-all transform hover:scale-105"
        onClick={handleSwitch}
      >
        <Languages size={18} />
        <span className="uppercase">{language}</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;