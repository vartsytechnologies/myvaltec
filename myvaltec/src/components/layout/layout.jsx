// src/components/Layout.js
import React from 'react';
import NavBar from '../navbar/navbar';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
