import React from 'react';
import PropTypes from 'prop-types';

import SettingsIcon from '@mui/icons-material/Settings';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ReserveCar from './ReserveCar';

function CarDetail({
  name,
  carType,
  carBrand,
  carPrice,
  carColor,
  dueDate,
  toggleReservation,
  ReserveOpener,
}) {
  const handleClick = () => {
    toggleReservation();
  };

  return (
    <div className=" pr-8 flex flex-col md:w-96">
      <h1 className=" self-end text-2xl">{name}</h1>
      <p className="self-end pb-8">{carType}</p>
      <div className=" py-2 px-2 bg-slate-400 mb-3 flex justify-between">
        <p className=" ">{carBrand}</p>
        <p className=" ">
          $
          {carPrice}
        </p>
      </div>
      <p className=" text-sm self-end">{carColor}</p>

      <p className=" text-xs self-end">
        Rented untill
        {' '}
        {dueDate}
      </p>
      <div className="btn-primary mt-8 flex items-center justify-center md:self-start">
        <SettingsIcon />
        <button type="button" className=" px-4" onClick={handleClick}>
          Reserve Car
        </button>
        <ChevronRightOutlinedIcon />
      </div>
      <ReserveCar ReserveOpener={ReserveOpener} />
    </div>
  );
}

export default CarDetail;

CarDetail.propTypes = {
  name: PropTypes.string.isRequired,
  carType: PropTypes.string.isRequired,
  carBrand: PropTypes.string.isRequired,
  carPrice: PropTypes.string.isRequired,
  carColor: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  toggleReservation: PropTypes.func.isRequired,
  ReserveOpener: PropTypes.bool.isRequired,
};
