import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Söyleyemediklerinizi <span className="text-teal-200">Bize Söyleyin</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-teal-50">
            Diyemediklerinizi, paylaşamadıklarınızı, sormaya çekindiğiniz her şeyi 
            diyemedim.com'da güvenle paylaşabilirsiniz. Sizin sesiniz olmak için buradayız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#iletisim"
              className="px-6 py-3 bg-white text-teal-700 font-medium rounded-md hover:bg-teal-50 transition-colors duration-200 shadow-md"
            >
              Hemen İletişime Geç
            </a>
            <a 
              href="/blog"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors duration-200"
            >
              Blog Yazılarımızı Keşfet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;