import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./signin.scss";
const Signin = () => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: { email: "", password: "" },
    mode: "onTouched",
  });
  const [type, setType] = useState("password");
const [checked, setChecked] = useState(false)
  const handleChange= (e) =>{
    if(e.target.checked){
      console.log("checked");
      setType("text")

    }
    else{
      console.log("non-checked");
      setType("password")

    }
    setChecked(current=>!current)
  }
  console.log(checked);
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
              required: {
                value: true,
                message: "Email is required"
              },
              pattern:{
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid Email"},
            })}
          />
        </div>
        {errors.email && <span>{errors.email.message}</span>}
          
        <div className="form-item password">
          <label htmlFor="">Password:</label>
          <input
            type={type}
            placeholder="******"
            {...register("password", {
              required:{
                value:true,
                message:"Password is required"
              },
              minLength:{
                value:5,
                message:"Password must be minimum of 20 characters and at least 5 characters"
              },
              maxLength:{
                value: 20,
                message:"Password must be minimum of 20 characters and at least 5 characters"
              },
            })}
          />
        </div>
        {errors.password && <span>{errors.password.message}</span>}
        <div className="footer">
          <div className="showPW">
            <input type="checkbox" onChange={handleChange}/>
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
