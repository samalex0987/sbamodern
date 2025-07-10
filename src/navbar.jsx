import React, { useState, useEffect } from 'react';
import logo from "./logo.png"

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showDemoButton, setShowDemoButton] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.email) {
      alert("Demo booked successfully!");
      setShowPopup(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    } else {
      alert("Please fill in required fields (Name and Email)");
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setOpenDropdown(null);
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

  // Scroll handler for showing/hiding demo button
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const scrollThreshold = 300; // Adjust this value as needed
    
    // Show button when scrolling up and past threshold
    if (currentScrollY < lastScrollY && currentScrollY > scrollThreshold) {
      setShowDemoButton(true);
    } else if (currentScrollY <= scrollThreshold || currentScrollY > lastScrollY) {
      setShowDemoButton(false);
    }
    
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className="fixed w-full bg-black bg-opacity-90 shadow-md z-10">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideOutRight {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(20px);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }
        
        .animate-slideOutRight {
          animation: slideOutRight 0.3s ease-out;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white">
            <a href="/">
              <img src={logo} alt="" width={50} />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:space-x-4">
            <div className="relative group">
              <a
                href="#"
                className="flex items-center pr-7 text-sm text-white"
              >
                Solutions
                <span className="ml-1 transition-transform duration-200 group-hover:rotate-180">
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </a>
              <div className="absolute hidden group-hover:block bg-black bg-opacity-90 py-2 w-48 rounded-md shadow-lg">
                <a
                  href="data-and-ai"
                  className="block px-4 py-2 text-sm text-white"
                >
                  Data and AI
                </a>
                <a
                  href="It_and_buisness_automation"
                  className="block px-4 py-2 text-sm text-white"
                >
                  IT and Business Automation
                </a>
                <a
                  href="Open_hybrid_cloud"
                  className="block px-4 py-2 text-sm text-white"
                >
                  Open Hybrid Cloud
                </a>
                <a
                  href="Security_and_sustainability"
                  className="block px-4 py-2 text-sm text-white"
                >
                  Security and Sustainability
                </a>
              </div>
            </div>
            <a href="Company" className="hover:text-gray-300 pr-7 text-sm text-white">
              Company
            </a>
            <a href="Join-with-us" className="hover:text-gray-300 pr-7 text-sm text-white">
              Careers
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
                <a href="#" className="block px-4 py-2 text-sm text-white">
                  About us
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-white">
                  Blog
                </a>
              </div>
            </div>
            <a href="#" className="hover:text-gray-300 text-sm text-white">
              Stories
            </a>
          </div>

          {/* Desktop Demo Button - Only show when scrolling up past threshold */}
          <div className="hidden md:block">
            <div className={`transition-all duration-300 ${showDemoButton ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              <button 
                onClick={() => setShowPopup(true)} 
                className="relative inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded"
              >
                <span className="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="relative z-10 group-hover:text-black">Request a Demo</span>
              </button>
            </div>
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
                      href="data-and-ai"
                      className="block px-8 py-2 hover:bg-gray-800 text-white"
                    >
                      Data and AI
                    </a>
                    <a
                      href="It_and_buisness_automation"
                      className="block px-8 py-2 hover:bg-gray-800 text-white"
                    >
                      IT and Business Automation
                    </a>
                    <a
                      href="Open_hybrid_cloud"
                      className="block px-8 py-2 hover:bg-gray-800 text-white"
                    >
                      Open Hybrid Cloud
                    </a>
                    <a
                      href="Security_and_sustainability"
                      className="block px-8 py-2 hover:bg-gray-800 text-white"
                    >
                      Security and Sustainability
                    </a>
                  </div>
                </div>
                <a href="Company" className="hover:text-gray-300 text-white text-[1.1rem] p-3 w-full">
                  Company
                </a>
                <a href="Join-with-us" className="hover:text-gray-300 text-white text-[1.1rem] p-3 w-full">
                  Careers
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
                  Stories
                </a>
                
                {/* Mobile Demo Button - Always visible */}
                <button 
                  onClick={() => setShowPopup(true)} 
                  className="relative inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded"
                >
                  <span className="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
                  <span className="relative z-10 group-hover:text-black">Request a Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Demo Request Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-black bg-opacity-90 rounded-lg p-6 w-full max-w-md relative animate-scaleIn transform">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>
            
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Request a Demo</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-100 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-100 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-100 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border text-white border-gray-100 bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-100 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border text-white border-gray-100 bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-100 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 text-white border border-gray-100 bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={closePopup}
                  className="flex-1 px-4 py-2 border border-gray-100 text-gray-100 rounded-md hover:bg-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                >
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;