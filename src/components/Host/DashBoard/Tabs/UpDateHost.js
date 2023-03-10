import React from "react";
import styles from "./upDateHost.module.css";
import UpDateUserData from "../../../../Form/UpDateUserData";
import UpDateUserPwd from "../../../../Form/UpDateUserPwd";

const UpDateHost = () => {
  return (
    <div className={styles.main}>
      <UpDateUserData />
      <UpDateUserPwd />
    </div>
  );
};

export default UpDateHost;
