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

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .mega-menu-backdrop {
          background: linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0, 0, 0, 0.95) 100%);
          backdrop-filter: blur(10px);
        }

        /* Hamburger Menu Styles */
        .burger {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          padding: 8px;
        }

        .burger span {
          display: block;
          height: 2px;
          background-color: white;
          transition: all 0.3s ease-in-out;
          transform-origin: center;
        }

        .burger span:nth-child(1) {
          width: 1.25rem;
        }

        .burger span:nth-child(2) {
          width: 1rem;
          margin-top: 4px;
        }

        .burger span:nth-child(3) {
          width: 0.75rem;
          margin-top: 4px;
        }

        /* Hamburger Animation when opened */
        .burger.toggle-burger span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .burger.toggle-burger span:nth-child(2) {
          opacity: 0;
        }

        .burger.toggle-burger span:nth-child(3) {
          width: 1.25rem;
          transform: rotate(-45deg) translate(7px, -6px);
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white">
           
             <div className="text-2xl font-bold text-white">
                <a href="/">
                  <img src={logo} alt="" width={50} />
                </a>
              </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:space-x-4">
            <div className="relative group">
              <a
                href="#"
                className="flex items-center pr-7 text-sm text-white hover:text-blue-400 transition-colors duration-200"
              >
                Solutions
                <span className="ml-1 transition-transform duration-200 group-hover:rotate-180">
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </a>
              
              {/* Mega Menu for Solutions */}
              <div className="absolute left-0 top-full pt-2 hidden group-hover:block animate-slideDown">
                <div className="mega-menu-backdrop rounded-xl shadow-2xl border border-gray-700 p-8 w-[600px] -translate-x-1/4">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                        Core Solutions
                      </h3>
                      <div className="space-y-3">
                        <a
                          href="data-and-ai"
                          className="group/item flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-all duration-200"
                        >
                          <div className="w-10 h-10 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-gray-900 group-hover/item:border-white transition-all duration-200">
                            <i className="fa-solid fa-brain text-black group-hover/item:text-red-500 text-sm transition-colors duration-200"></i>
                          </div>
                          <div>
                            <h4 className="text-white font-medium group-hover/item:text-white transition-colors">
                              Data and AI
                            </h4>
                            <p className="text-gray-400 text-xs mt-1">
                              Harness the power of artificial intelligence
                            </p>
                          </div>
                        </a>
                        
                        <a
                          href="It_and_buisness_automation"
                          className="group/item flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-all duration-200"
                        >
                          <div className="w-10 h-10 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-gray-900 group-hover/item:border-white transition-all duration-200">
                            <i className="fa-solid fa-cogs text-black group-hover/item:text-red-500 text-sm transition-colors duration-200"></i>
                          </div>
                          <div>
                            <h4 className="text-white font-medium group-hover/item:text-white transition-colors">
                              IT & Business Automation
                            </h4>
                            <p className="text-gray-400 text-xs mt-1">
                              Streamline your operations
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                        Infrastructure
                      </h3>
                      <div className="space-y-3">
                        <a
                          href="Open_hybrid_cloud"
                          className="group/item flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-all duration-200"
                        >
                          <div className="w-10 h-10 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-gray-900 group-hover/item:border-white transition-all duration-200">
                            <i className="fa-solid fa-cloud text-black group-hover/item:text-red-500 text-sm transition-colors duration-200"></i>
                          </div>
                          <div>
                            <h4 className="text-white font-medium group-hover/item:text-white transition-colors">
                              Open Hybrid Cloud
                            </h4>
                            <p className="text-gray-400 text-xs mt-1">
                              Flexible cloud solutions
                            </p>
                          </div>
                        </a>
                        
                        <a
                          href="Security_and_sustainability"
                          className="group/item flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-all duration-200"
                        >
                          <div className="w-10 h-10 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-gray-900 group-hover/item:border-white transition-all duration-200">
                            <i className="fa-solid fa-shield-alt text-black group-hover/item:text-red-500 text-sm transition-colors duration-200"></i>
                          </div>
                          <div>
                            <h4 className="text-white font-medium group-hover/item:text-white transition-colors">
                              Security & Sustainability
                            </h4>
                            <p className="text-gray-400 text-xs mt-1">
                              Secure and sustainable tech
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Call to Action */}
                  <div className="mt-8 pt-6 border-t border-gray-600">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">Need help choosing?</h4>
                        <p className="text-gray-400 text-sm">Talk to our solution experts</p>
                      </div>
                      <button onClick={() => setShowPopup(true)} className="px-4 py-2 bg-black-600 text-white rounded-lg hover:bg-gray-900 cursor-pointer transition-colors duration-200 text-sm">
                        Get Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <a href="Company" className="hover:text-blue-400 pr-7 text-sm text-white transition-colors duration-200">
              Company
            </a>
            <a href="Join-with-us" className="hover:text-blue-400 pr-7 text-sm text-white transition-colors duration-200">
              Careers
            </a>
            
            <div className="relative group">
              <a
                href="#"
                className="hover:text-blue-400 flex items-center pr-7 text-sm text-white transition-colors duration-200"
              >
                News
                <span className="ml-1 transition-transform duration-200 group-hover:rotate-180">
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </a>
              
              {/* Mega Menu for News */}
              <div className="absolute left-0 top-full pt-2 hidden group-hover:block animate-slideDown">
                <div className="mega-menu-backdrop rounded-xl shadow-2xl border border-gray-700 p-6 w-[400px] -translate-x-1/3">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                        Stay Updated
                      </h3>
                      <div className="space-y-3">
                        <a
                          href="About-us"
                          className="group/item flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-all duration-200"
                        >
                          <div className="w-8 h-8 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-gray-900 group-hover/item:border-white transition-all duration-200">
                            <i className="fa-solid fa-info-circle text-black group-hover/item:text-red-500 text-xs transition-colors duration-200"></i>
                          </div>
                          <div>
                            <h4 className="text-white font-medium group-hover/item:text-white transition-colors">
                              About Us
                            </h4>
                            <p className="text-gray-400 text-xs">Learn about our mission</p>
                          </div>
                        </a>
                        
                        <a
                          href="#"
                          className="group/item flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-all duration-200"
                        >
                          <div className="w-8 h-8 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-gray-900 group-hover/item:border-white transition-all duration-200">
                            <i className="fa-solid fa-newspaper text-black group-hover/item:text-red-500 text-xs transition-colors duration-200"></i>
                          </div>
                          <div>
                            <h4 className="text-white font-medium group-hover/item:text-white transition-colors">
                              Press Releases
                            </h4>
                            <p className="text-gray-400 text-xs">Latest company news</p>
                          </div>
                        </a>
                        
                        <a
                          href="#"
                          className="group/item flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-all duration-200"
                        >
                          <div className="w-8 h-8 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-gray-900 group-hover/item:border-white transition-all duration-200">
                            <i className="fa-solid fa-blog text-black group-hover/item:text-red-500 text-xs transition-colors duration-200"></i>
                          </div>
                          <div>
                            <h4 className="text-white font-medium group-hover/item:text-white transition-colors">
                              Blog
                            </h4>
                            <p className="text-gray-400 text-xs">Insights and articles</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <a href="our-stories" className="hover:text-blue-400 text-sm text-white transition-colors duration-200">
              Stories
            </a>
          </div>

          {/* Desktop Demo Button - Only show when scrolling up past threshold */}
          <div className="hidden md:block">
            <div className={`transition-all duration-300 ${showDemoButton ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              <button 
                onClick={() => setShowPopup(true)} 
                className="relative inline-block cursor-pointer px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded-lg hover:border-blue-400 transition-all duration-200"
              >
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="relative z-10 group-hover:text-white">Request a Demo</span>
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
                className={`nav-links fixed top-0 left-0 w-full h-screen bg-black bg-opacity-95 z-20 flex flex-col justify-start pt-20 pl-4 transition-all duration-300 ease-in-out
                  ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                id="nav-links"
              >
                {/* Close Button */}
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
                aria-label="Close Menu"
              >
                ×
              </button>

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
                    <a href="About-us" className="block px-8 py-2 hover:bg-gray-800 text-white">
                      About us
                    </a>
                    <a href="#" className="block px-8 py-2 hover:bg-gray-800 text-white">
                      Press
                    </a>
                    <a href="#" className="block px-8 py-2 hover:bg-gray-800 text-white">
                      Blog
                    </a>
                  </div>
                </div>
                <a href="our-stories" className="hover:text-gray-300 text-white text-[1.1rem] p-3 w-full">
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
      
      {/* FontAwesome CDN for icons */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
      />
    </nav>
  );
};

export default Navbar;