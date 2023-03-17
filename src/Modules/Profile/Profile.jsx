import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./profile.scss";
import { useDispatch, useSelector } from "react-redux";
import logout from "../../slides/authSlide";
const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const handleCancel = () => {
    dispatch(logout());
  };
  const { register, handleSubmit, formState } = useForm({
    defaultValues: { fullName: "", dayOfBirth: "", email: "", phone: "" },
    mode: "onTouched",
  });
  const { errors } = formState;
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="profile form container ">
      <h1 className=" animate__animated animate__fadeInDown animate__delay-0.5s">
        Profile
      </h1>
      <form
        className="form-profile form-content"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-item fullName animate__animated animate__fadeInRight animate__delay-1s">
          <label htmlFor="">Full name:</label>
          <input
            type="text"
            {...register("fullName", {
              required: {
                value: true,
                message: "Full Name is required",
              },
              maxLength: {
                value: 30,
                message: "Full name must be minimum of 30",
              },
            })}
          />
          {errors.fullName && <span>{errors.fullName.message};</span>}
        </div>
        <div className="form-item dayOfBirth animate__animated animate__fadeInRight animate__delay-1s">
          <label htmlFor="">Day Of Birth:</label>
          <input
            type="date"
            {...register("dayOfBirth", {
              required: {
                value: true,
                message: "Choose your day of birth",
              },
            })}
          />
          {errors.dayOfBirth && <span>{errors.dayOfBirth.message}</span>}
        </div>
        <div className="form-item email animate__animated animate__fadeInRight animate__delay-2s">
          <label htmlFor="">Email:</label>
          <input
            type="text"
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
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className="form-item phone form-item email animate__animated animate__fadeInRight animate__delay-2s">
          <label htmlFor="">Phone:</label>
          <input
            type="number"
            {...register("phone", {
              required: {
                value: true,
                message: "Phone is required",
              },
              pattern: {
                value: /(0|7|8|9)\d{9}/,
                message: "invalid phone number",
              },
            })}
          />
          {errors.phone && <span>{errors.phone.message}</span>}
        </div>
        <div className="buttons">
          <button className="updateBtn form-item email animate__animated animate__fadeInUp animate__delay-1s">
            Update
          </button>
          <button
            className="cancelBtn animate__animated animate__fadeInUp animate__delay-2s"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
