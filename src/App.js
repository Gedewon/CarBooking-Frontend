import { Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import AddCarForm from './pages/AddCar/AddCarForm';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/add/car" element={<AddCarForm />} />
      </Routes>
    </div>
  );
}

export default App;
