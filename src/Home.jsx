import React from 'react';
import SocialLinks from './SocialLinks';
import { Link } from 'react-router-dom';
// import { useRef } from 'react';
import { useRef, useState } from "react";


export default function Home() {
  const videoRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);


  const handlePlay = () => {
    setIsExpanded(true);
    videoRef.current?.play();
  };

  const handleClose = () => {
    setIsExpanded(false);
    videoRef.current?.pause();
  };

  return (
    <div className="min-h-screen mt-10 flex flex-col items-center justify-center bg-[#0d1117] text-[#c9d1d9] px-6 py-12">
      {/* GitHub-style header with navigation bar */}
      <div className="w-full max-w-6xl mb-8">
        <div className="flex items-center justify-between bg-[#161b22] px-4 py-3 rounded-md border border-[#30363d] hover:border-[#58a6ff] transition-colors duration-300">
          <h1 className="text-2xl md:text-3xl font-mono font-semibold text-[#58a6ff] flex items-center">

            <span className="mr-2">Keyboard</span>
            <span className="text-[#f85149] font-bold">Warrior</span>
            <span className="ml-2 text-sm text-[#8b949e] hidden md:inline">| Conquering code one keystroke at a time</span>
          </h1>

          {/* Optional: animated cursor effect */}

        </div>
      </div>

      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 relative">

          <div className="w-full md:w-1/3">
            <div className="bg-[#161b22] p-6 rounded-xl border border-[#30363d] sticky top-4">



           
        <div
          className="relative w-58 h-58 rounded-full overflow-hidden border-4 border-white shadow-xl cursor-pointer transition-transform hover:scale-105 hover:shadow-2xl group"
          onClick={handlePlay}
        >
          {/* <video
            ref={videoRef}
            className="w-full h-full object-cover rounded-full"
            muted
            playsInline
            poster="./images/my_image.jpeg"
          >
            <source src="portfolio.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <img src="./images/my_image.jpeg" alt="" />

          {/* Play Icon Overlay on Hover */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity rounded-full">            <svg
              className="w-12 h-12 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6 4l12 6-12 6V4z" />
            </svg>
          </div>
        </div>
      

      {/* Fullscreen Modal */}
      {isExpanded && (
  <div
    className="fixed inset-0 bg-[#0d1117]/90 backdrop-blur-sm flex items-start justify-center z-50 pt-24 px-6"
    onClick={handleClose}
  >
    <div
      className="rounded-xl bg-[#161b22] border border-[#30363d] shadow-lg p-3"
      onClick={(e) => e.stopPropagation()} // Prevent closing on video click
    >
      <video
        ref={videoRef}
        className="w-[90vw] max-w-4xl max-h-[80vh] rounded-lg border border-[#21262d] shadow-[0_0_0_1px_#30363d] outline-none"
        controls
        autoPlay
      >
        <source src="portfolio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
)}





              




              {/* Name and status */}
              <h2 className="text-2xl font-bold text-[#f0f6fc] mb-1 text-center md:text-left">
                Kiran shivanand totager
              </h2>
              <h3 className="text-lg text-[#8b949e] mb-4 text-center md:text-left">
                <a href="mailto:tskiran5114@gmail.com" className='flex justify-start gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  tskiran5114@gmail.com
                </a>
              </h3>
              <h3 className="text-lg text-[#8b949e] mb-4 text-center md:text-left">
                <a href="tel:+919019983058" className='flex justify-start gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                  +919019983058
                </a>
              </h3>

              {/* Status badge */}
              <div className="flex items-center mb-4 text-sm text-[#8b949e] justify-center md:justify-start">
                <span className="flex items-center">
                  <span className="w-3 h-3 bg-[#3fb950] rounded-full mr-2"></span>
                  Available for hire
                </span>
              </div>

              {/* Bio */}
              <p className="text-[#8b949e] text-sm mb-6 border-b border-[#30363d] pb-4">
                👨‍💻 Computer Science & Engineering Student | Software Development Intern at L&T
              </p>

              {/* Stats */}

              {/* Quick links - reduced for space */}
              <div className="space-y-2 text-sm">
                <a href="kiran_S_T_2025.pdf" className="flex items-center text-[#8b949e] hover:text-[#58a6ff]">
                  <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75z" />
                  </svg>
                  <span>Resume</span>
                </a>

              </div>

            </div>
          </div>

          {/* Right content area */}
          <div className="w-full md:w-2/3">
            {/* README.md style section */}
            <div className="bg-[#161b22] rounded-xl border border-[#30363d] mb-6 overflow-hidden">
              <div className="flex items-center bg-[#0d1117] px-4 py-2 border-b border-[#30363d]">
                <svg className="w-4 h-4 mr-2 text-[#8b949e]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M0 2.75C0 1.784.784 1 1.75 1H5c.55 0 1.07.26 1.4.7l.9 1.2a.25.25 0 00.2.1h6.75c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 15H1.75A1.75 1.75 0 010 13.25V2.75z" />
                </svg>
                <span className="text-[#8b949e] text-sm font-mono">README.md</span>
              </div>

              <div className="px-6 py-6 font-mono text-[#8b949e] leading-relaxed">
                <h2 className="text-2xl md:text-3xl font-bold text-[#f0f6fc] mb-4">
                  👨‍💻 Software Development Intern | CSE Student at GEC MH Halli
                </h2>
                <p className="text-base mb-4">
                  Currently interning at
                  <span className="text-[#f85149] font-medium"> L&T Technology Services (PES)</span>,
                  where I’m gaining practical experience in building robust backend systems.
                  I’ve been working on
                  <span className="text-[#58a6ff] font-medium"> RESTful APIs, JWT authentication, session management, and role-based access control</span>,
                  while also exploring
                  <span className="text-[#58a6ff] font-medium"> frontend development using React.js</span>.
                </p>
                <p className="mb-4">
                  I am comfortable with
                  <span className="text-[#e3b341] font-medium"> Python, Java, C, JavaScript, HTML, CSS, MySQL</span>,
                  and have working knowledge of
                  <span className="text-[#e3b341] font-medium"> FastAPI and Docker</span>.
                  My favorite project was to create a
                  <span className="text-[#8b949e] font-medium"> face recognition-based attendance system</span>
                  using DeepFace and combine it with a real-time MySQL database.
                </p>
                <p className="mb-4">
                  I have a strong background in
                  <span className="text-[#d2a8ff] font-medium"> data structures, problem-solving, and software development principles</span>,
                  and have solved more than
                  <span className="text-[#d2a8ff] font-medium"> 50+ problems on LeetCode</span>
                  to strengthen my logic-crafting ability.
                </p>
                <p>
                  I'm a self-proclaimed
                  <span className="text-[#ff7b72] font-medium"> lifelong learner</span>,
                  and I love growing and being part of
                  <span className="text-[#ff7b72] font-medium"> significant tech innovations</span>.
                  Whether working in a team or on my own, I enjoy creating
                  <span className="text-[#ff7b72] font-medium"> ideas become functional solutions</span>
                  that have a real impact.
                </p>
              </div>


            </div>

            {/* Pinned repositories section */}



          </div>
        </div>
      </div>

      {/* Social Links */}
      <SocialLinks />
    </div>
  );
}