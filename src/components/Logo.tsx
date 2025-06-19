
import React from 'react';
import logo from './logo.png';

const Logo = () => {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="relative">
        <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
          <img src={logo} alt="Logo" className="w-16 h-12" />
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

