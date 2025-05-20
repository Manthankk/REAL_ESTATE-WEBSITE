import React from "react";

import chandak from "../assets/chandak.jpg";
import jade from "../assets/jade.png";
import chandak1 from "../assets/chandak1.jpg";
import chandak2 from "../assets/chandak2.jpg";

const projects = [
  {
    title: " SARVAM",
    location: "Andheri (E), Mumbai",
    image: chandak,
  },
  {
    title: "JADE PARK",
    location: "Vile Parle (W), Mumbai",
    image: jade,
  },
  {
    title: " HIGHSCAPE CITY",
    location: "Chembur (E), Mumbai",
    image: chandak1,
  },
  {
    title: " TREESOURUS",
    location: "Malad (W), Mumbai",
    image: chandak2,
  },
];

const More = () => {
  return (
    <section className="bg-[#272c2f] py-12 px-1 md:px-16 text-[#d6b266] relative max-w-8xl mx-auto">
      <h3 className="text-xl md:text-2xl font-semibold mb-8 border-b-2 border-[#d6b266] inline-block pb-1">
        YOU MIGHT ALSO LIKE
      </h3>

      <div className="flex space-x-6 overflow-x-auto no-scrollbar">
        {projects.map(({ title, location, image }, idx) => (
          <div
            key={idx}
            className="min-w-[240px] md:min-w-[280px] bg-[#32393f] rounded-md shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h4 className="font-semibold text-white mb-2">{title}</h4>
              <p className="text-sm flex items-center text-[#d6b266]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1 fill-current"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
                {location}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="border border-[#d6b266] text-[#d6b266] px-6 py-2 rounded hover:bg-[#d6b266] hover:text-[#272c2f] transition-colors">
          VIEW ALL
        </button>
      </div>
    </section>
  );
};

export default More;
