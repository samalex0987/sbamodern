import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Carrers(){

     useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);
    

    return(
        <>
        <br /><br />
        {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center pt-20 px-4">
        <div data-aos="fade-up">
          <h1 className="text-6xl font-extrabold tracking-tight mb-4 text-white">
            Build Your Future with Us
          </h1>
          {/* <p className="text-lg mb-6 max-w-xl mx-auto text-white">
            With Trusted AI Solutions
          </p> */}
          
        </div>
      </section>

<section className="py-16 bg-[#1F1D1A]" data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl mb-4" data-aos="fade-up">
        Current Open Positions
      </h2>
      <p className="text-lg text-gray-100" data-aos="fade-up">
        Join our team and help drive innovation and automation. Explore the roles below and find your perfect fit.
      </p>
    </div>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
      {/* Position 1 */}
      <div className="p-6 shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105">
        <h3 className="text-lg font-semibold text-gray-100 mb-4">Software Engineer</h3>
        <p className="text-sm text-gray-100 mb-4">
          Join our development team to build robust, scalable software solutions that drive business success. Experience with AI and automation preferred.
        </p>
        <a href="#" class="relative inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded">
                <span class="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
                <span class="relative z-10 group-hover:text-black">Apply</span>
            </a>
      </div>

      {/* Position 2 */}
      <div className="p-6 shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105">
        <h3 className="text-lg font-semibold text-gray-100 mb-4">Data Scientist</h3>
        <p className="text-sm text-gray-100 mb-4">
          We are looking for a Data Scientist to analyze complex data sets and deliver actionable insights. Expertise in machine learning and AI is a plus.
        </p>
        <a href="#" class="relative inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded">
                <span class="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
                <span class="relative z-10 group-hover:text-black">Apply</span>
            </a>
      </div>

      {/* Position 3 */}
      <div className="p-6 shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105">
        <h3 className="text-lg font-semibold text-gray-100 mb-4">Network Engineer</h3>
        <p className="text-sm text-gray-100 mb-4">
          Help us optimize our network infrastructure by designing, implementing, and maintaining scalable network solutions for seamless connectivity.
        </p>
        <a href="#" class="relative inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded">
                <span class="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
                <span class="relative z-10 group-hover:text-black">Apply</span>
            </a>
      </div>

      {/* Position 4 */}
      <div className="p-6 shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105">
        <h3 className="text-lg font-semibold text-gray-100 mb-4">Cybersecurity Analyst</h3>
        <p className="text-sm text-gray-100 mb-4">
          We're looking for a Cybersecurity Analyst to help protect our organization’s data and infrastructure. Experience in threat detection and mitigation is required.
        </p>
        <a href="#" class="relative inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded">
                <span class="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
                <span class="relative z-10 group-hover:text-black">Apply</span>
            </a>
      </div>

      {/* Position 5 */}
      <div className="p-6 shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105">
        <h3 className="text-lg font-semibold text-gray-100 mb-4">Human Resources Manager</h3>
        <p className="text-sm text-gray-100 mb-4">
          Lead our HR department in managing talent acquisition, employee relations, and organizational development strategies.
        </p>
        <a href="#" class="relative inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded">
                <span class="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
                <span class="relative z-10 group-hover:text-black">Apply</span>
        </a>
      </div>

      {/* Position 6 */}
      <div className="p-6  shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105">
        <h3 className="text-lg font-semibold text-gray-100 mb-4">Operations Manager</h3>
        <p className="text-sm text-gray-100 mb-4">
          Manage the day-to-day operations of the company, ensuring seamless workflow between departments and optimizing business processes.
        </p>
         <a href="#" class="relative inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded">
                <span class="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
                <span class="relative z-10 group-hover:text-black">Apply</span>
        </a>
      </div>
    </div>
  </div>
</section>



        </>
    )
}

export default Carrers

