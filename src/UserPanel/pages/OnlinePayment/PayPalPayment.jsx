import React, { useContext } from "react";
import PayPalButton from "../../components/PayPal Button/PayPalButton";
import { CartContext } from "../../contexts/CartContext";

function OnlinePayment() {
  let { OrderTotal } = useContext(CartContext);
  return (
    <div className="flex flex-col justify-center items-center mt-20 overflow-hidden p-5 rounded-xl">
      <div className="flex justify-items-center items-center ">
        <div className="m-auto flex flex-col justify-center bg-slate-100 border-2 border-black px-5 py-8 rounded-md">
          <h1 className="text-2xl font-bold pb-5">
            Total Payable Amount: Rs {OrderTotal}
          </h1>
          <div>
            <PayPalButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlinePayment;
