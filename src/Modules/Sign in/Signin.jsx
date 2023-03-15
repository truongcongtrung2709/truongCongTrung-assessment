import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./signin.scss";
const Signin = () => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: { email: "", password: "" },
    mode: "onTouched",
  });
  const { errors } = formState;
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="login container">
      <h1>Login</h1>
      <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-item email">
          <label htmlFor="">Email:</label>
          <input
            type="text"
            placeholder="example@kyanon.digital"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
        </div>
        {errors.email?.type === "required" && <span>Email is required</span>}
        {errors.email?.type === "pattern" && (
          <span>Please enter a valid email</span>
        )}
        <div className="form-item password">
          <label htmlFor="">Password:</label>
          <input
            type="password"
            placeholder="******"
            {...register("password", {
              required: "Password is required",
              minLength: 5,
              maxLength: 20,
            })}
          />
        </div>
        {errors.password?.type === "required" && (
          <span>Password is required</span>
        )}
        {["minLength", "maxLength"].includes(errors.password?.type) && (
          <span>
            Password must be minimum of 20 characters and at least 5 characters
          </span>
        )}
        <div className="footer">
          <div className="showPW">
            <input type="checkbox" />
            <label htmlFor="">Show password</label>
          </div>
          <div className="submitBtn">
            <button>Sign in</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
