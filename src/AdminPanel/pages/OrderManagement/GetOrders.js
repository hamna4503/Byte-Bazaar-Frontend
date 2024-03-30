export const GetOrders = async () => {
  try {
    const response = await fetch(`http://localhost:6005/api/get-orders`);
    if (!response.ok) {
      throw new Error("Failed to fetch order records");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
