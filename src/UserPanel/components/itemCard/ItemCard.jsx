import React from "react";
import { Link } from "react-router-dom";

function ItemCard(props) {
  // return (
  //   <div
  //     className="flex items-center justify-center mt-5 mb-2 rounded-md border-2 border-slate-200 shadow-xl shadow-slate-400
  //    bg-slate-100 transition transform hover:scale-105 p-1 w-[16rem] "
  //   >
  //     <main className="flex flex-col items-center justify-around w-full align-center">
  //       <div className="flex justify-center bg-slate-100">

  //         <img src={props.itemImg} className="object-center h-56 w-60" />
  //       </div>
  //       <div className="w-full pl-2">
  //         <h1 className="w-full text-xl xs:text-lg sm:text-lg font-semibold pb-1 block h-[7vh]">
  //           {props.itemName}
  //         </h1>
  //         <h1 className="pb-1 text-sm font-extralight">{props.itemCategory}</h1>
  //         <h1 className="pb-1 text-base font-bold">Rs {props.itemPrice}</h1>

  //         <div>
  //           <Link to={`/bytebazaar/product/${props.id}`} key={props.id}>
  //             <button className="w-full p-2 mb-2 text-white bg-purple-900 rounded-md hover:bg-blue-800">
  //               View Details
  //             </button>
  //           </Link>
  //         </div>
  //       </div>
  //     </main>
  //   </div>
  // );

  return (
    <div className="flex items-center justify-center p-1 mt-6 mb-2 transition transform border-2 rounded-md hover:scale-105">
      <div className="overflow-hidden bg-white rounded-lg shadow-lg max-w-80 ring-2 ring-Purple">
        <div className="relative">
          <img
            className="w-100 lazyload"
            src={props.itemImg}
            alt="Product Image"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-lg font-medium">{props.itemName}</h3>
          <p className="mb-6 overflow-hidden text-sm text-gray-600 line-clamp-2">
            {props.itemDescription}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">Rs {props.itemPrice}</span>

            <div>
              <Link to={`/bytebazaar/product/${props.id}`} key={props.id}>
                <button className="px-6 py-2 mr-2 text-white rounded bg-Purple hover:bg-gray-600">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
