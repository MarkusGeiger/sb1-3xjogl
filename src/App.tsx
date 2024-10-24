import React from 'react';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import Map from './components/Map';
import RSVP from './components/RSVP';
import { OrnamentalDivider } from './components/Decorative';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <EventDetails />
      <div className="bg-gradient-to-b from-red-950 to-red-900 py-24 text-center px-6">
        <h2 className="text-5xl font-serif text-gold-400">Our Story</h2>
        <OrnamentalDivider />
        <p className="max-w-2xl mx-auto text-red-100 leading-relaxed font-light tracking-wide">
          We met on a snowy December evening at the local Christmas market. 
          The twinkling lights, the smell of mulled wine, and the gentle fall of snowflakes 
          created the perfect backdrop for the beginning of our love story. 
          Two years later, here we are, ready to begin our forever together 
          during our favorite season.
        </p>
      </div>
      <Map />
      <RSVP />
      <footer className="bg-emerald-950 text-emerald-200 py-12 text-center">
        <p className="text-sm tracking-[0.3em] text-gold-400">#SarahAndMichael2024</p>
      </footer>
    </div>
  );
}

export default App;