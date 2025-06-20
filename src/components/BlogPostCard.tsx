import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
  readTime: string;
}

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const { language } = useLanguage();
  const blogLink = language === 'en' ? `/en/blog/${post.id}` : `/blog/${post.id}`;
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center text-sm text-gray-500 mb-3 gap-4">
          <div className="flex items-center">
            <User size={16} className="mr-1" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">{post.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{post.date}</span>
          <Link 
            to={blogLink}
            className="inline-block px-3 py-1 bg-teal-600 text-white text-sm font-medium rounded hover:bg-teal-700 transition-colors duration-200"
          >
            Devamını Oku
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;