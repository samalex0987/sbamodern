import React, { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';


function Test(){

const useIntersectionObserver = (ref, callback, options = {}) => {
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              callback();
              if (options.once) {
                observer.unobserve(entry.target);
              }
            }
          });
        },
        { threshold: 0.1, ...options }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [ref, callback, options]);
  };

  const ImpactCard = ({ value, label, suffix = '', duration = 2, delay = 0 }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useIntersectionObserver(ref, () => setIsVisible(true), { once: true });

    return (
      <div
        ref={ref}
        className={`p-6 bg-black/90 backdrop-blur-sm rounded-2xl border border-[#1F1D1A] shadow hover:shadow-md transition flex flex-col items-center animate-fade-up ${
          isVisible ? 'animate' : ''
        }`}
        style={{ animationDelay: `${delay}s` }}
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center mb-2">
          {typeof value === 'number' ? (
            <CountUp
              start={0}
              end={value}
              duration={duration}
              suffix={suffix}
              startOnMount={false}
              enableScrollSpy={false}
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

  return (
    <div className="py-16 bg-black">
      <style>
        {`
          .animate-fade-up {
            opacity: 0;
            transform: translateY(100px);
          }
          .animate {
            animation: fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: translate(0, 0);
            }
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-up" ref={useRef()}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center mb-2">
            Our Impact
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ImpactCard value={300} suffix="+" duration={5} label="Customers" delay={0.1} />
          <ImpactCard value={30} suffix="+" duration={5} label="Years in Market" delay={0.5} />
          <ImpactCard value="Best" label="Predictive Support" delay={0.9} />
        </div>
      </div>
    </div>
  );
};

export default Test
