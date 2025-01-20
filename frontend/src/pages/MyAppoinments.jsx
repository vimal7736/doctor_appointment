import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppoinments = () => {
  const { doctors } = useContext(AppContext)
  console.log(doctors, 'doctors');

  return (
    <div>
      {doctors.length > 0 && (
        <div className='flex flex-wrap gap-3'>
          {doctors.slice(0, 3).map((doc, index) => (
            <div className='p-6 px-10 flex  w-full justify-between items-center rounded-md'>
              <div className='flex flex-col items-center shadow-xl rounded-sm text-sm md:text-lg'>
                <div className='font-semibold' >{doc.name}</div>
                <img className=' w-[50%] h-[50%]' src={doc.image} alt="" />
                <div className='font-poppins' >{doc.speciality}</div>
              </div>
              <div className='flex flex-col gap-3 p-6'>
                  <button className='px-7 py-2  bg-primary text-white rounded-sm text-[10px] md:text-lg'>Pay Online</button>
                  <button className='px-7 py-2  bg-red-600 text-white rounded-sm text-[10px] md:text-lg'>Cancel payment</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MyAppoinments
