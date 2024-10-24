import React from 'react';
import { MapPin, Cake, UtensilsCrossed } from 'lucide-react';

export default function Map() {
  return (
    <div className="bg-gradient-to-b from-red-900 to-red-950 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-serif text-center text-gold-400">Venue Details</h2>
        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          <div className="space-y-8">
            <div className="bg-red-950/50 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-6 h-6 text-gold-400" />
                <h3 className="text-2xl font-serif text-white">Main Ceremony</h3>
              </div>
              <p className="text-red-100">Winter Palace Grand Hall</p>
              <p className="text-red-200/80 text-sm">123 Snowflake Lane, Winter Haven</p>
            </div>
            
            <div className="bg-red-950/50 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <Cake className="w-6 h-6 text-gold-400" />
                <h3 className="text-2xl font-serif text-white">Cake Cutting</h3>
              </div>
              <p className="text-red-100">Crystal Ballroom</p>
              <p className="text-red-200/80 text-sm">5:30 PM - Following the ceremony</p>
            </div>
            
            <div className="bg-red-950/50 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <UtensilsCrossed className="w-6 h-6 text-gold-400" />
                <h3 className="text-2xl font-serif text-white">Reception Dinner</h3>
              </div>
              <p className="text-red-100">Grand Dining Hall</p>
              <p className="text-red-200/80 text-sm">6:00 PM - Formal dinner service</p>
            </div>
          </div>
          
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991441291371!2d2.294481776664185!3d48.85837360866432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1709834131037!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full border-0 rounded-lg"
              loading="lazy"
              referrerPolicy="no-referrer-when-loaded"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-4 border-gold-400/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}