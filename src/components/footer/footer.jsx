import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        
        {/* Left side - Name */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-semibold text-white">Amitabha Ghosh</h2>
          <p className="text-sm text-gray-400">
            B.Tech CSE @ Academy of Technology, Kolkata
          </p>
        </div>

        {/* Middle - Skills */}
        <div className="mt-4 sm:mt-0 text-center">
          <p className="text-sm">
            💻 Skilled in: HTML, CSS, JavaScript, React, Java, Python, C, SQL  
          </p>
          <p className="text-sm mt-1 text-orange-400 font-medium">
            🚀 Currently on the way to becoming a full stack developer
          </p>
        </div>

        {/* Right side - GitHub */}
        <div className="mt-4 sm:mt-0">
          <a
            href="https://github.com/AMITABHA7430"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white hover:text-orange-400 transition"
          >
            🔗 GitHub
          </a>
        </div>
      </div>
      <Link to="/projects">Projects</Link>

      {/* Bottom line */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Amitabha Ghosh. All rights reserved.
      </div>
    </footer>
  );
}
