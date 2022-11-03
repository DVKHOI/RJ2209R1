import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  console.log(navigate);

  const [form, setForm] = useState({
    account: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.account === "admin@gmail.com" && form.password === "letmein") {
      navigate("/home", {
        state: { accountID: form.account, passwordID: form.password },
      });
    } else {
      alert("Login failed");
    }
  };
  return (
    <div className="p-5 w-full max-w-[500px] mx-auto">
      <h1 className="font-semibold text-2xl text-center mb-5">Login</h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="account">Account</label>
          <input
            className="p-2 w-full border border-gray-200 rounded-lg mb-4"
            type="text"
            name="account"
            value={form.account || ""}
            id="account"
            placeholder="Enter your account"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="password">Password</label>
          <input
            className="p-2 w-full border border-gray-200 rounded-lg"
            type="password"
            name="password"
            value={form.password || ""}
            id="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            className="w-[200px] text-white  p-2 bg-purple-500 rounded-lg mt-3"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
