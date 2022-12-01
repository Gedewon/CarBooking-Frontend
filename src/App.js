import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Splash from './pages/Splash';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Splash />} />
      </Routes>
    </div>
  );
}

export default App;
