import React from "react";

function CartTotal({ title, price }) {
  return (
    <div className="flex justify-between">
      <p>{title}</p>
      <p>Rs {price}</p>
    </div>
  );
}

export default CartTotal;
