import React, { useState } from 'react';
import { OrnamentalDivider } from './Decorative';

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guests: '1',
    dietary: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const inputClasses = "mt-1 block w-full rounded-none border-b-2 border-emerald-200 bg-transparent p-2 focus:border-gold-400 focus:ring-0 transition-colors duration-300";

  return (
    <div className="bg-white py-24 px-4">
      <div className="max-w-md mx-auto">
        <h2 className="text-5xl font-serif text-center text-emerald-900">RSVP</h2>
        <OrnamentalDivider />
        <form onSubmit={handleSubmit} className="space-y-8 mt-12">
          {[
            { label: "Full Name", type: "text", key: "name" },
            { label: "Email", type: "email", key: "email" }
          ].map((field) => (
            <div key={field.key} className="group">
              <label className="block text-sm font-medium text-emerald-800 tracking-wider group-focus-within:text-gold-400 transition-colors duration-300">
                {field.label}
              </label>
              <input
                type={field.type}
                value={formData[field.key as keyof typeof formData]}
                onChange={(e) => setFormData({...formData, [field.key]: e.target.value})}
                className={inputClasses}
                required
              />
            </div>
          ))}
          
          <div className="group">
            <label className="block text-sm font-medium text-emerald-800 tracking-wider group-focus-within:text-gold-400 transition-colors duration-300">
              Will you be attending?
            </label>
            <select
              value={formData.attending}
              onChange={(e) => setFormData({...formData, attending: e.target.value})}
              className={inputClasses}
            >
              <option value="yes">Joyfully Accepts</option>
              <option value="no">Regretfully Declines</option>
            </select>
          </div>

          <div className="group">
            <label className="block text-sm font-medium text-emerald-800 tracking-wider group-focus-within:text-gold-400 transition-colors duration-300">
              Number of Guests
            </label>
            <select
              value={formData.guests}
              onChange={(e) => setFormData({...formData, guests: e.target.value})}
              className={inputClasses}
            >
              {[1,2,3,4].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div className="group">
            <label className="block text-sm font-medium text-emerald-800 tracking-wider group-focus-within:text-gold-400 transition-colors duration-300">
              Dietary Restrictions
            </label>
            <textarea
              value={formData.dietary}
              onChange={(e) => setFormData({...formData, dietary: e.target.value})}
              className={inputClasses}
              rows={3}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-900 text-white py-4 px-6 tracking-wider hover:bg-emerald-800 transition-colors duration-300 mt-8"
          >
            SEND RSVP
          </button>
        </form>
      </div>
    </div>
  );
}