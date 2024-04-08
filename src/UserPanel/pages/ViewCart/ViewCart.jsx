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
    <div className="w-screen flex flex-col justify-center items-center my-6">
      {/* Headers for the Cart */}
      <table className="w-11/12 sm:w-4/5">
        <tr className="text-white bg-Purple">
          <th className="text-left py-2 w-3/5 pl-5">Product</th>
          <th className="text-center w-1/5">Quantity</th>
          <th className="text-right w-1/5 px-2">Subtotal</th>
        </tr>
        {/* Cart Items Display  */}
        {Cart && Cart.length > 0 ? <CartItems /> : <>No Items added</>}
      </table>

      {/* Cart Total Display */}
      <div className="flex flex-col w-11/12 sm:w-4/5 items-end">
        <div className="w-full sm:w-2/3 md:w-2/5 lg:w-1/3 border-t-2 border-t-Purple text-base font-medium py-2">
          <CartTotal title="Subtotal" price={Total} />
          <CartTotal title="Tax(2%)" price={Tax} />
          <CartTotal title="Total" price={OrderTotal} />
        </div>

        <button
          className="bg-Purple text-white px-3 py-1 sm:px-10 rounded-xl sm:mt-2 sm:font-semibold"
          onClick={checkout}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  ) : (
    <div className="flex h-screen justify-center items-center">
      You have no items in your cart
    </div>
  );
}

export default ViewCart;
