import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, faWhatsapp, } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 py-30">
      <h1 className="w-full text-2xl md:text-3xl font-mono font-semibold mb-3 text-left bg-gray-900 text-blue-400 px-2 py-1 rounded-md border border-blue-600 shadow-md">
        {"<> Aspiring Software Engineer </>"}
      </h1>

      {/* Profile Image */}
      <div className="w-full px-4 md:px-8 lg:px-20">
  <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 rounded-2xl shadow-xl border border-gray-700">
    
    {/* Profile Image */}
    <div className="relative">
      <div className="w-40 h-40 md:w-52 md:h-52 bg-gray-900 p-2 rounded-full border border-gray-700 shadow-lg shadow-blue-500/50 flex items-center justify-center">
        <img
          src="/images/my_image.jpeg"
          alt="Profile"
          className="w-full h-full rounded-full border-4 border-gray-600"
        />
      </div>
      <div className="absolute bottom-3 right-3 bg-blue-500 w-5 h-5 rounded-full border-2 border-gray-900"></div>
    </div>

    {/* Text Content */}
    <div className="max-w-2xl bg-gray-900 text-gray-300 font-mono p-6 rounded-lg border border-gray-700 shadow-lg shadow-blue-500/50 text-center md:text-left leading-relaxed tracking-wide">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
      👨‍💻 Passionate Computer Science & Engineering Student
      </h2>
      <p className="text-base md:text-lg">
        With a strong foundation in 
        <span className="text-blue-400 font-medium"> programming, data structures, and software development</span>, 
        I thrive on solving complex real-world challenges through 
        <span className="text-gray-400 font-medium"> efficient and scalable</span> coding solutions.
      </p>
      <p className="mt-4">
        Proficient in 
        <span className="text-yellow-400 font-medium"> C, Java, Python, JavaScript, HTML, CSS, MySQL, and REST APIs</span>, 
        I am currently sharpening my expertise as a 
        <span className="text-red-400 font-medium"> Software Development Intern at L&T</span>, 
        working on real-world applications.
      </p>
      <p className="mt-4">
        With a relentless drive for 
        <span className="text-purple-400 font-medium"> continuous learning and innovation</span>, 
        I aim to contribute my skills to impactful projects. Excited to 
        <span className="text-pink-400 font-medium"> collaborate, grow, and make a difference</span> 
        in the world of technology. 🌍✨
      </p>

      {/* Call to Action Button */}
      <a
        href="https://your-portfolio-link.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium text-lg shadow-md transform transition hover:scale-105"
      >
        View My Work
      </a>
    </div>
  </div>
</div>


      {/* Social Icons */}
      {/* <div className="flex gap-6 text-3xl mt-6">
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition transform hover:scale-110">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition transform hover:scale-110">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-600 transition transform hover:scale-110">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition transform hover:scale-110">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div> */}
      <div className="flex gap-6 text-3xl mt-6">
  <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition transform hover:scale-110">
    <FontAwesomeIcon icon={faGithub} />
  </a>
  <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition transform hover:scale-110">
    <FontAwesomeIcon icon={faLinkedin} />
  </a>
  <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-600 transition transform hover:scale-110">
    <FontAwesomeIcon icon={faWhatsapp} />
  </a>
  <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition transform hover:scale-110">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
  {/* LeetCode Link with SVG Icon */}
  <a href="https://leetcode.com/your-username" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-600 transition transform hover:scale-110">
    <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="w-8 h-8" />
  </a>
</div>


      {/* Animated Button */}

    </div>
  );
}
