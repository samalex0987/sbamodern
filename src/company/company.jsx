import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";




function Company() {

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
     {/* Hero Section */}
<section className="min-h-screen flex items-center justify-center text-center pt-20 px-4">
  <div data-aos="fade-up">
    
    {/* Responsive Heading */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white">
      Intelligent Solutions, Limitless Potential
    </h1>

    {/* Responsive Paragraph */}
    <p className="text-sm sm:text-base md:text-lg mb-6 max-w-xl mx-auto text-white">
      With Trusted AI Solutions
    </p>

    {/* Button */}
    <button 
      onClick={() => setShowPopup(true)} 
      className="relative inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded"
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


      {/* Who We Are Section */}
<div className="py-16 text-white" data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header Section */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold sm:text-4xl">
        Who We Are
      </h2>
      <p className="text-lg mt-4 text-gray-300 max-w-3xl mx-auto">
       SBA Info Solutions Private Limited is a leading automation company based in Chennai, with over three decades of expertise in delivering cutting-edge enterprise solutions. Our core mission is to empower businesses and professionals through innovative technology that drives transformative results.

With a focus on seamlessly integrating Data & AI, IT & Business Automation, Security & Sustainability, and Open Hybrid Cloud technologies, we provide scalable, future-ready solutions designed to enhance efficiency, innovation, and sustainability for organizations across industries.
      </p>
    </div>

  <br /><br /><br />
    {/* Values Section */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
      <div className="text-center">
        <h4 className="text-xl font-semibold mb-2">MISSON</h4>
        <p className="text-gray-300">To be the transformative force that shapes an agile, purposeful future of work on a global scale</p>
      </div>

      <div className="text-center">
        <h4 className="text-xl font-semibold mb-2">VISION</h4>
        <p className="text-gray-300">To become a global leader in creating agile and secure work environments that boost productivity and promote sustainable growth, contributing to a more resilient and equitable global economy</p>
      </div>

      <div className="text-center">
        <h4 className="text-xl font-semibold mb-2">VALUES</h4>
        <p className="text-gray-300">
            <ul>
                <li>Rentless curiosity & agility</li>
                <li>Bold experimentation</li>
                <li>Multidisciplinary Innovation</li>
                <li>Wisdom in Action</li>
                <li>Data and Future Obessed</li>
            </ul>
        </p>
      </div>
    </div>

  
     
    
  </div>
</div>

   
      {/* Closing CTA */}
    <section className="bg-[#D5D1DB] py-24 text-center" data-aos="fade-up">
  <div className="max-w-3xl mx-auto px-4">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-black mb-8">
      Join Our Journey of Innovation and Growth.
      <br />
      Empower the Future with Cutting-Edge Technology.
    </h2>
    <button onClick={() => setShowPopup(true)}
      className="relative inline-block px-6 py-3 font-medium group overflow-hidden border bg-black text-white rounded"
    >
      <span className="absolute inset-0 w-0 bg-gray-200 transition-all duration-300 ease-out group-hover:w-full"></span>
      <span className="relative z-10 group-hover:text-black">Join With Us</span>
    </button>
  </div>
</section>

    </>
  );
}

export default Company;
