
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="relative">
        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            {/* Agulha de costura */}
            <path
              d="M12 2L12 22M8 6L16 6M8 10L16 10M8 14L16 14M8 18L16 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="12" cy="4" r="1.5" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-costura-rose rounded-full animate-pulse-soft"></div>
      </div>
      <div className="ml-4">
        <h2 className="text-2xl font-bold text-white">CosturaFácil</h2>
        <p className="text-white/80 text-sm">Moda Praia & Costura</p>
      </div>
    </div>
  );
};

export default Logo;
