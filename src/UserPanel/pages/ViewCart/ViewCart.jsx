import React, { useContext, useEffect, useState } from "react";
import { CartData } from "./tempCartData";
import CartTotal from "../../components/Cart/CartTotal/CartTotal";
import CartItems from "../../components/Cart/CartItems/CartItems";
import img from "../../assets/images/items/controllers/xboxController.png";
import { CartContext } from "../../contexts/CartContext";

function ViewCart() {
  const { Cart, Total, Tax, OrderTotal } = useContext(CartContext);
  // const Tax = Total * 0.02;
  // const finalTotal = Total + Tax;

  const checkout = () => {
    //CODE LOGIC HERE
    window.location.href = "/bytebazaar/checkout";
  };
  return Cart.length != 0 ? (
    <div className="flex flex-col items-center justify-center w-screen my-6">
      {/* Headers for the Cart */}
      <table className="w-11/12 sm:w-4/5">
        <tr className="text-white bg-Purple">
          <th className="w-3/5 py-2 pl-5 text-left">Product</th>
          <th className="w-1/5 text-center">Quantity</th>
          <th className="w-1/5 px-2 text-right">Subtotal</th>
        </tr>
        {/* Cart Items Display  */}
        {Cart && Cart.length > 0 ? <CartItems /> : <>No Items added</>}
      </table>

      {/* Cart Total Display */}
      <div className="flex flex-col items-end w-11/12 sm:w-4/5">
        <div className="w-full py-2 text-base font-medium border-t-2 sm:w-2/3 md:w-2/5 lg:w-1/3 border-t-Purple">
          <CartTotal title="Subtotal" price={Total.toFixed(2)} />
          <CartTotal title="Tax(2%)" price={Tax.toFixed(2)} />
          <CartTotal title="Total" price={OrderTotal.toFixed(2)} />
        </div>

        <button
          className="px-3 py-1 text-white bg-Purple sm:px-10 rounded-xl sm:mt-2 sm:font-semibold"
          onClick={checkout}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen">
      You have no items in your cart
    </div>
  );
}

export default ViewCart;
