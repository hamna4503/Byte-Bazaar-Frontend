import React, { useState, useEffect } from "react";
import BrandSection from "./BrandSection";
import RightNavbarSection from "./RightNavbarSection";
import MobileMenuSection from "./MobileMenuSection";
import NavLinksSection from "./NavLinkSection";

export default function UserNavbar() {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const [isMobile, setMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navlinks = [
    {
      label: "HOME",
      link: "/",
    },
    {
      label: "PRODUCTS",
      link: "#",
      dropdownOptions: [
        "Computer Gadgets",
        "Electronic Items",
        "Gaming Items",
      ],
    },
    {
      label: "ABOUT",
      link: "/",
    },
    {
      label: "CONTACT",
      link: "/",
    },
  ];

  return (
    <main>
      <nav className="flex justify-between px-14 items-center py-3 text-white border shadow-md bg-Purple">
        <div className="flex items-center gap-8">
          <BrandSection onMenuToggle={() => setMenu(true)} />

          {/* Navigation Links Section */}
          <NavLinksSection
            navlinks={navlinks}
            isCategoriesOpen={isCategoriesOpen}
            setCategoriesOpen={setCategoriesOpen}
          />
        </div>

        {/* Sidebar mobile menu */}
        <MobileMenuSection
          isSideMenuOpen={isSideMenuOpen}
          setMenu={setMenu}
          navlinks={navlinks}
          isMobile={isMobile}
          isCategoriesOpen={isCategoriesOpen}
          setCategoriesOpen={setCategoriesOpen}
        />

        {/* Right Navbar Section */}
        <RightNavbarSection/>
      </nav>
    </main>
  );
}





