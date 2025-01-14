import React from 'react'
import { specialityData } from '../assets/assets'

const Speciatity = () => {
    return (
        <div className='p-4 flex items-center flex-col' id='speciality'>
            <div className='text-2xl font-bold'>
                Speciality
            </div>
            <p className='text-[10px] text-center md:text-base lg:text-lg'>
                Discover specialized care tailored to your needs. From pediatrics to cardiology, dermatology to orthopedics, our platform connects you to top medical professionals in every field. Your health deserves expert attention—schedule your consultation today and experience compassionate, comprehensive care
            </p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                {specialityData.map((data) => (
                    <div key={data.id} className='bg-gray-100 p-4 m-4 rounded-md'>
                        <img src={data.image} alt={data.title} className='w-20 h-20' />
                        <h2 className='text-xl font-bold'>{data.speciality}</h2>
                        <p className='text-sm'>{data.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Speciatity
