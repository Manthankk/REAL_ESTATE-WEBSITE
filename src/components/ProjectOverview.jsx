
import React from "react";
import balcony from '../assets/balcony.jpg';

const ProjectOverview = () => {
  return (
    <div className="bg-[#FDF9F4] py-10 px-6 md:px-12 text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative">
     
        <img
          src={balcony}
          alt="Balcony View"
          className="w-full h-auto rounded-lg shadow-lg"
        />

      
        <div>
          <p className="text-sm text-[#B98C4B] font-semibold tracking-wide mb-2">OVERVIEW</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">WHERE LUXURY MEETS THE EXCEPTIONAL</h2>
          <p className="mb-6 text-lg text-gray-700 leading-relaxed">
            Embark on a life beyond the ordinary, where the boundaries between nature and city life seamlessly merge.
            Nestled in Borivali, introducing LuxAiry Collection at Chandak GreenAiry, an exclusive haven with 2BHK
            luxurious balcony residences starting 37th Floor & Above. Escape the mundane as your balcony transforms
            into a sanctuary, granting you breathtaking views of the majestic Sanjay Gandhi National Park on one side
            and the captivating cityscape on the other.
          </p>

         
          <div className="flex flex-wrap gap-4">
            <button className="border border-[#B98C4B] text-[#B98C4B] px-5 py-2 rounded hover:bg-[#B98C4B] hover:text-white transition">
              DOWNLOAD BROCHURE
            </button>
            <button className="border border-[#B98C4B] text-[#B98C4B] px-5 py-2 rounded hover:bg-[#B98C4B] hover:text-white transition">
              DOWNLOAD FLOOR PLANS
            </button>
          </div>
        </div>
      </div>

      
      <div className="relative z-10 -mt-20 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center text-white bg-[#1F2023] rounded-lg overflow-hidden shadow-md">
        <div className="p-6">
          <p className="text-[#B98C4B] font-semibold mb-1">1 & 2 BHK</p>
          <p className="text-sm">WITH JODI OPTIONS</p>
        </div>
        <div className="p-6">
          <p className="text-[#B98C4B] font-semibold mb-1">BALCONY RESIDENCES</p>
          <p className="text-sm">FROM 37TH FLOOR & ABOVE</p>
        </div>
        <div className="p-6">
          <p className="text-[#B98C4B] font-semibold mb-1">NATIONAL PARK</p>
          <p className="text-sm">AND CITY VIEWS</p>
        </div>
        <div className="p-6">
          <p className="text-[#B98C4B] font-semibold mb-1">STRATEGICALLY</p>
          <p className="text-sm">LOCATED ON WEH</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
