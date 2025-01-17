import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Banner = () => {
  const nav = useNavigate();

  return (
    <section className="relative bg-gradient-to-r from-primary to-danger rounded-3xl shadow-lg overflow-hidden mb-6">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-opacity-50 bg-black"></div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-8 md:py-16 md:px-12 text-white relative z-10">
        {/* Text Content */}
        <div className="max-w-lg space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Your Health, <span className="text-yellow-400">Our Priority</span>
          </h1>
          <p className="text-base md:text-lg text-gray-200">
            Experience seamless healthcare services. Book an appointment with top-rated professionals and take a step toward better health today.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={() => {
                nav('/doctors');
              }}
              className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition duration-300"
            >
              Explore Services
            </button>
            <button
              onClick={() => {
                nav('/contact');
              }}
              className="px-6 py-3 border-2 border-yellow-400 rounded-lg font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-black transition duration-300"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/4 flex justify-center">
          <img
            src={assets.header_img}
            alt="Healthcare Banner"
            className="rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
