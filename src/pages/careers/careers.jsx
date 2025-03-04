import { React, useEffect } from "react";
import Banner from "../../components/banner/Banner";
import AOS from "aos";

function Careers() {
  useEffect(() => {
    AOS.init({
      duration: 550,
      offset: 50,
    });
  }, []);
  return (
    <div style={{ minHeight: "62vh" }}>
      <Banner
        title={
          <>
            Join us to deliver compelling <br />
            value through technology solution
          </>
        }
      />
      <h2 className="text-center mt-4  defheadFont" data-aos="fade-up">
        Stay tuned for Career Openings!
      </h2>
      <h5 className="mt-2 text-center defbodyFont" data-aos="fade-up">
        <span>There are no job openings currently.</span> <br />
        Job Openings will be posted for applications in due time.
      </h5>
    </div>
  );
}

export default Careers;
