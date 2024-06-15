import React, { useContext, useEffect, useState } from "react";
import {
  Elements,
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { CartContext } from "../../contexts/CartContext";
import CheckoutForm from "./CheckOutForm";
import UserNavbar from "../../components/Navbar/UserNavbar";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function CardPayment() {
  const [clientSecret, setClientSecret] = useState(null);
  const { OrderTotal } = useContext(CartContext);
  useEffect(() => {
    const getClientSecretKey = async () => {
      try {
        let res = await axios.post(
          "http://localhost:6005/api/payment/",
          { OrderTotal:parseInt(OrderTotal * 100) },{ 
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_STRIPE_SECRET_KEY}`
            },
            withCredentials: true 
          }
        );
        setClientSecret(res.data.ClientSecret);
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };
    getClientSecretKey();
  }, [OrderTotal]);

  const options = {
    clientSecret: clientSecret,
  };

  return (
    clientSecret && (
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm clientSecret={clientSecret} orderTotal={OrderTotal} />
      </Elements>
    )
  );
}

export default CardPayment;
