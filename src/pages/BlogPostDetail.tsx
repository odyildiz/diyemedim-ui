import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { ArrowLeft, Clock, User, Tag, Calendar } from 'lucide-react';
import BlogPostCard from '../components/BlogPostCard';
import { useLanguage } from '../contexts/LanguageContext';

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const post = blogPosts.find(post => post.id === id);
  if (!post) {
    return <Navigate to="/blog" />;
  }
  return (
    <div className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back to blog link */}
          <Link 
            to="/blog" 
            className="inline-flex items-center text-teal-600 hover:text-teal-800 transition-colors mb-8"
          >
            <ArrowLeft size={16} className="mr-2" />
            <span>{t('blog.backToAll')}</span>
          </Link>
          {/* Featured image */}
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Post header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <Tag size={16} className="mr-1" />
                <span>{post.category}</span>
              </div>
            </div>
          </header>
          {/* Post content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-600 mb-8">{post.excerpt}</p>
            {post.content.split('\n\n').map((paragraph, index) => {
              // Handle headers (lines starting with #)
              if (paragraph.startsWith('# ')) {
                return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{paragraph.slice(2)}</h1>;
              }
              if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{paragraph.slice(3)}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-bold mt-5 mb-2">{paragraph.slice(4)}</h3>;
              }
              if (paragraph.includes('\n- ')) {
                const [listTitle, ...listItems] = paragraph.split('\n- ');
                return (
                  <div key={index}>
                    {listTitle && <p className="mb-2">{listTitle}</p>}
                    <ul className="list-disc pl-6 mb-4">
                      {listItems.map((item, itemIndex) => (
                        <li key={itemIndex} className="mb-1">{item}</li>
                      ))}
                    </ul>
                  </div>
                );
              }
              if (paragraph.includes('\n1. ')) {
                const [listTitle, ...listItems] = paragraph.split('\n');
                return (
                  <div key={index}>
                    {listTitle && <p className="mb-2">{listTitle}</p>}
                    <ol className="list-decimal pl-6 mb-4">
                      {listItems.map((item, itemIndex) => (
                        <li key={itemIndex} className="mb-1">{item.slice(3)}</li>
                      ))}
                    </ol>
                  </div>
                );
              }
              return <p key={index} className="mb-4">{paragraph}</p>;
            })}
          </div>
          {/* Tags */}
          <div className="mb-12">
            <h3 className="text-lg font-medium text-gray-700 mb-3">{t('blog.tags')}</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* Related posts */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('blog.relatedPosts')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts
                .filter(relatedPost => 
                  relatedPost.id !== post.id && 
                  (relatedPost.category === post.category || 
                   relatedPost.tags.some(tag => post.tags.includes(tag)))
                )
                .slice(0, 3)
                .map(relatedPost => (
                  <BlogPostCard key={relatedPost.id} post={relatedPost} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;