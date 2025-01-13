import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from 'react-router-dom'

export default function users() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_BURL}/users`);
    setUsers(data.users);
  };

  useEffect(() => {
    getUsers();
  }, [users]);
  const deleteUser = async (id) => {
    await axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`);

  };
  return (
    <>
    <div class="row">
      {users.map((user) => (
        
          <div class="col-lg-4 p-2 ">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Name:{user.userName}</h5>
                <p class="card-text">Email:{user.email}</p>

                <button onClick={()=>deleteUser(user._id)} className="btn btn-danger">
                  delete
                </button>
                <Link className="btn btn-secondary" to={`/users/${user._id}`}>
                    Update
                </Link>
              </div>
            </div>
          </div>
        
      ))}
      </div>
    </>
  );
}
