import React from 'react';
import { Clock, MapPin, GlassWater } from 'lucide-react';
import { OrnamentalDivider } from './Decorative';

export default function EventDetails() {
  return (
    <div className="bg-gradient-to-b from-emerald-950 to-emerald-900 text-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-serif text-center text-gold-400">The Celebration</h2>
        <OrnamentalDivider />
        <div className="grid md:grid-cols-3 gap-12 mt-16">
          {[
            {
              icon: <Clock className="w-10 h-10" />,
              title: "Ceremony",
              time: "4:00 PM",
              details: "Doors open at 3:30 PM"
            },
            {
              icon: <MapPin className="w-10 h-10" />,
              title: "Venue",
              time: "Winter Palace",
              details: "123 Snowflake Lane"
            },
            {
              icon: <GlassWater className="w-10 h-10" />,
              title: "Reception",
              time: "5:30 PM",
              details: "Dinner & Dancing"
            }
          ].map((item, index) => (
            <div key={index} className="text-center space-y-4 p-8 rounded-lg bg-emerald-950/50 backdrop-blur-sm hover:transform hover:-translate-y-1 transition-all duration-300">
              <div className="text-gold-400 mx-auto w-16 h-16 flex items-center justify-center border-2 border-gold-400 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif">{item.title}</h3>
              <p className="text-gold-400 font-light">{item.time}</p>
              <p className="text-sm text-emerald-200">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}