import React, { useState } from "react";
import img1 from "../../assets/images/Shop/download.png";

const ShopHeader = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [img1, img1, img1]; // Array of image paths

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          style={{ display: index === activeIndex ? "block" : "none" }}
        >
          <img
            src={image}
            className="d-block w-100"
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}
      <button className="carousel-control-prev" onClick={handlePrev}>
        Previous
      </button>
      <button className="carousel-control-next" onClick={handleNext}>
        Next
      </button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopHeader;
