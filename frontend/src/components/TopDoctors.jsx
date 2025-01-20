import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';


const TopDoctors = () => {
        const navigate = useNavigate();
        const { doctors } = useContext(AppContext);




        return (
                <div className='flex flex-col items-center justify-center text-center p-4'>
                        <p className='text-2xl font-medium mb-2'>Leading Experts in Healthcare</p>
                        <p className='text-sm text-gray-600 mb-6'>When it comes to your health, trust only the best</p>
                        <div className=' relative w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                                {doctors && doctors.slice(0, 8).map((doctor) => (
                                        <div onClick={() => navigate(`/appointment/${doctor._id}`)} key={doctor._id} className='cursor-pointer text-white shadow-lg  duration-300 p-4 flex flex-col items-center bg-primary rounded-md hover:shadow-sm hover:shadow-slate-700 transition-all  md:scale-75 md:hover:scale-100 '>
                                                <p className='text-sm text-white  font-semibold '>{doctor.name}</p>
                                                <div className='w-24 rounded-full h-24 bg-primary border-2  '>
                                                        <img
                                                                className='rounded-full shadow-md shadow-white'
                                                                src={doctor.image} alt={doctor.name}

                                                        />

                                                </div>
                                                <p className='text-sm text-gray-50'>{doctor.speciality}</p>
                                                <div className='flex items-center  gap-2 p-2'>
                                                        <div className='w-2 h-2 rounded bg-green-500' ></div>
                                                        <div>Available</div>
                                                </div>
                                        </div>
                                ))}
                        </div>
                        <br />
                        <br />
                        <button
                                onClick={() => { navigate('/doctors'); scrollTo(0, 0) }}
                                className='bg-gray-800 mt-2 text-sm font-medium w-1/6 h-10 text-white rounded-full hover:bg-primary'>More</button>
                        <br />
                        <br />
                </div>
        )
}

export default TopDoctors
