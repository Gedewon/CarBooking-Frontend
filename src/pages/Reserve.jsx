import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Reservation() {
  const [ReserveOpener, setReserveOpener] = useState(true);
  const { cars } = useSelector((state) => state.cars);

  return (
    <section>
    </section>
  );
}

export default Reservation;
