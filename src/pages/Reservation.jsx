import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CarDetail from '../components/CarDetail';

function Reservation() {
  const [ReserveOpener, setReserveOpener] = useState(true);
  const { cars } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  const toggleReservation = () => {
    setReserveOpener(!ReserveOpener);
  };

  const { id } = useParams();

  const car = cars.filter((car) => car.id === Number(id))[0];

  return (
    <section
      className="flex flex-col justify-between md:flex-row p-4  md:p-8 md:pt-24 "
      id="Reservation"
    >
      {car && car.id ? (
        <>
          <img
            src={car.image}
            alt={car.name}
            className="rounded-3xl max-h-screen w-11/12 md:w-full object-cover"
          />
          <CarDetail
            id={Number(id)}
            name={car.name}
            carType={car.car_type}
            carBrand={car.brand}
            carPrice={car.fee_per_day}
            carColor={car.color}
            toggleReservation={toggleReservation}
            ReserveOpener={ReserveOpener}
          />
        </>
      ) : <Loading message="Loading Car information..." /> }
    </section>
  );
}

export default Reservation;
