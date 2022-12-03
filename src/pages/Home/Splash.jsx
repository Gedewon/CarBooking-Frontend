import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import LogIn from './LogIn';
import SignUp from './SignUp';

function Splash() {
  return (
    <div className="splash">
      <div className="overlay">
        <Logo extraClasses="flex flex-col items-center aspect-square rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-md text-4xl p-9" />
        <LogIn />
        <div className="add-form">
          Or create a new account
          <Link to="/sign_up" element={<SignUp />} className="submit-button bg-yellow-400">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Splash;
