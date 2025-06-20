import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import BlogPostCard from '../components/BlogPostCard';
import SuggestionForm from '../components/SuggestionForm';
import ContactInfo from '../components/ContactInfo';
import { blogPosts } from '../data/blogData';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      
      {/* Contact Form Section - Moved to top */}
      <motion.section 
      className="py-16 bg-gradient-to-r from-teal-500 to-purple-500 relative"
      style={{
        backgroundImage: "url('src/assets/background.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      >
      {/* Overlay for opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-bold text-center text-white mb-10 animate-bounce">
          {t('contact.title')}
        </h2>
        <ContactForm />
        </div>
      </div>
      </motion.section>
      
      {/* Blog Posts Section */}
      <motion.section 
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      >
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-pulse">
          {t('homepage.latestPosts')}
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t('homepage.latestPostsDesc')}
        </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(0, 3).map((post, index) => (
          <motion.div
          key={post.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          >
          <BlogPostCard post={post} />
          </motion.div>
        ))}
        </div>
      </div>
      </motion.section>
      
      {/* Suggestions Section */}
      <motion.section 
      id="onerileriniz" 
      className="py-16 bg-gradient-to-r from-purple-500 to-pink-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-bold text-center text-white mb-10 animate-bounce">
          {t('nav.suggestions')}
        </h2>
        <SuggestionForm />
        </div>
      </div>
      </motion.section>
      
      {/* Contact Info Section */}
      <motion.section 
      id="iletisim" 
      className="py-16 bg-gradient-to-r from-teal-500 to-blue-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9 }}
      >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-bold text-center text-white mb-10 animate-bounce">
          {t('nav.contact')}
        </h2>
        <ContactInfo />
        </div>
      </div>
      </motion.section>
    </div>
  );
};

export default HomePage;