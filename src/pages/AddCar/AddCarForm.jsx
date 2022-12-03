/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import createCars from '../../redux/actions/Car/createCars';

function AddCarForm() {
  const [errorMessage, setErrorMessage] = useState('');
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const carInfo = {
      car: {
        name: data.name,
        image: data.image,
        amount: data.fee_per_day,
      },
    };
    dispatch(createCars(carInfo));
    navigate('/cars');
  };

  useEffect(() => {
    if (cars.status === 'success') {
      try {
        if (cars.cars.error) {
          setErrorMessage(cars.cars.error);
        }
      } catch (e) {
        setErrorMessage(e.error);
      }
    }
  }, [cars]);

  return (
    <div className="add-car-wrapper">
      <div className="overlay">
        <form ref={formRef} className="add-form" onSubmit={handleSubmit}>
          {errorMessage && <div className="alert">{errorMessage}</div>}
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
          <div className="grid md:grid-cols-1 w-full">
            <div className="field group">
              <input
                type="text"
                name="image"
                id="image"
                className="text-field peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="image"
                className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                Add a photo url
              </label>
            </div>
            <div className="field group">
              <input
                type="number"
                step=".01"
                name="fee_per_day"
                min={0}
                id="fee_per_day"
                className="text-field peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="fee_per_day"
                className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                Fee per day
              </label>
            </div>
          </div>
          <button type="submit" className="submit-button">
            Create Car
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCarForm;
