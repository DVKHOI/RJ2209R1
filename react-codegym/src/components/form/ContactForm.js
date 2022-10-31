import React from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
const valiSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      "Please fill in the correct format @gmail.com"
    )
    .required("Required"),
  phone: Yup.number().required("Required"),
  message: Yup.string()
    .min(10, "Must have 10 or more characters")
    .required("Required"),
});
const ContactForm = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <Formik
        initialValues={form}
        enableReinitialize={true}
        validationSchema={valiSchema}
        onSubmit={(e) => {
          alert("Success!");
        }}
      >
        <Form className="flex flex-col w-full max-w-[500px] mx-auto">
          <div className="flex flex-col p-3">
            <label htmlFor="username" className="cursor-pointer ">
              User name
            </label>
            <Field
              className="w-full p-3 border border-gray-300 rounded-md"
              id="username"
              name="username"
              value={form.username || ""}
              onChange={handleChange}
            ></Field>
            <ErrorMessage
              component="div"
              name="username"
              className="text-sm text-red-500"
            ></ErrorMessage>
          </div>
          <div className="flex flex-col p-3">
            <label htmlFor="email" className="cursor-pointer ">
              Email address
            </label>
            <Field
              className="w-full p-3 border border-gray-300 rounded-md"
              id="email"
              name="email"
              value={form.email || ""}
              onChange={handleChange}
            ></Field>
            <ErrorMessage
              component="div"
              name="email"
              className="text-sm text-red-500"
            ></ErrorMessage>
          </div>
          <div className="flex flex-col p-3">
            <label htmlFor="phone" className="cursor-pointer ">
              Tel
            </label>
            <Field
              className="w-full p-3 border border-gray-300 rounded-md"
              id="phone"
              name="phone"
              value={form.phone || ""}
              onChange={handleChange}
            ></Field>
            <ErrorMessage
              component="div"
              name="phone"
              className="text-sm text-red-500"
            ></ErrorMessage>
          </div>
          <div className="flex flex-col p-3 cursor-pointer">
            <label htmlFor="message" className="cursor-pointer ">
              Message
            </label>
            <Field
              className="w-full p-3 border border-gray-300 rounded-md"
              id="message"
              name="message"
              type="textarea"
              value={form.message || ""}
              onChange={handleChange}
            ></Field>
            <ErrorMessage
              component="div"
              name="message"
              className="text-sm text-red-500"
            ></ErrorMessage>
          </div>
          <div className="w-full p-3 mt-2 text-center text-white bg-blue-500 rounded-lg">
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
