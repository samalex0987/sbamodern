import React from 'react';

const Footer = () => {
  return (
   <>
    
    <footer className="bg-[#1a1a1a] text-white py-8 px-4 font-arial flex flex-wrap justify-between gap-4">
      <div className="logo text-2xl font-bold">SBA</div>
      
      <div className="column min-w-[120px] mx-4">
        <h3 className="text-gray-600 text-sm mb-2">Solutions</h3>
        <ul className="list-none p-0">
          <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">Data And AI</a></li>
          <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">IT and Buisness Automation</a></li>
          <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">Open Hybrid Cloud</a></li>
          <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">Security And Sustainability</a></li>
        </ul>
      </div>
      <div className="column min-w-[120px] mx-4">
        <h3 className="text-gray-600 text-sm mb-2">About</h3>
        <ul className="list-none p-0">
          <li className="mb-1"><a href="Company" className="text-white text-[0.85rem] no-underline hover:underline">Company</a></li>
          {/* <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">Security</a></li>
          <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">Company</a></li>
          <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">Blog</a></li>
          <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">Newsroom</a></li> */}
          <li className="mb-1"><a href="Join-with-us" className="text-white text-[0.85rem] no-underline hover:underline">Careers</a></li>
        </ul>
      </div>
      <div className="column min-w-[120px] mx-4">
        <h3 className="text-gray-600 text-sm mb-2">Resources</h3>
        <ul className="list-none p-0">
          <li className="mb-1"><a href="Company" className="text-white text-[0.85rem] no-underline hover:underline">About us</a></li>
          <li className="mb-1"><a href="our-stories" className="text-white text-[0.85rem] no-underline hover:underline">Our Stories</a></li>
          {/* <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">Privacy Policy</a></li>
          <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">Press Kit</a></li> */}
        </ul>
      </div>
      <div className="column follow min-w-[120px] mx-4">
        <h3 className="text-gray-600 text-sm mb-2">Follow</h3>
        <ul className="list-none p-0">
          <li className="mb-1"><a href="https://www.linkedin.com/company/sba-info-solutions" className="text-gray-600 text-[0.85rem] no-underline hover:text-white">LinkedIn</a></li>
          {/* <li className="mb-1"><a href="#" className="text-gray-600 text-[0.85rem] no-underline hover:text-white">X</a></li> */}
        </ul>
      </div>
      <div className="copyright w-full text-center text-gray-600 text-[0.75rem] mt-4">
        Copyright © 1996 - 2025, SBA Info Solutions.
      </div>
    </footer>
   </>
  );
};

export default Footer;