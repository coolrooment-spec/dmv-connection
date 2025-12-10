import React from 'react';

interface BaseProps {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}

// Combine types to allow both button and anchor attributes loosely for flexibility
type ButtonProps = BaseProps & (React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>);

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '', 
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 text-base font-bold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer transform active:scale-95";
  
  const variants = {
    primary: "text-white bg-brand-teal hover:bg-brand-tealLight shadow-lg shadow-brand-teal/30 focus:ring-brand-teal border border-transparent",
    secondary: "text-white bg-brand-navy hover:bg-brand-navyLight shadow-lg shadow-brand-navy/30 focus:ring-brand-navy border border-transparent",
    outline: "text-brand-teal bg-transparent border-2 border-brand-teal hover:bg-brand-teal/5 focus:ring-brand-teal"
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const combinedClassName = `${baseStyles} ${variants[variant]} ${widthStyle} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClassName} 
        {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={combinedClassName} 
      {...props as React.ButtonHTMLAttributes<HTMLButtonElement>}
    >
      {children}
    </button>
  );
};
