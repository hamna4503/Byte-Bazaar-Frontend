// import React, { useState } from "react";
// import OrderSummary from "./OrderSummary";
// import PaymentDetails from "./PaymentDetails";
// import ShippingInfo from "./ShippingInfo";

// export default function CheckoutForm() {
//   const [paymentMethod, setPaymentMethod] = useState("online");

//   const handlePaymentMethodChange = (event) => {
//     setPaymentMethod(event.target.value);
//   };

//   const isCashOnDelivery = paymentMethod === "cashOnDelivery";

//   return (
//     <>
//         <div>
//           <ShippingInfo />
//           <div className="flex items-center justify-left gap-12 p-8">
//             <h2 className="text-black text-2xl font-bold">PAYMENT METHOD</h2>
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 className="form-radio"
//                 value="online"
//                 checked={paymentMethod === "online"}
//                 onChange={handlePaymentMethodChange}
//               />
//               <span className="ml-2 text-md">ONLINE PAYMENT</span>
//             </label>
//             <label className="inline-flex items-center ml-4">
//               <input
//                 type="radio"
//                 className="form-radio"
//                 value="cashOnDelivery"
//                 checked={paymentMethod === "cashOnDelivery"}
//                 onChange={handlePaymentMethodChange}
//               />
//               <span className="ml-2 text-md">CASH ON DELIVERY</span>
//             </label>
//           </div>
//           {!isCashOnDelivery && <PaymentDetails />}
//         </div>

//     </>
//   );
// }

import React, { useState } from "react";
import OrderSummary from "./OrderSummary";
import PaymentDetails from "./PaymentDetails";
import ShippingInfo from "./ShippingInfo";

export default function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState("online");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const isCashOnDelivery = paymentMethod === "cashOnDelivery";

  return (
    <>
      <div className="relative mx-auto w-full bg-white">
        <div className="grid min-h-screen grid-cols-10">
          <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
            <div className="mx-auto w-full px-6">
              <form action="" className="w-full flex flex-col space-y-4">
                <ShippingInfo />
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-12 px-10 py-8">
                  <h2 className="text-Purple font-bold text-2xl">
                    PAYMENT METHOD
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        value="online"
                        checked={paymentMethod === "online"}
                        onChange={handlePaymentMethodChange}
                      />
                      <span className="ml-2 text-md">ONLINE PAYMENT</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        value="cashOnDelivery"
                        checked={paymentMethod === "cashOnDelivery"}
                        onChange={handlePaymentMethodChange}
                      />
                      <span className="ml-2 text-md">CASH ON DELIVERY</span>
                    </label>
                  </div>
                </div>
                {!isCashOnDelivery && <PaymentDetails />}
              </form>
              <button
                type="submit"
                className="w-full mt-8 inline-flex w-full items-center justify-center rounded bg-Purple py-2.5 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
              >
                Place Order
              </button>
            </div>
          </div>
          <div className="relative col-span-full flex flex-col py-6 px-4 sm:py-12 lg:col-span-4 lg:py-24">
            <div className="relative">
              <ul className="space-y-5">
                <OrderSummary />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
