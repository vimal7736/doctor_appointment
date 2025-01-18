import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';


const TopDoctors = () => {
    const navigate = useNavigate();
    const {doctors} = useContext(AppContext);
    
   


return (
    <div className='flex flex-col items-center justify-center text-center p-4'>
            <p className='text-2xl font-medium mb-2'>Leading Experts in Healthcare</p>
            <p className='text-sm text-gray-600 mb-6'>When it comes to your health, trust only the best</p>
            <div className=' relative w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {doctors && doctors.slice(0,4).map((doctor) => (
                            <div  onClick={()=>navigate(`/appointment/${doctor._id}`)} key={doctor._id} className='cursor-pointer rounded-s-none shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center bg-white'>
                                    <p className='text-lg font-semibold underline'>{doctor.name}</p>
                                    <img src={doctor.image} alt={doctor.name} className='w-32 h-36'/>
                                    <p className='text-sm text-gray-500'>{doctor.speciality}</p>
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
            onClick={()=>{navigate('/doctors');scrollTo(0,0)} }
            className='bg-gray-800 mt-2 text-sm font-medium w-1/6 h-10 text-white rounded-full'>More</button>
            <br />
            <br />
    </div>
)
}

export default TopDoctors
