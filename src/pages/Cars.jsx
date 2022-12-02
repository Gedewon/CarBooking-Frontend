import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarCard from '../components/CarCard';

function Cars() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className=" px-4 md:px-16">
      <div className="flex flex-col items-center justify-center py-16 md:pb-32">
        <h1 className=" text-4xl font-bold text-center">
          Latest Model Cars Available.
        </h1>
        <p className=" text-xs text-slate-400">
          Please select your car for reservation.
        </p>
      </div>
      <Carousel responsive={responsive} autoPlay autoPlaySpeed={6000}>
        <div>
          <CarCard
            id={1}
            img="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
            name="Hyundai Venue"
            carType="Kia Sonet"
            carBrand="Hyundai"
            carPrice="40000"
            carColor="Red"
          />
        </div>
        <div>
          <CarCard
            id={2}
            img="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
            name="Hyundai Venue"
            carType="Kia Sonet"
            carBrand="Hyundai"
            carPrice="40000"
            carColor="Red"
          />
        </div>
        <div>
          <CarCard
            id={3}
            img="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
            name="Hyundai Venue"
            carType="Kia Sonet"
            carBrand="Hyundai"
            carPrice="40000"
            carColor="Red"
          />
        </div>
        <div>
          <CarCard
            id={4}
            img="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
            name="Hyundai Venue"
            carType="Kia Sonet"
            carBrand="Hyundai"
            carPrice="40000"
            carColor="Red"
          />
        </div>
        <div>
          <CarCard
            id={5}
            img="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
            name="Hyundai Venue"
            carType="Kia Sonet"
            carBrand="Hyundai"
            carPrice="40000"
            carColor="Red"
          />
        </div>
        <div>
          <CarCard
            id={6}
            img="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
            name="Hyundai Venue"
            carType="Kia Sonet"
            carBrand="Hyundai"
            carPrice="40000"
            carColor="Red"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Cars;
