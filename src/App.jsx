import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import xboxController from "./UserPanel/assets/images/items/controllers/xboxController.png";
import UserNavbar from "./UserPanel/components/Navbar/UserNavbar";
import AdminNavbar from "./AdminPanel/components/Navbar/AdminNavbar";
import SignUp from "./UserPanel/pages/AuthorizationForms/SignUp";
import Login from "./UserPanel/pages/AuthorizationForms/Login";
import Footer from "./UserPanel/components/Footer/Footer";
import ForgotPassword from "./UserPanel/pages/Passwords/ForgotPassword";
import ResetPassword from "./UserPanel/pages/Passwords/ResetPassword";
import SingleProductPage from "./UserPanel/components/Shop/SingleCard";
import OTPVerification from "./UserPanel/pages/Passwords/OTPVerification";
import ShopMain from "./UserPanel/components/Shop/Shopmain";
import RelatedProdCard from "./UserPanel/components/Shop/relatedprodcard";
import AddToCart from "./UserPanel/components/Cart/AddToCart/AddToCart";
import UserState from "./UserPanel/contexts/UserState";

import ViewCart from "./UserPanel/pages/ViewCart/ViewCart";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/bytebazaar/admin" element={<AdminNavbar />} />
          <Route
            path="/"
            element={
              <div>
                <UserNavbar />
                <ShopMain />
              </div>
            }
          />
          <Route path="/bytebazaar/signup" element={<SignUp />} />
          <Route path="/bytebazaar/login" element={<Login />} />
          <Route
            path="/bytebazaar/forgot-password"
            element={<ForgotPassword />}
          />
          <Route
            path="/bytebazaar/reset-password/"
            element={<ResetPassword />}
          />
          <Route
            path="/bytebazaar/otp-verification/"
            element={<OTPVerification />}
          />
          <Route path="/shop" element={<ShopMain />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
          <Route path="/product/:id" element={<RelatedProdCard />} />
          <Route
            path="/bytebazaar/cart"
            element={
              <>
                <UserNavbar />
                <ViewCart />
              </>
            }
          />

          <Route path="/bytebazaar/foot" element={<Footer />} />

          <Route
            path="/addToCart"
            element={
              <UserState>
                <AddToCart />
              </UserState>
            }
          />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
      <Footer />
    </>
  );
}
