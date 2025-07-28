import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ITAutomationPlatform from "./Whatwedo";
import SolutionsSection from "./Whatwedo";

function Solutions(){


     useEffect(() => {
            AOS.init({
                  duration: 1000,
                  once: true,
                });
          }, []);

    return(
        <>
        <section className="min-h-screen flex items-center justify-center text-center pt-10 px-4 sm:px-6 lg:px-8 bg-black">
            <div data-aos="fade-up" className="max-w-3xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
                    Empower Through <span className="text-red-500">Intelligent Automation</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-300 max-w-xl mx-auto">
                    Free up your teams to focus on what truly matters — <span className="text-red-400">innovation and impact</span>.
                </p>
                <button
                    onClick={() => setShowPopup(true)}
                    className="relative cursor-pointer inline-block px-6 py-3 font-medium group overflow-hidden border-2 border-red-500 text-white rounded bg-black hover:bg-red-500 transition-all duration-300"
                >
                    <span className="absolute inset-0 w-0 bg-red-500 transition-all duration-500 ease-out group-hover:w-full"></span>
                    <span className="relative z-10 group-hover:text-white">Request a Demo</span>
                </button>
            </div>
        </section>


        {/* SECTION 2 */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
                <span className="text-red-400 font-semibold tracking-wider uppercase text-sm">
                Smarter Business Starts Here
                </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Accelerate Growth with
                <span className="block bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
                AI-Powered Automation
                </span>
            </h2>

            <p className="max-w-4xl mx-auto text-xl text-gray-400 leading-relaxed mb-8">
                Leverage intelligent technologies to reduce manual work, improve decision-making, 
                and build agile, future-ready operations — all while freeing up your teams to focus on innovation.
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto"></div>
            </div>
            </div>

        {/* SECTION 2 */}

        <SolutionsSection />
    
        </>
    )
}

export default  Solutions;
