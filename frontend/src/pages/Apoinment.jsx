import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';


const Apoinment = () => {

  const { docId } = useParams();
  const { doctors } = useContext(AppContext)

  const [doctor, setDoctor] = useState({});
  console.log(doctor, '12');

  const fetchDoctor = async () => {
    const foundDoc = doctors.find((doc) => doc._id === docId)
    setDoctor(foundDoc)
  }

  useEffect(() => {fetchDoctor()},[doctors, docId]);

  return (
    <div>
      Appoinment
    </div>
  )
}

export default Apoinment
