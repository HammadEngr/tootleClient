import React from "react";
import styles from "./forgotPwd.module.css";
import { Link } from "react-router-dom";
import FormCard from "./FormCard";
const ForgotPwd = (props) => {
  return (
    <>
      <FormCard className={styles.form} submitForm={props.submitForm}>
        <h1>Recover your password here</h1>
        <input
          className={styles.input}
          placeholder="enter your email here"
          type="email"
          autoFocus
        />
        <p>
          we will send a recovery link to the provided email,
          <br /> Just follow the instructions there
        </p>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
        <Link className={styles.back} to={props.goBackLink}>
          Go Back
        </Link>
      </FormCard>
    </>
  );
};

export default ForgotPwd;
