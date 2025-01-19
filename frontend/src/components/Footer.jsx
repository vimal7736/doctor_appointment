import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className=" text-black py-12">


            <div className=" h-[11vh] flex justify-between px-6 items-cente text-center">
                <div className=" mb-4 lg:mb-0">
                    <img
                        src={assets.logo}
                        alt="Logo"
                        className="h-12 w-24 object-contain mr-3"
                    />
                </div>
                <p className="text-sm">
                    &copy; {new Date().getFullYear()}  All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
