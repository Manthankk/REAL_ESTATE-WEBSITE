import React, { useState } from "react";
import mapImage from "../assets/maps.png"; // ✅ Use this image everywhere
import location from "../assets/location.png";
const tabsData = [
  {
    id: 1,
    label: "EASY ACCESSIBILITY",
    content: (
      <ul className="space-y-2 text-sm text-gray-100">
        <li>Western Express Highway – 0.5 km</li>
        <li>Eastern Express Highway – 1.5 km</li>
        <li>Borivali Railway Station – 3 km</li>
      </ul>
    ),
  },
  {
    id: 2,
    label: "HOSPITALS",
    content: (
      <ul className="space-y-2 text-sm text-gray-100">
        <li>Surbhi Life Care Hospital – 1.2 km</li>
        <li>Apex Multispeciality Hospital – 1.8 km</li>
        <li>Sanchaithi Super Specialty Hospital – 3 km</li>
        <li>Lifeline Medicare Hospital – 1.6 km</li>
        <li>Seven Star Multispeciality Hospital – 2.7 km</li>
      </ul>
    ),
  },
  {
    id: 3,
    label: "COMMERCIAL HUBS",
    content: (
      <ul className="space-y-2 text-sm text-gray-100">
        <li>Infinity Mall – 2 km</li>
        <li>Oberoi Mall – 3.5 km</li>
        <li>Inorbit Mall – 4 km</li>
      </ul>
    ),
  },
  {
    id: 4,
    label: "EDUCATION",
    content: (
      <ul className="space-y-2 text-sm text-gray-100">
        <li>Ryan International School – 2.5 km</li>
        <li>St. John’s High School – 3 km</li>
        <li>Thakur Public School – 3.5 km</li>
      </ul>
    ),
  },
];

const floorPlanTabs = [
  { id: "luxairy", label: "LUXAIRY RESIDENCES" },
  { id: "greenairy", label: "GREENAIRY HOMES" },
];

const towerTabs = [
  { id: "a", label: "WING A" },
  { id: "b", label: "WING B" },
];

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(2);
  const [floorMainTab, setFloorMainTab] = useState("luxairy");
  const [floorTowerTab, setFloorTowerTab] = useState("b");

  return (
    <section className="relative py-24 bg-[#1e252b] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={mapImage}
          alt="Background"
          className="w-full h-full object-cover opacity-10 grayscale"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-24">
        {/* LOCATION SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold leading-tight mb-2">
              WHERE THE WORLD IS AT YOUR FINGERTIPS
            </h2>
            <p className="text-[#c99a5d] text-sm italic mb-4">
              "Every Legend Has a Story – Be Treasured With a Beloved Neighbourhood"
            </p>
            <div className="w-16 h-1 bg-[#c99a5d] mb-6"></div>

            <p className="text-gray-300 mb-6">
              Located along Western Express Highway, Swastik Platinum is a
              connection point to your lifestyle, offering seamless access to
              everything essential — highways, rail, schools, malls, and more.
            </p>

            <div className="flex space-x-6 overflow-x-auto border-b border-gray-600 mb-6">
              {tabsData.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`pb-2 text-sm tracking-wide transition-all ${
                    activeTab === id
                      ? "border-b-2 border-[#c99a5d] text-[#c99a5d] font-semibold"
                      : "text-gray-400 hover:text-[#c99a5d]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur p-4 rounded-lg border border-white/10">
              {tabsData.find((tab) => tab.id === activeTab)?.content}
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg relative">
            <img
              src={mapImage}
              alt="Map View"
              className="w-full h-full object-cover rounded-xl"
            />
            <a
              href="https://goo.gl/maps/qXEjgjL5J7TwDQay6"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-4 left-4 bg-white/90 text-gray-900 px-4 py-1 text-xs font-semibold rounded hover:bg-white transition"
            >
              VIEW ON GOOGLE MAP
            </a>
          </div>
        </div>

        {/* FLOOR PLAN SECTION — now using maps.png too */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-xl overflow-hidden shadow-lg bg-white p-4">
            <img
              src={location}
              alt="Floor Plan"
              className="w-full h-full object-contain rounded"
            />
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-1">
              CONFIGURATIONS
            </p>
            <h3 className="text-2xl font-bold text-white mb-6">
              WHERE ELEGANCE FINDS ITS HOME
            </h3>

            <div className="flex space-x-8 mb-6 text-sm font-semibold uppercase">
              {floorPlanTabs.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setFloorMainTab(id)}
                  className={`pb-2 border-b-2 ${
                    floorMainTab === id
                      ? "border-[#c99a5d] text-[#c99a5d]"
                      : "border-transparent text-gray-400"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="flex space-x-6 mb-6 text-xs uppercase tracking-wide font-medium">
              {towerTabs.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setFloorTowerTab(id)}
                  className={`pb-1 border-b-2 ${
                    floorTowerTab === id
                      ? "border-[#c99a5d] text-[#c99a5d]"
                      : "border-transparent text-gray-400"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <p className="text-sm text-[#c99a5d] font-semibold uppercase tracking-widest mb-6">
              FLOOR PLAN DETAILS
            </p>

            <div className="flex gap-10">
              <div className="flex items-center gap-3">
                <span className="text-2xl text-[#c99a5d]">📏</span>
                <p>Spacious Passages</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl text-[#c99a5d]">🧩</span>
                <p>Smart Layouts</p>
              </div>
            </div>

            <a
              href="/brochure.pdf"
              download
              className="mt-10 inline-block px-6 py-2 border border-[#c99a5d] text-[#c99a5d] font-semibold uppercase tracking-wide hover:bg-[#c99a5d] hover:text-gray-900 transition rounded"
            >
              Download Full Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
