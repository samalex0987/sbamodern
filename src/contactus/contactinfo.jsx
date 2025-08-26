import { useState } from 'react';

const ContactSection = ({ contactInfo }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [previousIndex, setPreviousIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setPreviousIndex(hoveredIndex);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setPreviousIndex(hoveredIndex);
    setHoveredIndex(null);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl backdrop-blur-sm border border-gray-800 transition-all duration-700"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Moving Border Effect */}
              <div 
                className={`absolute inset-0 rounded-2xl transition-all duration-700 ease-out ${
                  hoveredIndex === index 
                    ? 'opacity-100 scale-100' 
                    : previousIndex === index 
                    ? 'opacity-0 scale-110 translate-x-4 translate-y-2' 
                    : 'opacity-0 scale-95'
                }`}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500 via-red-400 to-red-500 p-[2px]">
                  <div 
                    className="w-full h-full rounded-2xl" 
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
                    }}
                  ></div>
                </div>
              </div>

              {/* Incoming Border Effect */}
              {hoveredIndex === index && previousIndex !== null && previousIndex !== index && (
                <div className="absolute inset-0 rounded-2xl opacity-0 animate-border-flow">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500 via-red-400 to-red-500 p-[2px]">
                    <div 
                      className="w-full h-full rounded-2xl" 
                      style={{ 
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
                      }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br from-red-900/10 to-gray-900/40 rounded-2xl transition-opacity duration-500 ${
                hoveredIndex === index ? 'opacity-70' : 'opacity-50'
              }`}></div>
              
              {/* Content */}
              <div className="relative z-10 p-6 text-center">
                <div className={`bg-gradient-to-r from-red-500 to-red-400 p-4 rounded-xl w-16 h-16 mx-auto mb-4 shadow-lg transition-transform duration-300 ${
                  hoveredIndex === index ? 'scale-110' : 'scale-100'
                }`}>
                  <div className="text-white flex items-center justify-center h-full">
                    {info.icon}
                  </div>
                </div>
                
                <h3 className={`text-lg font-bold transition-colors duration-300 mb-3 ${
                  hoveredIndex === index ? 'text-red-100' : 'text-white'
                }`}>
                  {info.title}
                </h3>
                
                <p className="text-white font-medium mb-1">{info.primary}</p>
                <p className="text-gray-400 text-sm mb-2">{info.secondary}</p>
                <p className="text-gray-500 text-xs">{info.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes border-flow {
          0% {
            opacity: 0;
            transform: scale(0.8) translateX(-20px) translateY(-10px);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05) translateX(0) translateY(0);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateX(0) translateY(0);
          }
        }
        
        .animate-border-flow {
          animation: border-flow 0.7s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;