// frontend\src\App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Produto from './pages/Produto';
import Checkout from './pages/Checkout';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<Produto />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </Router>
  );
}
