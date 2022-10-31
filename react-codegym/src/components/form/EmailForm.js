import React from "react";
import { Formik, Form, useField, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
const EmailForm = () => {
  const [form, setForm] = useState({ email: "", title: "", message: "" });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitForm = (values, actions) => {
    alert(`Sent successfully!!!`);
    setForm({ email: "", title: "", message: "" });
  };
  const validateSchema = Yup.object({
    email: Yup.string()
      .email("Please enter in valid email")
      .required("Required"),
    title: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  });
  return (
    <Formik
      initialValues={form}
      enableReinitialize={true}
      validationSchema={validateSchema}
      onSubmit={handleSubmitForm}
    >
      {({ isSubmitting }) => (
        <Form className="w-full max-w-[500px] mx-auto p-5" autoComplete="off">
          <div className="flex flex-col p-3">
            <label htmlFor="email" className="cursor-pointer ">
              To
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
            <label htmlFor="title" className="cursor-pointer ">
              Title
            </label>
            <Field
              className="w-full p-3 border border-gray-300 rounded-md"
              id="title"
              name="title"
              value={form.title || ""}
              onChange={handleChange}
            ></Field>
            <ErrorMessage
              component="div"
              name="title"
              className="text-sm text-red-500"
            ></ErrorMessage>
          </div>

          <div className="flex flex-col p-3">
            <label htmlFor="message" className="cursor-pointer ">
              Message
            </label>
            <Field
              className="w-full p-3 border border-gray-300 rounded-md"
              id="message"
              name="message"
              as="textarea"
              value={form.message || ""}
              onChange={handleChange}
            ></Field>
            <ErrorMessage
              component="div"
              name="message"
              className="text-sm text-red-500"
            ></ErrorMessage>
          </div>
          <input type="file" />
          <div>
            <button
              disabled={isSubmitting}
              className="w-full max-w-[200px] text-white bg-purple-500 p-3 rounded-md mt-3"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 ">
      <label htmlFor="props.id || props.name">{label}</label>
      <input
        className="p-2 border border-gray-200 w-full max-w-[300px]"
        type="text"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500 border">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2 ">
      <label htmlFor="props.id || props.name">{label}</label>
      <textarea
        type="textarea"
        className="p-2 border border-gray-200 w-full max-w-[300px] h-[100px] resize-none"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default EmailForm;
