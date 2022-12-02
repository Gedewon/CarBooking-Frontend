import React from 'react';

function Reservation() {
  return (
    <section
      className=" p-8 pt-24 flex flex-col justify-between md:flex-row"
      id="Reservation"
    >
      <img
        src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
        alt="Swift Car"
        className="flex-1"
      />
      <div className=" pr-8 flex flex-col md:w-96">
        <h1 className=" self-end text-2xl">Hyundai Venue</h1>
        <p className="self-end pb-8">Kia Sonet</p>
        <div className=" py-2 px-2 bg-slate-400 mb-3 flex justify-between">
          <p className=" ">Hyundai</p>
          <p className=" ">$40,000</p>
        </div>
        <p className=" text-sm self-end">Red Color</p>

        <p className=" text-xs self-end">Rented untill Dec 22,2022</p>
        <button type="button" className="btn-primary mt-8 md:self-start">
          Reserve Car
        </button>
      </div>
    </section>
  );
}

export default Reservation;
