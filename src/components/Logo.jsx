import React from 'react';
import { FaCarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Logo = () => (
  <div>
    <Link to="/">
      <div className="logo-box">
        <FaCarAlt />
        <span>CarBooking</span>
      </div>
    </Link>
  </div>
);

export default Logo;
