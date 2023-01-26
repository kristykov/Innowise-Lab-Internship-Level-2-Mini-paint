import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { createUser } from "../../store/auth/authThunk";
import { useAppDispatch } from "../../hooks/hooks";
import classes from "./Register.module.scss";
import { isAuthenticated, isLoading } from "../../store/auth/authSlice";
import { FormValues } from "../../interfaces/index";
import {
  emailValidation,
  passwordLowerCaseValidation,
  passwordUpperCaseValidation,
  passwordNumberValidation,
  passwordLengthValidation,
} from "../../helpers/credentialsValidation";

const Register = () => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(isAuthenticated);
  const loading = useSelector(isLoading);

  const { register, handleSubmit } = useForm<FormValues>();
  const [lowerCaseCharValidated, setLowerCaseCharValidated] = useState(true);
  const [upperCaseCharValidated, setUpperCaseCharValidated] = useState(true);
  const [numberCharValidated, setNumberCharValidated] = useState(true);
  const [lenghtValidated, setLengthValidated] = useState(true);
  const [error, setError] = useState("");

  const inputFocusHandler = () => {
    setLowerCaseCharValidated(true);
    setUpperCaseCharValidated(true);
    setNumberCharValidated(true);
    setLengthValidated(true);
  };

  const onSubmit = async ({ email, password }: FormValues) => {
    if (!emailValidation(email)) {
      setError("Enter correct email");
    }
    if (!passwordUpperCaseValidation(password)) {
      setUpperCaseCharValidated(false);
    }
    if (!passwordLowerCaseValidation(password)) {
      setLowerCaseCharValidated(false);
    }
    if (!passwordNumberValidation(password)) {
      setNumberCharValidated(false);
    }
    if (!passwordLengthValidation(password)) {
      setLengthValidated(false);
    }

    if (
      passwordUpperCaseValidation(password) &&
      passwordLowerCaseValidation(password) &&
      passwordNumberValidation(password) &&
      passwordLengthValidation(password) &&
      emailValidation(email)
    ) {
      try {
        await dispatch(createUser({ email, password })).unwrap();
      } catch (err) {
        if (
          err.message ===
          "Firebase: The email address is already in use by another account. (auth/email-already-in-use)."
        ) {
          setError("The email address is already in use. Login please");
        }
      }
    }
  };

  return (
    <div className={classes.container}>
      <div className={[classes.left, classes.side].join(" ")}>
        <div className={classes.content}>
          <h2 className={classes.title}>Hello, Friend!</h2>
          <p className={classes.description}>
            Enter your personal details and start creating your gallery with us
          </p>
        </div>
        <Link to="/login">
          <button className={classes.btn} type="button">
            Login
          </button>
        </Link>
      </div>
      <div className={[classes.right, classes.side].join(" ")}>
        <h2>Register</h2>
        {loading && (
          <ClipLoader
            color="#fff"
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
        {isAuth && <Navigate to="/home" replace />}
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <label className={classes.label} htmlFor="email">
            <input
              className={classes.input}
              id="email"
              {...register("email")}
              type="email"
              onFocus={inputFocusHandler}
              placeholder="Enter your email"
            />
          </label>
          <label className={classes.label} htmlFor="password">
            <input
              className={classes.input}
              id="password"
              {...register("password")}
              onFocus={inputFocusHandler}
              type="password"
              placeholder="Enter your password"
            />
          </label>
          {error && <p className={classes["error-message"]}>{error}</p>}
          {!lowerCaseCharValidated && (
            <p className={classes["error-message"]}>
              Your password must have at least 1 lowercase character
            </p>
          )}
          {!upperCaseCharValidated && (
            <p className={classes["error-message"]}>
              Your password must have at least 1 uppercase character
            </p>
          )}
          {!numberCharValidated && (
            <p className={classes["error-message"]}>
              Your password must have at least one number
            </p>
          )}
          {!lenghtValidated && (
            <p className={classes["error-message"]}>
              Your password must be at least 6 characters long
            </p>
          )}

          <button
            type="submit"
            aria-label="Submit"
            className={classes["submit-btn"]}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
