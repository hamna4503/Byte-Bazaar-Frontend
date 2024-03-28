import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function RightNavbarSection() {
  return (
    <section className="flex items-center gap-6">

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search "
        className="hidden lg:block px-2 py-1 border border-gray-300 rounded-lg focus:outline-none"
      />

      {/* Cart icon */}
      <Link to="/bytebazaar/cart">
        <AiOutlineShoppingCart className="text-3xl" />
      </Link>

      {/* Profile icon */}
      <IoPersonCircle className="text-4xl" />
    </section>
  );
}
