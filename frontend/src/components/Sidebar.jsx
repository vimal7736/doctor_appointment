import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button
        className="text-gray-700 focus:outline-none"
        onClick={toggleSidebar}
      >
        <img
          src={assets.menu} 
          alt="Menu"
          className="w-6"
        />
      </button>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <img
            src={assets.logo}
            alt="Logo"
            className="w-32"
            onClick={() => setIsOpen(false)}
          />
          <button
            className="text-gray-700 focus:outline-none"
            onClick={toggleSidebar}
          >
            ✖
          </button>
        </div>

        <nav className="mt-4">
          <ul className="space-y-4 px-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-lg text-sm font-medium ${
                    isActive ? "bg-primary text-white" : "text-gray-700"
                  } hover:bg-primary hover:text-white`
                }
                onClick={toggleSidebar}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/doctors"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-lg text-sm font-medium ${
                    isActive ? "bg-primary text-white" : "text-gray-700"
                  } hover:bg-primary hover:text-white`
                }
                onClick={toggleSidebar}
              >
                Doctors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-lg text-sm font-medium ${
                    isActive ? "bg-primary text-white" : "text-gray-700"
                  } hover:bg-primary hover:text-white`
                }
                onClick={toggleSidebar}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-lg text-sm font-medium ${
                    isActive ? "bg-primary text-white" : "text-gray-700"
                  } hover:bg-primary hover:text-white`
                }
                onClick={toggleSidebar}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
