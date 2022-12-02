/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

function ReserveCar(props) {
  const { ReserveOpener } = props;
  return (
    <div
      className={
        ReserveOpener
          ? ''
          : '-translate-y-48 bg-white fixed h-full w-5/6 p-4 md:w-96'
      }
    >
      <h1> Reserve </h1>
      <form className="add-form">
        <button
          type="submit"
          className="focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-fit sm:w-auto px-5 py-2.5 text-center submit-button"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ReserveCar;

ReserveCar.propTypes = {
  ReserveOpener: PropTypes.bool.isRequired,
};
