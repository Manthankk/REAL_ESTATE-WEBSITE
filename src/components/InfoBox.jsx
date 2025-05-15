import React from "react";

const InfoBox = () => {
  return (
    <section className="bg-[#f0e5d7] py-16 px-8 md:px-20 my-12 relative max-w-3xl mx-auto rounded-md shadow-lg text-center text-[#6b5e4f] font-sans">
      <div className="absolute top-6 left-6 opacity-20 pointer-events-none">
      </div>
      <div className="absolute bottom-6 right-6 opacity-20 pointer-events-none">
=      </div>

      <h3 className="text-lg md:text-xl font-semibold mb-3 uppercase tracking-widest">
        WHERE SERENITY <br /> EMBRACES YOUR SOUL
      </h3>

      <div className="py-6 my-6">
        <p className="uppercase tracking-wide text-sm mb-2">
          SPEAK TO OUR REPRESENTATIVE TODAY
        </p>
        <div className="flex flex-col items-center space-y-1">
          <div className="w-12 border-b-2 border-[#b2924b]" />
          <p className="text-xl font-bold cursor-pointer">1800-120-224-488</p>
          <div className="w-12 border-b-2 border-[#b2924b]" />
        </div>
      </div>

      <div className="py-6 my-6">
        <p className="uppercase tracking-wide text-sm mb-2">VISIT THE PROJECT</p>
        <div className="flex flex-col items-center space-y-1">
          <div className="w-12 border-b-2 border-[#b2924b]" />
          <p className="text-lg font-semibold">
            WEH, <br />
            Borivali <span className="font-bold">(E)</span>, Mumbai – 400 066.
          </p>
          <div className="w-12 border-b-2 border-[#b2924b]" />
        </div>
        <p className="text-xs mt-4 text-[#b2924b] underline cursor-pointer">
          (CLICK TO VIEW ON GOOGLE MAP)
        </p>
      </div>
    </section>
  );
};

export default InfoBox;
