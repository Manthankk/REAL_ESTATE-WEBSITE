import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#272c2f] text-[#d6b266] py-12 px-6 md:px-20 max-w-9xl mx-auto flex flex-wrap justify-between gap-y-8">
  
      <div className="flex flex-col space-y-2 min-w-[150px]">
        <h5 className="text-sm font-semibold uppercase mb-3">Projects</h5>
        <a href="#" className="text-white hover:underline">Residential</a>
        <a href="#" className="text-white hover:underline">Commercial</a>
        <a href="#" className="text-white hover:underline">Completed Projects</a>
        <a href="#" className="text-white hover:underline">Chandak Sarvam</a>
        <a href="#" className="text-white hover:underline">Chandak Highscape City</a>
        <a href="#" className="text-white hover:underline">Chandak Treesourus</a>
        <a href="#" className="text-white hover:underline">GreenAiry</a>
      </div>

      {/* About Us */}
      <div className="flex flex-col space-y-2 min-w-[150px]">
        <h5 className="text-sm font-semibold uppercase mb-3">About Us</h5>
        <a href="#" className="text-white hover:underline">Overview</a>
        <a href="#" className="text-white hover:underline">Leadership</a>
        <a href="#" className="text-white hover:underline">CSR</a>
        <a href="#" className="text-white hover:underline">Honors and Awards</a>
        <a href="#" className="text-white hover:underline">Experience With Chandak</a>
        <a href="#" className="text-white hover:underline">Referral</a>
      </div>

      {/* Locations */}
      <div className="flex flex-col space-y-2 min-w-[150px]">
        <h5 className="text-sm font-semibold uppercase mb-3">Locations</h5>
        <a href="#" className="text-white hover:underline">Chembur East</a>
        <a href="#" className="text-white hover:underline">Andheri East</a>
        <a href="#" className="text-white hover:underline">Andheri West</a>
        <a href="#" className="text-white hover:underline">Vile Parle West</a>
        <a href="#" className="text-white hover:underline">Malad West</a>
        <a href="#" className="text-white hover:underline">Borivali East</a>
        <a href="#" className="text-white hover:underline">Goregaon West</a>
      </div>

      {/* Channel Partner */}
      <div className="flex flex-col space-y-2 min-w-[150px]">
        <h5 className="text-sm font-semibold uppercase mb-3">Channel Partner</h5>
        <a href="#" className="text-white hover:underline">NRI Corner</a>
        <a href="#" className="text-white hover:underline">Currency Converter</a>
        <a href="#" className="text-white hover:underline">EMI Calculator</a>
        <a href="#" className="text-white hover:underline">Sitemap</a>
        <a href="#" className="text-white hover:underline">Privacy Policy</a>
        <a href="#" className="text-white hover:underline">Terms & Conditions</a>
        <a href="#" className="text-white hover:underline">Disclaimer</a>
      </div>

      {/* Contact Us */}
      <div className="flex flex-col space-y-2 min-w-[150px]">
        <h5 className="text-sm font-semibold uppercase mb-3">Contact Us</h5>
        <a href="#" className="text-white hover:underline">Careers</a>
        <a href="#" className="text-white hover:underline">Blog</a>
        <a href="#" className="text-white hover:underline">Newsletter</a>

        <h5 className="text-sm font-semibold uppercase mt-6 mb-3">Follow Us On</h5>
        <div className="flex space-x-4 text-[#d6b266]">
          {/* Instagram */}
          <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.75-3a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
            </svg>
          </a>
          {/* Facebook */}
          <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8.21v-2.88h2.28v-2.2c0-2.26 1.35-3.5 3.42-3.5.99 0 2.03.18 2.03.18v2.23h-1.14c-1.13 0-1.48.7-1.48 1.42v1.86h2.52l-.4 2.88h-2.12v6.99A10 10 0 0022 12z" />
            </svg>
          </a>
          {/* YouTube */}
          <a href="#" aria-label="YouTube" className="hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M21.8 8s-.2-1.4-.8-2c-.7-.8-1.5-.8-1.9-.9-2.7-.2-6.7-.2-6.7-.2h-.1s-4 0-6.7.2c-.4 0-1.2.1-1.9.9-.6.6-.8 2-.8 2S4 9.7 4 11.5v1c0 1.8.2 3.5.2 3.5s.2 1.4.8 2c.7.8 1.6.8 2 .9 1.5.1 6.4.2 6.4.2s4 0 6.7-.2c.4 0 1.3-.1 1.9-.9.6-.6.8-2 .8-2s.2-1.7.2-3.5v-1c0-1.8-.2-3.5-.2-3.5zM10 14.6v-5l4.5 2.5-4.5 2.5z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.039-1.85-3.039-1.851 0-2.134 1.444-2.134 2.939v5.669H9.355V9h3.414v1.561h.05c.476-.9 1.637-1.85 3.37-1.85 3.6 0 4.263 2.37 4.263 5.456v6.285zM5.337 7.433c-1.144 0-2.068-.926-2.068-2.07 0-1.143.924-2.07 2.068-2.07 1.143 0 2.068.927 2.068 2.07 0 1.144-.925 2.07-2.068 2.07zM6.818 20.452H3.855V9h2.963v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.728v20.543C0 23.225.792 24 1.771 24h20.451C23.208 24 24 23.225 24 22.271V1.728C24 .774 23.208 0 22.225 0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
