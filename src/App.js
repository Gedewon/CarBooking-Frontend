import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MenuOpener from './components/MenuOpener';
import Navbar from './components/Navbar';
import Splash from './pages/Splash';

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
      </Routes>
    </div>
  );
}

export default App;
