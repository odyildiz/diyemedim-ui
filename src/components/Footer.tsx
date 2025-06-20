import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">diyemedim.com</h3>
            <p className="mb-4 text-gray-400">
              Tüm düşüncelerinizi, önerilerinizi ve sorularınızı bize iletebilirsiniz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Ana Sayfa</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/#iletisim" className="text-gray-400 hover:text-white transition-colors">İletişim</Link></li>
              <li><Link to="/#onerileriniz" className="text-gray-400 hover:text-white transition-colors">Önerileriniz</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-teal-400" />
                <span>İstanbul, Türkiye</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-teal-400" />
                <span>+90 555 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-teal-400" />
                <span>info@diyemedim.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Abone Ol</h3>
            <p className="mb-3 text-gray-400">
              Güncel blog yazılarımızdan haberdar olmak için abone olun.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800"
              />
              <button className="bg-teal-600 px-4 py-2 rounded-r-md hover:bg-teal-700 transition-colors">
                Abone Ol
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} diyemedim.com. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;