import React, { useState } from "react";
import { LoadingContext } from "./Loadingcontext";

function LoadingState({ children }) {
  const [Loading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ Loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export default LoadingState;
