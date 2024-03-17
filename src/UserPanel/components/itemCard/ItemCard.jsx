import React from "react";

function ItemCard(props) {
  return (
    <div className="flex items-center w-screen justify-center mb-2 rounded-md border-2 border-slate-200 shadow-xl shadow-slate-400  bg-slate-100 mx-2  transition transform hover:scale-105 p-3 xs:w-2/3 sm:w-2/5 md:w-1/3 lg:w-1/4">
      <main className="flex flex-col items-center justify-around w-full align-center">
        <div className="w-full bg-slate-100 flex justify-center">
          {/* IF U WANT TO CHANGE THE SIZE OF THE IMAGE OF CARD CHANGE IN THE FOLLOWING <CLASSNAMES></CLASSNAMES> */}
          <img src={props.itemImg} className="w-5/6 h-5/6 object-center" />
        </div>
        <div className="w-full pl-2">
          <h1 className="text-xl xs:text-lg sm:text-lg font-semibold pb-1">
            {props.itemName}
          </h1>
          <h1 className="text-sm font-extralight pb-1">{props.itemCategory}</h1>
          <h1 className="text-base font-bold pb-1">Rs {props.itemPrice}</h1>

          {/* I WILL REPLACE THIS WITH A COMPONENT OF ADD TO CART HAVING THE NECESSARY FUNCTIONALITY THIS IS FOR SHOW RN */}
          <div>
            <button className="rounded-md bg-blue-600 hover:bg-blue-800 text-white p-2 w-full mb-2">
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ItemCard;
