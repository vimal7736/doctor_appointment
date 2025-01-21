import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="flex items-center justify-between py-4 mb-5 border-b border-gray-200">
      <NavLink to="/">
        <img className="w-56" src={assets.logo} alt="Logo" />
      </NavLink>
      <nav className="hidden md:flex items-center space-x-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative ${isActive ? 'text-primary' : 'text-gray-500'} hover:text-primary`
          }
        >
          Home
          <span className="absolute w-1 h-0.5 bg-danger left-0 bottom-0 transition-all opacity-0 hover:opacity-100"></span>
        </NavLink>
        <NavLink
          to="/doctors"
          className={({ isActive }) =>
            `relative ${isActive ? 'text-primary' : 'text-gray-500'} hover:text-primary`
          }
        >
          Doctors
          <span className="absolute w-1 h-0.5 bg-danger left-0 bottom-0 transition-all opacity-0 hover:opacity-100"></span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative ${isActive ? 'text-primary' : 'text-gray-500'} hover:text-primary`
          }
        >
          About
          <span className="absolute w-1 h-0.5 bg-danger left-0 bottom-0 transition-all opacity-0 hover:opacity-100"></span>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative ${isActive ? 'text-primary' : 'text-gray-500'} hover:text-primary`
          }
        >
          Contact
          <span className="absolute w-1 h-0.5 bg-danger left-0 bottom-0 transition-all opacity-0 hover:opacity-100"></span>
        </NavLink>
      </nav>
      <div className="relative">
        {token ? (
          <div
            className="flex items-center space-x-5 cursor-pointer"
            onClick={toggleDropdown}
          >
            <img className="w-10 rounded-2xl" src={assets.profile_pic} alt="Profile" />
            <img className="w-3" src={assets.dropdown_icon} alt="Dropdown Icon" />
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="text-[12px] px-4 py-2 text-white bg-primary rounded-full hover:bg-danger"
          >
            Create Acc
          </button>
        )}
        {isDropdownOpen && token && (
          <div
            className="absolute z-10 top-12 right-0 w-40 text-sm bg-white shadow-lg rounded-md flex flex-col space-y-2 p-2"
          >
            <button
              className="hover:text-primary"
              onClick={() => {
                navigate('/my-profile');
                closeDropdown();
              }}
            >
              My Profile
            </button>
            <button
              className="hover:text-primary"
              onClick={() => {
                navigate('/my-appoinments');
                closeDropdown();
              }}
            >
              My Appointments
            </button>
            <button
              className="hover:text-primary"
              onClick={() => {
                setToken(false);
                navigate('/');
                closeDropdown();
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
      <Sidebar />
    </header>
  );
};

export default Navbar;
