import React from "react";
import styles from "./hasError.module.css";
const HasError = () => {
  return (
    <div className={styles.hasError}>
      <h1 className={styles.hasError_text}>Something went wrong</h1>
    </div>
  );
};

export default HasError;
