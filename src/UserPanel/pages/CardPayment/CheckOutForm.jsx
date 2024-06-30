import {
  Elements,
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import { OrderContext } from "../../contexts/Order/OrderContext";
export default function CheckoutForm({ clientSecret, orderTotal }) {
  const stripe = useStripe();
  const elements = useElements();
  let { processOrder } = useContext(OrderContext);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // return_url: "http://localhost:5173/success",
      },
      redirect: "if_required",
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      try {
        let res = await processOrder();
        if (res.status == 200) {
          toast.success("Order Successfully placed", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            draggable: false,
            closeOnClick: false,
            theme: "colored",
            transition: toast.flip,
            onClose: () => {
              //   EmptyCart();
              window.location.href = "/bytebazaar/";
            },
          });
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
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-28 overflow-hidden">
      <div className="w-7/12 h-[60vh] flex justify-items-center items-center shadow-xl shadow-slate-900 rounded-xl bg-slate-100">
        <aside className="w-5/12 h-full bg-gradient-to-br from-Purple to-purple-950  text-white flex flex-col justify-center items-center">
          <p className="font-extrabold text-3xl p-4 r">Payable Amount</p>
          <p className="font-bold text-xl border px-4 border-white">
            Rs {orderTotal}
          </p>
          <p></p>
        </aside>
        <form onSubmit={handleSubmit} className="w-7/12 p-10">
          <PaymentElement />
          <button
            className="mt-6 w-full inline-flex items-center justify-center rounded bg-Purple py-2 px-3 text-md text-white transition duration-300 hover:bg-gray-800 focus:ring-2 focus:ring-purple-500"
            type="submit"
            disabled={!stripe}
          >
            Confirm Payment
          </button>
        </form>
      </div>
    </div>
  );
}
