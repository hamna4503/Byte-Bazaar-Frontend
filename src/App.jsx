import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import UserNavbar from "./UserPanel/components/Navbar/UserNavbar";
import SignUp from "./UserPanel/pages/AuthorizationForms/SignUp";
import Login from "./UserPanel/pages/AuthorizationForms/Login";
import Footer from "./UserPanel/components/Footer/Footer";
import ForgotPassword from "./UserPanel/pages/Passwords/ForgotPassword";
import ResetPassword from "./UserPanel/pages/Passwords/ResetPassword";
import SingleProductPage from "./UserPanel/components/Shop/SingleCard";
import OTPVerification from "./UserPanel/pages/Passwords/OTPVerification";
import ShopMain from "./UserPanel/components/Shop/Shopmain";
import RelatedProdCard from "./UserPanel/components/Shop/relatedprodcard";
import AdminHome from "./AdminPanel/pages/Home/Dashboard";
import AdminLogin from "./AdminPanel/pages/Authentication/AdminLogin";
import UserManagement from "./AdminPanel/pages/UserManagement/UserManagement";
import AddToCart from "./UserPanel/components/Cart/AddToCart/AddToCart";
import CartState from "./UserPanel/contexts/CartState";
import ViewCart from "./UserPanel/pages/ViewCart/ViewCart";
import InventoryManagement from "./AdminPanel/pages/InventoryManagement/InventoryManagement";
import OrderManagement from "./AdminPanel/pages/OrderManagement/OrderManagement";
import CustomerSupport from "./AdminPanel/pages/CustomerSupport/CustomerSupport";
import Checkout from "./UserPanel/pages/Checkout/Checkout";
import Home from "./UserPanel/pages/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OrderState from "./UserPanel/contexts/Order/OrderState";
import Cookies from "js-cookie";
import LoadingState from "./UserPanel/contexts/Loading/LoadingState";
import { useEffect } from "react";
import CardPayment from "./UserPanel/pages/CardPayment/CardPayment";

const Authenticate = () => {
  let authToken = Cookies.get("authToken");
  console.log(authToken);
  return authToken ? true : false;
};
//

export default function App() {
  return (
    <>
      <BrowserRouter>
        <LoadingState>
          <Routes>
            <Route path="/bytebazaar/admin-login" element={<AdminLogin />} />
            <Route path="/bytebazaar/admin" element={<AdminHome />} />
            <Route
              path="/bytebazaar/admin/user-profiles"
              element={<UserManagement />}
            />
            <Route
              path="/bytebazaar/admin/manage-inventory"
              element={<InventoryManagement />}
            />
            <Route
              path="/bytebazaar/admin/manage-orders"
              element={<OrderManagement />}
            />
            <Route
              path="/bytebazaar/admin/customer-support"
              element={<CustomerSupport />}
            />
            <Route
              path="/bytebazaar/shop"
              element={
                <div>
                  <UserNavbar />
                  <ShopMain />
                  <Footer />
                </div>
              }
            />
            <Route path="/" element={<Home />} />
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
            <Route
              path="/product/:id"
              element={
                <CartState>
                  <UserNavbar />
                  <SingleProductPage />
                </CartState>
              }
            />
            <Route
              path="/product/:id"
              element={
                <>
                  <UserNavbar />
                  <RelatedProdCard />
                  <Footer />
                </>
              }
            />
            <Route
              path="/bytebazaar/cart"
              element={
                // Authenticate() ? (
                <CartState>
                  <UserNavbar />
                  <ViewCart />
                </CartState>
                // ) : (
                //   <Navigate to="/bytebazaar/login" replace />
                // )
              }
            />

            <Route
              path="/bytebazaar/checkout"
              element={
                <CartState>
                  <OrderState>
                    <Checkout />
                  </OrderState>
                </CartState>
              }
            />
            <Route path="/bytebazaar/foot" element={<Footer />} />

            <Route
              path="/addToCart"
              element={
                <CartState>
                  <AddToCart />
                </CartState>
              }
            />

            <Route
              path="/cardPayment"
              element={
                <CartState>
                  <CardPayment />
                </CartState>
              }
            />
          </Routes>
        </LoadingState>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}
