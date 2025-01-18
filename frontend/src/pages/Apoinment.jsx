import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import RelatedDoctor from '../components/RelatedDoctor';

const Apoinment = () => {
  const { docId } = useParams();
  const { doctors, currency } = useContext(AppContext)
  const [docInfo, setDoctorInfo] = useState(null);
  console.log(docInfo,'12');
  
  
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]


  const fetchDoctor = async () => {
    const foundDoc = doctors.find((doc) => doc._id === docId)
    setDoctorInfo(foundDoc)
  }

  const getAvailableSlots = async () => {
    setDocSlots([])
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      //geting date with inedx
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      // setting end time of the date with idx
      let endTime = new Date(today);
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      //setting hours

      if (today.getDate() === currentDate.getDate()) {

        currentDate
          .setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate
          .setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      }
      else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([],
          { hour: '2-digit', minute: '2-digit' })
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime
        })

        //Inc by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }
      setDocSlots(prev => ([...prev, timeSlots]))
    }

  }
  useEffect(() => {
    fetchDoctor();
  },
    [doctors, docId]);

  useEffect(() => {
    getAvailableSlots()
  }, [docInfo])

  useEffect(() => {
    console.log(docSlots);

  }, [docSlots])


  return (
    <div className='px-2 py-4 '>
      {docInfo &&

        <div className='flex flex-wrap flex-col md:flex-row justify-start  mt-4'>
          <div className=' shadow-black shadow-lg w-1/4 rounded-full bg-red-300'>
            <img className='rounded-full' src={docInfo.image} alt="" />
          </div>
          <div className='p-3 w-3/4 flex flex-col  '>
            <div><span className='font-semibold text-center  '>Name: </span> {docInfo.name}</div>
            <div><span className='font-semibold text-center '>Degree: </span>{docInfo.degree}</div>
            <div><span className='font-semibold text-center ' >Experience: </span>{docInfo.experience}</div>
            <div><span className='font-semibold text-center '>specializd: </span>{docInfo.speciality}</div>
            <div><span className='font-mono text-center border-2 px-2 border-danger   rounded-full'>fee</span> : {currency}{docInfo.fees}</div>

          </div>
        </div>
      }
      <div className="mt-4">
        <p>Booking Slots</p>
        <div>
          {docSlots.length > 0 && docSlots.map((item, index) => {
            return (

              <div
                onClick={() => setSlotIndex(index)}
                className={`text-center min-w-16 rounded-3xl cursor-pointer ${slotIndex === index ? "bg-primary" : "bg-gray-300"}`}
                key={index} >

                <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                {/* item[0].dateTime is a Date object for the first time slot 
                in item.
                item[0].dateTime.getDay() retrieves the day of the week (as a 
                number from 0 to 6,
                where 0 is Sunday, 1 is Monday, etc.). */}
                <p>{item[0] && item[0].dateTime.getDate()}</p>
              </div>
            )
          })}
        </div>
        <div>
          {docSlots.length && docSlots[slotIndex].map((item,index)=>(
            <p key={index} >
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>

      </div>
      <div>
        <RelatedDoctor 
        docId={docId}
        speciality={docInfo?.speciality}
        />
      </div>


    </div>
  )
}

export default Apoinment
