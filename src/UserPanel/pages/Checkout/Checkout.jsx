import { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import UserNavbar from "../../components/Navbar/UserNavbar";
import CheckoutForm from "./CheckoutForm";
import { CartContext } from "../../contexts/CartContext";

export default function Checkout() {
  let { Cart } = useContext(CartContext);
  return (
    <>
      {Cart && Cart.length != 0 ? (
        <CheckoutForm />
      ) : (
        <div className="flex h-screen justify-center items-center">
          No Items have been added yet.
        </div>
      )}
    </>
  );
}
