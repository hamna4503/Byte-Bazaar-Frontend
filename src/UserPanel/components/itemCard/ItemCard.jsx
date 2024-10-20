import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLazyLoadImage from "../Shop/lazyLoadImage";
import LoadingScreen from "../Loading/LoadingScreen";

function ItemCard(props) {
  const { imgSrc } = useLazyLoadImage(props.itemImg);
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center p-1 mt-6 mb-2 transition transform border-2 rounded-md hover:scale-105">
      <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg ring-2 ring-Purple">
        <div className="relative">
          <div
            className="flex items-center justify-center w-full bg-gray-100"
            style={{ height: "300px", width: "320px" }}
          >
            {" "}
            {loading && <LoadingScreen />}
            <img
              src={imgSrc || props.itemImg}
              alt="Product Image"
              loading="lazy"
              className={`w-full h-full ${loading ? "hidden" : "block"}`}
              onLoad={handleImageLoad}
            />
          </div>
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-lg font-medium">{props.itemName}</h3>
          <p className="mb-6 overflow-hidden text-sm text-gray-600 line-clamp-2">
            {props.itemDescription}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">Rs {props.itemPrice}</span>
            <div>
              <Link to={`/bytebazaar/product/${props.id}`} key={props.id}>
                <button className="px-6 py-2 mr-2 text-white rounded bg-Purple hover:bg-gray-600">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
