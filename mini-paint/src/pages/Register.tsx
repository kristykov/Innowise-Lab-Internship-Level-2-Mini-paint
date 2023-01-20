import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { createUser } from "../store/auth/authThunk";
import { useAppDispatch } from "../hooks/hooks";
import classes from "./Register.module.scss";
import { isAuthenticated } from "../store/auth/authSlice";

type FormValues = {
  email: string;
  password: string;
};

const Register = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const [error, setError] = useState("");

  const dispatch = useAppDispatch();
  const isAuthorised = useSelector(isAuthenticated);

  const onSubmit = async ({ email, password }: FormValues) => {
    try {
      const res = await dispatch(createUser({ email, password })).unwrap();
    } catch (err) {
      if (
        err.message ===
        "Firebase: The email address is already in use by another account. (auth/email-already-in-use)."
      ) {
        setError("The email address is already in use. Login please");
      }
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p>{error}</p>}
      {isAuthorised && <Navigate to="/home" replace />}
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
