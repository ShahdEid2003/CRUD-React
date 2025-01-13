import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function create() {
  const { register, control, handleSubmit } = useForm();
  const navigate = useNavigate();
  const registerUser = async (data) => {
    const response = await axios.post(`${import.meta.env.VITE_BURL}/users`,data);
    if (response.status === 201) {
      navigate('/users');
    }
    console.log(response);
  };
  return (
    <>
      <form onSubmit={handleSubmit(registerUser)}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="userName"
            placeholder="User Name"
            {...register("userName")}
          />
          <label htmlFor="userName">userName</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            {...register("email")}
          />
          <label htmlFor="email">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="Password"
            placeholder="Password"
            {...register("password")}
          />
          <label htmlFor="Password">Password</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Phone Number"
            {...register("phone")}
          />
          <label htmlFor="phone">phone Number</label>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Create User
        </button>
      </form>
      <DevTool control={control} />
    </>
  );
}
