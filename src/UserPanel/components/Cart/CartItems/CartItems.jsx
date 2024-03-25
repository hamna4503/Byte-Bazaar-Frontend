import React from "react";

function CartItems({ Cart, img }) {
  return (
    <>
      {Cart.map((Item) => {
        return (
          <tr key={Item.id} className="border-t-2 border-t-Purple">
            <td className="flex flex-wrap py-4 sm:w-full">
              <img src={img} className="w-24 h-20 object-contain" />
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
    </>
  );
}

export default CartItems;
