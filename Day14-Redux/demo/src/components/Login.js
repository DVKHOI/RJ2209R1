import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const schema = yup.object({
    username: yup.string().required("Please enter your username"),
    password: yup
      .string()
      .min(6, "Must be at least 6 characters")
      .required("Please enter your password"),
  });

  const userlogined = useSelector((state) => state.userlogined);
  const handleChangeInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const login = () => {
    dispatch({ type: "login", payload: user });
  };

  useEffect(() => {
    if (userlogined.username) {
      navigate("/users");
    }
  });

  return (
    <Formik
      initialValues={user}
      enableReinitialize={true}
      validationSchema={schema}
      onSubmit={() => {}}
    >
      <Form autoComplete="off" className="container pt-3">
        <p className="mb-2">User name</p>
        <Field
          name="username"
          placeholder="Enter a task title"
          value={user.username || ""}
          onChange={handleChangeInput}
          className="rounded-3 border px-3 py-2"
        ></Field>
        <ErrorMessage
          component="div"
          name="username"
          className="text-danger"
        ></ErrorMessage>
        <p className="mb-2">Password</p>
        <Field
          name="password"
          type="password"
          placeholder="Enter a task title"
          value={user.password || ""}
          onChange={handleChangeInput}
          className="rounded-3 border px-3 py-2"
        ></Field>
        <ErrorMessage
          component="div"
          name="password"
          className="text-danger"
        ></ErrorMessage>
        <button
          type="button"
          onClick={() => {
            login();
          }}
          className="btn btn-primary d-block mt-3"
        >
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default Login;
