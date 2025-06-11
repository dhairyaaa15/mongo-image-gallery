import React from 'react';

export const NeumorphismButton = ({ children, onClick, className = "", active = false }) => (
  <button
    onClick={onClick}
    className={`
      px-6 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105
      ${active 
        ? 'bg-gray-200 shadow-inner shadow-gray-300 text-gray-700' 
        : 'bg-gray-100 shadow-lg shadow-gray-300 hover:shadow-xl text-gray-600 hover:text-gray-800'
      }
      ${className}
    `}
  >
    {children}
  </button>
);

export const NeumorphismCard = ({ children, className = "" }) => (
  <div className={`
    bg-gray-100 rounded-3xl p-8 shadow-lg shadow-gray-300 
    hover:shadow-xl transition-all duration-300 transform hover:scale-105
    ${className}
  `}>
    {children}
  </div>
);