import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Header = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="flex flex-col md:flex-row lg:flex-row bg-primary text-white rounded-md justify-between items-center p-4">
            <div>
                {/* Left side */}
                <p className="text-2xl font-medium md:text-3xl md:font-bold lg:text-5xl lg:font-extrabold">
                    Your Health, <br /> Just a Click Away
                </p>
                <br />
                <p className="text-sm md:text-md lg:text-md bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                    Get instant access to a network of trusted medical professionals.
                    <br />
                    <br />
                    With our doctor appointment app, you can schedule consultations, get reminders, and focus on what matters most—your health and well-being.
                </p>
            </div>
            <div className="w-1/2">
                {/* Right side */}
                <img
                    src={assets.lady_doc}
                    alt="Doctor"
                    loading="lazy"
                    onLoad={() => setIsLoaded(true)}
                    className={`transition-opacity duration-500 ease-in-out ${
                        isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            </div>
        </div>
    );
};

export default Header;
