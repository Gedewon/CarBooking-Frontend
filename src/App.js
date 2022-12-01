import { Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Splash />} />
      </Routes>
    </div>
  );
}

export default App;
