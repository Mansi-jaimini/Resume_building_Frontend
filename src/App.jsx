import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const showHeaderAndFooter = location.pathname !== '/login';

  return (
    <>
      {showHeaderAndFooter && <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />}
      <Outlet context={{ handleLogin }} />
      {showHeaderAndFooter && <Footer />}
    </>
  );
}

export default App;
