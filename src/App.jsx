import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemCard from "./UserPanel/components/itemCard/ItemCard";
import xboxController from "./UserPanel/assets/images/items/controllers/xboxController.png";
import UserNavbar from "./UserPanel/components/Navbar/UserNavbar";
import AdminNavbar from "./AdminPanel/components/Navbar/AdminNavbar";
import SignUp from "./UserPanel/pages/AuthorizationForms/SignUp";
import Login from "./UserPanel/pages/AuthorizationForms/Login";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/bytebazaar/admin" element={<AdminNavbar />} />
          <Route path="/" element={<UserNavbar />} />
          <Route path="/bytebazaar/signup" element={<SignUp />} />
          <Route path="/bytebazaar/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

      <ItemCard
        itemImg={xboxController}
        itemName="XBOX 360 Controller"
        itemCategory="Gaming Controller"
        itemPrice="4500"
        alt="XBOX-Controller"
      />
    </>
  );
}

