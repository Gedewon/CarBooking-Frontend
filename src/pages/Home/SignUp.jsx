/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { IKContext, IKUpload } from 'imagekitio-react';
import { Progress } from 'flowbite-react';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import signUpUser from '../../redux/actions/User/signUpUser';
import {
  BASE_URL, IMAGE_AUTH, IMAGE_KEY, IMAGE_URL,
} from '../../navigation/routes';

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formRef = useRef();
  const user = useSelector((state) => state.user);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedDay, setSelectedDay] = useState(null);
  const [imageMessage, setImageMessage] = useState('');
  const [progress, setProgress] = useState(0);

  const isOfValidAge = () => {
    const date1 = new Date(
      `${selectedDay.month}/${selectedDay.day}/${selectedDay.year}`,
    );
    const date2 = new Date();
    const differenceInTime = date2.getTime() - date1.getTime();
    const differenceInYears = differenceInTime / (1000 * 3600 * 24 * 365.25);
    if (differenceInYears < 18) {
      setErrorMessage('You need to be 18 or older.');
    }
    return differenceInYears >= 18;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    if (!isOfValidAge()) return;
    const userInfo = {
      user: {
        name: data.name,
        email: data.email,
        date_of_birth: `${`${selectedDay.year}-${selectedDay.month}-${selectedDay.day}`}`,
        password: data.password,
        password_confirmation: data.password_confirmation,
        photo: data.photo,
      },
    };
    dispatch(signUpUser(userInfo));
  };
  useEffect(() => {
    if (user.status === 'success') {
      try {
        if (user.user.error) {
          setErrorMessage(user.user.error);
        } else {
          navigate('/cars');
        }
      } catch (e) {
        setErrorMessage(e.error);
      }
    }
  }, [navigate, user]);

  const onUploadStart = () => {
    setImageMessage('Upload Started');
  };

  const onUploadProgress = (evt) => {
    setImageMessage('Progress: ');
    setProgress(((evt.loaded / evt.total) * 100).toFixed(0));
  };

  const onError = (err) => {
    setImageMessage(`Error: ${err.message}`);
  };

  const onSuccess = (res) => {
    setImageMessage('Success!');
    document.getElementById('photo').value = res.url;
  };

  return (
    <div className="splash">
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
          <div className="field group">
            <input
              type="text"
              name="photo"
              id="photo"
              className="text-field peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="photo"
              className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Add a photo url or upload file
            </label>
          </div>
          <div className="field group flex flex-col">
            <IKContext
              publicKey={IMAGE_KEY}
              urlEndpoint={IMAGE_URL}
              authenticationEndpoint={`${BASE_URL}${IMAGE_AUTH}`}
            >
              <IKUpload
                onError={onError}
                onSuccess={onSuccess}
                onUploadStart={onUploadStart}
                onUploadProgress={onUploadProgress}
              />
              <div>{imageMessage}</div>
              {progress ? <Progress progress={progress} color="indigo" /> : ' '}
            </IKContext>
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
          <div className="field flex flex-col items-center mt-9 group">
            <label
              htmlFor="date_of_birth"
              className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Date of Birth
            </label>
            <DatePicker
              name="date_of_birth"
              id="date_of_birth"
              value={selectedDay}
              onChange={setSelectedDay}
              inputPlaceholder="Select a day"
              shouldHighlightWeekends
            />
          </div>

          <button
            type="submit"
            className="submit-button"
          >
            Submit
          </button>
          <Link to="/" className="mt-3 underline">Back to Home</Link>
        </form>
      </div>
    </div>
  );
}
