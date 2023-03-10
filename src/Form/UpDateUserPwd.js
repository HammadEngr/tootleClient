import React from "react";
import styles from "./upDateUserPwd.module.css";
import useInput from "../hooks/useInput";
import FormCard from "./FormCard";

const UpDateUserPwd = () => {
  const {
    value: currentPassword,
    inputBlurHandler: currentPasswordBlurHandler,
    valueChangeHandler: currentPasswordChangeHandler,
    hasError: currentPasswordError,
    reset: resetCurrentPasswordInput,
  } = useInput((val) => val.length >= 8);

  const {
    value: newPassword,
    inputBlurHandler: newPasswordBlurHandler,
    valueChangeHandler: newPasswordChangeHandler,
    hasError: newPasswordError,
    reset: resetNewPasswordInput,
  } = useInput((val) => val.length >= 8);

  const {
    value: confirmPassword,
    inputBlurHandler: confirmPasswordBlurHandler,
    valueChangeHandler: confirmPasswordChangeHandler,
    hasError: confirmPasswordError,
    reset: resetConfirmPasswordInput,
  } = useInput((val) => !(val === newPassword));

  let isFormValid = false;
  if (!currentPasswordError && !newPasswordError && !confirmPasswordError) {
    isFormValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    console.log({
      currentPassword: currentPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    });
    resetCurrentPasswordInput();
    resetNewPasswordInput();
    resetConfirmPasswordInput();
  };
  const currentPasswordClass = currentPasswordError
    ? `${styles.input} ${styles.invalid}`
    : `${styles.input}`;

  const newPasswordClass = newPasswordError
    ? `${styles.input} ${styles.invalid}`
    : `${styles.input}`;

  const confirmPasswordClass = confirmPasswordError
    ? `${styles.input} ${styles.invalid}`
    : `${styles.input}`;
  return (
    <FormCard className={styles.form} submitForm={formSubmitHandler}>
      <div className={styles.box}>
        <label className={styles.label}>Current Password</label>
        <input
          className={currentPasswordClass}
          type="password"
          name="password"
          min="8"
          placeholder="your current password"
          onBlur={currentPasswordBlurHandler}
          onChange={currentPasswordChangeHandler}
          value={currentPassword}
        />
      </div>
      <div className={styles.box}>
        <label className={styles.label}>New Password</label>
        <input
          className={newPasswordClass}
          type="password"
          name="newPassword"
          min="8"
          placeholder="New Password"
          onBlur={newPasswordBlurHandler}
          onChange={newPasswordChangeHandler}
          value={newPassword}
        />
      </div>
      <div className={styles.box}>
        <label className={styles.label}>Confirm Password</label>
        <input
          className={confirmPasswordClass}
          type="password"
          name="confirmPassword"
          min="8"
          placeholder="Confirm your password"
          onBlur={confirmPasswordBlurHandler}
          onChange={confirmPasswordChangeHandler}
          value={confirmPassword}
        />
      </div>
      <button className={styles.btn} type="submit">
        Update
      </button>
    </FormCard>
  );
};

export default UpDateUserPwd;
