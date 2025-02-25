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

// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import NavBar from "../navbar/navbar_updated";
// import Footer from "../Footer/Footer";
// import ResetScroll from "../resetScroll/resetscroll";
// import BackToTop from "../BackToTop/backtt";

// const Layout = ({ children }) => {
//   const location = useLocation();

//   useEffect(() => {
//     console.log("Route changed:", location.pathname);

//     // Ensure dropdown menus reinitialize
//     setTimeout(() => {
//       const expertiseDropdown = document.querySelector(".expertise-dropdown");
//       if (expertiseDropdown) {
//         expertiseDropdown.classList.remove("hidden");
//       }
//     }, 200);
//   }, [location.pathname]); // Runs on every route change

//   return (
//     <div>
//       <ResetScroll />
//       <NavBar />
//       <main>{children}</main>
//       <Footer />
//       <BackToTop />
//     </div>
//   );
// };

// export default Layout;
