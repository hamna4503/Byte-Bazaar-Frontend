import { toast } from "react-toastify";

export const DeleteUser = async (userEmail) => {
  try {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmed) {
      return; 
    }
 
    const response = await fetch("http://localhost:6005/api/delete-users", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userEmail }),
    });

    if (!response.ok) {
      throw new Error("Delete request failed");
    }

    // Remove the deleted user from the state
    // setUsers(users.filter((user) => user.email !== userEmail));
    window.location.reload();
    toast.success("User deleted successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      draggable: false,
      closeOnClick: false,
      theme: "colored",
      transition: toast.flip,
    });

  } catch (error) {
    toast.error(`Error deleting user ${error}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      draggable: false,
      closeOnClick: false,
      theme: "colored",
      transition: toast.flip,
    });
    console.error("Error deleting user:", error);
  }
};

