import React from "react";
import { Link } from "react-router-dom";

export default function NavLinksSection({
  navlinks,
  isCategoriesOpen,
  setCategoriesOpen,
  isMobile,
}) {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-8 no-scrollbar ${
        isMobile ? "lg:hidden" : "hidden lg:flex"
      }`}
    >
      {navlinks.map((d, i) => (
        <div key={i} className="relative">
          {d.label === "Products" || d.label === "Inventory Management" ? (
            <Link
              to={d.link}
              className={`text-md text-white hover:text-gray-300 ${
                isCategoriesOpen ? "font-bold" : ""
              }`}
              onClick={() => setCategoriesOpen(!isCategoriesOpen)}
            >
              {d.label}
            </Link>
          ) : (
            <Link
              to={d.link}
              className="text-lg font-semibold text-white hover:text-gray-300"
            >
              {d.label}
            </Link>
          )}
          {/* {d.dropdownOptions &&
            (d.label === "Products" || d.label === "Inventory Management") &&
            isCategoriesOpen && (
              <div className="absolute left-0 w-40 mt-2 bg-white rounded-md shadow-lg top-full">
                {d.dropdownOptions.map((option, index) => (
                  <Link
                    key={index}
                    to={`#${option.toLowerCase()}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {option}
                  </Link>
                ))}
              </div>
            )} */}
        </div>
      ))}
    </div>
  );
}
