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

    
    <div className="px-4 py-6 bg-gray-50 min-h-screen">
    {docInfo && (
      <div className="flex flex-col md:flex-row justify-between items-start bg-white shadow-lg rounded-xl p-6 gap-6">
        {/* Doctor Image */}
        <div className="flex-shrink-0 w-40 h-40 rounded-full bg-indigo-100 overflow-hidden shadow-md">
          <img className="w-full h-full object-cover" src={docInfo.image} alt={docInfo.name} />
        </div>
  
        {/* Doctor Info */}
        <div className="flex flex-col flex-1 gap-4">
          <h2 className="text-2xl font-bold text-indigo-900">{docInfo.name}</h2>
          <p className="text-gray-600">
            <span className="font-semibold">Degree:</span> {docInfo.degree}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Experience:</span> {docInfo.experience} years
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Specialized:</span> {docInfo.speciality}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Fee:</span>{" "}
            <span className="text-indigo-500 font-bold">{currency}{docInfo.fees}</span>
          </p>
        </div>
      </div>
    )}
  
    {/* Booking Slots Section */}
    <div className="mt-10">
      <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">Booking Slots</h3>
      <div className="flex gap-4 justify-center overflow-auto">
        {docSlots.length > 0 &&
          docSlots.map((item, index) => (
            <div
              key={index}
              onClick={() => setSlotIndex(index)}
              className={`cursor-pointer text-center py-3 px-4 rounded-xl shadow-md transition-all duration-300 ${
                slotIndex === index
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <p className="font-semibold">{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
              <p>{item[0] && item[0].dateTime.getDate()}</p>
            </div>
          ))}
      </div>
      <div className="flex gap-3 mt-6 custom-scroll p-4 overflow-auto">
        {docSlots.length > 0 &&
          docSlots[slotIndex]?.map((item, index) => (
            <div
              key={index}
              className="bg-indigo-100 text-indigo-900 py-2 px-4 rounded-md shadow-md hover:bg-indigo-200 transition-all duration-300"
            >
              {item.time.toLowerCase()}
            </div>
          ))}
      </div>
    </div>
  
    {/* Related Doctor Section */}
    <div className="mt-10">
      <p className='text-xl font-semibold'>Related Doctors</p>
      <RelatedDoctor docId={docId} speciality={docInfo?.speciality} />
    </div>
  </div>
  
  )
}

export default Apoinment
