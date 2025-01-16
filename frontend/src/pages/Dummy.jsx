import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';


const Dummy = () => {

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
  };



  const generateDatesTimes = async () => {
    const Today = new Date();
    const currentHour = Today.getHours();
    const currentMinute = Today.getMinutes();
    const nextSevenDays = [];

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(Today);
      currentDate.setDate(Today.getDate() + i);

      const isToday = i === 0; 
      let timeSlots = generateTimeSlots();

      if (isToday) {
        timeSlots = timeSlots.filter((time) => {
          const [hour, minute] = time.split(':').map(Number);

          if (hour > currentHour || (hour === currentHour && minute > currentMinute)) {
            return true;
          }
          return false;
        });
      }

      nextSevenDays.push({
        date: currentDate.toDateString(),
        timeSlots,
      });
    }

    setDates(nextSevenDays);
  };


  useEffect(() => {
    fetchDoctor();
    generateDatesTimes();
  },
    [doctors, docId]);

  return (
    <div className='px-2 py-4 '>
      <div className='flex flex-wrap flex-col md:flex-row justify-start  mt-4'>
        <div className='border-2 w-1/4  bg-blue-500'>
          <img className='' src={doctor.image} alt="" />
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
        {dates &&
          dates.map((item, index) => (
            <div key={index}>
              <p className="font-semibold text-xl border w-full rounded-full bg-slate-800 text-white mt-4 px-4">
                {item.date}
              </p>
              <div className="flex gap-5 flex-wrap mt-4 ">
                {item.timeSlots.map((time,id) => (
                  <span key={id} className="border-2 rounded-full p-2 cursor-pointer hover:bg-primary hover:text-white">
                    {time}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>


    </div>
  )
}

export default Dummy
