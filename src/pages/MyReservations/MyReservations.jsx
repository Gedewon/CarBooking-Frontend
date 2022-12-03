import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CarCard from '../../components/Cars/CarCard';
import getCars from '../../redux/actions/Car/getCars';
import getReservations from '../../redux/actions/Reservation/getReservation';

function MyReservations() {
  const dispatch = useDispatch();
  const { reservation } = useSelector((state) => state.reservation);
  const { cars } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(getReservations());
    dispatch(getCars());
  }, [dispatch, cars.cars]);

  const car = (id) => {
    const filterdCar = cars.filter((car) => car.id === id);
    return filterdCar;
  };

  return (
    <div className="pb-4">
      <div className="flex flex-col items-center justify-center py-16 md:pb-32">
        <h1 className=" text-4xl font-bold text-center">Reserved Cars.</h1>
        <p className=" text-xs text-slate-400">Lists of all reservations.</p>
      </div>
      <div className="grid grid-cols-responsive px gap-4 justify-items-center">
        {reservation.length > 0 && cars.length > 0 ? (reservation.map((res) => {
          const reservedCar = car(res.car_id)[0];
          return (
            <CarCard
              key={res.id}
              id={reservedCar.id}
              img={reservedCar.image}
              name={reservedCar.name}
              carType={reservedCar.car_type}
              carBrand={reservedCar.brand}
              carPrice={reservedCar.fee_per_day}
              carColor={reservedCar.color}
              reservation
              reservationDate={res.reservation_date}
            />
          );
        })) : <div>No Reserved Cars</div> }
      </div>
    </div>
  );
}

export default MyReservations;
