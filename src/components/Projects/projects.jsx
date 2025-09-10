import React from "react";

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-10 text-center">
      <h1 className="text-2xl font-bold mb-6">My Projects</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Weather App */}
        <a
          href="https://amitabha7430.github.io/weather-report-web/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 bg-gray-800 text-white rounded-2xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold mb-2">🌦 Weather Report App</h2>
          <p className="text-sm text-gray-300">
            A weather application built with HTML, CSS, JavaScript, and OpenWeatherMap API.
          </p>
        </a>

        {/* Currency Exchange */}
        <a
          href="https://amitabha7430.github.io/Currency_exchange/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 bg-gray-800 text-white rounded-2xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold mb-2">💱 Currency Exchange</h2>
          <p className="text-sm text-gray-300">
            A real-time currency converter built using JavaScript and API integration.
          </p>
        </a>

        {/* Personal Portfolio */}
        <a
          href="https://amitabha7430.github.io/my_personal_portfolio/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 bg-gray-800 text-white rounded-2xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold mb-2">🌐 Personal Portfolio</h2>
          <p className="text-sm text-gray-300">
            My first personal portfolio website showcasing my skills and projects.
          </p>
        </a>
      </div>
    </div>
  );
}