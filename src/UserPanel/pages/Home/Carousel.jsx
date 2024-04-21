import React, { useState, useEffect } from "react";
// import Image1 from "./image1.jpg";
// import Image2 from "./image2.jpg";
// import Image3 from "./image3.jpg";
// import Image4 from "./image4.jpg";
import Image1 from "../../assets/images/home/image1.jpg";
import Image2 from "../../assets/images/home/image2.jpg";
import Image3 from "../../assets/images/home/image3.jpg";
import Image4 from "../../assets/images/home/image4.jpg";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 3 : prevSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-auto overflow-hidden md:h-auto">
          {[Image1, Image2, Image3, Image4].map((image, index) => (
            <div
              key={index}
              className={`${
                index === currentSlide ? "" : "hidden"
              } duration-700 ease-in-out`}
              data-carousel-item=""
            >
              <img
                src={image}
                style={{ height: "500px" }}
                className="relative top-0 left-0 block object-cover w-full h-full"
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white bg-black bg-opacity-30">
            <h1 className="mb-4 text-6xl font-bold">WELCOME TO BYTEBAZAAR!</h1>
            <h4 className="mb-6 text-3xl font-medium">
              Unleashing Innovation, One Byte at a Time
            </h4>
            <p className="text-base leading-relaxed w-[60%] text-center text-xl">
              ByteBazaar, where innovation meets convenience! Explore our vast
              collection of computer gadgets and electronics, and step into a
              world of digital excellence.
            </p>
          </div>
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 rtl:space-x-reverse">
          {[...Array(4)].map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-gray-700" : "bg-gray-300"
              }`}
              aria-current={index === currentSlide}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer start-0 group focus:outline-none"
          data-carousel-prev=""
          onClick={prevSlide}
        >
          {/* Icon for previous button */}
          <FaChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          type="button"
          className="absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer end-0 group focus:outline-none"
          data-carousel-next=""
          onClick={nextSlide}
        >
          {/* Icon for next button */}
          <FaChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </>
  );
}
