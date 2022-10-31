import React from "react";

const ThucHanhFormRegister = () => {
  const [form, setForm] = React.useState({});
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    console.log(form);
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const isValid =
      form.userName && form.email && form.password && form.confirmPassword;
    alert(isValid ? "Sign in success!!!" : "Please fill out all the fields!!!");
  };
  return (
    <form className="p-10" autoComplete="off">
      <MyInput
        label="UserName"
        name="userName"
        placeholder="Enter your username"
        onChange={handleChange}
      ></MyInput>
      <MyInput
        label="Email"
        name="email"
        placeholder="Enter your email"
        type="email"
        onChange={handleChange}
      ></MyInput>
      <MyInput
        label="Password"
        name="password"
        placeholder="Enter your password"
        type="password"
        onChange={handleChange}
      ></MyInput>
      <MyInput
        label="Confirm password"
        name="confirmPassword"
        placeholder="Enter your confirm password"
        type="password"
        onChange={handleChange}
      ></MyInput>
      <div>
        <button
          className="w-full max-w-[200px] text-white bg-purple-500 p-3 rounded-md mt-3"
          onClick={handleSubmitForm}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
const MyInput = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-2 ">
      <label htmlFor="props.id || props.name">{label}</label>
      <input
        className="p-2 border border-gray-200 w-full max-w-[300px]"
        type="text"
        {...props}
      />
    </div>
  );
};
export default ThucHanhFormRegister;
