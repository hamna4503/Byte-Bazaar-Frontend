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
      <Link to="/" className="flex items-center font-mono text-8xl">
        <img
          width={60}
          height={80}
          className="hidden mr-1 rounded-full md:block"
          src={BLogo}
          alt="avatar-img"
        />
        <span className="hidden text-xl font-bold md:block">ByteBazaar</span>
      </Link>
    </section>
  );
}
