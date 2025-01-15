import React from 'react';
import { assets } from '../assets/assets';

const Banner = () => {
    return (
        <div className=" flex flex-col md:flex-row mb-3 bg-danger rounded-3xl justify-between px-6 text-white ">
            {/* Image with reduced dimensions and responsiveness */}
           

            {/* Text section */}
            <div className="flex flex-row gap-11 py-8 justify-evenly items-center   md:mt-0 md:ml-4">
                <h1 className="text-2xl md:text-4xl items-center font-bold">Book Your Appointment</h1>
                <p className="mt-2 text-sm md:text-base hidden md:block">Easily book your appointment with our online system.</p>
                <button className=" px-4 py-2 bg-white  text-black hover:text-white rounded hover:bg-danger transition duration-300">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Banner;