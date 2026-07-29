import Image from 'next/image';
import React from 'react';

export interface LogoProps {
  layout?: 'horizontal' | 'vertical';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | "xxl" | "xxxl";
}

const sizeClasses = {
  sm: { icon: 'w-8 h-8', text: 'text-lg' },
  md: { icon: 'w-10 h-10', text: 'text-xl' },
  lg: { icon: 'w-12 h-12', text: 'text-2xl' },
  xl: { icon: 'w-16 h-16', text: 'text-4xl' },
  xxl: { icon: 'w-20 h-20', text: 'text-5xl' },
  xxxl: { icon: 'w-24 h-24', text: 'text-6xl' },
};

export const Logo = ({ layout = 'horizontal', className = '', size = 'md' }: LogoProps) => {
  const textName = 'الحصة';
  const sizes = sizeClasses[size];

  return (
    <div
      className={`flex items-center gap-3 ${
        layout === 'vertical' ? 'flex-col text-center' : 'flex-row'
      } ${className} group cursor-pointer`}
    >
      <style>
        {`
          @keyframes text-shimmer {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-text-shimmer {
            background-size: 200% auto;
            animation: text-shimmer 4s ease infinite;
          }
        `}
      </style>
      <div className="relative overflow-hidden rounded-full transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-[#4338CA]/20 bg-white">
        <Image 
          src="/logo.jpg" 
          alt="El7essa Logo" 
          width={100}
          height={100}
          className={`${sizes.icon} object-contain relative z-10`} 
        />
      </div>
      <span 
        className={`font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#4338CA] to-[#D4AF37] animate-text-shimmer drop-shadow-sm ${sizes.text}`}
      >
        {textName}
      </span>
    </div>
  );
};
