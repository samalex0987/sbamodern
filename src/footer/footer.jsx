import React from 'react';

const Footer = () => {
  return (
   <>
    
    <footer className="bg-[#1a1a1a] text-white py-8 px-4 font-arial flex flex-wrap justify-between gap-4">
      <div className="logo text-2xl font-bold">H</div>
      <div className="column min-w-[120px] mx-4">
        <h3 className="text-gray-600 text-sm mb-2">Platform</h3>
        <ul className="list-none p-0">
          <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">Assistant</a></li>
          <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">Vault</a></li>
          <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">Knowledge</a></li>
          <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">Workflows</a></li>
        </ul>
      </div>
      <div className="column min-w-[120px] mx-4">
        <h3 className="text-gray-600 text-sm mb-2">Solutions</h3>
        <ul className="list-none p-0">
          <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">Innovation</a></li>
          <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">In-House</a></li>
          <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">Transactional</a></li>
          <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">Litigation</a></li>
        </ul>
      </div>
      <div className="column min-w-[120px] mx-4">
        <h3 className="text-gray-600 text-sm mb-2">About</h3>
        <ul className="list-none p-0">
          <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">Customers</a></li>
          <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">Security</a></li>
          <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">Company</a></li>
          <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">Blog</a></li>
          <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">Newsroom</a></li>
          <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">Careers</a></li>
        </ul>
      </div>
      <div className="column min-w-[120px] mx-4">
        <h3 className="text-gray-600 text-sm mb-2">Resources</h3>
        <ul className="list-none p-0">
          <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">Legal</a></li>
          <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">Privacy Policy</a></li>
          <li className="mb-1"><a href="#" className="text-white text-[0.85rem] no-underline hover:underline">Press Kit</a></li>
        </ul>
      </div>
      <div className="column follow min-w-[120px] mx-4">
        <h3 className="text-gray-600 text-sm mb-2">Follow</h3>
        <ul className="list-none p-0">
          <li className="mb-1"><a href="#" className="text-gray-600 text-[0.85rem] no-underline hover:text-white">LinkedIn</a></li>
          <li className="mb-1"><a href="#" className="text-gray-600 text-[0.85rem] no-underline hover:text-white">X</a></li>
        </ul>
      </div>
      <div className="copyright w-full text-center text-gray-600 text-[0.75rem] mt-4">
        Copyright © 2025 Counsel AI Corporation. All rights reserved.
      </div>
    </footer>
   </>
  );
};

export default Footer;