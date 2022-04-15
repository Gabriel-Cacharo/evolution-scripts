import { Routes, Route } from 'react-router-dom';

import AdminPage from './pages/AdminDashboardPage';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import CartPage from './pages/CartPage';
import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default MainRoutes;
