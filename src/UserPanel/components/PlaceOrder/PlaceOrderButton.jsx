import React, { useContext } from "react";
import { OrderContext } from "../../contexts/Order/OrderContext";

function PlaceOrderButton() {
  return (
    <button
      type="submit"
      className="w-full inline-flex items-center justify-center rounded bg-Purple py-2 px-3 text-md text-white transition duration-300 hover:bg-gray-800 focus:ring-2 focus:ring-purple-500"
    >
      Place Order
    </button>
  );
}

export default PlaceOrderButton;
