import { React, useEffect } from "react";
import Banner from "../../components/banner/Banner";
import AOS from "aos";

function Careers() {
  useEffect(() => {
    AOS.init({
      duration: 550, // Animation duration in milliseconds
      offset: 50, // Trigger animations 50px before an element is in view
    });
  }, []);
  return (
    <div style={{ minHeight: "60vh" }}>
      <Banner title="Join us in Impact" />
      <h2 className="text-center mt-3 defheadFont" data-aos="fade-up">
        Stay tuned for Career Openings!
      </h2>
      <h5 className="text-center defbodyFont" data-aos="fade-up">
        There are no job openings currently. <br />
        Job Openings will be posted for applications in due time
      </h5>
    </div>
  );
}

export default Careers;
