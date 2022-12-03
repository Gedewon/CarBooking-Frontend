/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import PropTypes from 'prop-types';

function RadioInput(props) {
  const {
    id, name, carType, carPrice, scrollPage,
  } = props;
  return (
    <li>
      <input
        type="radio"
        id={id}
        name="carRental"
        value={id}
        className="hidden peer"
        onClick={() => scrollPage()}
        required
      />
      <label
        htmlFor={id}
        className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="block">
          <div className="w-full text-lg font-semibold">{name}</div>
          <div className="w-full">{carType}</div>
          <div className="w-full text-xs">
            $
            {carPrice}
            /day
          </div>
        </div>
        <svg
          aria-hidden="true"
          className="ml-3 w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </li>
  );
}

export default RadioInput;

RadioInput.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  carType: PropTypes.string.isRequired,
  carPrice: PropTypes.number.isRequired,
  scrollPage: PropTypes.func.isRequired,
};
