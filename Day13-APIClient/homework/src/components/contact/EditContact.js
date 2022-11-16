import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EditContact = () => {
  const { state } = useLocation();
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/contact/${state.id}`)
      .then((response) => {
        setForm(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [state]);
  const formSchema = Yup.object().shape({
    name: Yup.string().max(100).required(),
    email: Yup.string().email().required(),
    phone: Yup.number().required(),
    // image: Yup.string().url().required(),
  });
  const handleEditContact = (values) => {
    axios
      .put(`http://localhost:3001/contact/${form.id}`, values)
      .then((res) => {
        alert("Success!");
        navigate("/contact");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Formik
        initialValues={form}
        enableReinitialize={true}
        validationSchema={formSchema}
        onSubmit={handleEditContact}
      >
        <Form className="w-full max-w-[500px] my-5 mx-auto" autoComplete="off">
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
              value={form.name || ""}
              placeholder="Enter your name"
              className="px-3 py-2 bg-gray-200 border border-gray-400 rounded-lg outline-none focus:ring-1 focus-within:border-green-500 focus-within:bg-white "
              onChange={handleChange}
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
              value={form.email || ""}
              placeholder="Enter your email address"
              className="px-3 py-2 bg-gray-200 border border-gray-400 rounded-lg outline-none focus:ring-1 focus-within:border-green-500 focus-within:bg-white "
              onChange={handleChange}
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
              value={form.phone || ""}
              placeholder="Enter your phone"
              className="px-3 py-2 bg-gray-200 border border-gray-400 rounded-lg outline-none focus:ring-1 focus-within:border-green-500 focus-within:bg-white "
              onChange={handleChange}
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

export default EditContact;
