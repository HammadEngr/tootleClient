import React from "react";
import useInput from "../hooks/useInput";
import FormCard from "./FormCard";
import styles from "./upDateUserData.module.css";

const UpDateUserData = () => {
  const {
    value: candidateName,
    inputBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
    hasError: nameError,
    reset: resetNameInput,
  } = useInput((val) => val.trim() !== "");

  const {
    value: candidateEmail,
    inputBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    hasError: emailError,
    reset: resetEmailInput,
  } = useInput((val) => val.includes("@"));
  let isFormValid = false;
  if (!emailError && !nameError) {
    isFormValid = true;
  }
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    console.log({
      candidateName: candidateName,
      candidateEmail: candidateEmail,
    });
    resetNameInput();
    resetEmailInput();
  };

  const nameClass = nameError
    ? `${styles.input} ${styles.invalid}`
    : `${styles.input}`;
  const emailClass = emailError
    ? `${styles.input} ${styles.invalid}`
    : `${styles.input}`;
  return (
    <FormCard className={styles.form} submitForm={formSubmitHandler}>
      <div className={styles.box}>
        <label className={styles.label}>Name</label>
        <input
          className={nameClass}
          type="text"
          name="name"
          placeholder="Enter name"
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
          value={candidateName}
        />
      </div>
      <div className={styles.box}>
        <label className={styles.label}>Email</label>
        <input
          className={emailClass}
          type="email"
          name="email"
          placeholder="Enter email"
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          value={candidateEmail}
        />
      </div>
      <button className={styles.btn} type="submit">
        Update
      </button>
    </FormCard>
  );
};

export default UpDateUserData;
