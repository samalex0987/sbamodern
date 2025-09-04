import React, { useState, useEffect, useRef } from 'react';
import { Rocket, Globe, Bot, ArrowRight } from 'lucide-react';

const AnimatedTimeline = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [expandedItems, setExpandedItems] = useState([]); // New state for collapsible items on mobile
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  const journeyData = [
    {
      id: 1,
      year: "1991",
      title: "Founded in 1991",
      description: "SBA Info Solutions was founded with the goal of delivering high-quality automation solutions.",
      icon: Rocket
    },
    {
      id: 2,
      year: "2005",
      title: "Expanded Pan India",
      description: "We expanded our operations to other states, offering solutions in multiple industries.",
      icon: Globe
    },
    {
      id: 3,
      year: "2023",
      title: "Pioneering AI Integration",
      description: "Became one of the leaders in AI-driven business automation for large enterprises.",
      icon: Bot
    },
    {
      id: 4,
      year: new Date().getFullYear(),
      title: "Our Journey",
      description: "Will continue",
      icon: ArrowRight
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => {
              if (!prev.includes(index)) {
                return [...prev, index].sort((a, b) => a - b);
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -10% 0px' }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const toggleItem = (index) => {
    setExpandedItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="py-12 sm:py-20 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Our Journey
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-white to-gray-600 mx-auto"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative" ref={timelineRef}>
          {/* Vertical Line */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-red-800">
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-gray-400 transition-all duration-1000 ease-out"
              style={{ 
                height: visibleItems.length > 0 ? `${(visibleItems.length / journeyData.length) * 100}%` : '0%' 
              }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 sm:space-y-16">
            {journeyData.map((item, index) => (
              <div
                key={item.id}
                ref={el => itemRefs.current[index] = el}
                data-index={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Center Circle */}
                <div className="absolute left-6 sm:left-8 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                  <div 
                    className={`w-12 sm:w-16 h-12 sm:h-16 rounded-full border-4 border-gray-800 bg-black flex items-center justify-center transition-all duration-500 ${
                      visibleItems.includes(index)
                        ? 'scale-100 border-white shadow-lg shadow-white/30'
                        : 'scale-75 border-gray-700'
                    }`}
                    style={{ transitionDelay: `${visibleItems.includes(index) ? index * 200 + 300 : 0}ms` }}
                  >
                    <item.icon 
                      className={`w-5 sm:w-7 h-5 sm:h-7 text-white transition-all duration-300 ${
                        visibleItems.includes(index) ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                      }`} 
                    />
                  </div>
                </div>

                {/* Content Card */}
                <div 
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  } ${
                    visibleItems.includes(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  } transition-all duration-800 ease-out pt-12 sm:pt-16 md:pt-0`}
                  style={{ transitionDelay: `${visibleItems.includes(index) ? index * 200 : 0}ms` }}
                >
                  <div 
                    className="bg-red-900 rounded-2xl p-6 sm:p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 group md:bg-red-900 md:rounded-2xl md:p-8 md:border md:hover:shadow-2xl md:hover:shadow-white/10 md:group"
                    onClick={() => toggleItem(index)} // Toggle for mobile
                  >
                    {/* Year Badge and Title */}
                    <div className="flex items-center justify-between">
                      <div className="inline-block bg-white text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                        {item.year}
                      </div>
                      <div className="md:hidden">
                        <svg 
                          className={`w-4 sm:w-5 h-4 sm:h-5 text-gray-400 transform transition-transform duration-300 ${expandedItems.includes(index) ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-gray-200 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    {/* Description (Collapsible on Mobile) */}
                    <div 
                      className={`md:block transition-all duration-500 ease-in-out ${
                        expandedItems.includes(index) ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                      } md:max-h-screen md:opacity-100 overflow-hidden`}
                    >
                      <p className="text-gray-400 leading-relaxed text-sm sm:text-base group-hover:text-gray-300 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute -bottom-2 left-6 sm:left-8 w-3 sm:w-4 h-3 sm:h-4 bg-white transform rotate-45 opacity-20 group-hover:opacity-40 transition-opacity duration-300 md:block"></div>
                  </div>
                </div>

                {/* Mobile Connecting Line */}
                <div className="md:hidden absolute left-6 sm:left-8 top-12 sm:top-16 w-0.5 h-12 sm:h-16 bg-gray-800">
                  <div 
                    className={`w-full bg-white transition-all duration-500 ${
                      visibleItems.includes(index) ? 'h-full' : 'h-0'
                    }`}
                    style={{ transitionDelay: `${visibleItems.includes(index) ? index * 200 + 600 : 0}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Flourish */}
        <div className="text-center mt-12 sm:mt-20">
          <div className="inline-block">
            <div className="w-2 h-2 bg-white rounded-full mx-2 inline-block animate-pulse"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full mx-2 inline-block animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full mx-2 inline-block animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTimeline;