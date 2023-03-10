import React from "react";
import styles from "./guestForgotPwd.module.css";
import ForgotPwd from "../../Form/ForgotPwd";
const GuestForgotPwd = () => {
  const formSubmitHandler = () => {};
  return (
    <div className={styles.main}>
      <ForgotPwd submitForm={formSubmitHandler} goBackLink="/loginGuest" />
    </div>
  );
};

export default GuestForgotPwd;
