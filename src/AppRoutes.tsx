import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPostDetail from './pages/BlogPostDetail';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Default Turkish routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogPostDetail />} />
      {/* English routes with /en prefix */}
      <Route path="/en" element={<HomePage />} />
      <Route path="/en/blog" element={<BlogPage />} />
      <Route path="/en/blog/:id" element={<BlogPostDetail />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;