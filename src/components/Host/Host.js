import React, { useContext } from "react";
import LogInContext from "../../Contexts/LogInContext";
import FormLayout from "../../Form/FormLayout";
import LoginForm from "../../Form/LoginForm";

const Host = (props) => {
  const loginCtx = useContext(LogInContext);
  return (
    <FormLayout
      link="/"
      linkTo="Back"
      heading="Show your hospitality"
      subHeading="Host our guests and get paid"
    >
      <LoginForm
        signUplink="/signupHost"
        forgotLink="/forgotHostPwd"
        dashBoardLink="/hostDashBoard"
        heading="Want to host? SignUp here"
        question="Are you our host ?"
        isLogedIn={loginCtx.hostLogInHandler}
        logInURL="http://127.0.0.1:8000/tootle/v1/hosts/logIn"
      />
    </FormLayout>
  );
};

export default Host;
