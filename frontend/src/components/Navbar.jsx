import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-4 mb-5 border-b border-b-gray'>
      <img className='w-44 cursor-pointer' src= {assets.logo} alt ="" />
      <ul className='hidden md:flex items-center font-medium justify-between w-1/2'>
        <NavLink>
            <li className='py-1' >Home</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/4 m-auto'/>
        </NavLink>
        <NavLink>
            <li className='py-1'>All Doctors</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/4 m-auto'/>
        </NavLink>
        <NavLink>
            <li className='py-1'>About</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/4 m-auto'/>
        </NavLink>
        <NavLink>
            <li className='py-1'>Contact</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/4 m-auto'/>
        </NavLink>
      </ul>
      <div>
        <button>Create Account</button>
      </div>

    </div>
  )
}

export default Navbar
