import React from "react";
import styles from "./isLoading.module.css";

const IsLoading = (props) => {
  const loader = <span className={styles.loader}></span>;
  return (
    <div className={styles.hasError}>
      {loader}
      <h1 className={styles.hasError_text}>Loading...</h1>
    </div>
  );
};

export default IsLoading;
