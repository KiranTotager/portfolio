import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Projects_data from "./data/Projects_data";
import SocialLinks from "./SocialLinks";

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
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl w-full"
              layout
              onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
            >
              <h3 className="text-2xl font-semibold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedProject.description}</p>

              <h4 className="text-lg font-semibold">Technologies Used:</h4>
              <ul className="flex flex-wrap gap-2 mt-2 mb-4">
                {selectedProject.technologies.map((tech, index) => (
                  <li key={index} className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">
                    {tech}
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold">Features:</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4">
                {selectedProject.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Social Links - Kept Separate (Only Show When No Project is Selected) */}
      {selectedProject===null && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2">
          <SocialLinks />
        </div>
      )}
    </div>
  );
}
