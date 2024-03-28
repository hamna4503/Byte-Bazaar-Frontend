import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function UserState({ children }) {
  return (
    <UserContext.Provider value={{ name: "hamna" }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserState;
