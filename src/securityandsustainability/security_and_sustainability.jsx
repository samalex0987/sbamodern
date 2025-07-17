import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import watson_assistant from "./watson_assistant.gif";
import watson_discovery from "./watson_discovery.gif";

function Security_and_sustainability() {
 
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
    
  
  return (
    <>
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
      {/* Hero Section */}
<section className="min-h-screen flex items-center justify-center text-center pt-20 px-4" data-aos="fade-up">
  <div>
    {/* Responsive Heading */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white">
      Security and Sustainability
    </h1>

    {/* Responsive Subheading */}
    <p className="text-sm sm:text-base md:text-lg mb-6 max-w-xl mx-auto text-white">
      Secure Enterprise Computing
    </p>

    {/* Responsive Button */}
    <button
      onClick={() => setShowPopup(true)}
      className="relative inline-block cursor-pointer px-5 py-2.5 sm:px-6 sm:py-3 font-medium group overflow-hidden border border-white text-white rounded"
    >
      <span className="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
      <span className="relative z-10 group-hover:text-black">Request a Demo</span>
    </button>
  </div>
</section>


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


      {/* Grid Section 1 */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12"
            data-aos="fade-up"
            // data-aos-delay="200"
          >
            <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl text-white">
              Empower Your Enterprise with Security & Sustainability
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" >
            <div
              className="p-6 shadow hover:shadow-md transition"
              data-aos="fade-up"
              // data-aos-delay="300"
              style={{borderRight:"1px solid #1F1D1A"}}
            >
              <div className="mb-4 w-12 h-12 mx-auto" >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full text-white"
                >
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-100 text-center mb-2">
                Enterprise-Grade Security
              </h3>
              <p className="text-sm text-gray-100 text-center">
                Protect sensitive data and workloads with layered security, threat detection, and zero-trust architecture across all environments.
              </p>
            </div>

            <div
              className="p-6  shadow hover:shadow-md transition"
              data-aos="fade-up"
              // data-aos-delay="400"
              style={{borderRight:"1px solid #1F1D1A"}}
            >
              <div className="mb-4 w-12 h-12 mx-auto">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full text-white"
                >
                  <path d="M4 4h16v2H4zm0 5h16v2H4zm0 5h10v2H4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-100 text-center mb-2">
                Sustainable Cloud Operations
              </h3>
              <p className="text-sm text-gray-100 text-center">
                Optimize resource usage and reduce carbon footprint with intelligent workload placement and energy-efficient infrastructure strategies.
              </p>
            </div>

            <div
              className="p-6 rounded-xl shadow hover:shadow-md transition"
              data-aos="fade-up"
              // data-aos-delay="500"
            >
              <div className="mb-4 w-12 h-12 mx-auto">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full text-white"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6h2a4 4 0 0 1 8 0h2c0-3.31-2.69-6-6-6z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-100 text-center mb-2">
                Compliance & Risk Resilience
              </h3>
              <p className="text-sm text-gray-100 text-center">
                Stay audit-ready and meet evolving regulations with automated compliance frameworks and real-time risk visibility.
              </p>
            </div>
          </div>
        </div>
      </div>

     
      {/* Powered By Heading */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl">
          Intelligent Solutions by Redhat
        </h2>
      </div>

      {/* Watson Assistant Section */}
<div className="py-16 text-white" data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#1F1D1A]">
      <div className="order-1 lg:order-1">
        <img
          src={watson_assistant}
          alt="Watson Assistant"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      <div className="order-2 lg:order-2 lg:pl-10 px-4 sm:px-6 pb-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">LinuxOne</h2>
        <p className="text-base sm:text-lg mb-6">
          LinuxONE is a portfolio of hardware, software, and solutions designed for an enterprise-grade Linux environment. It is optimized for running more transactions faster and with more security and reliability, specifically for the open-source community.
        </p>
        <a
          href="https://www.ibm.com/products/linuxone"
          className="inline-block px-6 py-3 bg-gray-100 hover:bg-gray-300 rounded text-black font-medium transition"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</div>

{/* Watson Discovery Section */}
<div className="py-16 text-white" data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#1F1D1A]">
      <div className="order-2 lg:order-1 lg:pl-10 px-4 sm:px-6 pb-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Mainframe</h2>
        <p className="text-base sm:text-lg mb-6">
          Mainframe computing uses large, powerful computers for high-volume data processing and critical applications. These systems offer exceptional reliability, security, and processing power for industries like banking and healthcare.
        </p>
        <a
          href="https://www.ibm.com/think/topics/mainframe"
          className="inline-block px-6 py-3 bg-gray-100 hover:bg-gray-300 rounded text-black font-medium transition"
        >
          Learn More
        </a>
      </div>
      <div className="order-1 lg:order-2">
        <img
          src={watson_discovery}
          alt="Watson Discovery"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</div>


      {/* Grid Section 2 */}
      <section className="max-w-7xl mx-auto px-4 py-16" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-white">
          Everything You Need to Build an Open Hybrid Cloud
          <br className="hidden md:block" /> in One Unified Platform
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Zero Trust Architecture",
              description:
                "Enforce continuous verification and least-privilege access across users, devices, and services to reduce attack surfaces.",
            },
            {
              title: "Sustainable Infrastructure",
              description:
                "Design and deploy cloud environments with energy-efficient architectures and carbon-aware workload scheduling.",
            },
            {
              title: "Automated Compliance",
              description:
                "Meet evolving regulatory standards with real-time compliance monitoring, automated controls, and centralized auditing.",
            },
            {
              title: "Resilient Operations",
              description:
                "Maintain business continuity through self-healing systems, intelligent failover strategies, and cross-cloud resilience.",
            },
            {
              title: "Carbon Intelligence",
              description:
                "Monitor, measure, and reduce emissions across your IT estate with granular insights and AI-driven sustainability metrics.",
            },
            {
              title: "Secure Edge Deployment",
              description:
                "Extend data protection and policy enforcement to edge locations while enabling real-time insights and AI at the edge.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-neutral-900 p-6 rounded-xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-4 text-2xl"></div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#D5D1DB] py-24 text-center" data-aos="fade-up">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-3xl  font-medium text-black mb-8">
            Secure your future with sustainable technology.
            <br />
            Protect data and the planet with smart AI solutions.
          </h2>
             <button onClick={()=>{alert("Requested successfully")}} className="relative cursor-pointer inline-block px-6 py-3 font-medium group overflow-hidden border bg-black text-white rounded">
            <span className="absolute inset-0 w-0 bg-gray-200 transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative z-10 group-hover:text-black">Know More</span>
          </button>
        </div>
      </section>

    </>
  );
}

export default Security_and_sustainability;
