import { AddProducts } from "../../pages/InventoryManagement/AddProducts";
import { EditProducts } from "../../pages/InventoryManagement/EditProducts";
import { useState } from "react";

export default function FormFields({ isEditForm, _id, prodId }) {
  const [file, setFile] = useState(null);

  const [productData, setProductData] = useState(() => ({
    ...(isEditForm ? {} : { id: "" }),
    name: "",
    price: "",
    image: null,
    category: "",
    description: "",
    rating: "",
    brand: "",
  }));

  const handleFileChange = async (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
        const base64File = reader.result.split(",")[1];
        setProductData({ ...productData, image: base64File });
      };
      setFile(selectedFile);
    } else {
      setFile(null);
      setProductData({ ...productData, image: "" });
    }
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await (isEditForm
        ? EditProducts(_id, prodId, productData)
        : AddProducts({ ...productData }));

      setProductData({
        ...(isEditForm ? {} : { id: "" }),
        name: "",
        price: "",
        image: null,
        category: "",
        description: "",
        rating: "",
        brand: "",
      });
    } catch (error) {
      console.error(
        `Error ${isEditForm ? "Editing" : "Adding"} product:`,
        error
      );
    }
  };

  return (
    <>
      <form className="flex flex-wrap gap-4 p-3" onSubmit={handleSubmit}>
        {!isEditForm && (
          <input
            className="w-full px-3 py-2 mb-2 text-sm text-black shadow appearance-none focus:outline-none focus:shadow-outline"
            placeholder="Product Id"
            name="id"
            type="number"
            value={productData.id}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        )}

        <input
          className="w-full px-3 py-2 mb-2 text-sm text-black shadow appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Product Name"
          name="name"
          type="text"
          value={productData.name}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <input
          className="w-full px-3 py-2 mb-2 text-sm text-black shadow appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Product Price"
          name="price"
          type="number"
          value={productData.price}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <input
          className="w-full px-3 py-2 mb-2 text-sm text-gray-400 shadow appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Product Image"
          name="image"
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          autoComplete="off"
          required
        />
        <input
          className="w-full px-3 py-2 mb-2 text-sm text-black shadow appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Product Category"
          name="category"
          type="text"
          value={productData.category}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <input
          className="w-full px-3 py-2 mb-2 text-sm text-black shadow appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Product Brand"
          name="brand"
          type="text"
          value={productData.brand}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <input
          className="w-full px-3 py-2 mb-2 text-sm text-black shadow appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Product Ratings"
          name="rating"
          type="number"
          value={productData.rating}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <textarea
          className="w-full px-3 py-2 mb-2 text-sm text-black shadow appearance-none focus:outline-none focus:shadow-outline"
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
            className="w-full px-5 py-2 font-medium text-white rounded-lg bg-Purple"
          >
            Add Product
          </button>
        ) : (
          <button
            type="submit"
            className="w-full px-5 py-2 font-medium text-white rounded-lg bg-Purple"
          >
            Edit Product
          </button>
        )}
      </form>
    </>
  );
}
