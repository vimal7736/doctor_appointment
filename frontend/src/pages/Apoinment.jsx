import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';


const Apoinment = () => {

  const { docId } = useParams();
  const { doctors, currency } = useContext(AppContext)
  const [dates, setDates] = useState([]);
  console.log(dates, 'dates');

  const [doctor, setDoctor] = useState({});
  console.log(doctor, '12');

  const fetchDoctor = async () => {
    const foundDoc = doctors.find((doc) => doc._id === docId)
    setDoctor(foundDoc)
  }

  const generateTimeSlots = () => {
    const timeSlots = [];
    let currentHour = 8;
    while (currentHour < 22) {
      timeSlots.push(`${currentHour}:00`);
      timeSlots.push(`${currentHour}:30`);
      currentHour++;
    }
    return timeSlots;
  }

  const generateDatesTimes = async () => {
    const Today = new Date();
    const nextSevenDays = [];
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(Today);
      currentDate.setDate(Today.getDate() + i)
      console.log(`${currentDate}`, "123");
      nextSevenDays.push({
        date: currentDate.toDateString(),
        timeSlots: generateTimeSlots(),
      });
    }
    setDates(nextSevenDays)
  }
  useEffect(() => {
    fetchDoctor();
    generateDatesTimes();
  },
    [doctors, docId]);

  return (
    <div className='px-2 py-4 '>
      <div className='flex flex-wrap flex-col md:flex-row justify-start items-center'>
        <div className='border-2 w-1/4 bg-gray-800'>
          <img className='' src={doctor.image} alt="" />
        </div>
        <div className='border-2 w-3/4 flex flex-col  '>
          <div><span className='font-semibold'>Name:</span> {doctor.name}</div>
          <div><span className='font-semibold'>Degree:</span>{doctor.degree}</div>
          <div><span className='font-semibold' >Experience:</span>{doctor.experience}</div>
          <div><span className='font-semibold'>specializd:</span>{doctor.speciality}</div>
          <div><span className='font-semibold font-roboto'>fee:</span>{currency}{doctor.fees}</div>

        </div>
      </div>
      <div>
        {dates && dates.map((item, index) => (
          <div key={index}>
            <p>
              {item.date}
            </p>
            <div className='flex gap-5 flex-wrap'>
              {
                item.timeSlots.map(time=>(
                  <span>{time}</span>
                ))
              }
            </div>



          </div>
        ))}
      </div>

    </div>
  )
}

export default Apoinment
