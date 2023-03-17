import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, Navigate } from "react-router-dom";
import { signin } from "../../slices/authSlice";
import { getUser } from "../../slices/userSlice";
import "./signinCSS.scss";
const Signin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { accessToken, loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { register, handleSubmit, formState } = useForm({
    defaultValues: { taiKhoan: "", matKhau: "" },
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
    dispatch(signin(values));
  };

  if (accessToken) {
    const redirectUrl = searchParams.get("redirectUrl");
    return <Navigate to={redirectUrl || "/profile"} />;
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
        <div className="form-item account animate__animated animate__fadeInRight animate__delay-1s">
          <label className=" " htmlFor="">
            Account:
          </label>
          <input
            type="text"
            placeholder="example"
            {...register("taiKhoan", {
              required: {
                value: true,
                message: "Account is required",
              },
            })}
          />
        </div>
        {errors.taiKhoan && <span>{errors.taiKhoan.message}</span>}

        <div className="form-item password animate__animated animate__fadeInRight animate__delay-2s">
          <label htmlFor="">Password:</label>
          <input
            type={type}
            placeholder="******"
            {...register("matKhau", {
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
        {errors.matKhau && <span>{errors.matKhau.message}</span>}
        <div className="footer ">
          <div className="showPW animate__animated animate__fadeInUp animate__delay-3s">
            <input type="checkbox" onChange={handleChange} />
            <label htmlFor="">Show password</label>
          </div>
          <div className="submitBtn animate__animated animate__fadeInUp animate__delay-4s">
            <button disabled={loading}>Sign in</button>
          </div>
        </div>
        {error && (
          <span className="errorMessage">Email or Password is incorrect</span>
        )}
      </form>
    </div>
  );
};

export default Signin;
