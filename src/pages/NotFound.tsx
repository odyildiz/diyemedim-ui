import React from 'react';

const NotFound: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full py-20">
    <h1 className="text-4xl font-bold mb-4">404</h1>
    <p className="text-lg mb-6">Sorry, the page you are looking for does not exist.</p>
    <a href="#/" className="text-blue-500 underline">Go to Home</a>
  </div>
);

export default NotFound;
