import React from "react";
import eye from "../../../assets/images/items/controllers/xboxController.png";
import blog from "../../../assets/images/home/image1.jpg";
import { Link } from "react-router-dom";

const sections = [
  {
    imgSrc: eye,
    title: "NEW STYLES & ARRIVALS",
    linkTo: "/shop",
    buttonText: "SHOP NOW",
  },
  {
    imgSrc: blog,
    title: "INSIGHTFUL BLOGS",
    linkTo: "/blogs",
    buttonText: "READ NOW",
  },
];

export default function ShopPreview() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-4">
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-col items-center gap-4 p-4 bg-white shadow-lg rounded-lg w-full md:w-1/2 aspect-square"
        >
          {section.imgSrc === eye ? (
            <img
              className="w-full h-1/2 md:h-1/2 object-cover rounded-lg"
              src={section.imgSrc}
              alt={section.title}
            />
          ) : null}
          <div className="text-center md:text-left flex-grow">
            <h2 className="text-xl font-bold mb-2">{section.title}</h2>
            <Link
              to={section.linkTo}
              className="inline-block mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-500"
            >
              {section.buttonText}
            </Link>
          </div>
          {section.imgSrc !== eye ? (
            <img
              className="w-full h-1/2 md:h-1/2 object-cover rounded-lg"
              src={section.imgSrc}
              alt={section.title}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}
