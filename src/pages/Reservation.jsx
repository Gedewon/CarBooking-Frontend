import React, { useState } from 'react';
import CarDetail from '../components/CarDetail';

function Reservation() {
  const [ReserveOpener, setReserveOpener] = useState(false);

  const toggleReservation = () => {
    setReserveOpener(!ReserveOpener);
  };
  return (
    <section
      className="flex flex-col justify-between md:flex-row p-4  md:p-8 md:pt-24 "
      id="Reservation"
    >
      <img
        src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
        alt="Swift Car"
        className="flex-1"
      />
      <CarDetail
        name="Hyundai Venue"
        carType="Kia Sonet"
        carBrand="Hyundai"
        carPrice="40000"
        carColor="Red"
        dueDate="Dec 22,2022"
        toggleReservation={toggleReservation}
        ReserveOpener={ReserveOpener}
      />
    </section>
  );
}

export default Reservation;
