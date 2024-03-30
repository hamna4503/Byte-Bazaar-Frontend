export const GetProducts = async () => {
  try {
    const response = await fetch(`http://localhost:6005/api/get-prods`);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};


