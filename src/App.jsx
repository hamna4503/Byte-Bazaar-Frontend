import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import xboxController from "./UserPanel/assets/images/items/controllers/xboxController.png";
import UserNavbar from "./UserPanel/components/Navbar/UserNavbar";
// import AdminNavbar from "./AdminPanel/components/Navbar/AdminNavbar";
import SignUp from "./UserPanel/pages/AuthorizationForms/SignUp";
import Login from "./UserPanel/pages/AuthorizationForms/Login";
import Footer from "./UserPanel/components/Footer/Footer";
import ForgotPassword from "./UserPanel/pages/Passwords/ForgotPassword";
import ResetPassword from "./UserPanel/pages/Passwords/ResetPassword";
import SingleProductPage from "./UserPanel/components/Shop/SingleCard";
import OTPVerification from "./UserPanel/pages/Passwords/OTPVerification";
import ShopMain from "./UserPanel/components/Shop/Shopmain";
import RelatedProdCard from "./UserPanel/components/Shop/relatedprodcard";
import AdminHome from "./AdminPanel/pages/Home/AdminHome";
import AdminLogin from "./AdminPanel/pages/Authentication/AdminLogin";
{/*import ViewCart from "./UserPanel/pages/ViewCart/ViewCart";*/}
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/bytebazaar/admin-login" element={<AdminLogin />} />
          <Route path="/bytebazaar/admin" element={<AdminHome />} />
          <Route
            path="/"
            element={
              <div>
                <UserNavbar />
                <ShopMain />
                <Footer/> 
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
                {/*<ViewCart />*/}
              </>
            }
          />

          {/* <Route path="/bytebazaar/foot" element={<Footer />} /> */}
          {/* <Route path="/addToCart" element={<AddToCart />} /> */}

          {/*<BrowserRouter>
    this would work like this but it has to be checked by maham
      <Routes>
      </Routes>
      </BrowserRouter>*/}
        </Routes>
        <ToastContainer />
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}
