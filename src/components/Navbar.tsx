import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-teal-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to={language === 'en' ? '/en' : '/'} className="text-2xl font-bold tracking-tight hover:text-teal-100 transition transform hover:scale-110 flex items-center">
          <img src="src/assets/logo.png" alt="diyemedim.com logo" className="h-15 w-auto mr-3" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to={language === 'en' ? '/en' : '/'}>{t('nav.home')}</NavLink>
          <NavLink to={language === 'en' ? '/en/blog' : '/blog'}>{t('nav.blog')}</NavLink>
          <button onClick={() => scrollToSection('onerileriniz')}>{t('nav.suggestions')}</button>
          <button onClick={() => scrollToSection('iletisim')}>{t('nav.contact')}</button>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <LanguageSwitcher />
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-teal-600 to-purple-600 border-t border-teal-500">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <MobileNavLink to={language === 'en' ? '/en' : '/'} onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</MobileNavLink>
            <MobileNavLink to={language === 'en' ? '/en/blog' : '/blog'} onClick={() => setIsMenuOpen(false)}>{t('nav.blog')}</MobileNavLink>
            <button 
              className="text-left py-2 font-medium hover:text-teal-100 transition-colors duration-200"
              onClick={() => scrollToSection('onerileriniz')}
            >
              {t('nav.suggestions')}
            </button>
            <button 
              className="text-left py-2 font-medium hover:text-teal-100 transition-colors duration-200"
              onClick={() => scrollToSection('iletisim')}
            >
              {t('nav.contact')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link 
      to={to} 
      className="font-medium hover:text-teal-100 transition-colors duration-200 transform hover:scale-110"
    >
      {children}
    </Link>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, children, onClick }) => {
  return (
    <Link 
      to={to} 
      className="block py-2 font-medium hover:text-teal-100 transition-colors duration-200"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;