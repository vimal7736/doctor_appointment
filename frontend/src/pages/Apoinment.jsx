import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Apoinment = () => {
    const { docId } = useParams();
      const { doctors, currency } = useContext(AppContext)
      const [doctor, setDoctor] = useState({});
    

      const fetchDoctor = async () => {
        const foundDoc = doctors.find((doc) => doc._id === docId)
        setDoctor(foundDoc)
      }
        useEffect(() => {
          fetchDoctor();
        },
          [doctors, docId]);
    
  
  return (
    <div className='px-2 py-4 '>
      <div className='flex flex-wrap flex-col md:flex-row justify-start  mt-4'>
        <div className=' shadow-black shadow-lg w-1/4 rounded-full bg-red-300'>
          <img className='rounded-full' src={doctor.image} alt="" />
        </div>
        <div className='p-3 w-3/4 flex flex-col  '>
          <div><span className='font-semibold text-center  '>Name: </span> {doctor.name}</div>
          <div><span className='font-semibold text-center '>Degree: </span>{doctor.degree}</div>
          <div><span className='font-semibold text-center ' >Experience: </span>{doctor.experience}</div>
          <div><span className='font-semibold text-center '>specializd: </span>{doctor.speciality}</div>
          <div><span className='font-mono text-center border-2 px-2 border-danger   rounded-full'>fee</span> : {currency}{doctor.fees}</div>

        </div>
      </div>
      <div className="mt-4">
        
      </div>


    </div>
  )
}

export default Apoinment
