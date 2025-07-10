import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import watson_assistant from "./watson_assistant.gif";
import watson_discovery from "./watson_discovery.gif";

function Dataandai() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center pt-20 px-4">
        <div data-aos="fade-up">
          <h1 className="text-6xl font-extrabold tracking-tight mb-4 text-white">
            Empower Your Business
          </h1>
          <p className="text-lg mb-6 max-w-xl mx-auto text-white">
            With Trusted AI Solutions
          </p>
          <a href="#" class="relative inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded">
                  <span class="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
                  <span class="relative z-10 group-hover:text-black">Request a Demo</span>
                </a>
        </div>
      </section>

      <div className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div
      className="text-center mb-12"
      data-aos="fade-up"
      // data-aos-delay="200"
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


      {/* WatsonX Header */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl">
          Intelligent Solutions by watsonX
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
            <div className="order-2 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Watson Assistant</h2>
              <p className="text-lg mb-6">
                IBM Watson Assistant is a conversation AI platform that helps you provide customers
                fast, straightforward, and accurate answers to their questions, across any
                application, device, or channel.
              </p>
              <a href="#" class="relative inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded">
                  <span class="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
                  <span class="relative z-10 group-hover:text-black">Learn More</span>
                </a>
            </div>
          </div>
        </div>
      </div>

      {/* Watson Discovery Section */}
      <div className="py-16 text-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#1F1D1A]">
            <div className="order-2 lg:order-1 pl-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Watson Discovery</h2>
              <p className="text-lg mb-6">
                IBM Watson Discovery is an award-winning enterprise search and AI search technology
                that breaks open data silos and retrieves specific answers to your questions while
                analyzing trends and relationships buried in enterprise data.
              </p>
              <a href="#" class="relative inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded">
                  <span class="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
                  <span class="relative z-10 group-hover:text-black">Learn More</span>
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
          <a href="#" class="relative inline-block px-6 py-3 font-medium group overflow-hidden border bg-black text-white rounded">
            <span class="absolute inset-0 w-0 bg-gray-200 transition-all duration-300 ease-out group-hover:w-full"></span>
            <span class="relative z-10 group-hover:text-black">Unlock</span>
          </a>


        </div>
      </section>
    </>
  );
}

export default Dataandai;
