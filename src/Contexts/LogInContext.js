import React, { useState } from "react";

const LogInContext = React.createContext({
  isHostLogedIn: "",
  isGuestLogedIn: "",
  hostLogInHandler: () => {},
  guestLogInHandler: () => {},
});

export const LogInContextProvider = (props) => {
  const [isHostLogedIn, setIsHostLogedIn] = useState(false);
  const [isGuestLogedIn, setIsGuestLogedIn] = useState(false);
  const hostLogInHandler = (val) => {
    setIsHostLogedIn(val);
  };
  const guestLogInHandler = (val) => {
    setIsGuestLogedIn(val);
  };
  return (
    <LogInContext.Provider
      value={{
        isHostLogedIn,
        isGuestLogedIn,
        hostLogInHandler,
        guestLogInHandler,
      }}
    >
      {props.children}
    </LogInContext.Provider>
  );
};

export default LogInContext;
