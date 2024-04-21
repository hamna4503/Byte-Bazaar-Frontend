import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import NavLinksSection from "./NavLinksSection";
import BrandSection from "./BrandSection";

export default function MobileMenuSection({
  isSideMenuOpen,
  setMenu,
  navlinks,
  isMobile,
  isCategoriesOpen,
  setCategoriesOpen,
}) {
  return (
    <div
      className={`fixed h-full w-screen lg:hidden bg-Purple/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all ${
        isSideMenuOpen && "translate-x-0"
      }`}
    >
      <section className="absolute top-0 left-0 flex flex-col w-56 h-screen gap-8 p-12 text-white z-1000 bg-Purple ">
        <IoCloseOutline
          onClick={() => setMenu(false)}
          className="mt-0 mb-2 text-3xl cursor-pointer"
        />

        <span className="text-xl font-bold lg:block">ByteBazaar</span>

        <NavLinksSection
          navlinks={navlinks}
          isCategoriesOpen={isCategoriesOpen}
          setCategoriesOpen={setCategoriesOpen}
          isMobile={true}
        />

        {/* Search bar in the sidebar */}
        <input
          type="text"
          placeholder="Search"
          className="px-2 py-1 border border-gray-300 rounded-lg focus:outline-none"
          style={{ width: "94%" }}
        />
      </section>
    </div>
  );
}
