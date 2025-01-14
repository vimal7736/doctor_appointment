import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className=' flex flex-col  md:flex-row lg:flex-row bg-primary text-white rounded-md justify-between items-center p-4'>
            <div>
                {/* left side */}
                <p className=' text-2xl font-medium md:text-3xl md:font-bold lg:text-5xl lg:font-extrabold '>Your Health, <br /> Just a Click Away</p>
                <br />
                <p className="text-sm md:text-md lg:text-md bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                    Get instant access to a network of trusted medical professionals.
                    <br />
                    <br />
                    With our doctor appointment app, you can schedule consultations, get reminders, and focus on what matters most—your health and well-being.
                </p>
            </div>
            <div className='w-1/2'>
                {/* right side */}
                <img src={assets.lady_doc} alt="" />
            </div>

        </div>
    )
}

export default Header
