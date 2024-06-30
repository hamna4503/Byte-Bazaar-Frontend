import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";

function ShoppingCartIcon() {
  let { Cart } = useContext(CartContext);
  // const [itemCount, setitemCount] = useState(Cart ? Cart.length : 0);
  return (
    <div className="relative">
      <AiOutlineShoppingCart className="text-4xl" />
      {Cart?.length > 0 ? (
        <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
          {Cart?.length}
        </div>
      ) : (
        <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
          0
        </div>
      )}
    </div>
  );
}

export default ShoppingCartIcon;
