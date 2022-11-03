import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

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
    if (form.account === "admin@gmail.com" && form.password === "1") {
      navigate("/employess", {
        state: { form },
      });
    } else {
      alert("Login failed");
    }
  };
  return (
    <div className="p-5 w-full max-w-[500px] mx-auto">
      <h1 className="mb-5 text-2xl font-semibold text-center">Login</h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="account">Account</label>
          <input
            className="w-full p-2 mb-4 border border-gray-200 rounded-lg"
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
            className="w-full p-2 border border-gray-200 rounded-lg"
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
