import React from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import Logo from "../../assets/images/navbar/logo.png";

export default function BrandSection({ onMenuToggle }){
  return(
  <section className="flex items-center gap-6">
    {/* menu */}
    <FiMenu
      onClick={onMenuToggle}
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
      <span className="text-xl font-bold lg:block hidden">ByteBazaar</span>
    </Link>
  </section>
);};

