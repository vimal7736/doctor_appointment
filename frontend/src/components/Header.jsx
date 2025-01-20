import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <header className="flex flex-col relative md:flex-row bg-primary text-white rounded-2xl justify-between items-start p-6 lg:p-10">
            {/* Left Side */}
            <div className=" flex flex-col gap-1 md:gap-12  "> 
                <h1 className="text-xl md:text-3xl lg:text-5xl py-2 font-extrabold bg-clip-text bg-gradient-to-r from-white to-blue-200 text-transparent">
                    Your Health, <br />  Just a<span className='text-danger'> Click </span>Away
                </h1>
                <p className="text-sm md:text-base lg:text-lg bg-clip-text bg-gradient-to-r from-gray-50 via-gray-50 to-gray-200 text-transparent font-medium leading-relaxed">
                    Instantly access a trusted network of medical professionals. <br />
                    With our app, schedule consultations, receive reminders, <br />
                    and prioritize your well-being with ease.
                </p>
            </div>

            {/* Right Side */}
            <div className="flex flex-col items-center justify-center w-full md:w-1/2 relative">
                <img
                    src={assets.lady_doc}
                    alt="Doctor"
                    loading="lazy"
                    onLoad={() => setIsLoaded(true)}
                    className={`max-h-[100px] md:max-h-[300px]  w-auto object-contain  transition-opacity duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                />
                <button className=" px-12 py-1 bg-gradient-to-r from-slate-800 via-primary to-primary hover:text-gray-800 text-white font-bold text-xs md:text-sm lg:text-lg rounded-full shadow-lg">
                    <a className="flex space-x-6 items-center  " href="#speciality">
                        <span>Book Appointment</span>
                        <img  src={assets.info_icon} alt="Profiles" className="h-6 w-6" />
                    </a>
                </button>
            </div>
        </header>
    );
};

export default Header;
