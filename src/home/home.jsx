import React, { useEffect, useRef, useState } from 'react';
import herosectionvideo from "./nature.mp4"
import VideoCarousel from './carousal';
import AOS from "aos";
import "aos/dist/aos.css";
import Ourservices from './ourservices';
import CountUp from 'react-countup';

function Home(){


  const ImpactCard = ({ value, label, suffix = '', duration = 2, delay = 0 }) => {
    return (
      <div
        className="p-6 bg-black/90 backdrop-blur-sm rounded-2xl shadow hover:shadow-md transition flex flex-col items-center"
        data-aos="fade-up"
        data-aos-delay={delay * 1000}
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center mb-2">
          {typeof value === 'number' ? (
            <CountUp
              start={0}
              end={value}
              duration={duration}
              suffix={suffix}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          ) : (
            value
          )}
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 text-center">{label}</p>
      </div>
    );
  };
  
 const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };


const [showPopup, setShowPopup] = useState(false);
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    
      useEffect(() => {
        AOS.init({
              duration: 1000,
              once: true,
            });
      }, []);
    
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
    
    return(
        <>
      <section className="min-h-screen flex items-center justify-center text-center pt-10 px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            Automate The Mundane
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 text-white max-w-xl mx-auto">
            Elevate The Human Potential
          </p>
          <button
            onClick={() => setShowPopup(true)}
            className="relative cursor-pointer inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded transition"
          >
            <span className="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
            <span className="relative z-10 group-hover:text-black">Request a Demo</span>
          </button>
        </div>
      </section>

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
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
        {/* Demo Request Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className=" rounded-lg p-6 w-full max-w-md relative animate-scaleIn transform">
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
                  className="w-full px-3 py-2 border border-gray-100  text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full px-3 py-2 border text-white border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full px-3 py-2 border text-white border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full px-3 py-2 text-white border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={closePopup}
                  className="flex-1 px-4 py-2 border border-gray-100 text-gray-100 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-blue-700"
                >
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

        <br /><br /><br />
        <div data-aos="fade-up" className="video-container relative w-full max-w-[1300px] mx-auto aspect-[16/9]">
            <video ref={videoRef} className="w-full h-full object-cover">
                <source src={herosectionvideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div
                className="play-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[1.5rem] bg-[rgba(121,119,119,0.7)] py-2 px-4 rounded-md cursor-pointer transition-colors duration-300 hover:bg-[rgba(103,102,102,0.9)]"
                onClick={handlePlayPause}
            >
                <i className={`fa-solid ${videoRef.current?.paused ? 'fa-play' : 'fa-pause'}`}></i>
      </div>
    </div>

  <section className="py-16 bg-black text-white" >
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-4xl font-bold mb-6">Unlock Efficiency with Intelligent Automation</h2>
    <p className="max-w-3xl mx-auto text-lg mb-12">
      Transform your business operations with smart automation solutions that enhance productivity, streamline workflows, and deliver faster results across all areas of your business.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-12">
      {/* Card 1 */}
      <div data-aos="fade-up" className="group relative w-full sm:w-1/3 bg-[#1a1a1a] text-left p-8 rounded-lg shadow-lg overflow-hidden transition-transform duration-500 hover:scale-105">
        {/* Border Animations */}
        <span className="absolute left-0 top-0 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
        <span className="absolute right-0 top-0 h-0 w-0.5 bg-red-600 transition-all duration-300 delay-500 group-hover:h-full"></span>
        <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-red-600 transition-all duration-300 delay-500 group-hover:w-full"></span>
        <span className="absolute bottom-0 left-0 h-0 w-0.5 bg-red-600 transition-all duration-300 delay-500 group-hover:h-full"></span>

        <div className="relative z-10">
          <h3 className="text-xl font-semibold mb-4">AI-Powered Automation</h3>
          <p className="text-lg">
            Empower your business with AI-driven automation tools to enhance customer engagement, support, and insights.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div data-aos="fade-up" className="group relative w-full sm:w-1/3 bg-[#1a1a1a] text-left p-8 rounded-lg shadow-lg overflow-hidden transition-transform duration-500 hover:scale-105">
        {/* Border Animations */}
        <span className="absolute left-0 top-0 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
        <span className="absolute right-0 top-0 h-0 w-0.5 bg-red-600 transition-all duration-300 delay-150 group-hover:h-full"></span>
        <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-red-600 transition-all duration-300 delay-300 group-hover:w-full"></span>
        <span className="absolute bottom-0 left-0 h-0 w-0.5 bg-red-600 transition-all duration-300 delay-500 group-hover:h-full"></span>

        <div className="relative z-10">
          <h3 className="text-xl font-semibold mb-4">IT & Infrastructure Automation</h3>
          <p className="text-lg">
            Automate and manage your IT infrastructure and operations to ensure scalability, reliability, and speed.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div data-aos="fade-up" className="group relative w-full sm:w-1/3 bg-[#1a1a1a] text-left p-8 rounded-lg shadow-lg overflow-hidden transition-transform duration-500 hover:scale-105">
        {/* Border Animations */}
        <span className="absolute left-0 top-0 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
        <span className="absolute right-0 top-0 h-0 w-0.5 bg-red-600 transition-all duration-300 delay-150 group-hover:h-full"></span>
        <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-red-600 transition-all duration-300 delay-300 group-hover:w-full"></span>
        <span className="absolute bottom-0 left-0 h-0 w-0.5 bg-red-600 transition-all duration-300 delay-500 group-hover:h-full"></span>

        <div className="relative z-10">
          <h3 className="text-xl font-semibold mb-4">Cloud & DevOps Automation</h3>
          <p className="text-lg">
            Achieve seamless integration, delivery, and management with powerful cloud automation and DevOps solutions.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


        <br /><br /><br />
        <Ourservices />
        <br /><br /><br />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12"
            data-aos="fade-up"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center mb-2">
              Our Impact
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="p-6 shadow hover:shadow-md transition border-b border-[#1F1D1A] lg:border-b-0 lg:border-r" data-aos="fade-up">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center mb-2">
                <ImpactCard value={300} suffix="+" duration={5}  delay={0.1} />
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-white text-center">
                Customers
              </p>
            </div>

            <div className="p-6 shadow hover:shadow-md transition border-b border-[#1F1D1A] lg:border-b-0 lg:border-r" data-aos="fade-up">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center mb-2">
                   <ImpactCard value={30} suffix="+" duration={5}  delay={1.0} />
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-white text-center">
                  Years in Market
                </p>
              </div>

            <div className="p-6 shadow hover:shadow-md transition border-b border-[#1F1D1A] lg:border-b-0 lg:border-r" data-aos="fade-up">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center mb-2">
                  <ImpactCard value="Best"  delay={2.0} />
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-white text-center">
                   Predictive Support
                </p>
              </div>

          </div>
        </div>
      </div>

        <br /><br /><br />

        <div data-aos="fade-up">
    <VideoCarousel/>

        </div>
        <br />
              {/* Closing CTA */}
      <section className="bg-[#D5D1DB] py-24 text-center" data-aos="fade-up">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-3xl  font-medium text-black mb-8">
            Empower with Data, Accelerate with Agility
            
          </h2>
          <button onClick={() => setShowPopup(true)} className="relative cursor-pointer inline-block px-6 py-3 font-medium group overflow-hidden border bg-black text-white rounded">
            <span className="absolute inset-0 w-0 bg-gray-200 transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative z-10 group-hover:text-black">Request a Demo</span>
          </button>
        </div>
      </section>
        </>
    )
}

export default Home
