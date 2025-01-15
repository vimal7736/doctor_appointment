import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const Speciatity = () => {
    return (
        <div className='p-4 flex items-center flex-col' id='speciality'>
            <p className='text-2xl font-medium mb-2'>Our Specialities</p>

            
            <p className='text-[10px] text-center md:text-base lg:text-lg'>
                Discover specialized care tailored to your needs. From pediatrics to cardiology, dermatology to orthopedics, our platform connects you to top medical professionals in every field. Your health deserves expert attention—schedule your consultation today and experience compassionate, comprehensive care
            </p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 '>
                {specialityData.map((data) => (
                    <Link
                        key={data.id}
                        onClick={()=>scrollTo(0,0)}
                        to={`/doctors/${data?.speciality}`}
                        className='items-center flex flex-col p-4 m-4 '>
                        <img src={data.image} alt={data.title} className='w-20 h-20  rounded-full transition-all hover:scale-105 hover:shadow-md hover:shadow-primary cursor-pointer' />
                        <h2 className='text-xl text-gray-400 font-medium'>{data.speciality}</h2>
                        {/* <p className=' text-center text-[12px]'>{data.description}</p> */}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Speciatity
