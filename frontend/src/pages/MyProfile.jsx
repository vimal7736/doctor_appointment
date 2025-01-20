import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Neom Vishva",
    Image: assets.profile_pic,
    email: 'doglienz@gmail.com',
    phone: '0000000000000000',
    address: {
      line1: "Aishus Home, Dream Land",
      line2: "Bangalore, Karnataka, India, Pin-code: 671234"
    },
    gender: 'Male',
    dob: '2028-01-01',
  });
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="min-h-[80vh] bg-primary rounded-md flex items-center justify-center p-4">
      <div className="bg-white shadow-lg shadow-black rounded-se-full   p-6 w-full max-w-md">
        <div className="flex flex-col items-center gap-4">
          <img
            src={userData.Image}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-danger  shadow-2xl shadow-black object-cover"
          />

          {isEdit ? (
            <input
              type="text"
              value={userData.name}
              onChange={(e)=> setUserData((prev) => ({...prev , name: e.target.value }))}
              className="border border-gray-300 rounded-md px-4 py-2 w-full text-center"
            />
          ) : (
            <h2 className="text-xl font-semibold text-primary">{userData.name}</h2>
          )}

          <p className="text-gray-600">{userData.email}</p>
          <p className="text-gray-600">{userData.phone}</p>

          <div className="text-gray-600 text-center">
            <p>{userData.address.line1}</p>
            <p>{userData.address.line2}</p>
          </div>

          <p className="text-gray-600">Gender: {userData.gender}</p>
          <p className="text-gray-600">DOB: {userData.dob}</p>

          <button
            onClick={() => setIsEdit(!isEdit)}
            className="mt-4 px-6 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark"
          >
            {isEdit ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
