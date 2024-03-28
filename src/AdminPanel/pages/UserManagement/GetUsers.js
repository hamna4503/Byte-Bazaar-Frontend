export const GetUsers = async () => {
  try {
    const response = await fetch(`http://localhost:6005/api/select-users`);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    console.log(data.data.password);
    if (data.data.isActiveUser == true) {
      console.log("data.data.isActiveUser");
    }
    return data.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; 
  }
};
