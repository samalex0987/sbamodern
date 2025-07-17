import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import watson_assistant from "./watson_assistant.gif";
import watson_discovery from "./watson_discovery.gif";
import { CloudCheck, ShieldUserIcon, Workflow } from "lucide-react";

function Open_hybrid_cloud() {

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

      <section
        className="min-h-screen flex items-center justify-center text-center pt-20 px-4"
        data-aos="fade-up"
      >
        <div>
          {/* Responsive Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white">
            Open Hybrid Cloud
          </h1>

          {/* Responsive Subheading */}
          <p className="text-sm sm:text-base md:text-lg mb-6 max-w-xl mx-auto text-white">
            Integrated Cloud Solutions
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


      {/* Open Hybrid Cloud Strategy Section */}
<div className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div
      className="text-center mb-12"
      data-aos="fade-up"
      // data-aos-delay="200"
    >
      <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl text-white">
        Enable an Open Hybrid Cloud Strategy
      </h2>
    </div>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Feature 1: Unified Cloud Infrastructure */}
      <div
        className="p-6 shadow hover:shadow-md transition"
        data-aos="fade-up"
        // data-aos-delay="300"
        style={{ borderRight: "1px solid #1F1D1A" }}
      >
        <div className="mb-4 w-12 h-12 mx-auto">
          <CloudCheck className="w-full h-full text-white transition-transform transform hover:scale-110" />
        </div>
        <h3 className="text-lg font-semibold text-center text-gray-100  mb-2">
          Unified Cloud Infrastructure
        </h3>
        <p className="text-sm text-gray-100 text-center">
          Simplify hybrid deployments with a consistent platform across public and private clouds improving workload mobility and governance.
        </p>
      </div>

      {/* Feature 2: Open Ecosystem Integration */}
      <div
        className="p-6 shadow hover:shadow-md transition"
        data-aos="fade-up"
        // data-aos-delay="400"
        style={{ borderRight: "1px solid #1F1D1A" }}
      >
        <div className="mb-4 w-12 h-12 mx-auto">
          <div>
              <Workflow className="w-full h-full text-white transition-transform transform hover:scale-110" />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-100 text-center mb-2">
          Open Ecosystem Integration
        </h3>
        <p className="text-sm text-gray-100 text-center">
          Integrate seamlessly with open-source tools and APIs to support innovation while avoiding vendor lock-in.
        </p>
      </div>

      {/* Feature 3: Secure & Scalable Architecture */}
      <div
        className="p-6 rounded-xl shadow hover:shadow-md transition"
        data-aos="fade-up"
        // data-aos-delay="500"
      >
        <div className="mb-4 w-12 h-12 mx-auto">
            <ShieldUserIcon className="w-full h-full text-white transition-transform transform hover:scale-110" />
        </div>
        <h3 className="text-lg font-semibold text-gray-100 text-center mb-2">
          Secure & Scalable Architecture
        </h3>
        <p className="text-sm text-gray-100 text-center">
          Ensure enterprise-grade security, compliance, and scalability from edge to core to cloud with a unified approach.
        </p>
      </div>
    </div>
  </div>
</div>

{/* Powered By */}
<div className="text-center mb-12" data-aos="fade-up" data-aos-delay="600">
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 sm:text-4xl">
    Intelligent Solutions by Redhat
  </h2>
</div>

<div className="py-16 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#1F1D1A]"
      data-aos="fade-up"
    >
      <div className="order-1 lg:order-1">
        <img
          src={watson_assistant}
          alt="RHEL Illustration"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      <div className="order-2 lg:order-2 lg:pl-10 px-4 sm:px-6 pb-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">RHEL</h2>
        <p className="text-base sm:text-lg mb-6">
          Red Hat Enterprise Linux (RHEL) is a stable and secure Linux
          distribution tailored for enterprise environments, offering
          robust performance and comprehensive support. It includes
          features like SELinux for enhanced security, regular updates
          for vulnerability management, and extensive documentation to
          aid system administrators in maintaining their infrastructure.
        </p>
        <a
          href="https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux"
          className="relative inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded"
        >
          <span className="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
          <span className="relative z-10 group-hover:text-black">Learn More</span>
        </a>
      </div>
    </div>
  </div>
