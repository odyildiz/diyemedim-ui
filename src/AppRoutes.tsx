import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostDetail = lazy(() => import('./pages/BlogPostDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-200"></div>
      </div>
    }>
      <Routes>
        {/* English routes */}
        <Route path="/en" element={<Navigate to="/en/" replace />} />
        <Route path="/en/" element={<HomePage />} />
        <Route path="/en/blog" element={<BlogPage />} />
        <Route path="/en/blog/:id" element={<BlogPostDetail />} />
        {/* Turkish routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostDetail />} />
        {/* Not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;