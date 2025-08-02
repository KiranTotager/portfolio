import React from 'react';
import SocialLinks from './SocialLinks';
import { Link } from 'react-router-dom';
// import { useRef } from 'react';
import { useRef, useState } from "react";
import avatar from "./images/my_image.jpeg"
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



              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={avatar}
                  alt="My Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Name and status */}
              <h2 className="text-2xl font-bold text-[#f0f6fc] my-2 text-center md:text-left">
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
              <div className="flex items-center mb-4 text-sm text-[#8b949e] justify-start md:justify-start">
                <span className="flex items-center">
                  <span className="w-3 h-3  bg-[#3fb950] rounded-full mr-2"></span>
                  Available for hire
                </span>
              </div>

              {/* Bio */}
              <p className="text-[#8b949e] text-sm mb-6 border-b border-[#30363d] pb-4">
                👨‍💻 B.E. in Computer Science & Engineering, Class of 2025 | Ex-Software Development Intern at L&T

              </p>

              {/* Stats */}

              {/* Quick links - reduced for space */}
              <div className="space-y-4 text-sm text-white bg-[#161b22] p-4 rounded-xl shadow-md max-w-xs mx-auto">
                {/* Resume Button */}
                <a
                  href="/Kiran_Shivanand_Totager_Jresume.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-[#58a6ff] bg-[#21262d] rounded-lg shadow-md hover:bg-[#30363d] transition-all duration-300 font-semibold tracking-wide"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75z" />
                  </svg>
                  <span>Download Resume</span>
                </a>

                {/* Hire Me Button */}
                <a
                  href="mailto:tskiran5114@gmail.com?subject=Hiring%20Opportunity&body=Hi%20Kiran%2C%20We%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect."
                  className="w-full gap-2 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 tracking-wide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Hire Me
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
                  👨‍💻 Former Software Development Intern @ L&T Technology Services (PES)
                </h2>
                <p className="text-base mb-4">
                  I’m a 2025 Computer Science & Engineering graduate with practical industry exposure through my internship at
                  <span className="text-[#58a6ff] font-medium"> L&T Technology Services (PES)</span>. During my time there, I worked on building scalable backend systems using
                  <span className="text-[#58a6ff] font-medium"> Spring Boot, FastAPI, and MySQL</span>. I implemented
                  <span className="text-[#58a6ff] font-medium"> JWT authentication, session management, and role-based access control</span>, and optimized performance using
                  <span className="text-[#58a6ff] font-medium"> aiomysql and Redis</span>.
                </p>
                <p className="mb-4">
                  On the frontend side, I contributed by building dynamic UI components using
                  <span className="text-[#e3b341] font-medium"> React.js and Tailwind CSS</span>. I also integrated
                  <span className="text-[#e3b341] font-medium"> SonarQube for static code analysis</span> and worked with
                  <span className="text-[#e3b341] font-medium"> Jenkins pipelines and Docker</span> to automate the CI/CD process. I followed best practices around
                  <span className="text-[#e3b341] font-medium"> version control, API security, and scalable database design</span>.
                </p>
                <p className="mb-4">
                  I’m proficient in
                  <span className="text-[#d2a8ff] font-medium"> Java, Python, C, JavaScript, HTML, CSS, MySQL</span>, with practical experience in
                  <span className="text-[#d2a8ff] font-medium"> Spring Boot, Spring Security, Spring Data JPA, FastAPI, Redis, and Docker</span>. One of my favorite projects involved building a
                  <span className="text-[#8b949e] font-medium"> face recognition-based attendance system</span> using DeepFace and Tkinter integrated with MySQL.
                </p>
                <p>
                  I’m passionate about
                  <span className="text-[#58a6ff] font-medium"> clean code, scalable architecture, and real-world problem solving</span>. I’ve solved over
                  <span className="text-[#58a6ff] font-medium"> 65+ LeetCode problems</span> and continuously strive to improve my
                  <span className="text-[#58a6ff] font-medium"> data structures, algorithms, and system design skills</span>.
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