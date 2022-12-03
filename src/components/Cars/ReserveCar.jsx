/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, utils } from '@hassanmojab/react-modern-calendar-datepicker';

import CloseIcon from '@mui/icons-material/Close';

import addReservations from '../../redux/actions/Reservation/addReservation';

function ReserveCar(props) {
  const current = new Date();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    id, name, carType, carPrice, ReserveOpener, handleClick,
  } = props;

  const defaultFrom = {
    year: current.getFullYear(),
    month: current.getMonth() + 1,
    day: current.getDate(),
  };

  const defaultTo = {
    year: current.getFullYear(),
    month: current.getMonth() + 1,
    day: current.getDate(),
  };
  const defaultRange = {
    from: defaultFrom,
    to: defaultTo,
  };
  const [selectedDayRange, setSelectedDayRange] = useState(defaultRange);
  const [Total, setTotal] = useState(carPrice);

  useEffect(() => {
    const date1 = new Date(
      `${selectedDayRange.from.month}/${selectedDayRange.from.day}/${selectedDayRange.from.year}`,
    );
    let date2;
    if (selectedDayRange.to) {
      date2 = new Date(
        `${selectedDayRange.to.month}/${selectedDayRange.to.day}/${selectedDayRange.to.year}`,
      );
    } else {
      date2 = date1;
    }

    // To calculate the time difference of two dates
    const differenceInTime = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    const value = (differenceInDays + 1) * carPrice;
    setTotal(value);
  }, [selectedDayRange, Total, carPrice]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservationDate = `${selectedDayRange.from.year}-${selectedDayRange.from.month}-${selectedDayRange.from.day}`;
    const dueDate = `${selectedDayRange.to.year}-${selectedDayRange.to.month}-${selectedDayRange.to.day}`;
    const reservationInfo = {
      reservation_date: reservationDate,
      due_date: dueDate,
      car_id: id,
    };
    dispatch(addReservations(reservationInfo));
    navigate('/my_reservations');
  };

  return (
    <div
      className={
        ReserveOpener
          ? 'hidden'
          : ' bg-white fixed top-0 right-6 h-full w-5/6 p-4 md:w-96'
      }
    >
      <div className="flex flex-col gap-5 text-center">
        <button
          type="button"
          onClick={() => {
            handleClick();
          }}
          className=" self-end"
        >
          <CloseIcon />
        </button>
        <h1 className=" text-lg font-bold">
          Reserving Car &quot;
          {name}
          &quot;
        </h1>
        <div className=" py-2 px-2 bg-slate-400 flex justify-between">
          <p className=" ">{carType}</p>
          <p className=" ">
            $
            {carPrice}
            /Day
          </p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Calendar
            value={selectedDayRange}
            onChange={setSelectedDayRange}
            shouldHighlightWeekends
            minimumDate={utils().getToday()}
          />
          <div className=" py-2 px-2 bg-slate-400 flex justify-between">
            <p className=" ">Total Price:</p>
            <p className=" ">
              $
              {Total}
            </p>
          </div>
          <button type="submit" className=" self-end submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReserveCar;

ReserveCar.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  carType: PropTypes.string.isRequired,
  carPrice: PropTypes.number.isRequired,
  ReserveOpener: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
