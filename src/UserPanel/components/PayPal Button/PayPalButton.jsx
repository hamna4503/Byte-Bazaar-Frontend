import React, { useContext } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { CartContext } from "../../contexts/CartContext";
import { OrderContext } from "../../contexts/Order/OrderContext";
import { useNavigate } from "react-router-dom";

function PayPalButton() {
  const { OrderTotal } = useContext(CartContext);
  const { EmptyCart } = useContext(CartContext);
  const Navigate = useNavigate();
  const { processOrder } = useContext(OrderContext);

  if (OrderTotal <= 0) {
    return null; // Don't render anything if OrderTotal is 0 or less
  }

  return (
    <PayPalScriptProvider
      options={{ "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID }}
    >
      {/* <h1>Pay with PayPal</h1>
      <p>Order Total: {OrderTotal}</p> */}
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: OrderTotal, // Set the transaction amount
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          try {
            let res = await processOrder();
            return actions.order.capture().then((details) => {
              alert(
                `Transaction completed by ${details.payer.name.given_name}`
              );
              if (res.status === 200) {
                EmptyCart();
                Navigate("/");
              }
            });
          } catch (err) {
            console.error(err);
          }
        }}
      />
    </PayPalScriptProvider>
  );
}

export default PayPalButton;
