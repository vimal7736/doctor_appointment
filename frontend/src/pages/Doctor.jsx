import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Doctor = () => {
  const {speciality} =useParams();
  console.log("asds",speciality);
  const {doctors} = useContext(AppContext);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const applyFilter = () => {
    if(speciality){
      const filteredDoctors = doctors.filter((doctor) => doctor.speciality === speciality)
      setFilteredDoctors(filteredDoctors);
    } else{
      setFilteredDoctors(doctors);
    }
  }

  useEffect(() => {
    applyFilter();
  },[doctors, speciality])


  
  return (
    <div>
      <p>connect with experienced doctors for your healthcare needs</p>
      <div>
        <div>
          <p>General Physician</p>
          <p>Gynacologist</p>
          <p>Dermatogiist</p>
          <p>Pediatricians</p>
          <p>Nuerologist</p>
          <p>Gastroentrologist</p>
        </div>
        <div>
          {filteredDoctors.map((doctor)=>(
           <div key={doctor._id} >
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
