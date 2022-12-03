import { Routes, Route } from 'react-router-dom';
import AddCarForm from '../pages/AddCar/AddCarForm';
import Cars from '../pages/Cars';
import DeleteCar from '../pages/DeleteCar/DeleteCar';
import MyReservations from '../pages/MyReservations';
import Reservation from '../pages/Reservation';
import Reserve from '../pages/Reserve';
import SignUp from '../pages/auth/SignUp';
import Splash from '../pages/Splash'
import PrivateRoutes from './PrivateRoutes';

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
