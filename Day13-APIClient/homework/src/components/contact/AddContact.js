import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./contact.css";

const AddContact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    image: "",
  });
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const formSchema = Yup.object().shape({
    name: Yup.string().max(100).required(),
    email: Yup.string().email().required(),
    phone: Yup.number().required(),
    // image: Yup.string().url(),
  });
  const handleSubmission = (e) => {
    const fd = new FormData();
    fd.append("file", e.target.files[0]);
    axios
      .post("https://v2.convertapi.com/upload", fd)
      .then((res) => {
        setForm({
          ...form,
          image: res.data,
        });
        console.log(form);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Formik
        initialValues={form}
        enableReinitialize={true}
        validationSchema={formSchema}
        onSubmit={(values) => {
          axios
            .post(`http://localhost:3001/contact`, values)
            .then((res) => {
              navigate("/contact");
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        <Form className="w-full max-w-[500px] my-5 mx-auto" autoComplete="off">
          <div className="flex flex-row items-center mb-3 gap-x-3">
            <img
              // src={imgData.Url}
              src={form.img.Url}
              alt=""
              className="avatar rounded-circle me-4"
            />
            <Field
              type="file"
              name="img"
              value={""}
              onChange={handleSubmission}
              className="custom-file-input"
            ></Field>
            <ErrorMessage
              component="div"
              name="image"
              className="text-sm text-red-500"
            ></ErrorMessage>
          </div>
          <div className="flex flex-col mb-3">
            <label
              htmlFor="name"
              className="py-2 text-sm font-medium cursor-pointer"
            >
              Name
            </label>
            <Field
              name="name"
              id="name"
              placeholder="Enter your name"
              className="px-3 py-2 bg-gray-200 border border-gray-400 rounded-lg outline-none focus:ring-1 focus-within:border-green-500 focus-within:bg-white "
              onChange={handleChangeInput}
            ></Field>
            <ErrorMessage
              component="div"
              name="name"
              className="text-sm text-red-500"
            ></ErrorMessage>
          </div>
          <div className="flex flex-col mb-3">
            <label
              htmlFor="email"
              className="py-2 text-sm font-medium cursor-pointer"
            >
              Email address
            </label>
            <Field
              name="email"
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="px-3 py-2 bg-gray-200 border border-gray-400 rounded-lg outline-none focus:ring-1 focus-within:border-green-500 focus-within:bg-white "
              onChange={handleChangeInput}
            ></Field>
            <ErrorMessage component="div" name="email"></ErrorMessage>
          </div>
          <div className="flex flex-col mb-3">
            <label
              htmlFor="phone"
              className="py-2 text-sm font-medium cursor-pointer"
            >
              Phone
            </label>
            <Field
              name="phone"
              id="phone"
              placeholder="Enter your phone"
              className="px-3 py-2 bg-gray-200 border border-gray-400 rounded-lg outline-none focus:ring-1 focus-within:border-green-500 focus-within:bg-white "
              onChange={handleChangeInput}
            ></Field>
            <ErrorMessage
              component="div"
              name="phone"
              className="text-sm text-red-500"
            ></ErrorMessage>
          </div>
          <button
            type="submit"
            className="w-full max-w-[200px] py-3 block mx-auto rounded-lg bg-blue-500 text-white font-semibold"
          >
            Create
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddContact;
