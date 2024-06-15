import {
  Elements,
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";

export default function CheckoutForm({ clientSecret, orderTotal }) {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      alert("SUCCESS");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-28 overflow-hidden hover:translate-x-1">
      <div className="w-7/12 h-[60vh] flex justify-items-center items-center border border-blue-200">
        <aside className="w-5/12 h-full bg-Purple text-white flex flex-col justify-center items-center">
          <p className="font-extrabold text-3xl p-4">Payable Amount</p>
          <p className="font-bold text-xl">Rs {orderTotal}</p>
          <p></p>
        </aside>
        <form onSubmit={handleSubmit} className="w-7/12 p-10">
          <PaymentElement />
          <button type="submit" disabled={!stripe}>
            Confirm Payment
          </button>
        </form>
      </div>
    </div>
  );
}
