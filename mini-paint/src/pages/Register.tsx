import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "../firebase-config";
import classes from "./Register.module.scss";

type FormValues = {
  email: string;
  password: string;
};

const Register = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const navigate = useNavigate();

  const onSubmit = async ({ email, password }: FormValues) => {
    try {
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      if (res.user) {
        const userId = res.user.uid;
        console.log("userId", userId);
        navigate("/home");
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        console.log("The email is already in use.");
      }
    }
  };

  return (
    <div>
      <h2>Register</h2>
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
