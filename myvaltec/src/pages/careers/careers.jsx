import React from "react";
import Banner from "../../components/banner/Banner";

function Careers() {
  return (
    <div style={{ minHeight: "60vh" }}>
      <Banner title="Join us in Impact" />
      <h2 className="text-center mt-3 defheadFont">
        Stay tuned for Career Openings!
      </h2>
      <h5 className="text-center defbodyFont">
        There are no job openings currently. Job Openings will be posted for
        applications in due time
      </h5>
    </div>
  );
}

export default Careers;
