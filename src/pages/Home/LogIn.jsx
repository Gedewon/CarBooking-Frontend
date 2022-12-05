/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import logInUser from '../../redux/actions/User/loginUser';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';

export default function LogIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formRef = useRef();
  const user = useSelector((state) => state.user);
  const [errorMessage, setErrorMessage] = useState('');
  const { state } = useLocation(); // Previous location

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = { email: data.email, password: data.password };
    dispatch(logInUser(userInfo));
  };

  useEffect(() => {
    if (user.status === 'success') {
      try {
        if (user.user.errors) {
          let array_of_error = user.user.errors[0].split('.');
          let error_message = array_of_error[array_of_error.length-1].replace('_',' ');
          setErrorMessage(error_message);
        } else {
          navigate(state ? state.from : '/cars');
        }
      } catch (e) {
        setErrorMessage(e.error);
      }
    }
  }, [navigate, user, state]);

  return (
    <form ref={formRef} className="add-form" onSubmit={handleSubmit}>
      {errorMessage && (
        <div className="alert">{errorMessage}</div>
      )}
      <div className="field group">
        <input
          type="email"
          name="email"
          id="email"
          className="text-field peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="email"
          className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
        >
          Email
        </label>
      </div>
      <div className="field group">
        <input
          type="password"
          name="password"
          id="password"
          className="text-field peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="password"
          className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
        >
          Password
        </label>
      </div>
      <button
        type="submit"
        className="submit-button"
      >
        Login
      </button>
      <div className='flex items-center justify-between gap-1'>
        <label className='sm:text-sm'>
      Or create a new account
        </label>
          <Link to="/sign_up" element={<SignUp />} className=" text-blue-500">Sign Up</Link>
      </div>
    </form>
  );
}
