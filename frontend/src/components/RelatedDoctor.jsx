import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctor = ({ docId, speciality }) => {

    const { doctors } = useContext(AppContext)
    const [relatedDoc, setRelatedDoc] = useState([])

    const nav = useNavigate();

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorData = doctors.filter((doc) => doc.speciality === speciality && doc._id != docId)
            setRelatedDoc(doctorData);
        }

    }, [docId, speciality, doctors])
    return (
        <div className='flex flex-col gap-2 mt-6 px-2 py-2 md:flex-row flex-wrap'>

            {
                relatedDoc.length > 0 ? (relatedDoc.map((doc, index) => {
                    return (
                        <div
                            className=" transition-all hover:scale-90  border border-gray-200 shadow-sm rounded-lg p-4 bg-white hover:shadow-md  duration-300 flex flex-col  items-center text-center"
                            key={doc.index}
                        >
                            <div className="w-24 h-24 rounded-full overflow-hidden shadow-sm mb-4">
                                <img
                                    src={doc.image}
                                    alt={doc.name}
                                    className="w-full h-full object-cover"
                                    onClick={() => {
                                        nav(`/appointment/${doc._id}`);
                                        scrollTo(0,0)
                                    }}
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">{doc.name}</h3>
                            <p className="text-sm text-gray-600">{doc.speciality}</p>
                            {/* <button
                className="mt-4 px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary/90 transition-colors duration-200"
                onClick={() => console.log(`View profile of ${doc.name}`)}
              >
                View Profile
              </button> */}
                        </div>

                    )
                })) : (
                    <p>No related doc</p>
                )

            }
        </div>
    )
}

export default RelatedDoctor
