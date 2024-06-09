import React, { useContext, useEffect, useState } from "react";
import OrderSummary from "./OrderSummary";
import PaymentDetails from "./PaymentDetails";
import ShippingInfo from "./ShippingInfo";
import ProceedToPaymentButton from "../../components/OnlinePayment/ProceedToPaymentButton";
import PlaceOrderButton from "../../components/PlaceOrder/PlaceOrderButton";
import { OrderContext } from "../../contexts/Order/OrderContext";
import { CartContext } from "../../contexts/CartContext";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function CheckoutForm() {
  let { OrderTotal, EmptyCart } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("online");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const isCashOnDelivery = paymentMethod === "cashOnDelivery";
  let { OrderDetails, setOrderDetails, processOrder } =
    useContext(OrderContext);

  useEffect(() => {
    setOrderDetails({ ...OrderDetails, paymentMethod: paymentMethod });
  }, [paymentMethod]);

  useEffect(() => {
    setOrderDetails({ ...OrderDetails, ["orderTotal"]: OrderTotal });
  }, [OrderTotal]);

  const checkoutOrder = async (e) => {
    e.preventDefault();
    if (paymentMethod == "cashOnDelivery") {
      try {
        let res = await processOrder();
        if (res.status == 201) {
          toast.success("Order Successfully placed", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            draggable: false,
            closeOnClick: false,
            theme: "colored",
            transition: toast.flip,
          });
          EmptyCart();
          window.location.href = "/";
        }
      } catch (e) {
        toast.error(e.response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          draggable: false,
          closeOnClick: false,
          theme: "colored",
          transition: toast.flip,
        });
      }
    } else {
      window.location.href = "/onlinePayment";
    }
  };
  return (
    <>
      <div className="relative mx-auto w-full bg-white">
        <div className="grid h-auto grid-cols-10">
          <div className="col-span-full py-2 px-16 sm:py-12 lg:col-span-6 lg:py-24">
            <div className="mx-auto w-full px-8 py-8 border rounded shadow">
              <form
                onSubmit={(e) => checkoutOrder(e)}
                className="w-full flex flex-col space-y-6"
              >
                <ShippingInfo />

                <div className="flex flex-col gap-6 px-8">
                  <div className="py-5 px-6">
                    <h2 className="text-2xl text-center text-black mb-8">
                      Payment Method
                    </h2>

                    <div className="flex flex-col sm:flex-row text-black rounded shadow justify-between py-4 px-10">
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

                <div className="px-10 py-4">
                  {paymentMethod == "online" ? (
                    <ProceedToPaymentButton />
                  ) : (
                    <PlaceOrderButton />
                  )}
                </div>
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
