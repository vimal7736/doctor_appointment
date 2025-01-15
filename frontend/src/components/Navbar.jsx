import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);
  return (
    <div className=' flex items-center justify-between py-4 mb-5 border-b border-b-gray'>
      <NavLink to="/">
        <img

          className='w-56 cursor-pointer' src={assets.logo} alt='Logo' />
      </NavLink>


      <ul className='hidden md:flex items-center font-medium justify-between space-x-10'>
        <li className='py-1'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              ` ${isActive ? 'text-primary' : 'text-gray-500'} hover:text-primary group`
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
              ` ${isActive ? 'text-primary' : 'text-gray-500'} hover:text-primary group`
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
              ` ${isActive ? 'text-primary' : 'text-gray-500'} hover:text-primary group`
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
              ` ${isActive ? 'text-primary' : 'text-gray-500'} hover:text-primary group`
            }
          >
            Contact
            <span className='absolute w-1 h-0.5 bg-danger left-0 bottom-0 transition-all group-hover:w-full group-hover:opacity-100 opacity-0'></span>
          </NavLink>
        </li>
      </ul>

      <div>
        {token ? (
          <div className='px-10 flex items-center space-x-5 cursor-pointer group  relative '>
            <img className='w-10 rounded-2xl' src={assets.profile_pic} alt="" />
            <img className='w-3' src={assets.dropdown_icon} alt="" />
            <div className='hidden group-hover:block absolute top-10 left-5 text-[12px] w-32 text-pretty shadow-lg bg-white font-semibold text-gray-700 rounded-md flex flex-col space-y-2 p-2'>
              <div className='hover:text-primary cursor-pointer' onClick={() => navigate('/my-profile')}>My Profile</div>
              <div className='hover:text-primary cursor-pointer' onClick={() => navigate('/my-appointments')}>My Appointments</div>
              <div
                className='hover:text-primary cursor-pointer'
                onClick={() => {
                  setToken(false);
                  navigate('/');
                }}
              >
                Logout
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => (navigate('/login'))}
            className=' text-[12px] px-4 py-2 text-white bg-primary rounded-full hover:bg-danger'>
            Create Acc
          </button>
        )}

      </div>
    </div>
  );
};

export default Navbar;
