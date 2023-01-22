import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { loginUser } from "../store/auth/authThunk";
import { useAppDispatch } from "../hooks/hooks";
import classes from "./Register.module.scss";
import { isAuthenticated } from "../store/auth/authSlice";
import { FormValues } from "../interfaces/index";

const Login = () => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(isAuthenticated);

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
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      {isAuth && <Navigate to="/home" replace />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          <input
            className={classes["container-card-form-input"]}
            id="email"
            {...register("email")}
            type="email"
            placeholder="Enter your email"
          />
        </label>
        <label htmlFor="password">
          <input
            className={classes["container-card-form-input"]}
            id="password"
            {...register("password")}
            type="password"
            placeholder="Enter your password"
          />
        </label>
        <button
          type="submit"
          aria-label="Submit"
          className={classes["container-card-form-submit"]}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
