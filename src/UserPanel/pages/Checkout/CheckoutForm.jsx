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
          <div className="col-span-full py-6 px-16 sm:py-12 lg:col-span-6 lg:py-24">
            <div className="mx-auto w-full px-8 py-8 border rounded shadow">
              <form action="" className="w-full flex flex-col space-y-6">
                <ShippingInfo />

                <div className="flex flex-col gap-6 px-8">
                  <div className="rounded-lg shadow-md bg-Purple py-5 px-6">
                    <p className="text-lg font-semibold text-white pb-3">
                      Please Select a Payment Method
                    </p>

                    <div className="flex flex-col sm:flex-row text-white justify-between pr-10">
                      <label className="inline-flex">
                        <input
                          type="radio"
                          className="form-radio"
                          value="online"
                          checked={paymentMethod === "online"}
                          onChange={handlePaymentMethodChange}
                        />
                        <span className="ml-2 text-md">Online Payment</span>
                      </label>

                      <label className="inline-flex">
                        <input
                          type="radio"
                          className="form-radio"
                          value="cashOnDelivery"
                          checked={paymentMethod === "cashOnDelivery"}
                          onChange={handlePaymentMethodChange}
                        />
                        <span className="ml-2 text-md">Cash On Delivery</span>
                      </label>
                    </div>
                  </div>
                </div>

                {!isCashOnDelivery && (
                  <PaymentDetails className="rounded-lg shadow-md bg-gray-100" />
                )}

                <button
                  type="submit"
                  className="w-max inline-flex items-center justify-center rounded bg-Purple py-1 px-3 text-md text-white transition duration-300 hover:bg-gray-800 focus:ring-2 focus:ring-purple-500"
                >
                  Place Order
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative col-span-full flex flex-col pr-16 px-4 sm:py-12 lg:col-span-4 lg:py-24">
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
