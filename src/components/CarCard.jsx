import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CarCard(props) {
  const {
    id,
    img,
    name,
    carType,
    carBrand,
    carPrice,
    carColor,
    reservationDate,
    reservation,
  } = props;
  const date = new Date();
  const reservationLink = `reservation/${id}`;
  const today = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join(
    '-',
  );
  return (
    <Link to={reservationLink}>
      <div className="w-full flex flex-col justify-center items-center px-2">
        <img src={img} alt="Swift Car" className="flex-1" />
        <h1 className=" text-xl">
          {name}
          {' '}
          (
          {carBrand}
          )
        </h1>
        <p className=" text-sm">{carType}</p>
        <p className=" text-xs">{carColor}</p>
        {reservation && (
          <div
            className={
              today > reservationDate
                ? ' bg-red-400 self-end p-2 rounded-full'
                : ' bg-green-400 self-end p-2 rounded-full'
            }
          >
            <p>{reservationDate}</p>
          </div>
        )}

        {!reservation && (
          <p className="self-end py-2 px-2 bg-lime-500 rounded-full my-4">
            $
            {carPrice}
            /day
          </p>
        )}
      </div>
    </Link>
  );
}

export default CarCard;

CarCard.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  carType: PropTypes.string.isRequired,
  carBrand: PropTypes.string.isRequired,
  carPrice: PropTypes.string.isRequired,
  carColor: PropTypes.string.isRequired,
  reservationDate: PropTypes.string,
  reservation: PropTypes.bool,
};

CarCard.defaultProps = {
  reservationDate: String(Date.now()),
  reservation: false,
};
