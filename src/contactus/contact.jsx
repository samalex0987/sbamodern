import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  User, 
  MessageSquare, 
  Building,
  Globe,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react';

const ContactUsPage = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const sectionRefs = useRef([]);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      primary: "hello@sbainfo.com",
      secondary: "support@sbainfo.com",
      description: "Get in touch for business inquiries"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      primary: "+1 (555) 123-4567",
      secondary: "+1 (555) 987-6543",
      description: "Available Monday to Friday"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      primary: "123 Business District",
      secondary: "Tech City, TC 12345",
      description: "Our headquarters location"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      primary: "Mon - Fri: 9:00 AM - 6:00 PM",
      secondary: "Sat: 10:00 AM - 4:00 PM",
      description: "We're here to help"
    }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", href: "#" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", href: "#" },
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook", href: "#" },
    { icon: <Globe className="w-5 h-5" />, name: "Website", href: "#" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleSections(prev => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <>
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div 
            ref={el => sectionRefs.current[0] = el}
            data-index={0}
            className={`text-center transition-all duration-1000 ${
              visibleSections.includes(0) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Ready to transform your business? Let's discuss how we can help you achieve your goals with our innovative solutions.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                ref={el => sectionRefs.current[index + 1] = el}
                data-index={index + 1}
                className={`group relative overflow-hidden rounded-2xl backdrop-blur-sm border border-gray-800 hover:border-red-500 transition-all duration-700 ${
                  visibleSections.includes(index + 1) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${visibleSections.includes(index + 1) ? index * 150 : 0}ms`,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-gray-900/40 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 p-6 text-center">
                  <div className="bg-gradient-to-r from-red-500 to-red-400 p-4 rounded-xl w-16 h-16 mx-auto mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white flex items-center justify-center h-full">
                      {info.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white group-hover:text-red-100 transition-colors duration-300 mb-3">
                    {info.title}
                  </h3>
                  
                  <p className="text-white font-medium mb-1">{info.primary}</p>
                  <p className="text-gray-400 text-sm mb-2">{info.secondary}</p>
                  <p className="text-gray-500 text-xs">{info.description}</p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-red-500 to-red-400 p-[1px]">
                  <div className="w-full h-full rounded-2xl bg-black"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              ref={el => sectionRefs.current[5] = el}
              data-index={5}
              className={`transition-all duration-1000 ${
                visibleSections.includes(5) 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm border border-gray-800 p-8"
                   style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}>
                
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-gray-900/40 opacity-30"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6 text-white">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors duration-300"
                          required
                        />
                      </div>
                      
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors duration-300"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <input
                          type="text"
                          name="company"
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors duration-300"
                        />
                      </div>
                      
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors duration-300"
                        />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 text-gray-500 w-5 h-5" />
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors duration-300"
                        required
                      />
                    </div>
                    
                    <div className="relative">
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors duration-300 resize-none"
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-500 to-red-400 text-white font-semibold py-3 px-6 rounded-lg hover:from-red-600 hover:to-red-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div
              ref={el => sectionRefs.current[6] = el}
              data-index={6}
              className={`transition-all duration-1000 ${
                visibleSections.includes(6) 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="space-y-8">
                {/* Map Placeholder */}
                <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm border border-gray-800 h-64"
                     style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-gray-900/40 opacity-30"></div>
                  
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-red-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">Find Us Here</h3>
                      <p className="text-gray-400">Interactive map coming soon</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm border border-gray-800 p-6"
                     style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-gray-900/40 opacity-30"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          className="flex items-center space-x-3 p-3 rounded-lg bg-gray-900/50 hover:bg-red-900/20 border border-gray-700 hover:border-red-500 transition-all duration-300 group"
                        >
                          <div className="bg-gradient-to-r from-red-500 to-red-400 p-2 rounded-lg">
                            <div className="text-white">
                              {social.icon}
                            </div>
                          </div>
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                            {social.name}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm border border-gray-800 p-6"
                     style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-gray-900/40 opacity-30"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-white mb-4">Quick Contact</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-r from-red-500 to-red-400 p-2 rounded-lg">
                          <Phone className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300">+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-r from-red-500 to-red-400 p-2 rounded-lg">
                          <Mail className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300">hello@sbainfo.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-4 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
          </div>
          <p className="text-gray-500">We'd love to hear from you. Let's start a conversation.</p>
        </div>
      </section>
    </div>
    
    </>
  );
};

export default ContactUsPage;