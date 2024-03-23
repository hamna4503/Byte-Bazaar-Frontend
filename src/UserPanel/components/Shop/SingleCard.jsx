import React from 'react';
import { useParams } from 'react-router-dom';
import products from './Products';
import img1 from '../../assets/download.jpeg';
import bgimg from '../../assets/bg.jpg';
import StarRating from './Rating';
import ItemCard from '../ItemCard/itemCard/ItemCard';

const SingleProductPage = () => {
  const { id } = useParams(); 
  console.log({ id }); // Extract the id parameter from the route

  const productId = parseInt(id, 10); 
  const product = products.find((product) => product.id === productId);
  
  if (!product) {
    return <div>Product not found</div>;
  }


  const relatedProductIds = [2, 3, 4];

  return (
    <div className="flex flex-col justify-center items-center w-full sm bg-cover bg-center overflow-x-hidden"
      style={{ backgroundImage: `url(${bgimg})` }}>
      <h1 className="text-4xl font-bold mt-5 mb-4 py-4 text-gray-800 bg-yellow-300 w-auto px-5 text-center font-[poppins] ">
        {product.name}
      </h1>
      <hr style={{ color: 'blue', width: '50%' }} />
      <div className="bg-white border border-gray-200 rounded-lg p-3 flex  flex-wrap w-full max-w-5xl 
      shadow-lg shadow-black mb-5 font-[poppins]">
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
            <button className='bg-yellow-400 hover:bg-gray-300  duration-100 px-5 py-3 font-[poppins] 
                rounded-md text-white md:w-auto w-64'>Add to cart</button>
            <button className='bg-red-600 hover:bg-gray-300  duration-100 px-5 py-3  font-[poppins] 
                rounded-md text-white md:w-auto w-30'>Buy Now</button></div>

        </div>
      </div>
      
      {/* "People also buy" section */}
      <div className='w-3/4'>
      <h2 className="text-2xl text-center font-semibold mt-8 mb-4 bg-gray-400 px-4 py-2 w-full">People also buy</h2>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center px-4">
        {relatedProductIds.map((relatedProductId) => {
          const relatedProduct = products.find((product) => product.id === relatedProductId);
          return (
            <ItemCard
              key={relatedProduct.id}
              id={relatedProduct.id}
              itemImg={relatedProduct.image}
              itemName={relatedProduct.name}
              itemCategory={relatedProduct.category}
              itemPrice={relatedProduct.price}
            />
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
