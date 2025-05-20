import React from "react";
import satwik1 from "../assets/satwik1.png";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const ProjectOverview = () => {
  return (
    <div className="bg-[#FDF9F4] pt-16 pb-10 px-6 md:px-16 text-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-14 items-center relative">
        
        {/* Enlarged Image spanning 2 columns */}
        <motion.div
          className="w-full min-h-[480px] md:min-h-[600px] rounded-xl overflow-hidden shadow-xl md:col-span-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <img
            src={satwik1}
            alt="Swastik Platinum Tower"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overview Text + Buttons taking 1 column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={1}
        >
          <p className="text-sm text-[#B98C4B] font-semibold tracking-wide mb-2 uppercase">
            Project Overview
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
            The True Gem <br /> for a Lifetime
          </h2>
          <p className="mb-8 text-lg text-gray-700 leading-relaxed">
            Swastik Platinum is a majestic 22-storey residential tower located
            in Vikhroli (E), Mumbai. Featuring smartly designed 1 & 2 BHK
            residences with jodi options, this landmark combines elegant
            architecture, modern lifestyle amenities, and seamless connectivity
            for the ultimate urban living experience.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="/brochure.pdf" target="_blank" rel="noopener noreferrer">
              <button className="border border-[#B98C4B] text-[#B98C4B] px-6 py-2.5 rounded-full font-medium hover:bg-[#B98C4B] hover:text-white transition">
                Download Brochure
              </button>
            </a>
            <a href="/floorplans.pdf" target="_blank" rel="noopener noreferrer">
              <button className="border border-[#B98C4B] text-[#B98C4B] px-6 py-2.5 rounded-full font-medium hover:bg-[#B98C4B] hover:text-white transition">
                Download Floor Plans
              </button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Highlight Feature Strip */}
      <motion.div
        className="relative z-10 mt-16 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center text-white bg-[#1F2023] rounded-xl overflow-hidden shadow-md"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={2}
      >
        {[
          { title: "1 & 2 BHK", subtitle: "WITH JODI OPTIONS" },
          { title: "22 STOREY", subtitle: "MAGNIFICENT TOWER" },
          { title: "VIKHROLI (E)", subtitle: "NEAR TAGORE NAGAR" },
          { title: "MODERN", subtitle: "AMENITIES & CONNECTIVITY" },
        ].map((item, index) => (
          <div key={index} className="p-6">
            <p className="text-[#B98C4B] font-semibold mb-1">{item.title}</p>
            <p className="text-sm">{item.subtitle}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectOverview;
