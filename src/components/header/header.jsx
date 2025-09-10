import React from "react";
import { Link, NavLink } from "react-router-dom";
import AmitabhaLOGO from "../../images/AmitabhaLOGO.png";


export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0 bg-white">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
  src={AmitabhaLOGO} 
  className="mr-3 h-12" 
  alt="Amitabha Logo" 
/>

            <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-800">
              Amitabha Ghosh
            </span>
          </Link>

          {/* Right buttons */}
          <div className="flex items-center lg:order-2">
            <a
              href="https://amitabha7430.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mr-2"
            >
              Portfolio
            </a>
            <a
              href="https://github.com/AMITABHA7430"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 mr-2"
            >
              GitHub
            </a>
          </div>

          {/* Navigation menu */}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 lg:p-0 ${
                      isActive
                        ? "text-orange-700 font-semibold"
                        : "text-gray-700 hover:text-orange-700"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 lg:p-0 ${
                      isActive
                        ? "text-orange-700 font-semibold"
                        : "text-gray-700 hover:text-orange-700"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Projects"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 lg:p-0 ${
                      isActive
                        ? "text-orange-700 font-semibold"
                        : "text-gray-700 hover:text-orange-700"
                    }`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 lg:p-0 ${
                      isActive
                        ? "text-orange-700 font-semibold"
                        : "text-gray-700 hover:text-orange-700"
                    }`
                  }
                >
                  Contact
                </NavLink>
               
              </li>
                

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}


