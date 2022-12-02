import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Reservation from './pages/Reservation';
import MenuOpener from './components/MenuOpener';
import Navbar from './components/Navbar';
import Splash from './pages/Splash';
import AddCarForm from './pages/AddCar/AddCarForm';
import Cars from './pages/Cars';

function App() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <MenuOpener open={open} toggleMenu={toggleMenu} />
      <Navbar open={open} />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/add_car" element={<AddCarForm />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </div>
  );
}

export default App;
