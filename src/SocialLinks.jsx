import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, faWhatsapp, } from "@fortawesome/free-brands-svg-icons";

export default function SocialLinks() {
  return (
   <div className="flex gap-6 text-3xl mt-6">
           <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition transform hover:scale-110">
             <FontAwesomeIcon icon={faGithub} />
           </a>
           <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition transform hover:scale-110">
             <FontAwesomeIcon icon={faLinkedin} />
           </a>
           <a href="https://wa.me/+919019983058" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-600 transition transform hover:scale-110">
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
  )
}
