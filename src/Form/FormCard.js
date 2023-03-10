import React from "react";
import styles from "./formCard.module.css";

const FormCard = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  return (
    <form className={customClass} onSubmit={props.submitForm}>
      {props.children}
    </form>
  );
};

export default FormCard;
