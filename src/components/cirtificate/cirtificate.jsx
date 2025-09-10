import React from "react";

export default function Cirtificate() {
  return (
    <div className="container mx-auto px-4 py-10 text-center">
      <h1 className="text-2xl font-bold mb-6">My Certificates</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Certificate 1 */}
        <div className="p-6 bg-gray-800 text-white rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">What is Data Science?</h2>
          <p className="text-sm text-gray-300 mb-2">
            Issued by: Coursera | Date: Aug 2025
          </p>
          <a
            href="https://coursera.org/share/da670aa0806799036c252bdb6bcc6d9b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline block mb-2"
          >
            View Certificate
          </a>
         
        </div>
        {/* Certificate 2 */}
        <div className="p-6 bg-gray-800 text-white rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">JavaScript Essentials</h2>
          <p className="text-sm text-gray-300 mb-2">
            Issued by: Udemy | Date: Dec 2023
          </p>
          <a
            href="https://www.udemy.com/certificate/EXAMPLE2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline block mb-2"
          >
            View Certificate
          </a>
         
        </div>
        {/* Certificate 3 */}
        <div className="p-6 bg-gray-800 text-white rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Frontend Web Development</h2>
          <p className="text-sm text-gray-300 mb-2">
            Issued by: freeCodeCamp | Date: Nov 2023
          </p>
          <a
            href="https://www.freecodecamp.org/certification/EXAMPLE3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline block mb-2"
          >
            View Certificate
          </a>
         
          
        </div>
      </div>
    </div>
  );
}