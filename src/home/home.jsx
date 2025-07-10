import React, { useEffect, useRef } from 'react';
import herosectionvideo from "./nature.mp4"
import VideoCarousel from './carousal';
import AOS from "aos";
import "aos/dist/aos.css";

function Home(){

 const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };


   useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);

    return(
        <>
        <section className="min-h-screen flex items-center justify-center text-center pt-10 px-4" >
            <div data-aos="fade-up">
                <h1 className="text-6xl font-extrabold text-white tracking-tight mb-4" >Automate The Mundane</h1>
                <p className="text-lg mb-6 max-w-xl mx-auto text-white">Elevate The Human Potential</p>
                <button onClick={()=>{ alert("Demo requested") }} 
                 className="relative inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded">
                  <span className="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
                  <span className="relative z-10 group-hover:text-black">Request a Demo</span>
                </button>

            </div>
        </section>
        <br /><br /><br />
        <div data-aos="fade-up" className="video-container relative w-full max-w-[1300px] mx-auto aspect-[16/9]">
            <video ref={videoRef} className="w-full h-full object-cover">
                <source src={herosectionvideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div
                className="play-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[1.5rem] bg-[rgba(121,119,119,0.7)] py-2 px-4 rounded-md cursor-pointer transition-colors duration-300 hover:bg-[rgba(103,102,102,0.9)]"
                onClick={handlePlayPause}
            >
                <i className={`fa-solid ${videoRef.current?.paused ? 'fa-play' : 'fa-pause'}`}></i>
      </div>
    </div>

        <br /><br /><br />

        <div data-aos="fade-up">
    <VideoCarousel/>

        </div>
        <br />
              {/* Closing CTA */}
      <section className="bg-[#D5D1DB] py-24 text-center" data-aos="fade-up">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-3xl  font-medium text-black mb-8">
            Empower with Data, Accelerate with Agility
            
          </h2>
          <button onClick={()=>{alert("Requested successfully")}} className="relative inline-block px-6 py-3 font-medium group overflow-hidden border bg-black text-white rounded">
            <span className="absolute inset-0 w-0 bg-gray-200 transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative z-10 group-hover:text-black">Request a Demo</span>
          </button>
        </div>
      </section>
        </>
    )
}

export default Home
