import React from "react";
import styles from "./upDateGuest.module.css";
import UpDateUserData from "../../../../Form/UpDateUserData";
import UpDateUserPwd from "../../../../Form/UpDateUserPwd";
const UpDateGuest = () => {
  return (
    <div className={styles.main}>
      <UpDateUserData />
      <UpDateUserPwd />
    </div>
  );
};

export default UpDateGuest;
