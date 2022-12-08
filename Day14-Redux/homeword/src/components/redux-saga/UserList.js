import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
const UserList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.initUsers);

  const ShowListUser = () => {
    dispatch({ type: "FETCH_USER" });
  };
  const DeleteUsers = (id) => {
    axios
      .delete(`http://localhost:3001/users/${id}`)
      .then((res) => {
        dispatch({ type: "FETCH_USER" });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container mt-3">
      <h1 className="text-center">Users List</h1>
      <button
        className="btn btn-info mx-auto d-block mt-3"
        onClick={ShowListUser}
      >
        Get users
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    DeleteUsers(user.id);
                  }}
                >
                  Delete User
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
