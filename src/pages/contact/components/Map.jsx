import AOS from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";
function Map() {
  useEffect(() => {
    AOS.init({
      duration: 650,
      offset: 50,
    });
  }, []);
  return (
    <>
      <div
        className="p-0 m-0 d-flex align-items-center justify-content-center"
        style={{
          width: "100%",
          height: "400px",
          // outline: "2px solid rgba(255, 17, 67, 1)",
          outlineOffset: "4px",
          borderRadius: "2px",
          boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.3)",
        }}
      >
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d992.4621838993789!2d-0.18101662383573272!3d5.734913813899833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf771427dacc19%3A0x98593fb76322e09!2sVALTEC%20LIMITED!5e0!3m2!1sen!2sgh!4v1739904048726!5m2!1sen!2sgh"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          style={{
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
    </>
  );
}
export default Map;
