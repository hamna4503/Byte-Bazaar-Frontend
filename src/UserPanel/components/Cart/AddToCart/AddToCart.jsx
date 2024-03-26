import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
function AddToCart() {
  const check = async () => {
    let data = await axios.get("http://localhost:6005/cart", {
      withCredentials: true,
    });
    console.log(data);
  };
  return (
    <div>
      <button
        className="p-2 bg-Purple text-white w-full rounded-sm"
        onClick={check}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default AddToCart;
