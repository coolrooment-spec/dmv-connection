import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'colored' | 'white';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = "h-12 w-auto", variant = 'colored' }) => {
  const navyColor = variant === 'white' ? '#FFFFFF' : '#0E2A47';
  const tealColor = variant === 'white' ? '#FFFFFF' : '#1D7F67';
  const textColorNavy = variant === 'white' ? '#FFFFFF' : '#0E2A47';
  const textColorTeal = variant === 'white' ? '#FFFFFF' : '#1D7F67';
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto aspect-square">
        {/* Top Half Navy */}
        <path d="M50 5 C74.85 5 95 25.15 95 50 H5 C5 25.15 25.15 5 50 5Z" fill={navyColor} />
        
        {/* Bottom Half Teal */}
        <path d="M50 95 C25.15 95 5 74.85 5 50 H95 C95 74.85 74.85 95 50 95Z" fill={tealColor} />
        
        {/* Bridge Suspension Lines */}
        <path d="M20 50 Q35 25 50 50" stroke="white" strokeWidth="2.5" fill="none" />
        <path d="M50 50 Q65 25 80 50" stroke="white" strokeWidth="2.5" fill="none" />
        
        {/* Vertical Supports */}
        <path d="M35 50 V38" stroke="white" strokeWidth="2" />
        <path d="M65 50 V38" stroke="white" strokeWidth="2" />
        <path d="M50 50 V30" stroke="white" strokeWidth="2" />
        
        {/* Bridge Deck Line */}
        <path d="M5 50 H95" stroke="white" strokeWidth="3" />
        
        {/* Bottom Supports (Trapezoids) */}
        <path d="M25 62 L32 52 H38 L45 62 H25Z" fill="white" />
        <path d="M55 62 L62 52 H68 L75 62 H55Z" fill="white" />
      </svg>
      
      {/* Text */}
      <div className="flex flex-col justify-center leading-none">
        <span className="font-bold text-2xl tracking-tight" style={{ color: textColorNavy }}>dmv</span>
        <span className="font-bold text-2xl tracking-tight -mt-1" style={{ color: textColorTeal }}>connection</span>
      </div>
    </div>
  );
};
