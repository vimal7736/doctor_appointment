import React from 'react'
import { useParams } from 'react-router-dom'

const Doctor = () => {
  const {speciality} =useParams();
  console.log("asds",speciality);
  
  return (
    <div>
      Doctor
    </div>
  )
}

export default Doctor
