import React, { useContext } from "react";
import axios from "axios";
import { CartContext } from "../../../contexts/CartContext";

function AddToCart({ id, quantity }) {
  let { AddItem } = useContext(CartContext);
  return (
    <div>
      <button
        className="bg-purple-800 hover:bg-gray-300  duration-100 px-5 py-3 font-[poppins] 
        rounded-md text-white md:w-auto w-64"
        onClick={() => AddItem(id, quantity)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default AddToCart;
