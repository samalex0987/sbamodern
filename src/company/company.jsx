import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";




function Company() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center pt-20 px-4">
        <div data-aos="fade-up">
          <h1 className="text-6xl font-extrabold tracking-tight mb-4 text-white">
            Intelligent Solutions, Limitless Potential
          </h1>
          <p className="text-lg mb-6 max-w-xl mx-auto text-white">
            With Trusted AI Solutions
          </p>
          <a href="#" class="relative inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded">
                  <span class="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
                  <span class="relative z-10 group-hover:text-black">Request a Demo</span>
                </a>
        </div>
      </section>

      {/* Who We Are Section */}
<div className="py-16 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header Section */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold sm:text-4xl">
        Who We Are
      </h2>
      <p className="text-lg mt-4 text-gray-300 max-w-3xl mx-auto">
       SBA Info Solutions Private Limited is a leading automation company based in Chennai, with over three decades of expertise in delivering cutting-edge enterprise solutions. Our core mission is to empower businesses and professionals through innovative technology that drives transformative results.

With a focus on seamlessly integrating Data & AI, IT & Business Automation, Security & Sustainability, and Open Hybrid Cloud technologies, we provide scalable, future-ready solutions designed to enhance efficiency, innovation, and sustainability for organizations across industries.
      </p>
    </div>

  <br /><br /><br />
    {/* Values Section */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div className="text-center">
        <h4 className="text-xl font-semibold mb-2">MISSON</h4>
        <p className="text-gray-300">To be the transformative force that shapes an agile, purposeful future of work on a global scale</p>
      </div>

      <div className="text-center">
        <h4 className="text-xl font-semibold mb-2">VISION</h4>
        <p className="text-gray-300">To become a global leader in creating agile and secure work environments that boost productivity and promote sustainable growth, contributing to a more resilient and equitable global economy</p>
      </div>

      <div className="text-center">
        <h4 className="text-xl font-semibold mb-2">VALUES</h4>
        <p className="text-gray-300">
            <ul>
                <li>Rentless curiosity & agility</li>
                <li>Bold experimentation</li>
                <li>Multidisciplinary Innovation</li>
                <li>Wisdom in Action</li>
                <li>Data and Future Obessed</li>
            </ul>
        </p>
      </div>
    </div>

  
     
    
  </div>
</div>

   
      {/* Closing CTA */}
    <section className="bg-[#D5D1DB] py-24 text-center" data-aos="fade-up">
  <div className="max-w-3xl mx-auto px-4">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-black mb-8">
      Join Our Journey of Innovation and Growth.
      <br />
      Empower the Future with Cutting-Edge Technology.
    </h2>
    <a
      href="#"
      className="relative inline-block px-6 py-3 font-medium group overflow-hidden border bg-black text-white rounded"
    >
      <span className="absolute inset-0 w-0 bg-gray-200 transition-all duration-300 ease-out group-hover:w-full"></span>
      <span className="relative z-10 group-hover:text-black">Join With Us</span>
    </a>
  </div>
</section>

    </>
  );
}

export default Company;
