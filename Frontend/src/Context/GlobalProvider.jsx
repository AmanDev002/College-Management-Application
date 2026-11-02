import { useState } from "react";
import GlobalContext from "./GlobalContext";
import { useNavigate } from "react-router-dom";

const GlobalProvider = ({ children }) => {
    const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const value = {
   isLoggedIn,
   setIsLoggedIn,
   navigate,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
