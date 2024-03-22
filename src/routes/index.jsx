// src/routes/AppRoutes.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
import Teste1Page from '../pages/Teste1';
import Teste2Page from '../pages/Teste2';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teste1" element={<Teste1Page />} />
        <Route path="/teste2" element={<Teste2Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
