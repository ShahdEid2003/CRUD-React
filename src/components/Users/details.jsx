import React from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
export default function details() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { register, handleSubmit, setValue } = useForm();

    const getDetails = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_BURL}/users/${id}`);
        setValue("userName", data.user.userName);
        setValue("email", data.user.email);
        setValue("password", data.user.password);
        setValue("phone", data.user.phone);
        
    };
    useEffect(() => {
        getDetails();
    }, []);
    const updateUser = async (value) => {
        const response = await axios.put(
            `${import.meta.env.VITE_BURL}/users/${id}`,
            {
                userName: value.userName
            }
        );
    
        if (response.status === 200) {
            navigate('/users');
        }
    };
    
  return (
     <>
          <form onSubmit={handleSubmit(updateUser)}>
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
                disabled
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
                disabled
              />
              <label htmlFor="phone">phone Number</label>
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              update
            </button>
          </form>
         
        </>
  )
}
