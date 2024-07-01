import React, { useContext, useEffect, useState } from "react";
import { IoLogIn, IoLogOut, IoPersonCircle } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "./ShoppingCartIcon";
import Cookies from "js-cookie";
import LogoutModal from "../Logout/LogoutModal";
import { AiOutlineLogout } from "react-icons/ai";
import AuthContext from "../../contexts/AuthContext/AuthContext";
export default function RightNavbarSection() {
  let { authToken, setauthToken } = useContext(AuthContext);
  // const [authToken, setauthToken] = useState(Cookies.get("authToken"));

  // let authToken = Cookies.get("authToken");
  const [ModalOpen, setModalOpen] = useState(false);
  return (
    <section className="flex items-center gap-9">
      {/* Search bar */}
      {/* <input
        type="text"
        placeholder="Search "
        className="hidden px-2 py-1 text-sm text-black border border-gray-300 rounded-md lg:block focus:outline-none"
      /> */}
      {/* Cart icon */}
      {authToken && (
        <Link to="/bytebazaar/cart">
          <div className="relative">
            <ShoppingCartIcon />
            {/* <AiOutlineShoppingCart className="text-4xl" /> */}
          </div>
        </Link>
      )}
      {/* <Link to="/bytebazaar/wishlist">
        <MdFavorite className="text-4xl" />
      </Link> */}
      {/* Profile icon */}
      {ModalOpen && (
        <LogoutModal
          ModalOpen={ModalOpen}
          setModalOpen={setModalOpen}
          setauthToken={setauthToken}
        />
      )}
      {authToken ? (
        <>
          <AiOutlineLogout
            className="text-4xl hover:cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setModalOpen(true);
            }}
          />
        </>
      ) : (
        <div className="flex">
          <Link
            to="login"
            className="p-2 mr-2 border border-white rounded-full hover:bg-white hover:text-Purple hover:border-Purple"
          >
            <span className="font-semibold text-md">LOGIN</span>
          </Link>
          <span className="p-2 font-bold text-md">OR</span>
          <Link
            to="signup"
            className="p-2 ml-2 border border-white rounded-full hover:bg-white hover:text-Purple hover:border-Purple"
          >
            <span className="font-semibold text-md">SIGN UP</span>
          </Link>
        </div>
      )}
      {/* // <IoPersonCircle className="text-4xl" /> */}
    </section>
  );
}
