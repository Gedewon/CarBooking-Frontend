import React from 'react';
import { Link } from 'react-router-dom';
import { GiStopSign } from 'react-icons/gi';

const Forbidden = () => (
  <div className="h-screen flex flex-col justify-center items-center gap-6">
    <GiStopSign className="text-9xl text-red-700" />
    <h2 className="text-4xl">Forbidden</h2>
    <div>You are not allowed to access this feature.</div>
    <Link className="underline" to="/">Go back</Link>
  </div>
);

export default Forbidden;
