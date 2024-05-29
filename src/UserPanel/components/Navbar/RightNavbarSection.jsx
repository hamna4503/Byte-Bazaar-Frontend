import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonCircle } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

export default function RightNavbarSection() {
  return (
    <section className="flex items-center gap-9">
      {/* Search bar */}
      {/* <input
        type="text"
        placeholder="Search "
        className="hidden px-2 py-1 text-sm text-black border border-gray-300 rounded-md lg:block focus:outline-none"
      /> */}

      {/* Cart icon */}
      <Link to="/bytebazaar/cart">
        <AiOutlineShoppingCart className="text-4xl" />
      </Link>

      <Link to="/bytebazaar/wishlist">
        <MdFavorite className="text-4xl" />
      </Link>

      {/* Profile icon */}
      <IoPersonCircle className="text-4xl" />
    </section>
  );
}
