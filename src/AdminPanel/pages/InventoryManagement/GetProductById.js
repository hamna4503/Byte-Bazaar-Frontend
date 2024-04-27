import axios from "axios";

export const GetProductById = async (_id) => {
  try {
    const response = await axios.post(
      "http://localhost:6005/api/get-prod-by-id",
      { _id: _id }
    );
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
