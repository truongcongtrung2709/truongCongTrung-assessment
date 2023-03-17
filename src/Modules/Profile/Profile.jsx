import React, { useEffect } from "react";
import { useForm, useFormState } from "react-hook-form";
import "./profile.scss";
import {update} from "../../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
const Profile = () => {
  const {user} = useSelector((state)=> state.auth)
  const dispatch = useDispatch();
  // const handleCancel = () => {
  //   navigate("/");
  // };
  const { register, handleSubmit,reset, formState } = useForm({
    
    defaultValues: {taiKhoan: user.taiKhoan,matKhau: "", maLoaiNguoiDung: user.maLoaiNguoiDung ,hoTen: user.hoTen, email: user.email, soDT: user.soDT },
    mode: "onTouched",
  });
  const { errors } = formState;
  const onSubmit = (values) => {
    // console.log(values);
    dispatch(update(values));
    reset(formValue => ({
      ...formValue, matKhau: ""
    }))
    
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
        <div className="form-item taiKhoan animate__animated animate__fadeInRight animate__delay-1s">
          <label htmlFor="">Account:</label>
          <input
          disabled
            type="text"
            {...register("taiKhoan", {
             
            })}
          />
          {errors.taiKhoan && <span>{errors.taiKhoan.message};</span>}
        </div>
        
        <div className="form-item taiKhoan animate__animated animate__fadeInRight animate__delay-1s">
          <label htmlFor="">Type:</label>
          <input
          disabled
            type="text"
            {...register("maLoaiNguoiDung", {
             
            })}
          />
          {errors.maLoaiNguoiDung && <span>{errors.maLoaiNguoiDung.message};</span>}
        </div>

        <div className="form-item taiKhoan animate__animated animate__fadeInRight animate__delay-1s">
          <label htmlFor="">MatKhau:</label>
          <input
            type="text"
            {...register("matKhau", {
             
            })}
          />
          {errors.matKhau && <span>{errors.matKhau.message};</span>}
        </div>
        <div className="form-item fullName animate__animated animate__fadeInRight animate__delay-1s">
          <label htmlFor="">Full name:</label>
          <input
            type="text"
            {...register("hoTen", {
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
          {errors.hoTen && <span>{errors.hoTen.message};</span>}
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
            {...register("soDT", {
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
          {errors.soDT && <span>{errors.soDT.message}</span>}
        </div>
        <div className="buttons">
          <button className="updateBtn form-item email animate__animated animate__fadeInUp animate__delay-1s">
            Update
          </button>
          <button
            className="cancelBtn animate__animated animate__fadeInUp animate__delay-2s"
            // onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
