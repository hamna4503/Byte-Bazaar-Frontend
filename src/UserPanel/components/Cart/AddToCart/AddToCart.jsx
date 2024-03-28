import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from "../../../contexts/UserContext";

function AddToCart({ id, quantity }) {
  const { name } = useContext(UserContext);
  const AddItemToCart = async () => {
    console.log(name);
    try {
      let data = await axios.delete(
        "http://localhost:6005/cart/6601ca7b2195544e447c9c05",
        {
          withCredentials: true,
        }
      );
      console.log(data);
    } catch (err) {
      if (
        err.response &&
        err.response.status >= 400 &&
        err.response.status <= 500
      ) {
        // window.location.href = "/bytebazaar/login";
        console.log(err);
      }
    }
  };
  return (
    <div>
      <button
        className="p-2 bg-Purple text-white w-full rounded-sm"
        onClick={AddItemToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default AddToCart;
