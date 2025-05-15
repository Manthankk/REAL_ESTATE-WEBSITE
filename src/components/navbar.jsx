import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import React from "react";
import logo from '../assets/logo.svg';


const navLinks = [
  { name: "About Us", dropdown: true },
  { name: "Projects", dropdown: true },
  { name: "NRI Corner", dropdown: false },
  { name: "Loyalty Programs", dropdown: true },
  { name: "Channel Partner", dropdown: false },
  { name: "Blog", dropdown: false },
  { name: "Careers", dropdown: false },
  { name: "Contact Us", dropdown: false },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="bg-[#f3ebdc] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-10" />
        </div>

        <nav className="hidden md:flex space-x-6 text-sm font-medium text-[#5c4a2c] hover:text-[#a3865a] transition duration-200">
        {navLinks.map((link, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => link.dropdown && setOpenDropdown(index)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div className="flex items-center space-x-1">
                <span>{link.name}</span>
                {link.dropdown && <ChevronDown size={16} />}
              </div>

              
              {link.dropdown && openDropdown === index && (
                <div className="absolute top-6 left-0 bg-white text-black p-2 shadow-md z-10 w-40">
                  <p className="py-1 px-2 hover:bg-gray-100 text-[#f3ebdc]">Overview</p>
                  <p className="py-1 px-2 hover:bg-gray-100 text-[#f3ebdc]" >LeaderShip</p>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="text-gray-700 cursor-pointer">
          <Search size={20} />
        </div>
      </div>
    </header>
  );
}
