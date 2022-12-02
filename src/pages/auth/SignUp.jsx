import React from 'react';

export default function SignUp() {

  return (
    <div className="splash">
      <div className="overlay">
        <form className="add-form">
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
          <div className="field group">
            <input
              type="password"
              name="password_confirmation"
              id="password_confirmation"
              className="text-field peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="password_confirmation"
              className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Password Confirmation
            </label>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
          <Link to="/" className="mt-3 underline">
            Back to Home
          </Link>
        </form>
      </div>
    </div>
  );
}
