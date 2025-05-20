import React from "react";

const InfoBox = () => {
  return (
    <section className="bg-[#f8f6f2] py-16 px-8 md:px-20 my-12 rounded-xl shadow-2xl max-w-4xl mx-auto font-sans text-[#4a4033] relative">
      {/* Decorative Icons */}
      <div className="absolute top-6 left-6 opacity-10 text-6xl pointer-events-none">
        🏢
      </div>
      <div className="absolute bottom-6 right-6 opacity-10 text-6xl pointer-events-none">
        📞
      </div>

      {/* Call Section */}
      <div className="text-center mb-10">
        <p className="uppercase text-sm tracking-widest text-[#b2924b] mb-2">
          Speak to our representative today
        </p>
        <p className="text-2xl font-bold text-[#6b4f2d] mb-1 cursor-pointer hover:text-[#b2924b] transition duration-200">
          022-6689 0000
        </p>
        <div className="w-16 mx-auto border-b-2 border-[#b2924b] mt-2" />
      </div>

      {/* Project Visit Info */}
      <div className="text-center mb-10">
        <p className="uppercase text-sm tracking-widest text-[#b2924b] mb-2">
          Visit the Project
        </p>
        <p className="text-lg font-medium">
          SWASTIK PEARL, Building No. 8, <br />
          Near Tagore Nagar Market, Vikhroli (E), Mumbai – 400 083.
        </p>
        <p className="text-sm mt-3 text-[#b2924b] underline cursor-pointer hover:text-[#8b6e3b] transition duration-200">
          (Click to view on Google Map)
        </p>
      </div>

      {/* Corporate Office Info */}
      <div className="text-center mb-10">
        <p className="uppercase text-sm tracking-widest text-[#b2924b] mb-2">
          Corporate Office
        </p>
        <p className="text-base leading-relaxed">
          <strong>SUVASYA BUILDERS AND DEVELOPERS LLP</strong> <br />
          312, Swastik Disa Corporate Park, LBS Marg, <br />
          Opp. Shreyas Cinemas, Ghatkopar (W), Mumbai – 400 086, INDIA
        </p>
      </div>

      {/* Contact Info */}
      <div className="text-center mb-10 space-y-2">
        <p>
          <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:sales@swastikgroup.in"
            className="text-[#b2924b] underline hover:text-[#8b6e3b]"
          >
            sales@swastikgroup.in
          </a>
        </p>
        <p>
          <span className="font-semibold">Website:</span>{" "}
          <a
            href="https://www.swastikproperties.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b2924b] underline hover:text-[#8b6e3b]"
          >
            www.swastikproperties.in
          </a>
        </p>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-[#6b5e4f] mt-6 border-t border-[#d6cbbd] pt-6">
        <p>© 2025 Swastik Properties. All rights reserved.</p>
      </div>
    </section>
  );
};

export default InfoBox;
