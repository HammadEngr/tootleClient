import React, { useContext } from "react";
import LogInContext from "../../Contexts/LogInContext";

import SignUpForm from "../../Form/SignUpForm";
const HostSignUp = () => {
  const loginCTX = useContext(LogInContext);
  return (
    <SignUpForm
      link="/"
      linkTo="Back"
      isLogedIn={loginCTX.hostLogInHandler}
      heading="We promis you won't regret this decision"
      navTo="/hostDashBoard"
      signUpURL="http://127.0.0.1:8000/tootle/v1/hosts/signUp"
    />
  );
};

export default HostSignUp;
