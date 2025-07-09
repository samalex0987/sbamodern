import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setOpenDropdown(null); // Close dropdowns when menu toggles
  };

  const toggleDropdown = (dropdown) => {
    if (window.innerWidth <= 768) {
      setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    }
  };

  const handleClickOutside = (e) => {
    if (window.innerWidth <= 768 && !e.target.closest('.burger') && !e.target.closest('.group')) {
      setOpenDropdown(null);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="fixed w-full bg-black bg-opacity-90 shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white">SBA</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:space-x-4">
            <div className="relative group">
              <a
                href="#"
                className="hover:text-gray-300 flex items-center pr-7 text-sm text-white"
              >
                Platform
                <span className="ml-1 transition-transform duration-200 group-hover:rotate-180">
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </a>
              <div className="absolute hidden group-hover:block bg-black bg-opacity-90 py-2 w-48 rounded-md shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-800 text-sm text-white">
                  Assistant
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-800 text-sm text-white">
                  Vault
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-800 text-sm text-white">
                  Knowledge
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-800 text-sm text-white">
                  Workflows
                </a>
              </div>
            </div>
            <div className="relative group">
              <a
                href="#"
                className="hover:text-gray-300 flex items-center pr-7 text-sm text-white"
              >
                Solutions
                <span className="ml-1 transition-transform duration-200 group-hover:rotate-180">
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </a>
              <div className="absolute hidden group-hover:block bg-black bg-opacity-90 py-2 w-48 rounded-md shadow-lg">
                <a
                  href="data-and-ai"
                  className="block px-4 py-2 hover:bg-gray-800 text-sm text-white"
                >
                  Data and AI
                </a>
                <a
                  href="It_and_buisness_automation"
                  className="block px-4 py-2 hover:bg-gray-800 text-sm text-white"
                >
                  IT and Business Automation
                </a>
                <a
                  href="Open_hybrid_cloud"
                  className="block px-4 py-2 hover:bg-gray-800 text-sm text-white"
                >
                  Open Hybrid Cloud
                </a>
                <a
                  href="Security_and_sustainability"
                  className="block px-4 py-2 hover:bg-gray-800 text-sm text-white"
                >
                  Security and Sustainability
                </a>
              </div>
            </div>
            <a href="#" className="hover:text-gray-300 pr-7 text-sm text-white">
              Customers
            </a>
            <a href="#" className="hover:text-gray-300 pr-7 text-sm text-white">
              Security
            </a>
            <div className="relative group">
              <a
                href="#"
                className="hover:text-gray-300 flex items-center pr-7 text-sm text-white"
              >
                News
                <span className="ml-1 transition-transform duration-200 group-hover:rotate-180">
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </a>
              <div className="absolute hidden group-hover:block bg-black bg-opacity-90 py-2 w-48 rounded-md shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-800 text-sm text-white">
                  Updates
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-800 text-sm text-white">
                  Press
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-800 text-sm text-white">
                  Blog
                </a>
              </div>
            </div>
            <a href="#" className="hover:text-gray-300 text-sm text-white">
              Company
            </a>
          </div>
          <div className="hidden md:block">
            <a href="#" className="hover:text-gray-300 text-sm text-white">
              Login
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <div
              className={`burger ${isOpen ? 'toggle-burger' : ''}`}
              aria-expanded={isOpen}
              aria-controls="nav-links"
              onClick={toggleMenu}
            >
              <span className="block h-[2px] bg-white transition-all duration-300 ease-in-out w-[1.25rem]"></span>
              <span className={`block h-[2px] bg-white transition-all duration-300 ease-in-out w-[1rem] mt-1 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-[2px] bg-white transition-all duration-300 ease-in-out w-[0.75rem] mt-1 ${isOpen ? 'w-[1.25rem]' : ''}`}></span>
            </div>
            <div
              className={`nav-links fixed top-0 left-0 w-full h-screen bg-black bg-opacity-95 z-20 flex flex-col justify-start pt-20 pl-4 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}
              id="nav-links"
            >
              <div className="flex flex-col items-start space-y-2">
                <div className="relative group w-full">
                  <a
                    href="#"
                    className="hover:text-gray-300 flex items-center text-white text-[1.1rem] p-3 w-full"
                    onClick={() => toggleDropdown('platform')}
                  >
                    Platform
                    <span className={`ml-1 transition-transform duration-200 ${openDropdown === 'platform' ? 'rotate-180' : ''}`}>
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </a>
                  <div
                    className={`bg-black bg-opacity-90 py-2 w-full transition-all duration-300 ease-in-out ${openDropdown === 'platform' ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                  >
                    <a href="#" className="block px-8 py-2 hover:bg-gray-800 text-white">
                      Assistant
                    </a>
                    <a href="#" className="block px-8 py-2 hover:bg-gray-800 text-white">
                      Vault
                    </a>
                    <a href="#" className="block px-8 py-2 hover:bg-gray-800 text-white">
                      Knowledge
                    </a>
                    <a href="#" className="block px-8 py-2 hover:bg-gray-800 text-white">
                      Workflows
                    </a>
                  </div>
                </div>
                <div className="relative group w-full">
                  <a
                    href="#"
                    className="hover:text-gray-300 flex items-center text-white text-[1.1rem] p-3 w-full"
                    onClick={() => toggleDropdown('solutions')}
                  >
                    Solutions
                    <span className={`ml-1 transition-transform duration-200 ${openDropdown === 'solutions' ? 'rotate-180' : ''}`}>
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </a>
                  <div
                    className={`bg-black bg-opacity-90 py-2 w-full transition-all duration-300 ease-in-out ${openDropdown === 'solutions' ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                  >
                    <a
                      href="./data_and_ai.html"
                      className="block px-8 py-2 hover:bg-gray-800 text-white"
                    >
                      Data and AI
                    </a>
                    <a
                      href="./it_and_buisness_automation.html"
                      className="block px-8 py-2 hover:bg-gray-800 text-white"
                    >
                      IT and Business Automation
                    </a>
                    <a
                      href="./open_hybrid_cloud.html"
                      className="block px-8 py-2 hover:bg-gray-800 text-white"
                    >
                      Open Hybrid Cloud
                    </a>
                    <a
                      href="./security_and_sustainability.html"
                      className="block px-8 py-2 hover:bg-gray-800 text-white"
                    >
                      Security and Sustainability
                    </a>
                  </div>
                </div>
                <a href="#" className="hover:text-gray-300 text-white text-[1.1rem] p-3 w-full">
                  Customers
                </a>
                <a href="#" className="hover:text-gray-300 text-white text-[1.1rem] p-3 w-full">
                  Security
                </a>
                <div className="relative group w-full">
                  <a
                    href="#"
                    className="hover:text-gray-300 flex items-center text-white text-[1.1rem] p-3 w-full"
                    onClick={() => toggleDropdown('news')}
                  >
                    News
                    <span className={`ml-1 transition-transform duration-200 ${openDropdown === 'news' ? 'rotate-180' : ''}`}>
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </a>
                  <div
                    className={`bg-black bg-opacity-90 py-2 w-full transition-all duration-300 ease-in-out ${openDropdown === 'news' ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                  >
                    <a href="#" className="block px-8 py-2 hover:bg-gray-800 text-white">
                      Updates
                    </a>
                    <a href="#" className="block px-8 py-2 hover:bg-gray-800 text-white">
                      Press
                    </a>
                    <a href="#" className="block px-8 py-2 hover:bg-gray-800 text-white">
                      Blog
                    </a>
                  </div>
                </div>
                <a href="#" className="hover:text-gray-300 text-white text-[1.1rem] p-3 w-full">
                  Company
                </a>
                <a href="#" className="hover:text-gray-300 text-white text-[1.1rem] p-3 w-full">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;