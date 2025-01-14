import React from 'react'
import { doctors } from '../assets/assets'


const TopDoctors = () => {
return (
    <div className='flex flex-col items-center justify-center text-center p-4'>
            <p className='text-2xl font-bold mb-2'>Leading Experts in Healthcare</p>
            <p className='text-sm text-gray-600 mb-6'>When it comes to your health, trust only the best</p>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {doctors && doctors.slice(0,8).map((doctor) => (
                            <div key={doctor._id} className='cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center bg-white'>
                                    <img src={doctor.image} alt={doctor.name} className='w-36 h-36 rounded-full mb-4'/>
                                    <p className='text-lg font-semibold'>{doctor.name}</p>
                                    <p className='text-sm text-gray-500'>{doctor.speciality}</p>
                                    <div className='flex items-center  gap-2 p-2'>
                                        <div className='w-2 h-2 rounded bg-green-500' ></div>
                                        <div>Available</div>
                                    </div>
                            </div>
                    ))}
            </div>
    </div>
)
}

export default TopDoctors
