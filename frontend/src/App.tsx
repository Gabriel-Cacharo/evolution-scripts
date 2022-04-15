import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Footer from './components/Footer';
import Header from './components/Header';
import ForgotPasswordPage from './pages/Auth/ForgotPasswordPage';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';
import Routes from './routes';

import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
      <ToastContainer autoClose={5000} />
    </Router>
  );
}

export default App;
