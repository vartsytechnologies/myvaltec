// src/components/Layout.js
import React from 'react';
import NavBar from '../navbar/navbar';
import Footer from '../Footer/Footer';
import ResetScroll from '../resetScroll/resetscroll';

const Layout = ({ children }) => {
  return (
    <div>
      <ResetScroll/>
      <NavBar />
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
