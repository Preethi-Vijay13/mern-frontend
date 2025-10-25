import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom'; // This will render the page content

const Layout = () => {
  return (
    <div>
      <Header /> 
      <div>
        <Outlet /> {/* This is where page content will be rendered */}
      </div>
    </div>
  );
};

export default Layout;
