
import React from "react";
import { FaBuilding, FaMapMarkerAlt, FaRegCheckCircle } from "react-icons/fa";
import { RiGovernmentLine } from "react-icons/ri";

const ProjectHighlights = () => {
  return (
    <div className="bg-[#F7F0E7] py-8 px-4 text-center shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">GREENAIRY</h2>
      <hr className="border-t border-gray-300 mx-auto w-11/12 mb-6" />
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 text-left max-w-6xl mx-auto">
        
        <div className="flex items-start gap-3">
          <FaBuilding className="text-yellow-600 text-3xl mt-1" />
          <div>
            <p className="font-medium text-sm text-gray-700">Project Highlights:</p>
            <p className="font-semibold text-md text-gray-800">VIEWS OF NATIONAL PARK AND CITY</p>
          </div>
        </div>

      
        <div className="flex items-start gap-3">
          <FaMapMarkerAlt className="text-yellow-600 text-3xl mt-1" />
          <div>
            <p className="font-medium text-sm text-gray-700">Location:</p>
            <p className="font-semibold text-md text-gray-800">BORIVALI WEH, MUMBAI</p>
          </div>
        </div>

    
        <div className="flex items-start gap-3">
          <FaRegCheckCircle className="text-yellow-600 text-3xl mt-1" />
          <div>
            <p className="font-medium text-sm text-gray-700">Configuration:</p>
            <p className="font-semibold text-md text-gray-800">1 & 2 BHK WITH JODI OPTIONS</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <RiGovernmentLine className="text-yellow-600 text-3xl mt-1" />
          <div>
            <p className="font-medium text-sm text-gray-700">MahaRERA Registration No:</p>
            <p className="font-semibold text-md text-gray-800">P51800035093</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHighlights;
