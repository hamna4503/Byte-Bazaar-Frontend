import React from "react";
import { Link } from "react-router-dom";

function RelatedProdCard(props) {
  return (
    <div className="flex items-center  justify-center mt-5 mb-2 rounded-md border-2 shadow-lg-black
     bg-slate-100 mx-2  transition transform hover:scale-105 p-3 w-full sm:w-3/4 md:w-4/5 h-auto ">
      <main className="flex flex-col items-center justify-around w-full align-center">
        <div className=" bg-slate-100 flex justify-center">
          
          <img src={props.itemImg} className="w-5/6 h-5/6 object-center" />
        </div>
        <div className="w-full pl-2">
          <h1 className="w-full text-xl xs:text-lg sm:text-lg font-semibold pb-1">
            {props.itemName}
          </h1>
          <h1 className="text-sm font-extralight pb-1">{props.itemCategory}</h1>
          <h1 className="text-base font-bold pb-1">Rs {props.itemPrice}</h1>

          
          <div>
             <Link to={`/relatedproduct/${props.id}`} key={props.id}>
              <button className="rounded-md bg-blue-600 hover:bg-blue-800 text-white p-2 w-full mb-2">
                Add to Cart
              </button>
            </Link> 
          </div>
        </div>
      </main>
    </div>
  );
}

export default RelatedProdCard;
