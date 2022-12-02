import React from 'react';
import PropTypes from 'prop-types';

function CarCard(props) {
  const {
    img, name, carType, carBrand, carPrice, carColor,
  } = props;
  return (
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
      <p className="self-end py-2 px-2 bg-lime-500 rounded-full my-4">
        $
        {carPrice}
        /day
      </p>
    </div>
  );
}

export default CarCard;

CarCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  carType: PropTypes.string.isRequired,
  carBrand: PropTypes.string.isRequired,
  carPrice: PropTypes.string.isRequired,
  carColor: PropTypes.string.isRequired,
};
