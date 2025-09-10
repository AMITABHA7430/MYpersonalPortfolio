import { useState } from "react"
import AboutImage from "../../images/WhatsApp Image 2025-08-24 at 22.03.23.jpeg";

function About() {
  const [count, setCount] = useState(0)

  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
           <img 
      src={AboutImage} 
      className="w-72 h-72 object-cover rounded-2xl shadow-xl border border-gray-200" 
      alt="About Amitabha" 
    />

          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Hi, I’m Amitabha Ghosh 👋
            </h2>
            <p className="mt-6 text-gray-600">
              I’m a 2nd year B.Tech student in Computer Science & Technology at Academy of Technology, Kolkata. 
              I’m passionate about building web applications and exploring modern technologies like 
              React, JavaScript, and APIs.
            </p>
            <p className="mt-4 text-gray-600">
              My skills include HTML, CSS, JavaScript, React, Java, Python, C Programming, Git & GitHub, and i have basic knowledge of DATA. I’ve built projects like a <a href="https://amitabha7430.github.io/weather-report-web" target="_blank" className="text-blue-600 underline">Weather App</a> using 
              OpenWeatherMap API, and I’m always eager to take on new challenges.
            </p>
            <p className="mt-4 text-gray-600">
              Apart from coding, I enjoy playing games, exploring new tech trends, and contributing 
              to open-source projects. My long-term goal is to become a full-stack developer and work on 
              impactful real-world applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
