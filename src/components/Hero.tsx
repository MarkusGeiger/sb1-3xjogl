import React from 'react';
import { Snowflake, Heart } from 'lucide-react';
import { Snowflakes } from './Decorative';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1543968996-ee822b8176ba?q=80&w=2574')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      <Snowflakes />
      <div className="relative text-center text-white space-y-8 p-8 animate-fadeIn">
        <div className="flex justify-center gap-4 items-center">
          <Snowflake className="w-10 h-10 text-gold-400 animate-spin-slow" />
          <Heart className="w-10 h-10 text-red-600 animate-pulse" />
          <Snowflake className="w-10 h-10 text-gold-400 animate-spin-slow" />
        </div>
        <div className="space-y-6">
          <p className="text-xl font-light tracking-[0.2em] text-gold-400">THE WEDDING OF</p>
          <h1 className="text-7xl font-serif bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent">
            Sarah & Michael
          </h1>
          <p className="text-2xl font-light tracking-[0.3em]">DECEMBER 24, 2024</p>
        </div>
        <div className="h-0.5 w-32 mx-auto bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
        <p className="text-xl font-light tracking-wider">Join us for our winter wonderland wedding celebration</p>
        <button className="mt-8 px-8 py-3 border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-white transition-all duration-300 tracking-wider">
          RSVP NOW
        </button>
      </div>
    </div>
  );
}