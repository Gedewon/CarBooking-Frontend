/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useEffect, useRef,Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, utils } from '@hassanmojab/react-modern-calendar-datepicker';
import RadioInput from '../../components/Buttons/RadioInput';
import getCars from '../../redux/actions/Car/getCars';
import addReservations from '../../redux/actions/Reservation/addReservation';
import Loading from '../../components/Buttons/Loading';
import { State }  from 'country-state-city';
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

function Reserve() {
  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.cars);
  const formRef = useRef();
  const calRef = useRef(null);

  const scrollPage = () => {
    calRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const navigate = useNavigate();

  const current = new Date();
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
  const [selectedCity, setSelectedCity] = useState(State.getAllStates()[0])
  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

    const reservationDate = `${selectedDayRange.from.year}-${selectedDayRange.from.month}-${selectedDayRange.from.day}`;
    const dueDate = `${selectedDayRange.to.year}-${selectedDayRange.to.month}-${selectedDayRange.to.day}`;
    const reservationInfo = {
      start_date:reservationDate,
      end_date: dueDate,
      car_id: data.carRental,
      city: selectedCity.name
    };
    dispatch(addReservations(reservationInfo));
    navigate('/my_reservations');
  };
  return (
    <div className="pb-8">
      <div className="flex flex-col items-center justify-center py-16 ">
        <h1 className=" text-4xl font-bold text-center">Reserve Cars.</h1>
        <p className=" text-xs text-slate-400">
          Please Select a car to reserve form the provided lists.
        </p>
      </div>
      <form
        className=" px-8 flex flex-col gap-4"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
          Which Car do you want to reserve?
        </h3>
        <ul className="grid gap-6 w-full md:grid-cols-2">
          {cars.length > 0 ? (cars.map((car) => (
            <RadioInput
              key={car.id}
              id={car.id}
              name={car.name}
              carType={car.car_type}
              carPrice={car.amount}
              scrollPage={scrollPage}
            />
          ))) : <Loading message="Loading Cars" /> }
        </ul>
        <div className=" self-center mt-4" ref={calRef}>
          <Calendar
            value={selectedDayRange}
            onChange={setSelectedDayRange}
            shouldHighlightWeekends
            minimumDate={utils().getToday()}
          />
        </div>
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
              {State.getAllStates().slice(0,100).map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
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
        <button type="submit" className="submit-button self-center">
          Reserve Car
        </button>
      </form>
    </div>
  );
}

export default Reserve;
