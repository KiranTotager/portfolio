import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Projects_data from "./data/Projects_data";
import SocialLinks from "./SocialLinks";
import Projects_description from "./Projects_description";

export default function Projects() {
  let [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative p-8 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
      <h2 className="text-3xl font-semibold mb-8 text-center">🚀 My Projects</h2>

      {/* Project Grid (Kept separate from SocialLinks) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {Projects_data.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`project-${project.id}`}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 border border-gray-200 dark:border-gray-700 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{project.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal for the selected project */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
          layoutId={`project-${selectedProject.id}`}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 mt-20 z-50"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg max-w-7xl w-full"
            layout
            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
          >
            <section className="bg-gray-100 w-full dark:bg-gray-800 py-6 flex justify-center">
              <div className="overflow-hidden bg-white dark:bg-gray-900 mx-2 flex flex-col lg:flex-row max-w-7xl w-full shadow-md rounded-xl">
                
                <div className="lg:w-1/2">
                  {/* Add image or leave it blank */}
                  {/* <div className="h-64 bg-cover lg:h-full" style={{ backgroundImage: "url('...')" }}></div> */}

                </div>
        
                

                {
  Projects_description.map((value, index) =>
    selectedProject.id === value.id ? (
      <div
        key={index}
        className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2"
      >
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
          {value.title}
        </h2>

        <p className="mt-4 text-gray-500 dark:text-gray-300">
          {value.description}
        </p>

        <div className="inline-flex w-full mt-6 sm:w-auto">
          <a
            href={value.github || ""}
            className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    ) : null
  )
}


              </div>
            </section>
          </motion.div>
        </motion.div>
        
        )}
      </AnimatePresence>

      {/* Social Links - Kept Separate (Only Show When No Project is Selected) */}
      {selectedProject === null && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2">
          <SocialLinks />
        </div>
      )}
    </div>
  );
}
