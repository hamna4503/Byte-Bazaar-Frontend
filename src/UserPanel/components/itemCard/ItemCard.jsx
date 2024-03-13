import React from "react";

function ItemCard(props) {
  return (
    <div className="flex items-center w-screen justify-center mb-2 drop-shadow-2xl transition transform hover:scale-105 p-3 sm:w-2/5 md:w-1/3 lg:w-1/4">
      <main className="flex flex-col items-center justify-around w-full bg-slate-100 align-center">
        <div className="w-full bg-slate-100">
          <img src={props.itemImg} className="w-full h-full" />
        </div>
        <div className="w-full pl-2">
          <h1 className="text-xl sm:text-lg font-semibold pb-1">
            {props.itemName}
          </h1>
          <h1 className="text-sm font-extralight pb-1">{props.itemCategory}</h1>
          <h1 className="text-base font-bold pb-1">Rs {props.itemPrice}</h1>
          <div>
            <button className="rounded-md bg-blue-600 hover:bg-blue-800 text-white p-2 w-full mb-2">
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
