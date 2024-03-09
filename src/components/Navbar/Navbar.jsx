/** @format */
"use client";

import { Link } from "react-router-dom";
import React, { useState } from "react";
import Logo from "../../assets/images/navbar/logo.png";

import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoCloseOutline, IoPersonCircle } from "react-icons/io5";
import clsx from "clsx";

export default function Navbar() {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);

  const navlinks = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Categories",
      link: "#",
      dropdownOptions: [
        "Computer Gadgets",
        "Electronic Accessories",
        "Gaming Items",
      ],
    },
    {
      label: "About",
      link: "/",
    },
    {
      label: "Contact",
      link: "/",
    },
  ];

  return (
    <main>
      <nav className="flex justify-between px-10 items-center py-4">
        <div className="flex items-center gap-6">
          <section className="flex items-center gap-6">
            {/* menu */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            {/* logo */}
            <Link to="/" className="text-8xl font-mono flex items-center">
              <img
                width={40}
                height={40}
                className="rounded-full mr-2 lg:block hidden"
                src={Logo}
                alt="avatar-img"
              />
              <span className="text-xl font-bold lg:block hidden">
                ByteBazaar
              </span>
            </Link>
          </section>
          {navlinks.map((d, i) => (
            <div key={i} className="relative">
              {d.label === "Categories" ? (
                <Link
                  to={d.link}
                  className="hidden lg:block text-gray-600 hover:text-black"
                  onClick={() => setCategoriesOpen(!isCategoriesOpen)}
                >
                  {d.label}
                </Link>
              ) : (
                <Link
                  to={d.link}
                  className="hidden lg:block text-gray-600 hover:text-black"
                >
                  {d.label}
                </Link>
              )}
              {d.dropdownOptions &&
                d.label === "Categories" &&
                isCategoriesOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg">
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
                )}
            </div>
          ))}
        </div>

        {/* Sidebar mobile menu */}
        <div
          className={clsx(
            "fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex ">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-2 text-3xl cursor-pointer"
            />

            <span className="text-xl font-bold lg:block">ByteBazaar</span>

            {navlinks.map((d, i) => (
              <div key={i} className="relative">
                {d.label === "Categories" ? (
                  <Link
                    to={d.link}
                    className="font-bold"
                    onClick={() => setCategoriesOpen(!isCategoriesOpen)}
                  >
                    {d.label}
                  </Link>
                ) : (
                  <Link to={d.link} className="font-bold">
                    {d.label}
                  </Link>
                )}
                {d.dropdownOptions &&
                  d.label === "Categories" &&
                  isCategoriesOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg z-10">
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
                  )}
              </div>
            ))}

            {/* Search bar in the sidebar */}
            <input
              type="text"
              placeholder="Search..."
              className="px-1 py-1 border border-gray-300 rounded-lg focus:outline-none"
              style={{ width: "90%" }}
            />
          </section>
        </div>

        {/* Right Navbar Section */}
        <section className="flex items-center gap-6">
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search..."
            className="hidden lg:block px-2 py-1 border border-gray-300 rounded-lg focus:outline-none"
          />

          {/* Cart icon */}
          <AiOutlineShoppingCart className="text-3xl" />

          {/* Profile icon */}
          <IoPersonCircle className="text-4xl" />
        </section>
      </nav>
    </main>
  );
}
