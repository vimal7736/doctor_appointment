import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-4 mb-5 border-b border-b-gray'>
      <img className='w-44 cursor-pointer' src={assets.logo} alt='Logo' />

      <ul className='hidden md:flex items-center font-medium justify-between w-1/2'>
        <li className='py-1'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `relative ${isActive ? 'text-primary' : 'text-gray-500'} hover:text-primary group`
            }
          >
            Home
            <span className='absolute w-1 h-0.5 bg-danger left-0 bottom-0 transition-all group-hover:w-full group-hover:opacity-100 opacity-0'></span>
          </NavLink>
        </li>
        <li className='py-1'>
          <NavLink
            to='/doctors'
            className={({ isActive }) =>
              `relative ${isActive ? 'text-primary' : 'text-gray-500'} hover:text-primary group`
            }
          >
            Doctors
            <span className='absolute w-1 h-0.5 bg-danger left-0 bottom-0 transition-all group-hover:w-full group-hover:opacity-100 opacity-0'></span>
          </NavLink>
        </li>
        <li className='py-1'>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              `relative ${isActive ? 'text-primary' : 'text-gray-500'} hover:text-primary group`
            }
          >
            About
            <span className='absolute w-1 h-0.5 bg-danger left-0 bottom-0 transition-all group-hover:w-full group-hover:opacity-100 opacity-0'></span>
          </NavLink>
        </li>
        <li className='py-1'>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              `relative ${isActive ? 'text-primary' : 'text-gray-500'} hover:text-primary group`
            }
          >
            Contact
            <span className='absolute w-1 h-0.5 bg-danger left-0 bottom-0 transition-all group-hover:w-full group-hover:opacity-100 opacity-0'></span>
          </NavLink>
        </li>
      </ul>

      <div>
        <button className=' relative px-4 py-2 text-white bg-primary rounded hover:bg-secondary'>
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Navbar;
