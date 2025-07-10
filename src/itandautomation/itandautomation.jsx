import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import watson_assistant from "./watson_assistant.gif";
import watson_discovery from "./watson_discovery.gif";

function It_and_buisness_automation() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center pt-20 px-4">
        <div data-aos="fade-up">
          <h1 className="text-6xl font-extrabold tracking-tight mb-4 text-white">
            IT Automation
          </h1>
          <p className="text-lg mb-6 max-w-xl mx-auto text-white">Empower Your Operation</p>
           <a href="#" class="relative inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded">
                <span class="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
                <span class="relative z-10 group-hover:text-black">Request a Demo</span>
            </a>
        </div>
      </section>

      {/* Feature Grid 1 */}
<div className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div
      className="text-center mb-12"
      data-aos="fade-up"
      // data-aos-delay="200"
    >
      <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl text-white">
        Unlock Modern IT & Automation Capabilities
      </h2>
    </div>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Feature 1: Cloud Network */}
      <div
        className="p-6 shadow hover:shadow-md transition"
        data-aos="fade-up"
        // data-aos-delay="300"
        style={{ borderRight: "1px solid #1F1D1A" }}
      >
        <div className="mb-4 w-12 h-12 mx-auto">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full text-white transition-transform transform group-hover:scale-110"
          >
            {/* Cloud Icon */}
            <path d="M19 10.55c-1.38 0-2.69.58-3.57 1.53-.92-2.65-3.32-4.53-6.43-4.53-3.56 0-6.45 2.74-6.89 6.2C5.65 13.88 3 15.5 3 17.5c0 1.66 1.34 3 3 3h13c1.66 0 3-1.34 3-3 0-2.66-2.34-4.95-5.57-4.95z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-100 text-center mb-2">
          Modernize IT Operations
        </h3>
        <p className="text-sm text-gray-100 text-center">
          Streamline infrastructure, reduce legacy bottlenecks, and adopt cloud-native practices to support faster, scalable, and more secure operations.
        </p>
      </div>

      {/* Feature 2: Automation */}
      <div
        className="p-6 shadow hover:shadow-md transition"
        data-aos="fade-up"
        // data-aos-delay="400"
        style={{ borderRight: "1px solid #1F1D1A" }}
      >
        <div className="mb-4 w-12 h-12 mx-auto">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full text-white transition-transform transform group-hover:scale-110"
          >
            {/* Gear Icon for Automation */}
            <path d="M21 12l-3.56-2.56c.21-.7.36-1.43.36-2.17 0-2.35-1.03-4.47-2.67-5.96l1.42-1.42c1.99 2.17 3.14 4.89 3.14 7.38 0 2.86-1.08 5.53-2.88 7.57L21 12zm-7 3c0 1.11-.89 2-2 2s-2-.89-2-2 .89-2 2-2 2 .89 2 2zm-2-7c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm0 5c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm0-6c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-100 text-center mb-2">
          Automate Workflows End-to-End
        </h3>
        <p className="text-sm text-gray-100 text-center">
          Build, manage, and scale automated IT workflows for provisioning, patching, incident response, and more — with minimal code and maximum control.
        </p>
      </div>

      {/* Feature 3: Monitoring */}
      <div
        className="p-6 rounded-xl shadow hover:shadow-md transition"
        data-aos="fade-up"
        // data-aos-delay="500"
      >
        <div className="mb-4 w-12 h-12 mx-auto">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full text-white transition-transform transform group-hover:scale-110"
          >
            {/* Heartbeat Icon for Monitoring */}
            <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm1 12h-2v-2h2v2zm0-4h-2V7h2v5z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-100 text-center mb-2">
          Boost IT Agility & Uptime
        </h3>
        <p className="text-sm text-gray-100 text-center">
          Detect issues early, reduce downtime, and respond faster with integrated monitoring, intelligent alerting, and proactive remediation capabilities.
        </p>
      </div>
    </div>
  </div>
</div>


      {/* Powered By Heading */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl">
          Intelligent Solutions by watsonX
        </h2>
      </div>

      {/* Instana Section */}
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Instana</h2>
              <p className="text-lg mb-6">
                provides real-time, full-stack observability for applications, enabling automatic discovery and continuous monitoring of performance metrics across various environments
              </p>
              <a href="#" class="relative inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded">
                  <span class="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
                  <span class="relative z-10 group-hover:text-black">Learn More</span>
                </a>
            </div>
          </div>
        </div>
      </div>

      {/* Turbonomic Section */}
      <div className="py-16 text-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#1F1D1A]">
            <div className="order-2 lg:order-1 pl-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Turbonomic</h2>
              <p className="text-lg mb-6">
                offers visibility into application performance and resource utilization, allowing organizations to optimize their infrastructure based on real-time data.
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

      {/* Final Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-white">
          Everything You Need to Power IT & Automation
          <br className="hidden md:block" />
          in One Platform
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "System Integration",
              desc:
                "Connect tools, data, and platforms across your IT landscape to streamline workflows and improve operational efficiency at every level.",
            },
            {
              title: "Process Automation",
              desc:
                "Automate repetitive tasks, approvals, and configurations with scalable low-code tools that empower IT teams to focus on high-value work.",
            },
            {
              title: "Monitoring & Analytics",
              desc:
                "Gain visibility into infrastructure, application health, and workflows with real-time dashboards and alerts — all in one place.",
            },
            {
              title: "Access & Security",
              desc:
                "Secure your environment with role-based access control, automated compliance policies, and centralized identity management.",
            },
            {
              title: "IT Self-Service Portals",
              desc:
                "Provide employees with intuitive self-service tools to request, provision, and manage IT resources without manual intervention.",
            },
            {
              title: "Scalable Infrastructure",
              desc:
                "Deploy and scale IT infrastructure seamlessly across cloud and on-prem environments with automation-first architecture.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-neutral-900 p-6 rounded-xl"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="mb-4 text-2xl"></div>
              <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
    <section className="bg-[#D5D1DB] py-24 text-center" data-aos="fade-up">
    <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-3xl  font-medium text-black mb-8">
        Automate IT operations and business processes.
        <br />
        Let AI drive efficiency and innovation.
        </h2>
         <a href="#" class="relative inline-block px-6 py-3 font-medium group overflow-hidden border bg-black text-white rounded">
            <span class="absolute inset-0 w-0 bg-gray-200 transition-all duration-300 ease-out group-hover:w-full"></span>
            <span class="relative z-10 group-hover:text-black">Discover Automation Solutions</span>
          </a>
    </div>
    </section>

    </>
  );
}

export default It_and_buisness_automation;
