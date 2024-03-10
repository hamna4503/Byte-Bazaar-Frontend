import React from "react";

const theme = "bg-black";
function ItemCard(props) {
  return (
    <div className="flex items-center w-screen justify-center p-3 ">
      <main className="flex flex-col items-center justify-around w-full bg-slate-100 align-center">
        <div className="w-full bg-slate-100">
          <img src={props.itemImg} className="w-full h-full" />
        </div>
        <div className="w-full pl-2">
          <h1 className="text-xl font-semibold pb-1">{props.itemName}</h1>
          <h1 className="text-sm font-extralight pb-1">{props.itemCategory}</h1>
          <h1 className="text-base font-bold pb-1">Rs {props.itemPrice}</h1>
          <div>
            <button className="rounded-md bg-blue-600 text-white p-3 w-full">
              Add to Cart
            </button>
          </div>
          {/* Add to card button */}
        </div>
      </main>
    </div>
  );
}

export default ItemCard;
