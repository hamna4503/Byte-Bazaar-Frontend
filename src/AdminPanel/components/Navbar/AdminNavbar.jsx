import React, { useState, useEffect } from "react";
import BrandSection from "../../../UserPanel/components/Navbar/BrandSection";
import MobileMenuSection from "../../../UserPanel/components/Navbar/MobileMenuSection";
import NavLinkSection from "../../../UserPanel/components/Navbar/NavLinkSection";
import RightNavbarSection from "../../../UserPanel/components/Navbar/RightNavbarSection";


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
      label: "User Management",
      link: "/",
    },
    {
      label: "Inventory Management",
      link: "#",
      dropdownOptions: ["Add Products", "Delete Products"],
    },
    {
      label: "Order Management",
      link: "/",
    },
    {
      label: "Customer Support",
      link: "/",
    },
  ];

  return (
    <main>
      <nav className="flex justify-between px-10 items-center py-4">
        <div className="flex items-center gap-6">
          <BrandSection onMenuToggle={() => setMenu(true)} />

          {/* Navigation Links Section */}
          <NavLinkSection
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
          isAdmin={true}
            isCategoriesOpen={isCategoriesOpen}
            setCategoriesOpen={setCategoriesOpen}
        />

        {/* Right Navbar Section */}
        <RightNavbarSection isAdmin={true} />
      </nav>
    </main>
  );
}
