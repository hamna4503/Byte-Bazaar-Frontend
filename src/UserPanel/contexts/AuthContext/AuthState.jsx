import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import Cookies from "js-cookie";
function AuthState({ children }) {
  const [authToken, setauthToken] = useState(Cookies.get("authToken"));
  useEffect(() => {
    setauthToken(Cookies.get("authToken"));
  }, []);

  return (
    <AuthContext.Provider value={{ authToken, setauthToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthState;
