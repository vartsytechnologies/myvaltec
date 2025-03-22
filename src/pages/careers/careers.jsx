import { React } from "react";
import Banner from "../../components/banner/Banner";
import AnimatedElement from "../../components/motionComponent";
function Careers() {
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
      <AnimatedElement
        as="h1"
        className="text-center mt-4  defheadFont"
        animation="fade-up"
      >
        Stay tuned for Career Openings!
      </AnimatedElement>
      <AnimatedElement
        className="text-center mt-4  defheadFont"
        animation="fade-up"
      >
        <span>There are no job openings currently.</span> <br />
        Job Openings will be posted for applications in due time.
      </AnimatedElement>
    </div>
  );
}

export default Careers;
