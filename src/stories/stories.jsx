import { useState, useEffect } from 'react';

const SuccessStories = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  const categories = [
    { id: 'all', name: 'All Stories', color: 'bg-white' },
    { id: 'data-ai', name: 'Data & AI', color: 'bg-gray-800' },
    { id: 'customer-experience', name: 'Customer Experience', color: 'bg-gray-600' },
    { id: 'automation', name: 'Automation', color: 'bg-gray-400' }
  ];

  const journeySteps = [
    {
      step: 1,
      title: "CUSTOMER AWARENESS",
      stories: [
        {
          category: 'data-ai',
          title: 'Sales Optimization',
          subtitle: 'Using AI/ML Models',
          description: 'Cross-sell, upsell',
          details: [
            'Sell right product > right person > right activities > right channels'
          ],
          company: 'TATA AIA'
        }
      ]
    },
    {
      step: 2,
      title: "CUSTOMER DECISION",
      stories: [
        {
          category: 'data-ai',
          title: 'User Segmentation',
          subtitle: 'Accurately categorise and cluster customers with segmentation analytics to improve service and drive revenue',
          company: 'TATA AIA'
        },
        {
          category: 'data-ai',
          title: 'Incentive Optimization',
          subtitle: 'Enhance the accuracy of commission calculations',
          company: 'TATA AIA'
        },
        {
          category: 'data-ai',
          title: 'Pay as you live',
          subtitle: 'Incentivize customers for better lifestyle',
          company: 'TATA AIA'
        },
        {
          category: 'customer-experience',
          title: 'Reimagining the experience',
          subtitle: 'Provide seamless customer experience across channels',
          details: [
            'Enable clients to fully understand product benefits through assistance'
          ],
          company: 'ICICI PRUDENTIAL'
        }
      ]
    },
    {
      step: 3,
      title: "POLICY PURCHASE",
      stories: [
        {
          category: 'data-ai',
          title: 'Risk Profiling & Preferred Prospecting',
          subtitle: 'Advanced analytics to improve risk profiling and speed up policy renewals',
          company: 'TATA AIA'
        },
        {
          category: 'customer-experience',
          title: 'Content Discovery',
          subtitle: 'Help underwriters to find and discover content to make better decisions',
          company: 'SBI Life'
        },
        {
          category: 'automation',
          title: 'Process automation for application',
          subtitle: 'Decrease application processing time through automation',
          company: 'RELIANCE NIPPON LIFE INSURANCE'
        }
      ]
    },
    {
      step: 4,
      title: "PRODUCT OWNERSHIP/SERVICING",
      stories: [
        {
          category: 'data-ai',
          title: 'Data cataloguing',
          subtitle: 'Cost reduction by implementing an enterprise-wide data strategy',
          company: 'TATA AIA'
        },
        {
          category: 'customer-experience',
          title: 'Service Optimization',
          subtitle: 'Request prioritization and categorization',
          company: 'TATA AIA'
        },
        {
          category: 'customer-experience',
          title: '360 degrees customer view',
          subtitle: 'Single 360° view of customers using Next Gen predictive analytics',
          details: [
            'Identify customers at risk of switching providers',
            'Optimal messaging > right channels > right time'
          ],
          company: 'TATA AIA'
        }
      ]
    },
    {
      step: 5,
      title: "CLAIMS",
      stories: [
        {
          category: 'data-ai',
          title: 'Data Analytics',
          subtitle: 'Analytics to uncover inefficiencies and fraud',
          company: 'TATA AIA'
        },
        {
          category: 'automation',
          title: 'Faster claim processing',
          subtitle: 'Intelligent claims/documents processing through speed and efficiency',
          company: 'TATA AIA'
        },
        {
          category: 'automation',
          title: 'Process automation for payments',
          subtitle: 'Ensure seamless payment process automation using RPA',
          company: 'TATA AIA'
        },
        {
          category: 'customer-experience',
          title: 'Smarter claims processing',
          subtitle: 'Leverage Watson Customer Experience to streamline online applications',
          details: [
            'Identify subtle trouble spots in the application process and claims process'
          ],
          company: 'HYPO-TECH'
        }
      ]
    },
    {
      step: 6,
      title: "RETENTION",
      stories: [
        {
          category: 'automation',
          title: 'Planning and budget optimization',
          subtitle: 'Drive efficiency by eliminating manual report creation across planning & budgeting with analytics',
          company: 'HYPO-TECH'
        },
        {
          category: 'customer-experience',
          title: 'Sentiment analysis',
          subtitle: 'Probe customer sentiment, drive actionable insights, improve customer care & satisfaction',
          company: 'ICICI PRUDENTIAL'
        },
        {
          category: 'customer-experience',
          title: 'Customized Recommendation',
          subtitle: 'Maturity reinvestment and policy recommendations',
          company: 'ICICI PRUDENTIAL'
        },
        {
          category: 'data-ai',
          title: 'Customer lifetime value',
          subtitle: 'Analyse, segment and monitor customer data to retain high-value customers across policy systems',
          company: 'TATA AIA'
        },
        {
          category: 'automation',
          title: 'Improve Operational Efficiency',
          subtitle: 'Smarter policy cancellation and renewals processes',
          company: 'HYPO-TECH'
        }
      ]
    }
  ];

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setSelectedCategory(prev => {
        const currentIndex = categories.findIndex(cat => cat.id === prev);
        const nextIndex = (currentIndex + 1) % categories.length;
        return categories[nextIndex].id;
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoRotating, categories]);

  const handleCategoryClick = (categoryId) => {
    setIsAutoRotating(false); // Stop auto-rotation when user clicks
    setSelectedCategory(categoryId);
  };

  const filteredStories = journeySteps.map(step => ({
    ...step,
    stories: step.stories.filter(story => 
      selectedCategory === 'all' || story.category === selectedCategory
    )
  }));

  const getCategoryColor = (category) => {
    switch(category) {
      case 'data-ai': return 'bg-black text-white';
      case 'customer-experience': return 'bg-[#1F1D1A] text-white';
      case 'automation': return 'bg-[#0C090A] text-white';
      default: return 'bg-white text-black';
    }
  };

  return (
    <>
    <br /><br /><br />
    <div className="min-h-screen bg-black text-white p-6">
      <style jsx>{`
        @keyframes fillProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        .animate-fill-progress {
          animation: fillProgress 3s linear infinite;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gray-400">Success Stories</span> Across The Journey
          </h1>
          
          {/* Category Filter */}
          <div className="flex justify-center gap-4 mt-8 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative overflow-hidden border ${
                  selectedCategory === category.id
                    ? 'bg-white text-black scale-105 shadow-lg border-white'
                    : 'bg-[#1F1D1A] text-white hover:bg-[#2F2D2A] border-gray-600'
                }`}
              >
                {/* Fill effect for auto-rotation - fills from left to right */}
                {isAutoRotating && selectedCategory === category.id && (
                  <span 
                    className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out animate-fill-progress"
                  ></span>
                )}
                
                <span className={`relative z-10 transition-colors duration-300 ${
                  isAutoRotating && selectedCategory === category.id ? 'text-black' : ''
                }`}>
                  {category.name}
                </span>
              </button>
            ))}
          </div>

          {/* Auto-rotation indicator */}
          {isAutoRotating && (
            <div className="flex justify-center items-center gap-2 text-sm text-gray-400 mb-4">
              {/* <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div> */}
              {/* <span>Auto-rotating • Click any category to stop</span> */}
            </div>
          )}
        </div>

        {/* Journey Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {filteredStories.map((step) => (
            <div key={step.step} className="space-y-4">
              {/* Step Header */}
              <div className="text-center">
                <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold mx-auto mb-2">
                  {step.step}
                </div>
                <h2 className="text-sm font-bold text-gray-300 mb-4 leading-tight">
                  {step.title}
                </h2>
              </div>

              {/* Stories Cards */}
              <div className="space-y-3">
                {step.stories.map((story, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-105 cursor-pointer ${getCategoryColor(story.category)}`}
                  >
                    <h3 className="font-bold text-sm mb-2">{story.title}</h3>
                    <p className="text-xs mb-3 leading-relaxed">{story.subtitle}</p>
                    
                    {story.details && (
                      <div className="mb-3">
                        {story.details.map((detail, idx) => (
                          <p key={idx} className="text-xs opacity-90 mb-1">• {detail}</p>
                        ))}
                      </div>
                    )}
                    
                    {story.company && (
                      <div className="mt-3 pt-2 border-t border-gray-600">
                        <span className="text-xs font-medium opacity-75">{story.company}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="mt-16 p-6 bg-[#1F1D1A] rounded-lg">
          <h3 className="text-xl font-bold text-center mb-4">Technology Stack</h3>
          <div className="text-center text-sm text-gray-300 leading-relaxed">
            <p className="mb-2">
              <span className="font-medium">Core Technologies:</span> Robotic Process Automation (RPA) | Data governance and compliance | Customer support/ Digital Assistant
            </p>
            <p>
              <span className="font-medium">Additional Capabilities:</span> Security | Environmental, social, and governance (ESG) concerns - Envizi | Modernization
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">IBM Client Engineering</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default SuccessStories;