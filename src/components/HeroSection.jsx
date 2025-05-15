import React from "react";
import buildingImg from "../assets/building.jpg";
import promoImg from "../assets/promo.jpg";

const HeroSection = () => {
  return (
    <section className="bg-[#f8f6f2] py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-center gap-10 relative">
        
        <div className="flex flex-col items-center md:items-start relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left mb-4">
            TURNING YOUR DREAMS TO <br />
            <span className="border-b-4 border-yellow-500 inline-block mt-1">
              REALITY
            </span>
          </h2>

          <div className="relative mt-6 md:mt-10 -ml-0 md:-ml-10">
            <img
              src={promoImg}
              alt="Promo"
              className="w-[240px] md:w-[300px] rounded-md shadow-2xl"
            />
          </div>
        </div>

        <div className="relative z-0">
          <img
            src={buildingImg}
            alt="Building"
            className="w-[320px] md:w-[480px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
