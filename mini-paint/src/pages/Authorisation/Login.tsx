import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { loginUser } from "../../store/auth/authThunk";
import { useAppDispatch } from "../../hooks/hooks";
import classes from "./Register.module.scss";
import { isAuthenticated, isLoading } from "../../store/auth/authSlice";
import { FormValues } from "../../interfaces/index";

const Login = () => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(isAuthenticated);
  const loading = useSelector(isLoading);

  const { register, handleSubmit } = useForm<FormValues>();
  const [error, setError] = useState("");

  const onSubmit = async ({ email, password }: FormValues) => {
    try {
      await dispatch(loginUser({ email, password })).unwrap();
    } catch (err) {
      if (
        err.message ===
        "Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found)."
      ) {
        setError("It looks like you're not among our users. Register please");
      }
    }
  };

  return (
    <div className={classes.container}>
      <div className={[classes.left, classes.side].join(" ")}>
        <div className={classes.content}>
          <h2 className={classes.title}>Hello, Friend!</h2>
          <p className={classes.description}>
            Don&apos;t have an account? Click here and let&apos;s get you
            registered
          </p>
        </div>
        <Link to="/register">
          <button className={classes.btn} type="button">
            Register
          </button>
        </Link>
      </div>
      <div className={[classes.right, classes.side].join(" ")}>
        <h2>Login</h2>
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
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <label className={classes.label} htmlFor="email">
            <input
              className={classes.input}
              id="email"
              {...register("email")}
              type="email"
              placeholder="Enter your email"
            />
          </label>
          <label className={classes.label} htmlFor="password">
            <input
              className={classes.input}
              id="password"
              {...register("password")}
              type="password"
              placeholder="Enter your password"
            />
          </label>
          {error && <p className={classes["error-message"]}>{error}</p>}
          <button
            type="submit"
            aria-label="Submit"
            className={classes["submit-btn"]}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
