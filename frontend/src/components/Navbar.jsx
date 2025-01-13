import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-4 mb-5 border-b border-b-gray'>
      <img className='w-44 cursor-pointer' src= {assets.logo} alt ="" />
      <ul className='hidden md:flex items-center font-medium justify-between w-1/2'>
        <NavLink>
            <li>Home</li>
            <hr/>
        </NavLink>
        <NavLink>
            <li>All Doctors</li>
            <hr/>
        </NavLink>
        <NavLink>
            <li>About</li>
            <hr/>
        </NavLink>
        <NavLink>
            <li>Contact</li>
            <hr/>
        </NavLink>
      </ul>
      <div>
        <button>Create Account</button>
      </div>

    </div>
  )
}

export default Navbar
