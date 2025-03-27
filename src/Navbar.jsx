import { useState } from "react"; 
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import React from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

return (
    <div>
    <nav className="bg-gray-700 text-white p-4 shadow-md fixed top-0 left-0 w-full z-50">
    <button
          className="md:hidden text-white text-2xl focus:outline-none z-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
        <ul className="hidden md:flex justify-end space-x-6 text-lg font-medium">
            <li className="px-3 py-1 rounded-full hover:bg-gray-900 transition duration-300 cursor-pointer">
                <Link to="/">Home</Link>
                </li>
            <li  className="px-3 py-1 rounded-full hover:bg-gray-900 transition duration-300 cursor-pointer"><Link to="/education">Education</Link></li>
            <li  className="px-3 py-1 rounded-full hover:bg-gray-900 transition duration-300 cursor-pointer"><Link to="projects">projets</Link></li>
        </ul>
        {
            isOpen&&(
                <ul className="md:hidden flex flex-col items-start self-start mt-4 gap-3 text-lg font-medium bg-[#0d1117]  rounded-md">
  <li className="px-3  rounded-full hover:bg-gray-700 transition duration-300">
    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
  </li>
  <li className="px-3 rounded-full hover:bg-gray-700 transition duration-300">
    <Link to="/education" onClick={() => setIsOpen(false)}>Education</Link>
  </li>
  <li className="px-3 rounded-full hover:bg-gray-700 transition duration-300">
    <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
  </li>
</ul>

            )
        }
    </nav>
    
    </div>
  );
  
}
