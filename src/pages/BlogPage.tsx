import React, { useState } from 'react';
import BlogPostCard from '../components/BlogPostCard';
import { blogPosts } from '../data/blogData';
import { Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const { t } = useLanguage();
  
  // Extract unique categories
  const categories = [...new Set(blogPosts.map(post => post.category))];
  
  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <header className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('blog.title')}</h1>
          <p className="text-lg text-gray-600">
            {t('blog.description')}
          </p>
        </header>
        
        {/* Search and Filter Section */}
        <div className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={t('blog.searchPlaceholder')}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <select
            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">{t('blog.allCategories')}</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-600 text-lg">{t('blog.noResults')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;