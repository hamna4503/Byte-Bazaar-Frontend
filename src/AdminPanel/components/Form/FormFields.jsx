import { AddProducts } from "../../pages/InventoryManagement/AddProducts";
import { EditProducts } from "../../pages/InventoryManagement/EditProducts";
import { useState } from "react";

export default function FormFields({ isEditForm, _id }) {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    description: "",
    rating: "",
    brand: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await (isEditForm
        ? EditProducts(productData, _id)
        : AddProducts(productData));

      // Reset the form after successful submission
      setProductData({
        name: "",
        price: "",
        image: "",
        category: "",
        description: "",
        rating: "",
        brand: "",
      });
    } catch (error) {
      console.error(
        `Error ${isEditForm ? "Editing" : "Adding"} product: ${error}`
      );
    }
  };

  return (
    <>
      <form className="flex flex-wrap gap-4 p-3" onSubmit={handleSubmit}>
        <input
          className="mb-2 w-full py-2 px-3 text-black text-sm shadow appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Product Name"
          name="name"
          type="text"
          value={productData.name}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <input
          className="mb-2 w-full py-2 px-3 text-black text-sm shadow appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Product Price"
          name="price"
          type="number"
          value={productData.price}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <input
          className="mb-2 w-full py-2 px-3 text-black text-sm shadow appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Product Image"
          name="image"
          type="text"
          value={productData.image}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <input
          className="mb-2 w-full py-2 px-3 text-black text-sm shadow appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Product Category"
          name="category"
          type="text"
          value={productData.category}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <input
          className="mb-2 w-full py-2 px-3 text-black text-sm shadow appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Product Brand"
          name="brand"
          type="text"
          value={productData.brand}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <input
          className="mb-2 w-full py-2 px-3 text-black text-sm shadow appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Product Ratings"
          name="rating"
          type="number"
          value={productData.rating}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <textarea
          className="mb-2 w-full py-2 px-3 text-black text-sm shadow appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Product Description"
          rows={4}
          name="description"
          type="text"
          value={productData.description}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        {!isEditForm ? (
          <button
            type="submit"
            className="w-full rounded-lg bg-Purple px-5 py-2 font-medium text-white"
          >
            Add Product
          </button>
        ) : (
          <button
            type="submit"
            className="w-full rounded-lg bg-Purple px-5 py-2 font-medium text-white"
          >
            Edit Product
          </button>
        )}
      </form>
    </>
  );
}
