import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ItemCard from "./components/itemCard/ItemCard";
// import xboxController from "./assets/images/items/controllers/xboxController.png";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </BrowserRouter>

      {/* <ItemCard
        itemImg={xboxController}
        itemName="XBOX 360 Controller"
        itemCategory="Gaming Controller"
        itemPrice="4500"
        alt="XBOX-Controller"
      /> */}
    </>
  );
}
