import React, { useState } from "react";
import podium from '../assets/podium.jpg';
import podiumBirdEye from '../assets/birdpodium.jpg';
import elevation from '../assets/elevation.jpg';
import livingRoom from '../assets/living-room.jpg';
import bedroom from '../assets/bedroom.jpg';
import swimmingPool from '../assets/swimming.jpg';
import gym from '../assets/gym.jpg';
import siteProgress1 from '../assets/siteProgress1.jpg';
import siteProgress2 from '../assets/siteProgress2.jpg';
import siteProgress3 from '../assets/siteProgress3.jpg';

const tabs = ["Photos", "Videos"];
const photoSubTabs = ["External", "Internal", "Amenities"];

const galleryData = {
  Photos: {
    External: [
      { title: "Podium", src: podium },
      { title: "Bird's Eye View of Podium", src: podiumBirdEye },
      { title: "Elevation", src: elevation },
    ],
    Internal: [
      { title: "Living Room", src: livingRoom },
      { title: "Bedroom", src: bedroom },
    ],
    Amenities: [
      { title: "Swimming Pool", src: swimmingPool },
      { title: "Gym", src: gym },
    ],
  },
  Videos: {
    Walkthrough: [],
  },
};

const siteProgressImages = [
  { title: "Site Progress 1", src: siteProgress1 },
  { title: "Site Progress 2", src: siteProgress2 },
  { title: "Site Progress 3", src: siteProgress3 },
];

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState("Photos");
  const [activeSubTab, setActiveSubTab] = useState("External");
  const [startIndex, setStartIndex] = useState(0);

  const [siteStartIndex, setSiteStartIndex] = useState(0);

  const itemsPerSlide = 3;

  const handleNext = () => {
    const currentData = galleryData[activeTab]?.[activeSubTab] || [];
    if (startIndex + itemsPerSlide < currentData.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleSiteNext = () => {
    if (siteStartIndex + itemsPerSlide < siteProgressImages.length) {
      setSiteStartIndex(siteStartIndex + 1);
    }
  };

  const handleSitePrev = () => {
    if (siteStartIndex > 0) {
      setSiteStartIndex(siteStartIndex - 1);
    }
  };

  const currentData =
    galleryData[activeTab]?.[activeSubTab] || galleryData[activeTab] || [];

  return (
    <section className="bg-[#1f262c] text-white px-16 py-16 space-y-24">
      <div className="max-w-7xl mx-auto flex gap-16">
        <div className="flex flex-col justify-center max-w-md text-sm text-gray-300 leading-relaxed">
          <p className="uppercase tracking-widest text-xs mb-2">GALLERY</p>
          <h2 className="text-white text-3xl font-bold border-b-2 border-yellow-600 w-max mb-6">
            WHERE YOU REDISCOVER LIFE
          </h2>
          <p>
            At LuxAiry Collection, discover a lifestyle of comfort and
            sophistication. This is where dreams are lived and memories are
            created, making your every moment truly priceless. With naturally
            themed podium gardens & amenities, this elegantly designed
            integrated community is decked with rejuvenation and wellness
            activities to indulge in, all day round.
          </p>
        </div>

        <div className="flex-1">
          <div className="flex gap-10 mb-4 text-lg font-semibold border-b border-gray-600">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  if (tab === "Photos") setActiveSubTab("External");
                  setStartIndex(0);
                }}
                className={`pb-2 ${
                  activeTab === tab
                    ? "text-yellow-500 border-b-2 border-yellow-500"
                    : "text-gray-400 hover:text-yellow-500"
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {activeTab === "Photos" && (
            <div className="flex gap-8 mb-8 text-sm font-semibold border-b border-gray-700">
              {photoSubTabs.map((subTab) => (
                <button
                  key={subTab}
                  onClick={() => {
                    setActiveSubTab(subTab);
                    setStartIndex(0);
                  }}
                  className={`pb-2 ${
                    activeSubTab === subTab
                      ? "text-yellow-500 border-b-2 border-yellow-500"
                      : "text-gray-500 hover:text-yellow-500"
                  }`}
                >
                  {subTab.toUpperCase()}
                </button>
              ))}
            </div>
          )}

          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="bg-black bg-opacity-70 hover:bg-opacity-90 text-yellow-500 p-3 rounded disabled:opacity-30 transition"
            >
              &#x276E;
            </button>

            <div className="flex gap-6 overflow-hidden">
              {currentData
                .slice(startIndex, startIndex + itemsPerSlide)
                .map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#2c343b] rounded-md shadow-md overflow-hidden w-52"
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4 text-center font-semibold text-white">
                      {item.title.toUpperCase()}
                    </div>
                  </div>
                ))}
            </div>

            <button
              onClick={handleNext}
              disabled={startIndex + itemsPerSlide >= currentData.length}
              className="bg-black bg-opacity-70 hover:bg-opacity-90 text-yellow-500 p-3 rounded disabled:opacity-30 transition"
            >
              &#x276F;
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex gap-16">
        <div className="flex flex-col justify-center max-w-md text-sm text-gray-300 leading-relaxed">
          <p className="uppercase tracking-widest text-xs text-yellow-500 mb-2">
            SITE PROGRESS
          </p>
          <h2 className="text-white text-3xl font mb-1">
            CONSTRUCTING YOUR DREAMS
          </h2>
          <h3 className="text-yellow-500 text-xl font-semibold">
            ONE BRICK AT A TIME
          </h3>
        </div>

        <div className="flex-1 flex items-center gap-4">
          <button
            onClick={handleSitePrev}
            disabled={siteStartIndex === 0}
            className="bg-black bg-opacity-70 hover:bg-opacity-90 text-yellow-500 p-3 rounded disabled:opacity-30 transition"
          >
            &#x276E;
          </button>

          <div className="flex gap-6 overflow-hidden">
            {siteProgressImages
              .slice(siteStartIndex, siteStartIndex + itemsPerSlide)
              .map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#2c343b] rounded-md shadow-md overflow-hidden w-52"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4 text-center font-semibold text-white">
                    {item.title.toUpperCase()}
                  </div>
                </div>
              ))}
          </div>

          <button
            onClick={handleSiteNext}
            disabled={siteStartIndex + itemsPerSlide >= siteProgressImages.length}
            className="bg-black bg-opacity-70 hover:bg-opacity-90 text-yellow-500 p-3 rounded disabled:opacity-30 transition"
          >
            &#x276F;
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
