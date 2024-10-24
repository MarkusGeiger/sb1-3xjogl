import React from 'react';

export const Snowflakes = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute animate-snowfall"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 3 + 5}s`
        }}
      >
        ❄
      </div>
    ))}
  </div>
);

export const OrnamentalDivider = () => (
  <div className="flex items-center justify-center gap-4 my-8">
    <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
    <div className="text-gold-400 transform rotate-45">♦</div>
    <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
  </div>
);