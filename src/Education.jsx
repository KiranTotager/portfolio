import React, { useState } from 'react';
import { Education_data } from './data/Education_data';
import SocialLinks from './SocialLinks';

export default function Education() {
    let [selectTab, setTab] = useState("X");

    // Define your skills here
    const skills = [
        "Python", "Java", "JavaScript", "React.js", "FastAPI", "MySQL",
        "DSA", "numpy","pandas","matplotlib","seaborn", "tailwind css"
    ];
    let Tools = [
        "Git", "GitHub", "Postman", "docker", "jupyter notebook", "Linux", "pycharm","AWS cloud","CI/CD pipeline(Jenkins)"
    ]
    let certificates = [
        "core java-udemy", "datastructures-NPTEL", "data sceince-internshala"
    ];

    return (
        <div className="min-h-screen flex flex-col justify-between bg-[#0d1117] text-gray-300 items-center p-6 pt-24">
            {/* Tab Buttons */}
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
    p-8 rounded-xl shadow-xl w-3/4 border border-gray-700 
    transition-transform duration-300 hover:scale-105 hover:shadow-gray-900 flex-grow">

    {/* Heading */}
    <h2 className="text-3xl font-bold text-white mb-6 text-center underline decoration-gray-600">
        🎓 Education
    </h2>

    {/* Tabs inside the box */}
    <div className="flex space-x-4 mb-8 justify-center">
        {Education_data.map((tab, index) => (
            <button
                key={index}
                type="button"
                onClick={() => setTab(tab.level)}
                className={`px-6 py-2 text-lg font-semibold rounded-lg transition-all duration-300 border ${
                    selectTab === tab.level
                        ? "bg-[#1f2937] text-white border-gray-500 shadow-lg"
                        : "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600 hover:text-white"
                }`}
            >
                {tab.level}
            </button>
        ))}
    </div>

    {/* Content */}
    {Education_data.filter((tab) => tab.level === selectTab).map((tab, index) => (
        <div key={index} className="space-y-4 text-lg text-gray-300">
            {tab.Branch && (
                <p>
                    <span className="text-purple-400 font-semibold">Branch:</span> {tab.Branch}
                </p>
            )}
            
            
            <p>
                <span className="text-yellow-400 font-semibold">{tab.percentage ? "Percentage" : "CGPA"}:</span> {tab.percentage || tab.CGPA}
            </p>
            <p>
                <span className="text-green-400 font-semibold">Pass out Year:</span> {tab.year}
            </p>
            <p>
                <span className="text-blue-400 font-semibold">Institution:</span> {tab.school || tab.college}
            </p>
            {tab.University && (
                <p>
                    <span className="text-purple-400 font-semibold">University:</span> {tab.University}
                </p>
            )}
            
        </div>
    ))}
</div>

            {/* Skills Section */}
            <div className="bg-gray-900 w-3/4 p-6 mt-8 rounded-xl shadow-lg border border-gray-700">
                <h2 className="text-2xl font-semibold text-white mb-4">👨‍💻 Skills</h2>
                <div className="flex flex-wrap gap-4">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Tools Section */}
            <div className="bg-gray-900 w-3/4 p-6 mt-8 rounded-xl shadow-lg border border-gray-700">
                <h2 className="text-2xl font-semibold text-white mb-4">🛠️ Tools</h2>
                <div className="flex flex-wrap gap-4">
                    {Tools.map((tool, index) => (
                        <span
                            key={index}
                            className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
                        >
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
            <section className="bg-[#0d1117] text-white mt-9 w-3/4 py-8 px-4 md:px-12 rounded-2xl shadow-md border border-gray-700">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#58a6ff]">
                    🎓 Certifications
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                    {certificates.map((cert, index) => (
                        <li key={index} className="text-base md:text-lg hover:text-[#c9d1d9] transition-all">
                            {cert}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Social Links at the Bottom */}
            <footer className="mt-auto w-full flex justify-center py-6">
                <SocialLinks />
            </footer>
        </div>
    );
}
