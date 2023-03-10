import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./loginForm.module.css";
//
import useInput from "../hooks/useInput";
import useHTTP from "../hooks/useHTTP";
//
import FormCard from "./FormCard";
import Loader from "../LayoutsAndUIs/Loader";

const LoginForm = (props) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [requestConfig, setRequestConfig] = useState({});

  const { sendRequest, isLoading, resError, errorMarkup } =
    useHTTP(requestConfig);

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

  useEffect(() => {
    if (!emailError && !passwordError) {
      setIsFormValid(true);
      setRequestConfig({
        url: props.logInURL,
        navTo: props.dashBoardLink,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: { email: candidateEmail, password: candidatePassword },
      });
    }
  }, [
    candidateEmail,
    candidatePassword,
    props.logInURL,
    props.dashBoardLink,
    emailError,
    passwordError,
  ]);

  const submitForm = (e) => {
    e.preventDefault();
    if (!isFormValid || resError) return;

    setTimeout(() => {
      sendRequest();
      resetEmailInput();
      resetPasswordInput();
      props.isLogedIn(true);
    }, 500);
  };

  const emailClass = emailError
    ? `${styles.user_input} ${styles.invalid}`
    : `${styles.user_input}`;

  const passwordClass = passwordError
    ? `${styles.user_input} ${styles.invalid}`
    : `${styles.user_input}`;
  return (
    <div className={styles.main}>
      <p className={styles.form_q}>
        {props.question} <br /> Submit your credentials to login
      </p>
      <FormCard className={styles.form} submitForm={submitForm}>
        <input
          className={emailClass}
          placeholder="Enter your email (example@example.com)"
          name="email"
          type="email"
          value={candidateEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        <input
          className={passwordClass}
          placeholder="Enter your password"
          name="password"
          type="password"
          value={candidatePassword}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
        />
        {isLoading && <Loader />}
        {resError && <p style={{ color: "red" }}>{`${errorMarkup}`}</p>}
        <button className={styles.btn} type="submit">
          Log In
        </button>
        <Link to={props.forgotLink} className={styles.signUp_link}>
          Forgot Password ?
        </Link>
        <Link className={styles.signUp_link} to={props.signUplink}>
          {props.heading}
        </Link>
      </FormCard>
    </div>
  );
};

export default LoginForm;
