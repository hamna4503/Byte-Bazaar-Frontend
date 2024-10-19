export const GetConcerns = async () => {
  try {
    const response = await fetch(`http://localhost:6005/api/get-concerns`);
    if (!response.ok) {
      throw new Error("Failed to Fetch Messages");
    }
    const data = await response.json();
    console.log(data.data.password);
    if (data.data.isActiveUser == true) {
      console.log("data.data.isActiveUser");
    }
    return data.data;
  } catch (error) {
    console.error("Error Fetching Messages:", error);
    throw error;
  }
};


