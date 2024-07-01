import React, { useContext, useEffect } from "react";
import UserNavbar from "../components/Navbar/UserNavbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import AuthContext from "../contexts/AuthContext/AuthContext";
import Cookies from "js-cookie";
function UserLayout() {
  return (
    <>
      <UserNavbar />
      <div className="min-h-[70vh]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default UserLayout;
