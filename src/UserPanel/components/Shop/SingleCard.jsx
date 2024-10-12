import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import bgimg from "../../assets/images/Shop/bg.jpg";
import StarRating from "./Rating";
import AddToCart from "../Cart/AddToCart/AddToCart";
import { CartContext } from "../../contexts/CartContext";
import { LoadingContext } from "../../contexts/Loading/Loadingcontext";
import LoadingScreen from "../Loading/LoadingScreen";

const SingleProductPage = () => {
  const { id } = useParams();
  const { Loading, setLoading } = useContext(LoadingContext);
  const cart = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const addToCart = (type = "addToCart") => {
    cart.AddItem(product._id, quantity, product.price, type);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:6005/api/get-prod-by-id`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ _id: id }),
          }
        );
        const data = await response.json();
        setProduct(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, setLoading]);

  const inc_quantity = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };

  const dec_quantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      {Loading && <LoadingScreen />}

      {product && (
        <div className="py-8">
          <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex flex-col -mx-4 md:flex-row">
              <div className="px-4 md:flex-1">
                <div className="h-[460px]  bg-gray-300 dark:bg-gray-700 mb-4 rounded-xl">
                  <img
                    className="object-cover w-full h-full rounded-xl lazyload"
                    src={`http://localhost:6005${product.image}`}
                    alt="Product Image"
                    loading="lazy"
                  />
                </div>
                <div className="flex mb-4 -mx-2">
                  <div className="w-1/2 px-2">
                    <button
                      className="w-full px-4 py-2 text-white rounded-full bg-Purple hover:bg-gray-700"
                      onClick={() => addToCart("addToCart")}
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="w-1/2 px-2">
                    <button
                      className="w-full px-4 py-2 text-white rounded-full bg-Purple hover:bg-gray-700"
                      onClick={() => addToCart("buyNow")}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="px-4 md:flex-1">
                <h2 className="mb-6 text-4xl font-bold text-Purple">
                  {product.name}
                </h2>
                <div className="flex mb-4">
                  <span className="mr-2 text-xl font-bold text-Purple">
                    Category:
                  </span>
                  <span className="text-xl text-black">{product.category}</span>
                </div>

                <div className="flex mb-4">
                  <span className="mr-2 text-xl font-bold text-Purple">
                    Brand:
                  </span>
                  <span className="text-xl text-black">{product.brand}</span>
                </div>

                <div className="flex mb-4">
                  <span className="mr-2 text-xl font-bold text-Purple">
                    Price:
                  </span>
                  <span className="text-xl text-black">Rs {product.price}</span>
                </div>

                <div className="flex mb-4">
                  <span className="mr-2 text-xl font-bold text-Purple">
                    Availability:
                  </span>
                  <span className="text-xl text-black">In Stock</span>
                </div>

                <div className="flex mb-4 align-center">
                  <span className="mr-2 text-xl font-bold text-Purple">
                    Ratings:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    <StarRating rating={product.rating} />
                  </span>
                </div>

                <div className="mb-6">
                  <span className="text-xl font-bold text-Purple">
                    Product Description:
                  </span>
                  <p className="mt-2 text-lg text-black">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center mb-4">
                  <div className="mr-4 text-xl font-bold text-Purple">
                    Quantity:
                  </div>
                  <div className="flex items-center px-3 py-1 border rounded-lg border-Purple">
                    <button
                      onClick={dec_quantity}
                      className="text-lg font-bold outline-none text-Purple focus:outline-none"
                    >
                      -
                    </button>
                    <div className="mx-3 text-lg font-bold">{quantity}</div>
                    <button
                      onClick={inc_quantity}
                      className="text-lg font-bold outline-none text-Purple focus:outline-none"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* {product && (
        <div
          className="flex flex-col items-center w-full overflow-hidden bg-center bg-cover"
          style={{ backgroundImage: `url(${bgimg})` }}
        >
          <h1 className="w-auto px-5 py-4 mt-5 mb-4 text-4xl font-bold text-center text-gray-800 bg-purple-200 font-poppins">
            {product.name}
          </h1>
          <hr className="w-16 my-2 border-blue-500" />

          <div className="flex flex-wrap w-full max-w-5xl p-3 mb-5 bg-white border border-gray-200 rounded-lg shadow-lg font-poppins">
            <div className="w-full pr-4 sm:w-1/2">
              <img
                src={`http://localhost:6005${product.image}`}
                alt="Product"
                className="w-full h-auto mt-4 transition duration-100 border border-purple-800 hover:border-4 hover:shadow-lg"
              />
            </div>

            <div className="w-full px-4 sm:w-1/2">
              <div className="flex flex-col">
                <h3 className="mt-2 mb-4 text-xl font-semibold text-gray-600">
                  CATEGORY: {product.category}
                </h3>

                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-600">
                    BRAND: {product.brand}
                  </h3>
                  <StarRating rating={product.rating} />
                </div>
              </div>

              <hr className="my-4" />

              <div>
                <h1 className="mb-2 font-bold">Description</h1>
                <p className="mb-4 leading-relaxed text-gray-700">
                  {product.description}
                </p>
              </div>

              
              <div className="flex items-center mb-4">
                <div className="mr-3">Quantity:</div>
                <div className="flex items-center px-3 py-1 border border-purple-900 rounded-lg">
                  <button
                    onClick={dec_quantity}
                    className="text-lg font-bold outline-none focus:outline-none"
                  >
                    -
                  </button>
                  <div className="mx-3 text-lg font-bold">{quantity}</div>
                  <button
                    onClick={inc_quantity}
                    className="text-lg font-bold outline-none focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>

              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <button
                  className="w-full py-3 text-white transition duration-100 bg-purple-800 rounded-md hover:bg-gray-300 font-poppins"
                  onClick={() => addToCart("addToCart")}
                >
                  Add to Cart
                </button>
                <button
                  className="w-full py-3 text-white transition duration-100 bg-red-600 rounded-md hover:bg-gray-300 font-poppins"
                  onClick={() => addToCart("buyNow")}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default SingleProductPage;
