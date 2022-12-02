import React from 'react';
import CarCard from '../components/CarCard';

function MyReservations() {
  return (
    <div className="pb-4">
      <div className="flex flex-col items-center justify-center py-16 md:pb-32">
        <h1 className=" text-4xl font-bold text-center">Reserved Cars.</h1>
        <p className=" text-xs text-slate-400">Lists of all reservations.</p>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 md:gap-4">
        <CarCard
          id={1}
          img="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
          name="Hyundai Venue"
          carType="Kia Sonet"
          carBrand="Hyundai"
          carPrice="40"
          carColor="Red"
          reservation
          reservationDate="2022-05-23"
        />
        <CarCard
          id={2}
          img="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
          name="Hyundai Venue"
          carType="Kia Sonet"
          carBrand="Hyundai"
          carPrice="30"
          carColor="Red"
          reservation
          reservationDate="2022-05-23"
        />
        <CarCard
          id={3}
          img="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
          name="Hyundai Venue"
          carType="Kia Sonet"
          carBrand="Hyundai"
          carPrice="41"
          carColor="Red"
          reservation
          reservationDate="2022-12-23"
        />
        <CarCard
          id={4}
          img="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
          name="Hyundai Venue"
          carType="Kia Sonet"
          carBrand="Hyundai"
          carPrice="100"
          carColor="Red"
          reservation
          reservationDate="2022-11-23"
        />
      </div>
    </div>
  );
}

export default MyReservations;
