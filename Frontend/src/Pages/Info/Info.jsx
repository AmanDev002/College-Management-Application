import React from "react";
import { useContext } from "react";
import GlobalContext from "../../Context/GlobalContext";

import LoginUserInfo from "./LoginUserInfo";
import LoginRequired from "./LoginRequired";
const Info = () => {
  const { isLoggedIn } = useContext(GlobalContext);
  return (
    <>
      {isLoggedIn ? (
        <LoginUserInfo></LoginUserInfo>
      ) : (
        <LoginRequired></LoginRequired>
      )}
    </>
  );
};

export default Info;
