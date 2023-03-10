import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//
import styles from "./signUpForm.module.css";
import FormLayout from "./FormLayout";
import FormCard from "./FormCard";
import Loader from "../LayoutsAndUIs/Loader";
//
import useInput from "../hooks/useInput";
import useHTTP from "../hooks/useHTTP";
const SignUpForm = (props) => {
  const [requestConfig, setRequestConfig] = useState({});

  const [isFormValid, setIsFormValid] = useState(false);

  const { sendRequest, isLoading, resError, errorMarkup } =
    useHTTP(requestConfig);

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

  const {
    value: candidatePassword,
    inputBlurHandler: passwordBlurHandler,
    valueChangeHandler: passwordChangeHandler,
    hasError: passwordError,
    reset: resetPasswordInput,
  } = useInput((val) => val.length >= 8);

  const {
    value: candidatePasswordConfirm,
    inputBlurHandler: passwordConfirmBlurHandler,
    valueChangeHandler: passwordConfirmChangeHandler,
    hasError: passwordConfirmError,
    reset: resetPasswordConfirmInput,
  } = useInput((val) => val === candidatePassword);

  useEffect(() => {
    if (!emailError && !nameError && !passwordError && !passwordConfirmError) {
      setIsFormValid(true);
      setRequestConfig({
        url: props.signUpURL,
        navTo: props.navTo,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {
          name: candidateName,
          email: candidateEmail,
          password: candidatePassword,
          passwordConfirm: candidatePasswordConfirm,
        },
      });
    }
  }, [
    candidateName,
    candidateEmail,
    candidatePassword,
    candidatePasswordConfirm,
    props.signUpURL,
    props.navTo,
    emailError,
    passwordError,
    nameError,
    passwordConfirmError,
  ]);

  const signUpSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid || resError) return;

    setTimeout(() => {
      sendRequest();
      resetNameInput();
      resetEmailInput();
      resetPasswordInput();
      resetPasswordConfirmInput();
    }, 500);
  };

  const nameClass = nameError
    ? `${styles.form_input} ${styles.invalid}`
    : `${styles.form_input}`;

  const emailClass = emailError
    ? `${styles.form_input} ${styles.invalid}`
    : `${styles.form_input}`;

  const passwordClass = passwordError
    ? `${styles.form_input} ${styles.invalid}`
    : `${styles.form_input}`;
  const passwordConfirmClass = passwordConfirmError
    ? `${styles.form_input} ${styles.invalid}`
    : `${styles.form_input}`;
  return (
    <FormLayout linkTo={props.linkTo} link={props.link} heading={props.heading}>
      <FormCard className={styles.signUp_form} submitForm={signUpSubmit}>
        <input
          className={nameClass}
          placeholder="Tell us your name"
          type="text"
          name="name"
          value={candidateName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        <input
          className={emailClass}
          placeholder="Tell us your email"
          value={candidateEmail}
          type="email"
          name="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        <input
          className={passwordClass}
          placeholder="Choose a password"
          value={candidatePassword}
          type="password"
          min="8"
          name="password"
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
        />
        <input
          className={passwordConfirmClass}
          placeholder="Confirm your password"
          value={candidatePasswordConfirm}
          type="password"
          min="8"
          name="passwordConfirm"
          onChange={passwordConfirmChangeHandler}
          onBlur={passwordConfirmBlurHandler}
        />
        {isLoading && <Loader />}
        {resError && <p style={{ color: "red" }}>{`${errorMarkup}`}</p>}
        <button className={styles.submit} type="submit">
          Submit your credentials
        </button>
        <Link to="/" className={styles.change}>
          Changed mind ?
        </Link>
      </FormCard>
    </FormLayout>
  );
};

export default SignUpForm;
