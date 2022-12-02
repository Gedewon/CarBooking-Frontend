import { Routes, Route } from 'react-router-dom';
import Reservation from './pages/Reservation';
import Splash from './pages/Splash';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </div>
  );
}

export default App;
