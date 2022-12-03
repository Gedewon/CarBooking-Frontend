import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import logOutUser from '../../redux/actions/User/logOutUser';

export default function LogOut() {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleLogOut = (e) => {
    e.preventDefault();
    location.state = {};
    dispatch(logOutUser());
  };
  return (
    <button type="button" onClick={handleLogOut}>
      LOG OUT
    </button>
  );
}
