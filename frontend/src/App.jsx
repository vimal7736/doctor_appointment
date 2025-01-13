import React from 'react';
import MyAppoinments from './pages/MyAppoinments';
import MyProfile from './pages/MyProfile';
import Apoinment from './pages/Apoinment';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Doctor from './pages/Doctor';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';

const App = () => {
  const Watermark = () => {
    return `
      <div class="absolute inset-0 flex justify-center items-center">
        <p class="text-6xl font-bold text-gray-700 opacity-20 transform rotate-45 select-none">
          Under Development
        </p>
      </div>
    `;
  };

  return (
    <div className="mx-4 sm:mx-[10%]">
      <div dangerouslySetInnerHTML={{ __html: Watermark() }} />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/doctor/:speciality" element={<Doctor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-appoinments" element={<MyAppoinments />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/appointment/:docId" element={<Apoinment />} />
      </Routes>
    </div>
  );
};

export default App;
