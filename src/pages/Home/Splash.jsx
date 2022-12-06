import React from 'react';
import Logo from '../../components/Logo/Logo';
import LogIn from './LogIn';

const Splash = () => (
  <div className="splash">
    <div className="overlay">
      <Logo extraClasses="flex flex-col items-center  rounded-full text-white shadow-md  p-2" />
      <LogIn />
    </div>
  </div>
);

export default Splash;
