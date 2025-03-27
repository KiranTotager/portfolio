import React from 'react';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <img 
        src="/images/my_image.jpeg" 
        alt="myimage" 
        className="w-40 h-40 rounded-full object-cover border-4 border-gray-700 shadow-lg" 
      />
    </div>
  );
}
