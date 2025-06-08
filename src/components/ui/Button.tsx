import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'success';
}

const Button: React.FC<ButtonProps> = ({ 
  onClick, 
  children, 
  className = '', 
  variant = 'primary' 
}) => {
  const baseStyles = "px-4 py-2 rounded font-medium transition-colors";
  
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600", 
    success: "bg-green-500 text-white hover:bg-green-600"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;