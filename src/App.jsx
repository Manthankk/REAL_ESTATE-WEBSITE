// import Navbar from "./components/navbar"; 

import Navbar from './components/navbar';

import './App.css'; 
import React from "react";
import ProjectHighlights from "./components/ProjectHighlights";
import ProjectOverview from "./components/ProjectOverview";
import AmenitiesSection from './components/AmenitiesSection';

import TabsSection from "./components/TabsSection";
import GallerySection from "./components/GallerySection";
import HeroSection from './components/HeroSection';
import InfoBox from "./components/InfoBox";
import More from "./components/More";


// import heroImage from './assets/hero.jpg';
import heroImage from './assets/image.png';

import Footer from "./components/Footer";
function App() {
  return (
    <div className="font-sans">
      <Navbar />
<img
        src={heroImage}
        alt="GreenAiry Hero"
        className="w-full h-screen "
      />
       <ProjectHighlights />
       <ProjectOverview />
             <TabsSection />
             <AmenitiesSection />
             <GallerySection />
             <HeroSection />
             <InfoBox />
             <More/>
             
<Footer/>




    </div>
  );
}

export default App;
