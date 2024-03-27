export default function FormFields({isEditForm}) {
  return (
    <>
      <form className="flex flex-wrap gap-4 p-3">
        <input
          className="mb-2 w-full py-2 px-3 text-black text-sm shadow appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Product Name"
          type="text"
        />
        <input
          className="mb-2 w-full py-2 px-3 text-black text-sm shadow appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Product Price"
          type="email"
        />
        <input
          className="mb-2 w-full py-2 px-3 text-black text-sm shadow appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Product Image"
          type="tel"
        />
        <input
          className="mb-2 w-full py-2 px-3 text-black text-sm shadow appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Product Category"
          type="tel"
        />
        <input
          className="mb-2 w-full py-2 px-3 text-black text-sm shadow appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Product Brand"
          type="tel"
        />
        <input
          className="mb-2 w-full py-2 px-3 text-black text-sm shadow appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Product Ratings"
          type="tel"
        />
        <textarea
          className="mb-2 w-full py-2 px-3 text-black text-sm shadow appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Product Description"
          rows={4}
          defaultValue={""}
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-Purple px-5 py-2 font-medium text-white"
        >
          {!isEditForm ? "Add Product" : "Edit Product"}
        </button>
      </form>
    </>
  );
}
