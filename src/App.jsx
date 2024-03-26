import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ItemCard from "./UserPanel/components/ItemCard/ItemCard";
import xboxController from "./UserPanel/assets/images/items/controllers/xboxController.png";
import UserNavbar from "./UserPanel/components/Navbar/UserNavbar";
import AdminNavbar from "./AdminPanel/components/Navbar/AdminNavbar";
import SignUp from "./UserPanel/pages/AuthorizationForms/SignUp";
import Login from "./UserPanel/pages/AuthorizationForms/Login";
import Footer from "./UserPanel/components/Footer/Footer";
import ForgotPassword from "./UserPanel/pages/Passwords/ForgotPassword";
import ResetPassword from "./UserPanel/pages/Passwords/ResetPassword";
import Shopmain from "./UserPanel/components/Shop/Shopmain";
import SingleProductPage from "./UserPanel/components/Shop/SingleCard";
import OTPVerification from "./UserPanel/pages/Passwords/OTPVerification";
;

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/bytebazaar/admin" element={<AdminNavbar />} />
          <Route path="/" element={<UserNavbar />} />
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

          {/* <Route path="/bytebazaar/foot" element={<Footer />} /> */}

    {/*<BrowserRouter>
    this would work like this but it has to be checked by maham
      <Routes>
      <Route path="/" exact component={ShopMain} />
      <Route path="/product/:id" component={SingleProductPage} />
      </Routes>
      </BrowserRouter>*/}

        </Routes>
        <ToastContainer />
      </BrowserRouter>

      {/* THIS IS JUST FOR CHECKING*/}
      {/* <h1 className="text-center font-semibold text-4xl pb-10">PRODUCTS</h1>
      <div className="flex flex-wrap justify-center overflow-hidden">
        <ItemCard
          itemImg={xboxController}
          itemName="XBOX 360 Controller"
          itemCategory="Gaming Controller"
          itemPrice="4500"
          alt="XBOX-Controller"
        />
        <ItemCard
          itemImg={xboxController}
          itemName="XBOX 360 Controller"
          itemCategory="Gaming Controller"
          itemPrice="4500"
          alt="XBOX-Controller"
        />
        <ItemCard
          itemImg={xboxController}
          itemName="XBOX 360 Controller"
          itemCategory="Gaming Controller"
          itemPrice="4500"
          alt="XBOX-Controller"
        />
        <ItemCard
          itemImg={xboxController}
          itemName="XBOX 360 Controller"
          itemCategory="Gaming Controller"
          itemPrice="4500"
          alt="XBOX-Controller"
        />
        <ItemCard
          itemImg={xboxController}
          itemName="XBOX 360 Controller"
          itemCategory="Gaming Controller"
          itemPrice="4500"
          alt="XBOX-Controller"
        />
        <ItemCard
          itemImg={xboxController}
          itemName="XBOX 360 Controller"
          itemCategory="Gaming Controller"
          itemPrice="4500"
          alt="XBOX-Controller"
        />
      </div> */}
    </>
  );
}

