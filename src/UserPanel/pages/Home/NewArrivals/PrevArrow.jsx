import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-14 rounded-full text-white bg-Purple bg-opacity-60 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center absolute z-10 top-[35%] left-2"
      onClick={onClick}
    >
      <span>
        <FaLongArrowAltLeft />
      </span>
    </div>
  );
}
