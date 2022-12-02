/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';


export default function LogIn() {
  const user = useSelector((state) => state.user);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={handleSubmit}>
      <div className="field group">
        <input
          type="text"
          name="name"
          id="name"
          className="text-field peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="name"
          className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
        >
          Name
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
      <button type="submit" className="submit-button">
        Login
      </button>
    </form>
  );
}
