import React from 'react';
import verticalImage from '../assets/amni1.png'; // vertical image
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
  { label: "Themed Podium Garden", icon: garden },
  { label: "Children’s Play Area", icon: kidsPlay },
  { label: "Rock Climbing Foam Pit", icon: climbing },
  { label: "Boxing Ring Zone", icon: boxing },
  { label: "Kids’ Swimming Pool", icon: pool },
  { label: "Banquet & Party Hall", icon: banquet },
  { label: "Library & Study Lounge", icon: library },
  { label: "Indoor & Poolside Café", icon: cafe },
  { label: "Terrace & Indoor Gym", icon: gym },
  { label: "Barbecue Entertainment Deck", icon: bbq },
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

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Vertical Image */}
        <div className="flex-shrink-0 w-full lg:w-[240px]">
          <img
            src={verticalImage}
            alt="Resident Facilities Banner"
            className="w-full object-contain rounded-xl shadow"
          />
        </div>

        {/* Right Amenities Grid */}
        <div className="flex-1 space-y-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
            {amenities.slice(0, 5).map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-2">
                <div className="bg-[#f6e9d8] p-2 rounded-full shadow-sm hover:scale-105 transition">
                  <img src={item.icon} alt={item.label} className="w-10 h-10 object-contain" />
                </div>
                <p className="text-gray-700 text-xs md:text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
            {amenities.slice(5).map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-2">
                <div className="bg-[#f6e9d8] p-2 rounded-full shadow-sm hover:scale-105 transition">
                  <img src={item.icon} alt={item.label} className="w-10 h-10 object-contain" />
                </div>
                <p className="text-gray-700 text-xs md:text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
