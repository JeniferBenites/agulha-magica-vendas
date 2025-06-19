
import React from 'react';

const SewingElements = () => {
  return (
    <>
      {/* Elementos flutuantes de costura */}
      <div className="absolute top-20 left-10 animate-float">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-white/30">
          <path d="M12 2v20M8 6h8M8 10h8M8 14h8M8 18h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="4" r="1.5" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" className="text-white/40">
          <path d="M3 12h18M12 3l9 9-9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" className="text-white/25">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      
      <div className="absolute top-60 right-10 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="w-4 h-4 bg-white/30 rounded-full"></div>
      </div>
      
      <div className="absolute bottom-60 right-40 animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="w-3 h-3 bg-white/40 rounded-full"></div>
      </div>
    </>
  );
};

export default SewingElements;
