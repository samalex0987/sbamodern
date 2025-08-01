import React, { useState, useEffect } from 'react';
import { Bot, Server, Cloud, Zap, ArrowRight, Sparkles, Phone, Headphones, BarChart3, Shield, Database, Cpu } from 'lucide-react';

const AutomationSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Define card groups - each group has 3 cards
  const cardGroups = [
    {
      title: "Call Center Solutions",
      subtitle: "Transform your customer service operations",
      cards: [
        {
          id: 1,
          icon: <Phone className="w-8 h-8" />,
          title: "Intelligent Call Routing",
          description: "AI-powered call distribution system that routes customers to the right agents based on skills, availability, and customer history.",
          features: ["Smart Queue Management", "Skill-Based Routing", "Priority Handling"],
          link: "/call-center-routing"
        },
        {
          id: 2,
          icon: <Headphones className="w-8 h-8" />,
          title: "Voice Analytics & Insights",
          description: "Real-time voice analysis and sentiment detection to improve customer satisfaction and agent performance.",
          features: ["Sentiment Analysis", "Speech Recognition", "Quality Scoring"],
          link: "/voice-analytics"
        },
        {
          id: 3,
          icon: <BarChart3 className="w-8 h-8" />,
          title: "Performance Dashboard",
          description: "Comprehensive analytics dashboard providing real-time insights into call center metrics and KPIs.",
          features: ["Real-time Metrics", "Agent Performance", "Customer Satisfaction"],
          link: "/call-center-dashboard"
        }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      subtitle: "Scalable solutions for modern enterprises",
      cards: [
        {
          id: 4,
          icon: <Cloud className="w-8 h-8" />,
          title: "Cloud Migration Services",
          description: "Seamless migration of your applications and data to cloud platforms with minimal downtime and maximum security.",
          features: ["Zero-Downtime Migration", "Multi-Cloud Support", "Cost Optimization"],
          link: "/cloud-migration"
        },
        {
          id: 5,
          icon: <Shield className="w-8 h-8" />,
          title: "Security & Compliance",
          description: "Enterprise-grade security solutions ensuring data protection and regulatory compliance across all platforms.",
          features: ["Advanced Encryption", "Compliance Monitoring", "Threat Detection"],
          link: "/security-compliance"
        },
        {
          id: 6,
          icon: <Database className="w-8 h-8" />,
          title: "Data Management",
          description: "Intelligent data management solutions for storing, processing, and analyzing large volumes of enterprise data.",
          features: ["Data Lakes", "Real-time Processing", "Analytics Pipeline"],
          link: "/data-management"
        }
      ]
    },
    {
      title: "IT Operations & DevOps",
      subtitle: "Streamline your development and operations",
      cards: [
        {
          id: 7,
          icon: <Server className="w-8 h-8" />,
          title: "Infrastructure Automation",
          description: "Automate infrastructure provisioning, configuration, and management with Infrastructure as Code principles.",
          features: ["Auto-scaling", "Configuration Management", "Monitoring & Alerts"],
          link: "/infrastructure-automation"
        },
        {
          id: 8,
          icon: <Cpu className="w-8 h-8" />,
          title: "CI/CD Pipelines",
          description: "Streamlined continuous integration and deployment pipelines for faster, more reliable software delivery.",
          features: ["Automated Testing", "Deployment Automation", "Release Management"],
          link: "/cicd-pipelines"
        },
        {
          id: 9,
          icon: <Bot className="w-8 h-8" />,
          title: "AI-Powered Operations",
          description: "Leverage artificial intelligence to optimize IT operations, predict issues, and automate routine tasks.",
          features: ["Predictive Analytics", "Automated Remediation", "Intelligent Monitoring"],
          link: "/ai-operations"
        }
      ]
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cardGroups.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoScrolling, cardGroups.length]);

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    
    setCurrentSlide(index);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Zap className="w-8 h-8 text-red-500 mr-3" />
            <span className="text-red-400 font-semibold tracking-wider uppercase text-sm">
              Achieve Enterprise-Wide Fluidity
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Achieve Enterprise-Wide
            <span className="block bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
              Fluidity
            </span>
          </h2>
          <p className="max-w-4xl mx-auto text-xl text-gray-400 leading-relaxed mb-8">
            Unified solutions built to solve challenges for any team, in any industry.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto"></div>
        </div>

        {/* Category Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          {cardGroups.map((group, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`px-6 py-3 rounded-lg cursor-pointer font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                currentSlide === index
                  ? 'bg-gradient-to-r from-red-500 to-red-400 text-white shadow-lg shadow-red-500/25'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-300'
              }`}
            >
              {group.title}
            </button>
          ))}
        </div>

        {/* Slide Title */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-500">
            {cardGroups[currentSlide].title}
          </h3>
          <p className="text-lg text-gray-400 transition-all duration-500">
            {cardGroups[currentSlide].subtitle}
          </p>
        </div>

        {/* Cards Container - Simple fade transition */}
        <div className="relative" style={{ minHeight: '450px' }}>
          {cardGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                currentSlide === groupIndex
                  ? 'opacity-100 visible'
                  : 'opacity-0 invisible'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.cards.map((card, cardIndex) => (
                  <div
                    key={card.id}
                    className={`group relative overflow-hidden rounded-2xl backdrop-blur-sm border border-gray-800 hover:border-red-500 transition-all duration-500 transform hover:scale-105 ${
                      currentSlide === groupIndex 
                        ? 'animate-slideInUp' 
                        : ''
                    }`}
                    style={{
                      animationDelay: currentSlide === groupIndex ? `${cardIndex * 150}ms` : '0ms',
                      animationFillMode: 'both'
                    }}
                  >
                    {/* Animated Border Lines */}
                    <span className="absolute left-0 top-0 h-0.5 w-0 bg-gradient-to-r from-red-500 to-red-400 transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute right-0 top-0 h-0 w-0.5 bg-gradient-to-b from-red-500 to-red-400 transition-all duration-500 delay-200 group-hover:h-full"></span>
                    <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-gradient-to-l from-red-500 to-red-400 transition-all duration-500 delay-400 group-hover:w-full"></span>
                    <span className="absolute bottom-0 left-0 h-0 w-0.5 bg-gradient-to-t from-red-500 to-red-400 transition-all duration-500 delay-600 group-hover:h-full"></span>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-gray-900/40 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

                    {/* Content */}
                    <div
                      className="relative cursor-pointer z-10 p-8 h-full flex flex-col"
                      onClick={() => {
                        console.log(`Navigate to ${card.link}`);
                      }}
                    >
                      {/* Icon */}
                      <div className="mb-6">
                        <div className="bg-gradient-to-r from-red-500 to-red-400 p-4 rounded-xl w-16 h-16 flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <div className="text-white">{card.icon}</div>
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="text-2xl font-bold text-white group-hover:text-red-100 transition-colors duration-300 mb-4">
                        {card.title}
                      </h4>

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-6 flex-grow">
                        {card.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {card.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2 transition-all duration-300"
                          >
                            <Sparkles className="w-4 h-4 text-red-400 flex-shrink-0" />
                            <span className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors duration-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Learn More Link */}
                      <div className="flex items-center text-red-400 group-hover:text-red-300 transition-colors duration-300 font-medium">
                        <span className="text-sm">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-8 right-8 w-20 h-20 rounded-full bg-gradient-to-r from-red-500/10 to-transparent blur-xl group-hover:from-red-500/20 transition-all duration-500"></div>
                      <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-gradient-to-r from-white/5 to-transparent blur-lg group-hover:from-white/10 transition-all duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {cardGroups.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-red-500 w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-8">Ready to eliminate digital friction in your operations today?</p>
          <button className="bg-gradient-to-r cursor-pointer from-red-500 to-red-400 text-white font-semibold py-4 px-8 rounded-lg hover:from-red-600 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 flex items-center space-x-2 mx-auto">
            <span>Schedule A Strategy Session</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default AutomationSection;