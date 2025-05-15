import React, { useState } from "react";
import mapImage from '../assets/map.jpg';
import floorPlanImage from '../assets/floorplan.jpg'; 
const tabsData = [
  {
    id: 1,
    label: "EASY ACCESSIBILITY",
    content: (
      <ul className="space-y-3 text-gray-300 text-sm">
        <li>Western Express Highway - 0.5 km</li>
        <li>Eastern Express Highway - 1.5 km</li>
        <li>Borivali Railway Station - 3 km</li>
      </ul>
    ),
  },
  {
    id: 2,
    label: "HOSPITALS",
    content: (
      <ul className="space-y-3 text-gray-300 text-sm">
        <li>Surbhi Life Care Hospital - 1.2 km</li>
        <li>Apex Multispeciality Hospital - 1.8 km</li>
        <li>Sanchaithi Super Specialty Hospital - 3 km</li>
        <li>Lifeline Medicare Hospital - 1.6 km</li>
        <li>Seven Star Multispeciality Hospital - 2.7 km</li>
      </ul>
    ),
  },
  {
    id: 3,
    label: "COMMERCIAL HUBS",
    content: (
      <ul className="space-y-3 text-gray-300 text-sm">
        <li>Infinity Mall - 2 km</li>
        <li>Oberoi Mall - 3.5 km</li>
        <li>Inorbit Mall - 4 km</li>
      </ul>
    ),
  },
  {
    id: 4,
    label: "EDUCATION",
    content: (
      <ul className="space-y-3 text-gray-300 text-sm">
        <li>Ryan International School - 2.5 km</li>
        <li>St. John’s High School - 3 km</li>
        <li>Thakur Public School - 3.5 km</li>
      </ul>
    ),
  },
];

const floorPlanTabs = [
  { id: 'luxairy', label: 'LUXAIRY COLLECTION' },
  { id: 'greenairy', label: 'GREENAIRY' },
];

const towerTabs = [
  { id: 'a', label: 'TOWER A' },
  { id: 'b', label: 'TOWER B' },
];

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(2); 
  const [floorMainTab, setFloorMainTab] = useState('luxairy');
  const [floorTowerTab, setFloorTowerTab] = useState('b');

  return (
    <section className="bg-[#282f34] text-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

       
        <div className="flex flex-col md:flex-row gap-10">
     
          <div className="flex-1 flex flex-col">
            <span className="text-sm text-gray-400 tracking-widest mb-2">LOCATION</span>
            <h2 className="text-3xl font-bold leading-tight mb-4">
              WHERE THE WORLD IS AT <br /> YOUR FINGERTIPS
            </h2>
            <div className="w-16 h-1 bg-[#c99a5d] rounded mb-6"></div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Located at Western Express Highway Borivali, the project offers seamless connectivity to key
              areas. This project truly bridges the gap between convenience, mesmerizing views, and luxury
              living with rapidly developing infrastructure, highways, malls, hospitals, entertainment
              avenues, and corporate hubs.
            </p>

          
            <nav className="flex space-x-8 border-b border-gray-700 mb-6">
              {tabsData.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`pb-2 text-sm tracking-wide transition-colors duration-300 ${
                    activeTab === id
                      ? "border-b-2 border-[#c99a5d] text-[#c99a5d] font-semibold"
                      : "text-gray-400 hover:text-[#c99a5d]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>

            
            <div>{tabsData.find((tab) => tab.id === activeTab)?.content}</div>
          </div>

         
          <div className="flex-1 relative rounded-lg overflow-hidden shadow-lg">
            <img
              src={mapImage}
              alt="Location Map"
              className="w-full h-full object-cover"
            />
            <a
              href="https://goo.gl/maps/qXEjgjL5J7TwDQay6"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-3 left-3 bg-white bg-opacity-90 text-gray-900 px-4 py-1 text-xs font-semibold rounded hover:bg-opacity-100 transition"
            >
              CLICK TO VIEW ON GOOGLE MAP
            </a>
          </div>
        </div>

       
        <div className="flex flex-col lg:flex-row gap-10 items-start">
         
          <div className="flex-1 rounded-lg overflow-hidden shadow-lg bg-white p-4">
            <img
              src={floorPlanImage}
              alt="Floor Plan"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">CONFIGURATIONS</p>
            <h2 className="text-2xl font-semibold mb-6 tracking-wide">
              WHERE ELEGANCE FINDS ITS HOME
            </h2>

            
            <nav className="flex gap-10 mb-6 text-sm font-semibold uppercase">
              {floorPlanTabs.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setFloorMainTab(id)}
                  className={`pb-2 border-b-2 transition ${
                    floorMainTab === id
                      ? "border-[#c99a5d] text-[#c99a5d]"
                      : "border-transparent text-gray-400"
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>

       
            <nav className="flex gap-10 mb-6 text-xs uppercase font-medium tracking-wide">
              {towerTabs.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setFloorTowerTab(id)}
                  className={`pb-1 border-b-2 transition ${
                    floorTowerTab === id
                      ? "border-[#c99a5d] text-[#c99a5d]"
                      : "border-transparent text-gray-400"
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>

            <p className="text-sm font-semibold uppercase tracking-widest text-[#c99a5d] mb-8">
              FLOOR PLAN
            </p>

            <div className="flex gap-16">
              <div className="flex items-center gap-3">
                <span className="text-[#c99a5d] text-2xl">🗺️</span>
                <p>Spacious Passages</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#c99a5d] text-2xl">⌘</span>
                <p>Smartly Designed Layout</p>
              </div>
            </div>

            <button className="mt-10 px-6 py-2 border border-[#c99a5d] text-[#c99a5d] font-semibold uppercase tracking-wide hover:bg-[#c99a5d] hover:text-gray-900 transition rounded">
              Download Floor Plans
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TabsSection;
