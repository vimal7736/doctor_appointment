import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Doctor = () => {
  const { speciality } = useParams();
  console.log("asds", speciality);
  const { doctors } = useContext(AppContext);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const nav = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      const filteredDoctors = doctors.filter((doctor) => doctor.speciality === speciality)
      setFilteredDoctors(filteredDoctors);
    } else {
      setFilteredDoctors(doctors);
    }
  }

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality])

  const uniqueSpecialities = [...new Set(doctors.map((doctor) => doctor.speciality))]



  return (
    <div className='p-2 flex flex-col '>
      <p className='text-center font-poppins font-semibold'>Connect with experienced doctors for your healthcare needs</p>
      <div className='flex flex-col items-center md:flex-col justify-between '>
        <div className='flex flex-row space-x-4 flex-wrap '>
          <p
            className='cursor-pointer border-2 border-primary p-2 rounded-md'

            onClick={() => speciality === '' ? nav('/doctors') : nav('/doctors')} >All</p>
          {uniqueSpecialities.map((speciality) => (
            <p
              key={speciality}
              onClick={() => (nav(`/doctors/${speciality}`))}
              className='cursor-pointer border-2 border-primary p-2 rounded-md'
            >
              {speciality}
            </p>
          ))}

        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {filteredDoctors.map((doctor) => (
            <div key={doctor._id}>
              <img src={doctor.image} alt={doctor.name} />
              <p>{doctor.name}</p>
              <p>{doctor.speciality}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctor
