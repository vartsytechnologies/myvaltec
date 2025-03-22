// Original code without preloader.

import React from "react";
import NavBar from "../navbar/navbar";
import Footer from "../Footer/Footer";
import ResetScroll from "../resetScroll/resetscroll";
import BackToTop from "../BackToTop/backtt";
// import Preloader from "../Preloader/loader";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <ResetScroll />
        <NavBar />
        <main>{children}</main>
        <BackToTop />
        <Footer></Footer>
      </div>
    </>
  );
};

export default Layout;

// import React, { useState, useEffect } from "react";
// import NavBar from "../navbar/navbar";
// import Footer from "../Footer/Footer";
// import ResetScroll from "../resetScroll/resetscroll";
// import BackToTop from "../BackToTop/backtt";
// import Preloader from "../Preloader/loader";
// import "./layout.css";

// const Layout = ({ children }) => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 2500);
//   }, []);

//   return (
//     <>
//       {loading && <Preloader />}
//       {!loading && (
//         <div>
//           <ResetScroll />
//           <NavBar />
//           <main>{children}</main>
//           <Footer />
//           <BackToTop />
//         </div>
//       )}
//     </>
//   );
// };

// export default Layout;
