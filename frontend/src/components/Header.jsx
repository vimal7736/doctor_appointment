import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <header className="flex flex-col relative md:flex-row bg-primary text-white rounded-2xl justify-between items-start p-6 lg:p-10">
            {/* Left Side */}
            <div className="z-10 space-y-6">
                <h1 className="text-xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text bg-gradient-to-r from-white to-blue-200 text-transparent">
                    Your Health, <br /> Just a Click Away
                </h1>
                <p className="text-sm md:text-base lg:text-lg bg-clip-text bg-gradient-to-r from-gray-50 via-gray-50 to-gray-400 text-transparent font-medium leading-relaxed">
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
                    className={`max-h-[400px] w-auto object-contain rounded-full transition-opacity duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                />
                <button className="mt-6 px-5 py-3 bg-gradient-to-r from-slate-800 via-primary to-primary hover:text-gray-800 text-white font-bold text-xs md:text-sm lg:text-lg rounded-full shadow-lg">
                    <a className="flex items-center gap-2" href="#speciality">
                        <img src={assets.info_icon} alt="Profiles" className="h-6 w-6" />
                        <span>Book Appointment</span>
                    </a>
                </button>
            </div>
        </header>
    );
};

export default Header;
