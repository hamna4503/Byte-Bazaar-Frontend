import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "./Products";
// import img1 from '../../assets/download.jpeg';
import bgimg from "../../assets/images/Shop/bg.jpg";
import StarRating from "./Rating";
import RelatedProdCard from "./relatedprodcard";
import AddToCart from "../Cart/AddToCart/AddToCart";
import { CartContext } from "../../contexts/CartContext";

const SingleProductPage = () => {
  const { id } = useParams();
  const cart = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    cart.AddItem(product._id, quantity, product.price);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log(id);
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
        console.log(data.data);
        setProduct(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const inc_quantity = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };

  const dec_quantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center w-full sm bg-cover bg-center overflow-x-hidden"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <h1 className="text-4xl font-bold mt-5 mb-4 py-4 text-gray-800 bg-purple-200 w-auto px-5 text-center font-[poppins] ">
        {product.name}
      </h1>
      <hr style={{ color: "blue", width: "50%" }} />
      <div
        className="bg-white border border-gray-200 rounded-lg p-3 flex  flex-wrap w-full max-w-5xl 
      shadow-lg shadow-black mb-5 font-[poppins]"
      >
        <div className="w-1/2 pr-4">
          <img
            src={"http://localhost:6005" + product.image}
            alt="Product"
            className="w-full h-auto border border-purple-800  hover:border-4 hover:shadow-lg duration-100 mt-4"
          />
        </div>
        <div className="w-1/2 px-4">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mt-2 mb-2 text-gray-600">
              CATEGORY: {product.category}
            </h3>

            <div className="grid grid-cols-2 gap-9">
              <h3 className="text-xl font-semibold mt-2 mb-2 text-gray-600">
                BRAND: {product.brand}
              </h3>
              <StarRating rating={product.rating} />
            </div>
          </div>
          <hr />
          <div>
            <h1 className="font-bold">Description</h1>
            <p className="text-gray-700 mb-4 text-justify">
              {product.description}
            </p>
          </div>

          {/*Quatity For Hamna, for modification contact maham*/}
          <div className="flex justify-items items-center mt-4">
            <div className="ml-3 mr-3">Quantity</div>
            <div className="flex items-center mb-3 border rounded-lg border-purple-900 px-5 py-1">
              <button onClick={dec_quantity} className="text-lg font-bold">
                -
              </button>
              <div className="mx-3 text-lg font-bold">{quantity}</div>
              <button onClick={inc_quantity} className="text-lg font-bold">
                +
              </button>
            </div>
          </div>

          {/*Buttons*/}
          <div className="grid grid-cols-2 gap-9">
            <button
              className="bg-purple-800 hover:bg-gray-300  duration-100 px-5 py-3 font-[poppins] 
                rounded-md text-white md:w-auto w-64"
              onClick={addToCart}
            >
              Add to cart
            </button>
            {/* <AddToCart id={product._id} quantity={quantity} price={product.price}/> */}
            <button
              className="bg-red-600 hover:bg-gray-300  duration-100 px-5 py-3  font-[poppins] 
                rounded-md text-white md:w-auto w-30"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* "People also buy" section */}
      <div className="w-3/4">
        <h2 className="text-2xl text-center font-semibold mt-8 mb-4 bg-gray-400 px-4 py-2 w-full">
          People also buy
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center px-4">
          {/*{relatedProductIds.map((relatedProductId) => {

            const relatedProduct = products.find(
              (product) => product.id === relatedProductId
            );
            return (
              <Link to={`/product/${relatedProductIds[1]}`}>
                <RelatedProdCard
                  key={relatedProduct.id}
                  id={relatedProduct.id}
                  itemImg={relatedProduct.image}
                  itemName={relatedProduct.name}
                  itemCategory={relatedProduct.category}
                  itemPrice={relatedProduct.price}
                />
              </Link>

            );
          })}*/}
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
