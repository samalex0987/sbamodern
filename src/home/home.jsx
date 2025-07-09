import React, { useRef } from 'react';
import herosectionvideo from "./nature.mp4"
import VideoCarousel from './carousal';

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

    return(
        <>
        <section class="min-h-screen flex items-center justify-center text-center pt-10 px-4">
            <div>
                <h1 class="text-6xl font-extrabold text-white tracking-tight mb-4">Professional Class AI</h1>
                <p class="text-lg mb-6 max-w-xl mx-auto text-white">Domain-specific AI for law firms, professional service providers, and the Fortune 500.</p>
                <a href="#" class="bg-white text-black font-semibold py-3 px-6 rounded hover:bg-gray-200 transition">Request a Demo</a>
            </div>
        </section>
        <br /><br /><br />
        <div className="video-container relative w-full max-w-[1300px] mx-auto aspect-[16/9]">
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
    <VideoCarousel />
        </>
    )
}

export default Home
