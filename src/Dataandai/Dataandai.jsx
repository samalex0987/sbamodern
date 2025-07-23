import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import watson_assistant from "./watson_assistant.gif";
import watson_discovery from "./watson_discovery.gif";
import cognos from "./cognos.gif";


function Dataandai() {
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
    <div className="bg-black min-h-screen">
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
<section className="min-h-screen flex items-center justify-center text-center pt-20 px-4">
  <div data-aos="fade-up">
    {/* Responsive Heading */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white">
      Empower Your Business
    </h1>

    {/* Responsive Subheading */}
    <p className="text-sm sm:text-base md:text-lg mb-6 max-w-xl mx-auto text-white">
      With Trusted AI Solutions
    </p>

    {/* Styled Button */}
    <button 
      onClick={() => setShowPopup(true)}
      className="relative inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded cursor-pointer"
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

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl text-white">
              Everything You Need to Power IT & Automation in One Platform
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div
              className="p-6 shadow hover:shadow-md transition"
              data-aos="fade-up"
              style={{ borderRight: "1px solid #1F1D1A" }}
            >
              <div className="mb-4 w-12 h-12 mx-auto">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full text-white transition-transform transform group-hover:scale-110"
                >
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-100 text-center mb-2">
                Augment Human Expertise with AI
              </h3>
              <p className="text-sm text-gray-100 text-center">
                Enhance decision-making by pairing human intelligence with real-time insights from AI. Empower your workforce to focus on high-value tasks, not manual analysis.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              className="p-6 shadow hover:shadow-md transition"
              data-aos="fade-up"
              style={{ borderRight: "1px solid #1F1D1A" }}
            >
              <div className="mb-4 w-12 h-12 mx-auto">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full text-white transition-transform transform group-hover:scale-110"
                >
                  <path d="M4 4h16v2H4zm0 5h16v2H4zm0 5h10v2H4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-100 text-center mb-2">
                Operationalize AI at Scale
              </h3>
              <p className="text-sm text-gray-100 text-center">
                Deploy machine learning models faster and with confidence. Automate workflows, monitor performance, and drive outcomes with responsible, explainable AI tailored to your business needs.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              className="p-6 rounded-xl shadow hover:shadow-md transition"
              data-aos="fade-up"
            >
              <div className="mb-4 w-12 h-12 mx-auto">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full text-white transition-transform transform group-hover:scale-110"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6h2a4 4 0 0 1 8 0h2c0-3.31-2.69-6-6-6z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-100 text-center mb-2">
                Accelerate Time to Value
              </h3>
              <p className="text-sm text-gray-100 text-center">
                Leverage pre-built data pipelines, model templates, and intelligent automations to move from idea to impact in weeks — not months.
              </p>
            </div>
          </div>
        </div>
      </div>

<br /><br /><br />
{/* What We Do */}

    {/* Section Header */}
<div className="text-center mb-12" data-aos="fade-up">
  <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl">
    Solution We Offer
  </h2>
</div>

{/* Machine Learning Models Section */}
<div className="py-16 text-white" data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#1F1D1A]" id="machinelearning">
      <div className="order-1 lg:order-1">
        <img
          src={watson_assistant}
          alt="Machine Learning Models"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      <div className="order-2 lg:order-2 px-4 sm:px-6 lg:pl-10 pb-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Machine Learning Models</h2>
        <p className="text-base sm:text-lg mb-6">
          Build intelligent systems with our ready-to-integrate machine learning models. From predictive analytics to natural language processing, we tailor solutions to match your business needs.
        </p>
        <a href="#" className="relative inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded">
          <span className="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
          <span className="relative z-10 group-hover:text-black">Learn More</span>
        </a>
      </div>
    </div>
  </div>
</div>

{/* Data Analytics Section */}
<div className="py-16 text-white" data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#1F1D1A]">
      <div className="order-2 lg:order-1 px-4 sm:px-6 lg:pl-10 pb-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Data Analytics</h2>
        <p className="text-base sm:text-lg mb-6">
          Transform raw data into valuable insights. Our analytics platform provides interactive dashboards, trend forecasting, and deep data exploration tailored for decision-makers.
        </p>
        <a href="#" className="relative inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded">
          <span className="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
          <span className="relative z-10 group-hover:text-black">Learn More</span>
        </a>
      </div>
      <div className="order-1 lg:order-2">
        <img
          src={cognos}
          alt="Data Analytics"
          className="w-full rounded-lg shadow-lg"
          />
      </div>
    </div>
  </div>
</div>

{/* AI Integrations Section */}
<div className="py-16 text-white" data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#1F1D1A]">
      <div className="order-1 lg:order-1">
        <img
          src={watson_discovery}
          alt="AI Integrations"
          className="w-full rounded-lg shadow-lg"
          />
      </div>
      <div className="order-2 lg:order-2 px-4 sm:px-6 lg:pl-10 pb-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">AI Integrations</h2>
        <p className="text-base sm:text-lg mb-6">
          Seamlessly integrate AI into your workflows, tools, and customer touchpoints. From chatbots to smart search and recommendations, our solutions enhance efficiency and experience.
        </p>
        <a href="#" className="relative inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded">
          <span className="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
          <span className="relative z-10 group-hover:text-black">Learn More</span>
        </a>
      </div>
    </div>
  </div>
</div>

  {/* What We Do */}

      {/* Final Feature Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-white">
          Everything You Need to Accelerate Data & AI
          <br className="hidden md:block" />
          in One Unified Platform
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Data Integration",
            "AI Model Development",
            "Data Governance",
            "Intelligent Automation",
            "Real-Time Analytics",
            "Scalable Data Infrastructure",
          ].map((title, idx) => (
            <div
              key={idx}
              className="bg-neutral-900 p-6 rounded-xl"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              >
              <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
              <p className="text-sm text-gray-300">
                {
                  {
                    "Data Integration":
                      "Seamlessly connect, ingest, and unify data from diverse sources to create a trusted foundation for AI and analytics initiatives.",
                    "AI Model Development":
                      "Build, train, and deploy machine learning and foundation models using collaborative tools and enterprise-grade frameworks.",
                    "Data Governance":
                      "Ensure data quality, lineage, and compliance across the organization with automated policies and role-based access control.",
                    "Intelligent Automation":
                    "Combine AI with automation to optimize business processes, improve decision-making, and drive operational efficiency.",
                    "Real-Time Analytics":
                      "Analyze data in real-time to uncover insights, detect anomalies, and respond instantly to changing business conditions.",
                    "Scalable Data Infrastructure":
                    "Leverage cloud-native and hybrid data platforms to store, process, and serve AI workloads at scale with high performance.",
                  }[title]
                }
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#D5D1DB] py-24 text-center" data-aos="fade-up">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-black mb-8">
            Your data holds the power.
            <br />
            Now let AI unlock its potential.
          </h2>
          <button 
             onClick={() => setShowPopup(true)} 
            className="relative inline-block px-6 cursor-pointer py-3 font-medium group overflow-hidden border bg-black text-white rounded"
          >
            <span className="absolute inset-0 w-0 bg-gray-200 transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative z-10 group-hover:text-black ">unlock</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Dataandai;