import React, { useContext } from "react";
import { IoMdPricetag } from "react-icons/io";
import { CartContext } from "../../contexts/CartContext";

export default function OrderSummary() {
  let { Total, Cart, Tax, OrderTotal } = useContext(CartContext);
  return (
    <div className="relative h-[auto] w-full bg-Purple col-span-full flex flex-col py-8 px-8 sm:py-12 lg:col-span-4 lg:py-22">
      <div className="relative">
        <h2 className="text-white bold text-2xl mb-8">Order Summary</h2>
        <div className="overflow-y-auto max-h-[390px]">
          <ul className="space-y-5">
            {console.log(Cart)}
            {Cart &&
              Cart.length != 0 &&
              Cart.map((item) => (
                <li key={item.productId._id} className="flex justify-between">
                  <div className="inline-flex">
                    <div className="flex-shrink-0 w-16 h-16 mr-4">
                      <img
                        className="w-full h-full object-contain"
                        src={"http://localhost:6005" + item.productId.image}
                        alt={item.productId.name}
                      />
                    </div>
                    <div className="align-left">
                      <p className="text-base font-semibold text-white">
                        {item.productId.name}
                      </p>
                      <p className="text-sm font-medium text-white text-opacity-80 mt-1">
                        <span className="inline-flex">
                          <IoMdPricetag
                            className="mr-2 text-white"
                            style={{ width: "22px", height: "22px" }}
                          />
                          {item.productId.price}
                        </span>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className="my-5 h-0.5 w-full bg-white bg-opacity-30" />
        <div className="space-y-2">
          <p className="flex justify-between text-lg font-bold text-white">
            <span>Sub Total:</span>
            <span>Rs {Total}</span>
          </p>
          <p className="flex justify-between text-sm font-medium text-white">
            <span>VAT: 2%</span>
            <span>Rs{Tax}</span>
          </p>
          <p className="flex justify-between text-sm font-medium text-white">
            <span>Total Price</span>
            <span>Rs{OrderTotal}</span>
          </p>
        </div>
      </div>

      <div className="relative mt-14 mb-4 text-white">
        <h3 className="mb-2 text-md font-bold">Support</h3>
        <p className="text-sm">(+92) 3133333</p>
        <p className="mt-1 text-sm">bytebazaar.helpdesk@gmail.com</p>
      </div>
    </div>
  );
}
