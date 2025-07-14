import { Target, Eye, Heart, Sparkles, Zap, Users, Brain, TrendingUp } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ModernMVVSection = () => {

 
  const mvvData = [
    {
      title: "MISSION",
      icon: <Target className="w-8 h-8" />,
      content: "To be the transformative force that shapes an agile, purposeful future of work on a global scale.",
      accentColor: "#1F1D1A"
    },
    {
      title: "VISION", 
      icon: <Eye className="w-8 h-8" />,
      content: "To become a global leader in creating agile and secure work environments that boost productivity and promote sustainable growth, contributing to a more resilient and equitable global economy.",
      accentColor: "#1F1D1A"
    },
    {
      title: "VALUES",
      icon: <Heart className="w-8 h-8" />,
      values: [
        { text: "Relentless curiosity & agility", icon: <Sparkles className="w-4 h-4" /> },
        { text: "Bold experimentation", icon: <Zap className="w-4 h-4" /> },
        { text: "Multidisciplinary innovation", icon: <Users className="w-4 h-4" /> },
        { text: "Wisdom in action", icon: <Brain className="w-4 h-4" /> },
        { text: "Data and future-obsessed", icon: <TrendingUp className="w-4 h-4" /> }
      ],
      accentColor: "#1F1D1A"
    }
  ];

  return (
    <div className="py-20 text-white relative overflow-hidden" data-aos="fade-up">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(31,29,26,0.15),transparent)] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          
          {mvvData.map((item, index) => (
            <div key={item.title} className="group relative" data-aos="fade-up" data-aos-delay={index * 200}>
              {/* Card container */}
              <div className="relative bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-[#1F1D1A]/30 hover:border-[#1F1D1A]/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl overflow-hidden h-full">
                
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1F1D1A]/10 to-[#1F1D1A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-[#1F1D1A]/20 blur-sm animate-pulse"></div>
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon and title */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 rounded-xl bg-[#1F1D1A] flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-6 text-center text-[#1F1D1A] group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h4>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    {item.content ? (
                      <p className="text-gray-300 text-lg leading-relaxed text-center group-hover:text-white transition-colors duration-300">
                        {item.content}
                      </p>
                    ) : (
                      <div className="space-y-4">
                        {item.values.map((value, valueIndex) => (
                          <div key={valueIndex} className="flex items-center space-x-3 text-gray-300 group-hover:text-white transition-colors duration-300">
                            <div className="p-2 rounded-lg bg-[#1F1D1A]/20 group-hover:bg-[#1F1D1A]/40 transition-all duration-300">
                              {value.icon}
                            </div>
                            <span className="text-base font-medium">{value.text}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Decorative bottom element */}
                  <div className="mt-8 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full w-0 bg-[#1F1D1A] group-hover:w-full transition-all duration-1000 ease-out"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default ModernMVVSection;