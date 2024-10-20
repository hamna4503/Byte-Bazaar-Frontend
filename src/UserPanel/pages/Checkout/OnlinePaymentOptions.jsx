import React from "react";
import { useNavigate } from "react-router-dom";

function OnlinePaymentOptions({ setOption }) {
  const redirectToPayment = (e, route) => {
    e.preventDefault();
    window.location.href = route;
  };
  return (
    <div>
      <h2 className="text-2xl text-center text-black mb-5">
        Select Method of Payment
      </h2>
      <div className="flex justify-evenly flex-wrap">
        <button
          type="submit"
          onClick={(e) => {
            // e.preventDefault();
            setOption("PayPal");
          }}
          className="bg-blue-900 py-2 px-10 text-white rounded-md hover:bg-blue-800 text-sm text-semibold"
        >
          Pay with <span className="font-bold italic text-xl">PAYPAL</span>
        </button>
        <button
          type="submit"
          onClick={(e) => {
            // e.preventDefault();
            setOption("Stripe");
          }}
          className="bg-yellow-500 py-2 px-10 text-white rounded-md hover:bg-yellow-400 text-sm text-semibold"
        >
          Pay with <span className="font-bold italic text-xl">STRIPE</span>
        </button>
      </div>
    </div>
  );
}

export default OnlinePaymentOptions;
