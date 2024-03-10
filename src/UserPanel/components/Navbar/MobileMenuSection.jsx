import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import NavLinksSection from "./NavLinkSection";

export default function MobileMenuSection({
  isSideMenuOpen,
  setMenu,
  navlinks,
  isMobile,
  isAdmin,
  isCategoriesOpen,
  setCategoriesOpen,
}){
    return (
      <div
        className={`fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all ${
          isSideMenuOpen && "translate-x-0"
        }`}
      >
        <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex ">
          <IoCloseOutline
            onClick={() => setMenu(false)}
            className="mt-0 mb-2 text-3xl cursor-pointer"
          />

          <span className="text-xl font-bold lg:block">ByteBazaar</span>

          <NavLinksSection
            navlinks={navlinks}
            isCategoriesOpen={isCategoriesOpen}
            setCategoriesOpen={setCategoriesOpen}
            isMobile={isMobile}
          />

          {/* Search bar in the sidebar */}
          {!isAdmin && (
            <input
              type="text"
              placeholder="Search..."
              className="px-1 py-1 border border-gray-300 rounded-lg focus:outline-none"
              style={{ width: "90%" }}
            />
          )}
        </section>
      </div>
    );};

