import React from 'react';
import garden from '../assets/am1.png';
import kidsPlay from '../assets/am2.svg';
import climbing from '../assets/am3.png';
import boxing from '../assets/am4.png';
import pool from '../assets/am5.svg';
import banquet from '../assets/am6.png';
import library from '../assets/am7.png';
import cafe from '../assets/am8.png';
import gym from '../assets/am9.png';
import bbq from '../assets/am10.png';

const amenities = [
  { label: "Naturally Themed Podium Gardens", icon: garden },
  { label: "Kids Play Area", icon: kidsPlay },
  { label: "Foam Pit With Rock Climbing Wall", icon: climbing },
  { label: "Mini Boxing Ring", icon: boxing },
  { label: "Swimming Pool", icon: pool },
  { label: "Banquet Hall", icon: banquet },
  { label: "Library And Working Areas", icon: library },
  { label: "Indoor And Poolside Cafe", icon: cafe },
  { label: "Indoor And Terrace Gym", icon: gym },
  { label: "Barbeque Deck", icon: bbq },
];

const AmenitiesSection = () => {
  return (
    <section className="bg-[#fdfbf7] py-16 px-4 md:px-20">
      <div className="text-center mb-10">
        <h4 className="text-xs font-semibold text-yellow-700 uppercase tracking-wide">Amenities</h4>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          Where Luxury Life Reigns Supreme
        </h2>
        <div className="w-12 h-1 bg-yellow-600 mx-auto mt-1 rounded"></div>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        {/* Top Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
          {amenities.slice(0, 5).map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-2">
              <div className="bg-[#f6e9d8] p-1 rounded-full shadow-sm">
                <img src={item.icon} alt={item.label} className="w-9 h-9 object-contain" />
              </div>
              <p className="text-gray-700 text-xs md:text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
          {amenities.slice(5).map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-2">
              <div className="bg-[#f6e9d8] p-1 rounded-full shadow-sm">
                <img src={item.icon} alt={item.label} className="w-9 h-9 object-contain" />
              </div>
              <p className="text-gray-700 text-xs md:text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
