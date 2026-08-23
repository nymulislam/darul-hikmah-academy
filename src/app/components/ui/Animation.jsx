"use client";

export const Float = ({ children, className = "" }) => {
  return (
    <div className={`animate-float ${className}`}>
      {children}
    </div>
  );
};

export const BounceSlow = ({ children, className = "" }) => {
  return (
    <div className={`animate-bounce-slow ${className}`}>
      {children}
    </div>
  );
};