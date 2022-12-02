import { Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import AddCardForm from './pages/add_car/AddCardForm';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/add/car" element={<AddCardForm />} />
      </Routes>
    </div>
  );
}

export default App;
