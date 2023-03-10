import React, { useContext } from "react";
import LogInContext from "../../Contexts/LogInContext";
import FormLayout from "../../Form/FormLayout";
import LoginForm from "../../Form/LoginForm";

const Guest = () => {
  const loginCtx = useContext(LogInContext);
  return (
    <>
      <FormLayout
        link="/"
        linkTo="Back"
        heading="Become our guest"
        subHeading="It's an honour that you choose us"
      >
        <LoginForm
          signUplink="/signupGuest"
          forgotLink="/forgotGuestPwd"
          dashBoardLink="/guestDashBoard"
          heading="Want to be a guest ? SignUp here"
          question="Are you our guest ?"
          isLogedIn={loginCtx.guestLogInHandler}
        />
      </FormLayout>
    </>
  );
};

export default Guest;
