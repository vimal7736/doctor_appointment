import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-primary font-semibold p-2 w-full justify-center items-center">
            <div className="container mx-auto flex justify-between">
                <div className="flex items-center">
                    <img src={assets.logo} alt="Logo" className="h-3/4 mr-3" />
                </div>

                <div className='hidden lg:block'>
                    <div className="flex flex-col space-x-1">
                        <NavLink></NavLink>
                        <NavLink></NavLink>
                        <NavLink></NavLink>
                        <NavLink></NavLink>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <ul className="flex space-x-4 text-[10px] md:text-[15px] lg:text-[20px]">
                        <li className="hover:underline">Facebook</li>
                        <li className="hover:underline">Twitter</li>
                        <li className="hover:underline">Instagram</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;