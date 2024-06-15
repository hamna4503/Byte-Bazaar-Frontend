import React from "react";
import { Link } from "react-router-dom";

function ItemCard(props) {
  return (
    <div
      className="flex items-center justify-center mt-5 mb-2 rounded-md border-2 border-slate-200 shadow-xl shadow-slate-400 
     bg-slate-100 transition transform hover:scale-105 p-1 w-[16rem] "
    >
      <main className="flex flex-col items-center justify-around w-full align-center">
        <div className="bg-slate-100 flex justify-center">
          {/* IF U WANT TO CHANGE THE SIZE OF THE IMAGE OF CARD CHANGE IN THE FOLLOWING <CLASSNAMES></CLASSNAMES> */}
          <img src={props.itemImg} className="w-60 h-56 object-center" />
        </div>
        <div className="w-full pl-2">
          <h1 className="w-full text-xl xs:text-lg sm:text-lg font-semibold pb-1 block h-[7vh]">
            {props.itemName}
          </h1>
          <h1 className="text-sm font-extralight pb-1">{props.itemCategory}</h1>
          <h1 className="text-base font-bold pb-1">Rs {props.itemPrice}</h1>

          {/* I WILL REPLACE THIS WITH A COMPONENT OF ADD TO CART HAVING THE NECESSARY FUNCTIONALITY THIS IS FOR SHOW RN */}
          <div>
            <Link to={`/bytebazaar/product/${props.id}`} key={props.id}>
              <button className="rounded-md bg-purple-900 hover:bg-blue-800 text-white p-2 w-full mb-2">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ItemCard;
