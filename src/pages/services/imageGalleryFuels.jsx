import React from "react";
import './services.css' // Custom styling for consistent image size

const images = [
  "https://via.placeholder.com/300", // Replace with your image URLs
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300"
];

const ImageGallery = () => {
  return (
    <div className="container my-4">
      <div className="row">
        {images.map((src, index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-4">
            <div className="image-wrapper">
              <img src={src} alt={`Gallery ${index + 1}`} className="img-fluid" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
