// frontend\src\App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Produto from './pages/Produto'; // Vamos criar já já

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<Produto />} />
      </Routes>
    </Router>
  );
}
