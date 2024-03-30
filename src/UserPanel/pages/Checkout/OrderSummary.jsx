import React from "react";
import { IoMdPricetag } from "react-icons/io";

const products = [
  {
    id: 1,
    name: "Nano Titanium Hair Dryer",
    imageUrl:
      "https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    description: "Pdf, doc Kindle",
    price: "$260.00",
  },
  {
    id: 2,
    name: "Luisia H35",
    imageUrl:
      "https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhhaXIlMjBkcnllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description: "Hair Dryer",
    price: "$350.00",
  },
  {
    id: 1,
    name: "Nano Titanium Hair Dryer",
    imageUrl:
      "https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    description: "Pdf, doc Kindle",
    price: "$260.00",
  },
  {
    id: 2,
    name: "Luisia H35",
    imageUrl:
      "https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhhaXIlMjBkcnllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description: "Hair Dryer",
    price: "$350.00",
  },
  {
    id: 1,
    name: "Nano Titanium Hair Dryer",
    imageUrl:
      "https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    description: "Pdf, doc Kindle",
    price: "$260.00",
  },
  {
    id: 2,
    name: "Luisia H35",
    imageUrl:
      "https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhhaXIlMjBkcnllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description: "Hair Dryer",
    price: "$350.00",
  },
  {
    id: 1,
    name: "Nano Titanium Hair Dryer",
    imageUrl:
      "https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    description: "Pdf, doc Kindle",
    price: "$260.00",
  },
  {
    id: 2,
    name: "Luisia H35",
    imageUrl:
      "https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhhaXIlMjBkcnllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description: "Hair Dryer",
    price: "$350.00",
  },
];

export default function OrderSummary() {
  return (
    <div className="absolute h-[auto] w-full bg-Purple col-span-full flex flex-col py-8 px-8 sm:py-12 lg:col-span-4 lg:py-22 mb-18">
      <div className="relative">
        <h2 className="text-white bold text-2xl mb-8">Order Summary</h2>
        <div className="overflow-y-auto max-h-[300px]">
          <ul className="space-y-5">
            {products.map((product) => (
              <li key={product.id} className="flex justify-between">
                <div className="inline-flex">
                  <div className="flex-shrink-0 w-16 h-16 mr-4">
                    <img
                      className="w-full h-full object-contain"
                      src={product.imageUrl}
                      alt={product.id}
                    />
                  </div>
                  <div className="align-left">
                    <p className="text-base font-semibold text-white">
                      {product.name}
                    </p>
                    <p className="text-sm font-medium text-white text-opacity-80 mt-1">
                      <span className="inline-flex">
                        <IoMdPricetag
                          className="mr-2 text-white"
                          style={{ width: "22px", height: "22px" }}
                        />
                        {product.price}
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
            <span>Total price:</span>
            <span>$510.00</span>
          </p>
          <p className="flex justify-between text-sm font-medium text-white">
            <span>Vat: 10%</span>
            <span>$55.00</span>
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
