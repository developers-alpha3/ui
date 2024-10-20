import React from 'react';

const LoadingLine = () => {
  return (
    <div className='fixed top-16 left-0 right-0 h-1 bg-blue-100 overflow-hidden z-50 transition-all duration-500 ease-in-out'>
      <div className='w-full h-full bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 animate-loading-smooth'></div>
    </div>
  );
};

export default LoadingLine;
