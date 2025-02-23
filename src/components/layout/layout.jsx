// src/components/Layout.js
import React from "react";
import NavBar from "../navbar/navbar_updated";
import Footer from "../Footer/Footer";
import ResetScroll from "../resetScroll/resetscroll";
import BackToTop from "../BackToTop/backtt";

const Layout = ({ children }) => {
  return (
    <div>
      <ResetScroll />
      <NavBar />
      <main>{children}</main>
      <Footer></Footer>
      <BackToTop />
    </div>
  );
};

export default Layout;
