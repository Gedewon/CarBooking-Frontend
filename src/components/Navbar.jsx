import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import Logo from './Logo';

const Navbar = () => (
  <nav>
    <Logo />
    <ul>
      <li><NavLink to="cars">Cars</NavLink></li>
      <li><NavLink to="reserve">Reserve</NavLink></li>
      <li><NavLink to="my_reservations">My Reservations</NavLink></li>
      <li><NavLink to="add_car">Add Car</NavLink></li>
    </ul>
    <Footer />
  </nav>
);

export default Navbar;
