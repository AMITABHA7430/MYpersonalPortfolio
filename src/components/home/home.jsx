import React from "react";
import { Link } from "react-router-dom";
import SampleImage from "../../images/WhatsApp Image 2025-08-24 at 22.03.24 (2).jpeg";

import WhatsAppImage from "../../images/WhatsApp Image 2025-08-24 at 22.03.24.jpeg";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Hero Section */}
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            
            <h2 className="text-4xl font-bold sm:text-5xl">
              Hi, I’m <span className="text-orange-700">Amitabha Ghosh</span> 👋
              <span className="hidden sm:block text-2xl font-medium text-gray-600 mt-2">
                B.Tech CSE | Web Developer | Tech Enthusiast
              </span>
            </h2>

            <p className="text-gray-600 text-lg">
              I love building web applications using React, JavaScript, and modern web technologies.  
              Currently pursuing <b>B.Tech in Computer Science & Technology</b> at Academy of Technology, Kolkata.
            </p>

            <div className="flex flex-wrap justify-center sm:justify-end gap-4">
              <a
                href="https://amitabha7430.github.io/my_personal_portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
              >
                🌐 View Portfolio
              </a>
              <a
                href="https://github.com/AMITABHA7430"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-white items-center px-6 py-3 font-medium bg-gray-800 rounded-lg hover:opacity-75"
              >
                💻 GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
          <img 
  src={SampleImage} 
  className="w-72 h-72 object-cover rounded-2xl shadow-xl border border-gray-200" 
  alt="Sample Image" 
/>

        </div>
      </aside>

      {/* Skills Section Image */}
      <div className="grid place-items-center sm:mt-20">
        <img 
  src={WhatsAppImage} 
  className="w-72 h-72 object-cover rounded-2xl shadow-xl border border-gray-200" 
  alt="WhatsApp Image" 
/>

      </div>

      {/* Skills / Highlight */}
      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        🚀 Skilled in HTML, CSS, JavaScript, React, Java, Python, C & SQL
      </h1>
    </div>
  );
}

