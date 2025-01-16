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
    <div className='p-2 flex flex-col gap-4 '>
      <p className=' px-6 text-pretty font-poppins text-md md:text-lg lg:text-3xl font-semibold'>Connect with experienced doctors for your healthcare needs</p>
      <div className='flex flex-col items-center md:flex-col justify-between '>
        <div className="flex flex-wrap justify-between py-4 px-6 gap-4">
          <p
            className="cursor-pointer border-2 border-gray-300 px-4 py-2 text-xs md:text-sm font-medium rounded-full hover:bg-danger hover:text-white transition-all duration-300"
            onClick={() => speciality === '' ? nav('/doctors') : nav('/doctors')}
          >
            All Doctors
          </p>
          {uniqueSpecialities.map((speciality) => (
            <p
              key={speciality}
              onClick={() => nav(`/doctors/${speciality}`)}
              className="cursor-pointer border-2 border-gray-300 px-4 py-2 text-xs md:text-sm font-medium rounded-full hover:border-white hover:bg-primary hover:text-white transition-all duration-300"
            >
              {speciality}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredDoctors.map((doctor) => (
            <div
              className=" transition-all hover:scale-90  border border-gray-200 shadow-sm rounded-lg p-4 bg-white hover:shadow-md  duration-300 flex flex-col items-center text-center"
              key={doctor._id}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden shadow-sm mb-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                  onClick={()=>nav(`/appointment/${doctor._id}`)}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
              <p className="text-sm text-gray-600">{doctor.speciality}</p>
              {/* <button
                className="mt-4 px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary/90 transition-colors duration-200"
                onClick={() => console.log(`View profile of ${doctor.name}`)}
              >
                View Profile
              </button> */}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Doctor
