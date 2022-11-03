import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const { state } = useLocation();
  console.log("🚀 ~ file: Home.js ~ line 6 ~ Home ~ state", state);
  const navigate = useNavigate();
  return (
    <div className="overflow-x-auto relative w-full max-w-[500px] mx-auto mt-5">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Account
            </th>
            {/* <th scope="col" className="px-6 py-3">
              Password
            </th> */}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">{state.form.account}</td>
            {/* <td className="px-6 py-4">{state.passwordID}</td> */}
          </tr>
        </tbody>
      </table>
      <button
        className="p-1 mt-3 w-[100px] border border-none bg-blue-500 rounded-lg"
        onClick={(e) => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
};

export default Home;
