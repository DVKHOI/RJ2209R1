import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);

    axios
      .get("http://localhost:3001/user")
      .then((response) => {
        setUserList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      });
  }, []);
  const handleCreate = () => {
    navigate("/user/create");
  };
  const handleEditUser = (userID) => {
    navigate("/user/userDetail", { state: { id: userID } });
  };
  const handleDeleteUser = (userID) => {
    const confirm = window.confirm("Are you sure you want to delete this user");
    if (confirm) {
      axios
        .delete(`http://localhost:3001/user/${userID}`)
        .then((res) => {
          setUserList(userList.filter((user) => user.id !== userID));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      <div className="container pt-3">
        <h2>Users List</h2>
        <button className="btn btn-success" onClick={handleCreate}>
          Add new user
        </button>
        {loading && <div className="">Loading...</div>}
        <div className="overflow-x-auto relative w-full max-w-[800px] mt-5 select-none">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-blue-400">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 text-blue-400">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-blue-400">
                  Birthday
                </th>
                <th scope="col" className="px-6 py-3 text-blue-400">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user) => (
                <tr
                  key={user.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-2">{user.id}</td>
                  <td className="px-6 py-2">{user.name}</td>
                  <td className="px-6 py-2">{user.birthday}</td>
                  <td className="px-6 py-2">
                    <button
                      className="w-full max-w-[70px] text-white bg-purple-500 p-2 rounded-md mt-2 mr-2"
                      onClick={(e) => handleEditUser(user.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="w-full max-w-[70px] text-white bg-red-500 p-2  rounded-md mt-2"
                      onClick={(e) => handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default User;
