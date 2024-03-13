import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemCard from "./UserPanel/components/ItemCard/ItemCard";
import xboxController from "./UserPanel/assets/images/items/controllers/xboxController.png";
import UserNavbar from "./UserPanel/components/Navbar/UserNavbar";
import AdminNavbar from "./AdminPanel/components/Navbar/AdminNavbar";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminNavbar />} />
          <Route path="/" element={<UserNavbar />} />
        </Routes>
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
