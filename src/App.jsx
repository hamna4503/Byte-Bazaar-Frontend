import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ItemCard from "./UserPanel/components/ItemCard/ItemCard";
import xboxController from "./UserPanel/assets/images/items/controllers/xboxController.png";
import UserNavbar from "./UserPanel/components/Navbar/UserNavbar";
import AdminNavbar from "./AdminPanel/components/Navbar/AdminNavbar";
import SignUp from "./UserPanel/pages/AuthorizationForms/SignUp";
import Login from "./UserPanel/pages/AuthorizationForms/Login";
import Footer from "./UserPanel/components/Footer/Footer";
import ForgetPassword from "./UserPanel/pages/Passwords/ForgetPassword";
import ResetPassword from "./UserPanel/pages/Passwords/ResetPassword";

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
            path="/bytebazaar/forget-password"
            element={<ForgetPassword />}
          />
          <Route
            path="/bytebazaar/reset-password/"
            element={<ResetPassword />}
          />

          {/* <Route path="/bytebazaar/foot" element={<Footer />} /> */}
        </Routes>

        <ToastContainer />

      </BrowserRouter>


      {/* THIS IS JUST FOR CHECKING*/}
      <h1 className="text-center font-semibold text-4xl pb-10">PRODUCTS</h1>
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
      </div>
    </>
  );
}
