import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { signin } from "../../slides/authSlide";
import "./signin.scss";
const Signin = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);
  const { register, handleSubmit, formState } = useForm({
    defaultValues: { email: "", password: "" },
    mode: "onTouched",
  });
  const [type, setType] = useState("password");
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    if (e.target.checked) {
      setType("text");
    } else {
      setType("password");
    }
    setChecked((current) => !current);
  };
  const { errors } = formState;
  const onSubmit = (values) => {
    console.log(values);
    dispatch(signin(values));
  };
  if (user) {
    return <Navigate to="/profile" replace />;
  }
  return (
    <div className="login form container ">
      <h1 className=" animate__animated animate__fadeInDown animate__delay-0.5s">
        Login
      </h1>
      <form
        className="form-login form-content"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-item email animate__animated animate__fadeInRight animate__delay-1s">
          <label className=" " htmlFor="">
            Email:
          </label>
          <input
            type="text"
            placeholder="example@kyanon.digital"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid Email",
              },
            })}
          />
        </div>
        {errors.email && <span>{errors.email.message}</span>}

        <div className="form-item password animate__animated animate__fadeInRight animate__delay-2s">
          <label htmlFor="">Password:</label>
          <input
            type={type}
            placeholder="******"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 5,
                message:
                  "Password must be minimum of 20 characters and at least 5 characters",
              },
              maxLength: {
                value: 20,
                message:
                  "Password must be minimum of 20 characters and at least 5 characters",
              },
            })}
          />
        </div>
        {errors.password && <span>{errors.password.message}</span>}
        <div className="footer ">
          <div className="showPW animate__animated animate__fadeInUp animate__delay-3s">
            <input type="checkbox" onChange={handleChange} />
            <label htmlFor="">Show password</label>
          </div>
          <div className="submitBtn animate__animated animate__fadeInUp animate__delay-4s">
            <button disabled={loading}>Sign in</button>
            {error && <p>Email or Password is incorrect</p>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
