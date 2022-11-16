import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookCreate = () => {
  const [form, setForm] = useState({
    title: "",
    quantity: "",
  });
  const navigate = useNavigate();
  const handleChangeInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const formSchema = Yup.object().shape({
    title: Yup.string().max(100).required(),
    quantity: Yup.number().required(),
  });
  return (
    <div>
      <Formik
        initialValues={form}
        enableReinitialize={true}
        validationSchema={formSchema}
        onSubmit={(values) => {
          axios
            .post(`http://localhost:3001/books`, values)
            .then((res) => {
              navigate("/books");
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        <Form className="w-full max-w-[500px] my-5 mx-auto" autoComplete="off">
          <div className="flex flex-col mb-3">
            <label
              htmlFor="name"
              className="py-2 text-sm font-medium cursor-pointer"
            >
              Title
            </label>
            <Field
              name="title"
              id="title"
              placeholder="Enter your title"
              className="px-3 py-2 bg-gray-200 border border-gray-400 rounded-lg outline-none focus:ring-1 focus-within:border-green-500 focus-within:bg-white "
              onChange={handleChangeInput}
            ></Field>
            <ErrorMessage
              component="div"
              name="title"
              className="text-sm text-red-500"
            ></ErrorMessage>
          </div>
          <div className="flex flex-col mb-3">
            <label
              htmlFor="birthday"
              className="py-2 text-sm font-medium cursor-pointer"
            >
              Quantity
            </label>
            <Field
              name="quantity"
              id="quantity"
              type="number"
              placeholder="Enter your quatity"
              className="px-3 py-2 bg-gray-200 border border-gray-400 rounded-lg outline-none focus:ring-1 focus-within:border-green-500 focus-within:bg-white "
              onChange={handleChangeInput}
            ></Field>
            <ErrorMessage component="div" name="quantity"></ErrorMessage>
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

export default BookCreate;