</div>

<div className="py-16 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#1F1D1A]"
      data-aos="fade-up"
    >
      <div className="order-2 lg:order-1 lg:pl-10 px-4 sm:px-6 pb-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ansible</h2>
        <p className="text-base sm:text-lg mb-6">
          Ansible is an open-source automation tool that simplifies IT
          processes such as configuration management, application
          deployment, and orchestration by using human-readable YAML
          playbooks, eliminating the need for agents on target systems.
        </p>
        <a
          href="https://www.redhat.com/en/ansible-collaborative"
          className="relative inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded"
        >
          <span className="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
          <span className="relative z-10 group-hover:text-black">Learn More</span>
        </a>
      </div>

      <div className="order-1 lg:order-2">
        <img
          src={watson_discovery}
          alt="Ansible Illustration"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</div>


      {/* Powered By */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2
          className="text-3xl md:text-4xl font-semibold text-center mb-12 text-white"
          data-aos="fade-up"
          // data-aos-delay="900"
        >
          Everything You Need to Build an Open Hybrid Cloud
          <br className="hidden md:block" />
          in One Unified Platform
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            className="bg-neutral-900 p-6 rounded-xl"
            data-aos="fade-up"
            // data-aos-delay="1000"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              Unified Cloud Management
            </h3>
            <p className="text-sm text-gray-300">
              Centrally manage workloads across private, public, and edge
              environments to ensure consistency, visibility, and governance.
            </p>
          </div>

          <div
            className="bg-neutral-900 p-6 rounded-xl"
            data-aos="fade-up"
            // data-aos-delay="1100"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              Cloud-Native Flexibility
            </h3>
            <p className="text-sm text-gray-300">
              Empower developers with Kubernetes, containers, and microservices
              to build and scale cloud-native applications across any cloud.
            </p>
          </div>

          <div
            className="bg-neutral-900 p-6 rounded-xl"
            data-aos="fade-up"
            // data-aos-delay="1200"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              Interoperability & Portability
            </h3>
            <p className="text-sm text-gray-300">
              Avoid vendor lock-in with open standards that allow apps and data
              to move freely across hybrid and multicloud ecosystems.
            </p>
          </div>

          <div
            className="bg-neutral-900 p-6 rounded-xl"
            data-aos="fade-up"
            // data-aos-delay="1300"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              Security & Compliance
            </h3>
            <p className="text-sm text-gray-300">
              Maintain enterprise-grade security and meet regulatory needs with
              built-in controls, identity federation, and audit-ready policies.
            </p>
          </div>

          <div
            className="bg-neutral-900 p-6 rounded-xl"
            data-aos="fade-up"
            // data-aos-delay="1400"
          >
            <h3 className="text-lg font-semibold text-white mb-2">Cost Optimization</h3>
            <p className="text-sm text-gray-300">
              Gain insights into usage and spend across hybrid environments with
              intelligent cost tracking, forecasting, and chargeback models.
            </p>
          </div>

          <div
            className="bg-neutral-900 p-6 rounded-xl"
            data-aos="fade-up"
            // data-aos-delay="1500"
          >
            <h3 className="text-lg font-semibold text-white mb-2">Edge-to-Core Integration</h3>
            <p className="text-sm text-gray-300">
              Extend hybrid capabilities to the edge, enabling real-time
              processing, AI at the edge, and always-on connectivity from core
              to cloud.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA for Open Hybrid Cloud */}
      <section className="bg-[#D5D1DB] py-24 text-center" data-aos="fade-up">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-serif font-medium text-black mb-8">
            Secure and Sustainable Hybrid Cloud Solutions.
            <br />
            Build resilient infrastructure while reducing your environmental impact.
          </h2>
           <button onClick={() => setShowPopup(true)} className="relative cursor-pointer inline-block px-6 py-3 font-medium group overflow-hidden border bg-black text-white rounded">
            <span className="absolute inset-0 w-0 bg-gray-200 transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative z-10 group-hover:text-black">Discover</span>
          </button>
        </div>
      </section>

    </>
  );
}

export default Open_hybrid_cloud;
