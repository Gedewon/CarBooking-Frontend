import React from 'react';

export default function LogIn() {

  return (
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
      <button type="submit">
        Login
      </button>
    </form>
  );
}
