import React, { useContext, useState } from "react";
import { CartContext } from "../../../contexts/CartContext";

function CartItems() {
  let { Cart, RemoveItem, AddItem, getCart, UpdateQuantity } =
    useContext(CartContext);
  return (
    <>
      {Cart && Cart.length > 0 ? (
        Cart.map((Item) => {
          return (
            <tr key={Item.productId._id} className="border-t-2 border-t-Purple">
              <td className="flex flex-wrap py-4 sm:w-full">
                {Item.productId.image && (
                  <img
                    src={"http://localhost:6005" + Item.productId.image}
                    alt="img"
                    className="object-contain w-24 h-20"
                  />
                )}
                <div className="flex flex-col items-start">
                  <p className="text-lg font-semibold">{Item.productId.name}</p>
                  <p>Price: Rs {Item.productId.price}</p>
                  <button
                    className="text-purple-900"
                    onClick={() =>
                      RemoveItem(
                        Item.productId._id,
                        Item.quantity * Item.productId.price
                      )
                    }
                  >
                    Remove
                  </button>
                </div>
              </td>

              <td>
                <div className="flex justify-center">
                  <div className="flex justify-center w-16 py-1 border border-purple-900 rounded-lg px-2s">
                    <button
                      className="text-lg font-bold"
                      disabled={Item.quantity <= 1 ? true : false}
                      onClick={(e) => {
                        e.preventDefault();
                        UpdateQuantity(
                          Item.productId._id,
                          Item.productId.price,
                          "decrement"
                        );
                        console.log("works");
                      }}
                    >
                      -
                    </button>
                    <div className="px-2 text-lg font-bold">
                      {Item.quantity}
                    </div>
                    <button
                      className="text-lg font-bold"
                      onClick={(e) => {
                        e.preventDefault();
                        UpdateQuantity(
                          Item.productId._id,
                          Item.productId.price,
                          "increment"
                        );
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </td>

              <td className="px-2 text-right">
                Rs {Item.quantity * Item.productId.price}
              </td>
            </tr>
          );
        })
      ) : (
        <div>No items added</div>
      )}
    </>
  );
}

export default CartItems;
