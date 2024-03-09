import React from "react";
import ItemCard from "./components/itemCard/ItemCard";
import xboxController from "./assets/images/items/controllers/xboxController.png";

function App() {
  return (
    // <h1>Check VSC HEHE</h1>
    //WAS CHECKING MY ITEM CARD YOU CAN COMMENT IT OUT OR CHECK FOR YOURSELF. IT IS ONLY DEV FOR SMOL SCREENS.
    <ItemCard
      itemImg={xboxController}
      itemName="XBOX 360 Controller"
      itemCategory="Gaming Controller"
      itemPrice="4500"
      alt="XBOX-Controller"
    />
  );
}

export default App;
