/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, utils } from '@hassanmojab/react-modern-calendar-datepicker';
import CloseIcon from '@mui/icons-material/Close';
import { State } from 'country-state-city';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

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
  const [selectedCity, setSelectedCity] = useState(State.getAllStates()[0]);

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

    const differenceInTime = date2.getTime() - date1.getTime();

    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    const value = (differenceInDays + 1) * carPrice;
    setTotal(value);
  }, [selectedDayRange, Total, carPrice]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservationDate = `${selectedDayRange.from.year}-${selectedDayRange.from.month}-${selectedDayRange.from.day}`;
    const dueDate = `${selectedDayRange.to.year}-${selectedDayRange.to.month}-${selectedDayRange.to.day}`;

    const reservationInfo = {
      start_date: reservationDate,
      end_date: dueDate,
      car_id: id,
      city: selectedCity.name,
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

          <Listbox value={selectedCity} onChange={setSelectedCity}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{selectedCity.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {State.getAllStates().slice(0, 100).map((person, personIdx) => (
                    <Listbox.Option
                      // eslint-disable-next-line react/no-array-index-key
                      key={personIdx}
                      className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                      }`}
                      value={person}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>

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
