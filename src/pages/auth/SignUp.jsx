import React from 'react';


export default function SignUp() {

  return (
    <div>
      <div>
        <form>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
            >
              Name
            </label>
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
            >
              Email
            </label>
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
            >
              Password
            </label>
          </div>
          <div>
            <input
              type="password"
              name="password_confirmation"
              id="password_confirmation"
              placeholder=" "
              required
            />
            <label
              htmlFor="password_confirmation"
            >
              Password Confirmation
            </label>
          </div>
          <button type="submit">
            Submit
          </button>
          <Link to="/">
            Back to Home
          </Link>
        </form>
      </div>
    </div>
  );
}
