import React from 'react';
import { useParams } from 'react-router-dom';
import products from './Products';
import img1 from '../../assets/download.jpeg';
import bgimg from '../../assets/bg.jpg';
import StarRating from './Rating';

const SingleProductPage = () => {
  const { id } = useParams(); // Extract the id parameter from the route
  const product = products.find((product) => product.id.toString() === id); // Find the product with the matching id
  
  if (!product) {
    return <div>Product not found</div>; // Display a message if the product is not found
  }

  return (
    <div className="flex flex-col justify-center items-center w-full bg-cover bg-center flex-wrap"
      style={{ backgroundImage: `url(${bgimg})` }}>
      <h1 className="text-4xl font-bold mt-5 mb-4 py-4 text-gray-800 bg-yellow-300 w-64 text-center">
        {product.name}
      </h1>
      <hr style={{ color: 'blue', width: '50%' }} />
      <div className="bg-white border border-gray-200 rounded-lg p-3 flex  flex-wrap w-full max-w-5xl shadow-lg shadow-black mb-5">
        <div className="w-1/2 pr-4">
          <img
            src={product.image}
            alt="Product"
            className="w-full h-auto border border-yellow-300  hover:border-4 hover:shadow-lg duration-100"
          />
        </div>
        <div className="w-1/2 px-4">
          <div className='flex flex-col'>
            <h3 className="text-xl font-semibold mt-2 mb-2 text-gray-600">
              CATEGORY: {product.category}
            </h3>

            <div className='grid grid-cols-2 gap-9'>
              <h3 className="text-xl font-semibold mt-2 mb-2 text-gray-600">BRAND: {product.brand}</h3>
              <StarRating rating={product.rating} />
            </div>

          </div>
          <hr />
          <div>
            <h1 className='font-bold'>Description</h1>
            <p className="text-gray-700 mb-4 text-justify">{product.description}</p></div>
          <div className='grid grid-cols-2 gap-9'>
            <button className='bg-yellow-400 hover:bg-gray-300  duration-100 px-5  font-[poppins] 
                rounded-md text-white md:w-auto w-64'>Add to cart</button>
            <button className='bg-red-600 hover:bg-gray-300  duration-100 px-5  font-[poppins] 
                rounded-md text-white md:w-auto w-30'>Buy Now</button></div>

        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
