// components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  // You can now show/hide or customize Navbar based on the path
  const showNavbar = location.pathname === '/home';

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
    </>
  );
};

export default Layout;
