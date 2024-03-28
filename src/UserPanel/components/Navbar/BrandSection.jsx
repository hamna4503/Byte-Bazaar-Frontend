import React from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import Logo from "../../assets/images/navbar/logo.png";
import BLogo from "../../assets/images/navbar/bytelogo.png";

export default function BrandSection({ onMenuToggle, isAdmin }) {
  return (
    <section className="flex items-center gap-6">
      {/* menu */}
      {!isAdmin && (
        <FiMenu
          onClick={onMenuToggle}
          className="text-3xl cursor-pointer lg:hidden"
        />
      )}

      {/* logo */}
      <Link to="/" className="text-8xl font-mono flex items-center">
        <img
          width={60}
          height={80}
          className="rounded-full mr-1 lg:block hidden"
          src={BLogo}
          alt="avatar-img"
        />
        <span className="text-xl font-bold lg:block hidden">ByteBazaar</span>
      </Link>
    </section>
  );
}
