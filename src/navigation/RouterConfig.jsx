import { Routes, Route } from 'react-router-dom';
import Reservation from '../pages/Reserve/Reservation';
import SignUp from '../pages/Home/SignUp';
import Splash from '../pages/Home/Splash';
import PrivateRoutes from './PrivateRoutes';
import AddCarForm from '../pages/AddCar/AddCarForm';
import Cars from '../pages/ListOfCars/Cars';
import DeleteCar from '../pages/DeleteCar/DeleteCar';
import MyReservations from '../pages/MyReservations/MyReservations';
import Reserve from '../pages/Reserve/Reserve';

export default function RouterConfig() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route
          path="/add_car"
          element={(
            <PrivateRoutes requiresAdmin>
              <AddCarForm />
            </PrivateRoutes>
          )}
        />
        <Route
          path="/delete_car"
          element={(
            <PrivateRoutes requiresAdmin>
              <DeleteCar />
            </PrivateRoutes>
          )}
        />
        <Route
          path="/cars"
          element={(
            <PrivateRoutes>
              <Cars />
            </PrivateRoutes>
          )}
        />
        <Route
          path="/cars/reservation/:id"
          element={(
            <PrivateRoutes>
              <Reservation />
            </PrivateRoutes>
          )}
        />
        <Route
          path="/reserve"
          element={(
            <PrivateRoutes>
              <Reserve />
            </PrivateRoutes>
          )}
        />
        <Route
          path="/my_reservations"
          element={(
            <PrivateRoutes>
              <MyReservations />
            </PrivateRoutes>
          )}
        />
        <Route
          path="/my_reservations/reservation/:id"
          element={(
            <PrivateRoutes>
              <Reservation />
            </PrivateRoutes>
          )}
        />
      </Routes>
    </div>
  );
}
