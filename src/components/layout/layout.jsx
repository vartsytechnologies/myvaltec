import NavBar from "../navbar/navbar";
import Footer from "../Footer/Footer";
import BackToTop from "../BackToTop/backtt";

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <BackToTop />
      <div>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
