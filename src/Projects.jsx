import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Projects_data from "./data/Projects_data";
import SocialLinks from "./SocialLinks";
import Projects_description from "./Projects_description";
import ProjectMediaSlider from "./ProjectMediaSlider";
import Images_paths from "./Images_paths";

export default function Projects() {
  let [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative p-8 mt-10 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
      {/* <h2 className="text-3xl font-semibold mb-8 text-center">🚀 My Projects</h2> */}

      {/* Project Grid (Kept separate from SocialLinks) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {Projects_description.map((project) => (
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
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg max-w-7xl w-full max-h-[90vh] overflow-y-auto"
              layout
              onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
            >
              <section className="bg-gray-100 w-full dark:bg-gray-800 py-6 flex justify-center">
                <div className="overflow-hidden bg-white dark:bg-gray-900 mx-2 flex flex-col lg:flex-row max-w-7xl w-full shadow-md rounded-xl min-h-[500px] max-h-[80vh]">
                  <div className="lg:w-1/2 flex justify-center items-center p-4">
                    <ProjectMediaSlider
                      media={
                        Images_paths.find((value) => value.id === selectedProject.id)
                          ?.media || []
                      }
                    />
                  </div>

                  {Projects_description.map((value, index) =>
                    selectedProject.id === value.id ? (
                      <div
                        key={index}
                        className="max-w-xl px-6 py-6 lg:max-w-5xl lg:w-1/2 overflow-y-auto"
                      >
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                          {value.title}
                        </h2>

                        <p className="mt-4 text-gray-500 dark:text-gray-300">
                          {value.description}
                        </p>

                        <div className="flex flex-wrap gap-4 mt-4">
                          {value.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg shadow-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="inline-flex w-full mt-6 sm:w-auto">
                          <a
                            href={value.github || ""}
                            className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white bg-gray-800 rounded-lg"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Project
                          </a>
                        </div>
                      </div>
                    ) : null
                  )}
                </div>
              </section>
            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>

      {/* Social Links - Kept Separate (Only Show When No Project is Selected) */}
      {selectedProject === null && (

        <div className="flex justify-center items-center ">
          <SocialLinks />
        </div>


      )}
    </div>
  );
}
