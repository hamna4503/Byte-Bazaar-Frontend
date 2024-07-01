import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import Cookies from "js-cookie";

function AuthState({ children }) {
  const [authToken, setauthToken] = useState(Cookies.get("authToken"));
  useEffect(() => {
    const handleCookieChange = () => {
      setauthToken(Cookies.get("authToken"));
    };

    // Periodically check for cookie changes
    const interval = setInterval(handleCookieChange, 1000);

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, []); // Empty array ensures this runs only once

  return (
    <AuthContext.Provider value={{ authToken, setauthToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthState;
