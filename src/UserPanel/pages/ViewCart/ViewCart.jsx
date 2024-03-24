import React, { useEffect, useState } from "react";
import { CartData } from "./tempCartData";
import img from "../../assets/images/items/controllers/xboxController.png";
function ViewCart() {
  const [Cart, setCart] = useState(CartData);
  return (
    <div className="w-screen flex flex-col justify-center items-center mt-6">
      <table className="w-2/3">
        <tr className="text-white bg-Purple">
          <th className="text-left py-3 w-3/5 px-5">Product</th>
          <th className="text-center w-1/5">Quantity</th>
          <th className="text-right w-1/5 px-2">Subtotal</th>
        </tr>

        {Cart.map((Item) => {
          return (
            <tr key={Item.id} className="border-t-2 border-t-Purple">
              <td className="flex py-4 w-3/5">
                <img src={img} className="w-24 h-20" />
                <div className="flex flex-col items-start">
                  <p className="text-lg font-semibold">{Item.name}</p>
                  <p>Price: Rs {Item.price}</p>
                  <button className="text-purple-900">Remove</button>
                </div>
              </td>
              <td className="text-center">{Item.quantity}</td>
              <td className="text-right px-2">Rs {Item.subtotal}</td>
            </tr>
          );
        })}
      </table>
      <div className="flex flex-col w-2/3 items-end">
        <div className="w-1/3 border-t-2 border-t-Purple text-base font-medium py-2">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>Rs 10000</p>
          </div>
          <div className="flex justify-between">
            <p>Tax</p>
            <p>Rs 120</p>
          </div>
          <div className="flex justify-between">
            <p>Total</p>
            <p>Rs 12000</p>
          </div>
        </div>
        <button className="bg-Purple text-white py-1 px-12 rounded-3xl mt-2 font-semibold">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default ViewCart;
