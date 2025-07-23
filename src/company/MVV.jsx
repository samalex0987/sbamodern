import { Target, Eye, Heart, Sparkles, Zap, Users, Brain, TrendingUp } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

const ModernMVVSection = () => {
  const mvvData = [
    {
      title: "MISSION",
      icon: <Target className="w-8 h-8" />,
      content: "To be the transformative force that shapes an agile, purposeful future of work on a global scale.",
    },
    {
      title: "VISION",
      icon: <Eye className="w-8 h-8" />,
      content: "To become a global leader in creating agile and secure work environments that boost productivity and promote sustainable growth, contributing to a more resilient and equitable global economy.",
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
    }
  ];

  return (
    <section className="py-12 text-black max-w-7xl mx-auto px-4"
     data-aos="fade-up"
        // data-aos-delay={delay * 1000}
    >
      <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {mvvData.map(({ title, icon, content, values }) => (
          <div key={title} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-gray-200 p-3 rounded-md mr-3">{icon}</div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
            </div>

            {content && <p className="text-gray-100">{content}</p>}

            {values && (
              <ul className="space-y-2 mt-4">
                {values.map(({ text, icon }, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-gray-100">
                    <span>{icon}</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModernMVVSection;
