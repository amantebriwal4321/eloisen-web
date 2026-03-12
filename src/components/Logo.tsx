import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  hideText?: boolean;
}

export default function Logo({ className = "text-current", width = 160, height = 50, hideText = false }: LogoProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Flame Icon */}
      <svg 
        width={width * 0.25} 
        height={height * 0.6} 
        viewBox="0 0 24 36" 
        fill="currentColor" 
        xmlns="http://www.w3.org/2000/svg"
        className={hideText ? "" : "mb-[-5px]"}
      >
        <path d="M12 0C12 0 4 11 4 20C4 26.6274 9.37258 32 12 32C14.6274 32 20 26.6274 20 20C20 11 12 0 12 0ZM12 28C10.8954 28 8 24.4183 8 20C8 16.5 12 8 12 8C12 8 16 16.5 16 20C16 24.4183 13.1046 28 12 28Z" />
      </svg>
      {/* Eloisen Script Text */}
      {!hideText && (
        <span 
          className="font-serif italic font-medium tracking-wide leading-none"
          style={{ fontSize: `${height * 0.8}px` }}
        >
          Eloisen
        </span>
      )}
    </div>
  );
}
