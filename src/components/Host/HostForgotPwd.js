import React from "react";

import styles from "./hostForgotPwd.module.css";
import ForgotPwd from "../../Form/ForgotPwd";
const HostForgotPwd = () => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("hello");
  };
  return (
    <div className={styles.main}>
      <ForgotPwd submitForm={formSubmitHandler} goBackLink="/loginHost" />
    </div>
  );
};

export default HostForgotPwd;
