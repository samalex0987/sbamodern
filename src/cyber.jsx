import React, { useState, useEffect } from 'react';
import { Shield, Lock, Eye, RefreshCw, Monitor, CheckCircle, Zap, Server, Cloud, AlertTriangle } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

const CyberResiliencyPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

   useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);

  const features = [
    {
      icon: <Lock className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Immutable and Isolated Backups",
      description: "Ransomware attacks often seek to encrypt or delete backups. Our solution can create immutable backups that cannot be altered, encrypted, or deleted by any unauthorized user or malicious process. Our air-gapped cyber vaulting isolates your most critical data copies in a secure, off-network location, making them inaccessible to attackers."
    },
    {
      icon: <Eye className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Proactive Threat Detection",
      description: "Our solution continuously monitors your backups for signs of compromise. Using advanced machine learning and anomaly detection, our solution automatically identifies unusual changes or suspicious activity, such as sudden increases in data entropy (a common sign of ransomware encryption). We alert you to a potential threat before you attempt to restore, ensuring you don't re-infect your production environment with compromised data."
    },
    {
      icon: <RefreshCw className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Automated and Orchestrated Recovery",
      description: "A fast recovery is the key to minimizing downtime and business impact. Our solution automates and orchestrates the entire recovery process, eliminating manual errors and accelerating your return to normal operations."
    },
    {
      icon: <Monitor className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Simplified Management & Control",
      description: "Manage your entire data protection and recovery strategy from a single, intuitive console. Our solution simplifies complex tasks, providing complete visibility and control over your data assets, whether they reside on-premises, in the cloud, or in hybrid environments."
    }
  ];

  const recoveryFeatures = [
    {
      icon: <Zap className="w-5 sm:w-6 h-5 sm:h-6" />,
      title: "Rapid Instant Recovery",
      description: "Get back up and running in minutes, not hours or days, with near-instantaneous restoration of virtual machines, applications, and files."
    },
    {
      icon: <Server className="w-5 sm:w-6 h-5 sm:h-6" />,
      title: "Clean Room Recovery",
      description: "Spin up a secure, isolated recovery environment to test and validate your restored data before introducing it back into your main network, guaranteeing a clean and trusted recovery."
    },
    {
      icon: <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6" />,
      title: "Automated Validation",
      description: "We automatically verify the integrity and recoverability of your backups, giving you the confidence that your data is always ready for a successful restoration."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Confidence in Recovery",
      description: "We shift your mindset from \"if we can recover\" to \"when we recover.\" With our solution, your recovery is predictable, reliable, and guaranteed."
    },
    {
      icon: <AlertTriangle className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Protect Your Bottom Line",
      description: "Minimize downtime, avoid costly ransom payments, and protect your brand reputation with a solution that ensures your business stays operational."
    },
    {
      icon: <Cloud className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Simplicity and Security",
      description: "Our platform combines enterprise-grade security with an easy-to-use interface, making advanced cyber resiliency accessible to any organization."
    }
  ];

  // Get the current feature to display (hovered feature takes priority)
  // Ensure the index is valid (between 0 and features.length-1)
  const currentFeatureIndex = hoveredFeature !== null ? hoveredFeature : Math.max(0, activeFeature);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-red-700 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className={`px-4 sm:px-6 py-12 sm:py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6 sm:mb-8 backdrop-blur-sm hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20">
              <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-red-400 hover:rotate-12 transition-transform duration-300" />
              <span className="text-sm sm:text-base text-red-300 font-medium">Our Data Protection Solution</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight hover:scale-105 transition-transform duration-700">
              The Foundation of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 block hover:from-red-300 hover:to-red-500 transition-all duration-500">
                True Cyber Resiliency
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12">
              In an era of relentless cyber threats, a simple backup isn't enough. Ransomware and sophisticated attacks are now designed to target and compromise your backup infrastructure, leaving your business with no path to recovery. You need a data protection solution built with cyber resiliency at its core.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="group cursor-pointer px-6 sm:px-8 py-3 sm:py-4 border-2 border-red-500/50 text-red-300 font-semibold rounded-lg hover:bg-red-500/20 hover:border-red-400 hover:text-white hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:scale-105">
                <span className="group-hover:tracking-wider transition-all duration-300">Know More ?</span>
              </button>
            </div>
          </div>
        </section>

        {/* Modern Data Protection Platform */}
        <section className="px-4 sm:px-6 py-12 sm:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg border border-red-500/20 rounded-3xl p-8 sm:p-12 hover:bg-red-500/5 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-700 hover:scale-[1.02] group">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 text-center group-hover:text-red-100 transition-colors duration-300">Beyond Backup: The Solution Differentiator</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                Our solution is more than just a backup tool; it's a comprehensive cyber resiliency engine that integrates robust data protection with proactive security features. We provide a fortified, end-to-end solution that ensures your data is always available, clean, and ready for recovery.
              </p>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="px-4 sm:px-6 py-12 sm:py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">Core Cyber Resiliency Features</h2>
            <p className="text-gray-300 text-center mb-12 sm:mb-16 text-base sm:text-lg px-4">
              Our solution is engineered with a multi-layered approach to ensure every stage of an attack is addressed, from protection to recovery.
            </p>

            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-8">
              {/* Feature Navigation */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`group p-6 rounded-xl border cursor-pointer transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl ${
                      currentFeatureIndex === index
                        ? 'bg-gradient-to-r from-red-600/30 to-red-700/20 border-red-500/60 shadow-xl shadow-red-500/20'
                        : 'bg-white/5 border-white/10 hover:bg-red-500/10 hover:border-red-500/30 hover:shadow-red-500/10'
                    }`}
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                        currentFeatureIndex === index ? 'bg-red-600 shadow-lg shadow-red-600/50' : 'bg-white/10 group-hover:bg-red-500'
                      } text-white`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-red-100 transition-colors duration-300">{feature.title}</h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Feature Content - Only render if we have a valid feature */}
              {features[currentFeatureIndex] && (
                <div className="bg-white/5 backdrop-blur-lg border border-red-500/20 rounded-xl p-8 h-fit hover:bg-red-500/5 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-500 hover:scale-[1.02]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-red-600 rounded-lg text-white shadow-lg shadow-red-600/30 hover:scale-110 hover:rotate-12 transition-all duration-300">
                      {features[currentFeatureIndex].icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{features[currentFeatureIndex].title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg">{features[currentFeatureIndex].description}</p>
                  
                  {currentFeatureIndex === 2 && (
                    <div className="mt-6 sm:mt-8 space-y-4">
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-4">Our features include:</h4>
                      {recoveryFeatures.map((recoveryFeature, index) => (
                        <div key={index} className="group flex items-start gap-3 p-3 sm:p-4 bg-white/5 rounded-lg hover:bg-red-500/10 hover:scale-105 transition-all duration-300 cursor-pointer">
                          <div className="p-1 sm:p-2 bg-red-600 rounded text-white mt-1 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-red-600/30">
                            {recoveryFeature.icon}
                          </div>
                          <div>
                            <h5 className="font-semibold text-white mb-1 sm:mb-2 group-hover:text-red-100 transition-colors duration-300">{recoveryFeature.title}</h5>
                            <p className="text-gray-300 text-xs sm:text-sm group-hover:text-gray-200 transition-colors duration-300">{recoveryFeature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg border border-red-500/20 rounded-xl overflow-hidden hover:bg-red-500/5 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-500 hover:scale-[1.01]">
                  {/* Feature Header */}
                  <div 
                    className="group p-4 sm:p-6 cursor-pointer"
                    onClick={() => setActiveFeature(activeFeature === index ? -1 : index)}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 bg-red-600 rounded-lg text-white shadow-lg shadow-red-600/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-red-100 transition-colors duration-300">{feature.title}</h3>
                        <div className="flex items-center mt-1 sm:mt-2">
                          <span className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            {activeFeature === index ? 'Tap to collapse' : 'Tap to expand'}
                          </span>
                          <div className={`ml-auto transform transition-transform duration-300 ${activeFeature === index ? 'rotate-180' : ''}`}>
                            <svg className="w-4 sm:w-5 h-4 sm:h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Feature Content */}
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    activeFeature === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-red-500/20">
                      <div className="pt-4 sm:pt-6">
                        <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">{feature.description}</p>
                        
                        {index === 2 && activeFeature === index && (
                          <div className="space-y-3 sm:space-y-4">
                            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Our features include:</h4>
                            {recoveryFeatures.map((recoveryFeature, recoveryIndex) => (
                              <div key={recoveryIndex} className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-white/5 rounded-lg">
                                <div className="p-1 sm:p-2 bg-red-600 rounded text-white mt-1 shadow-lg shadow-red-600/30">
                                  {recoveryFeature.icon}
                                </div>
                                <div>
                                  <h5 className="font-semibold text-white mb-1 sm:mb-2">{recoveryFeature.title}</h5>
                                  <p className="text-gray-300 text-xs sm:text-sm">{recoveryFeature.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Solution */}
        <section className="px-4 sm:px-6 py-12 sm:py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 sm:mb-16 text-center">Why Choose Our Solution?</h2>
            
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-red-500/20 hover:border-red-500/30 hover:bg-red-500/5 transition-all duration-700 hover:scale-105 sm:hover:scale-110 hover:-translate-y-3 cursor-pointer"
                >
                  <div className="p-3 sm:p-4 bg-gradient-to-r from-red-600 to-red-700 rounded-xl text-white mb-4 sm:mb-6 w-fit group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-red-600/30">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-red-100 transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base group-hover:text-gray-200 transition-colors duration-300">{benefit.description}</p>
                  
                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-600/0 via-red-600/20 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 py-12 sm:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-red-600/10 to-red-700/10 backdrop-blur-lg border border-red-500/30 rounded-3xl p-8 sm:p-12 hover:from-red-600/20 hover:to-red-700/20 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-700 hover:scale-[1.02] group">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 group-hover:text-red-100 transition-colors duration-300 hover:scale-105 transition-transform">Ready to Transform Your Data Protection?</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 group-hover:text-gray-200 transition-colors duration-300">
                Don't wait for the next cyber attack. Secure your business with true cyber resiliency today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="group/btn cursor-pointer px-8 sm:px-10 py-3 sm:py-4 border-2 border-red-500/50 text-red-300 font-semibold rounded-lg hover:bg-red-500/20 hover:border-red-400 hover:text-white hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  <span className="group-hover/btn:tracking-widest transition-all duration-500">Contact Sales</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CyberResiliencyPage;