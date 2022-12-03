import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

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
    <section>
    </section>
  );
}

export default Reservation;
