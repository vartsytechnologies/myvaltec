import React from "react";
import "./services.css"; // Custom styling for consistent image size
import f1 from "../../assets/services_img/new/fuel/f1.png";
import f2 from "../../assets/services_img/new/fuel/f2.png";
import f3 from "../../assets/services_img/new/fuel/f3.png";
import f4 from "../../assets/services_img/new/fuel/f4.png";
import f5 from "../../assets/services_img/new/fuel/f5.png";
import f6 from "../../assets/services_img/new/fuel/f6.png";

const images = [f1, f2, f3, f4, f5, f6];

const ImageGallery = () => {
  return (
    <div className="container my-4">
      <div className="row">
        {images.map((src, index) => (
          <div key={index} className="col-md-4 col-sm-4 mb-4">
            <div className="image-wrapper border rounded shadow-sm">
              {" "}
              {/* Bootstrap border and shadow */}
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="img-fluid rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
