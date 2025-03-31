import React from "react";
import Projects_data from "./data/Projects_data";
import SocialLinks from "./SocialLinks";

export default function Projects() {
  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
      <h2 className="text-3xl font-semibold mb-8 text-center">🚀 My Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Projects_data.map((project) => (
          <div
            key={project.id}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{project.description}</p>

            <div className="mt-4">
              <h4 className="text-sm font-semibold">Technologies Used:</h4>
              <ul className="flex flex-wrap gap-2 mt-1">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-semibold">Features:</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <p className="mt-4 text-sm text-blue-600 dark:text-blue-400 font-medium">{project.category}</p>
          </div>
        ))}
      </div>

      {/* Centered Social Links */}
      <div className="flex justify-center mt-8">
        <SocialLinks />
      </div>
    </div>
  );
}
