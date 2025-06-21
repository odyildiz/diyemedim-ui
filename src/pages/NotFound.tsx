import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const NotFound: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col items-center justify-center h-full py-20">
      <h1 className="text-4xl font-bold mb-4">{t('notfound.title')}</h1>
      <p className="text-lg mb-6">{t('notfound.description')}</p>
      <a href="#/" className="text-blue-500 underline">{t('notfound.home')}</a>
    </div>
  );
};

export default NotFound;
