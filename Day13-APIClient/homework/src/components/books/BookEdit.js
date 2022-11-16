import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const BookEdit = () => {
  const { state } = useLocation();
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const formSchema = Yup.object().shape({
    title: Yup.string().max(100).required(),
    quantity: Yup.number().required(),
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/books/${state.id}`)
      .then((response) => {
        setForm(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [state]);
  return (
    <div>
      <Formik
        initialValues={form}
        enableReinitialize={true}
        validationSchema={formSchema}
        onSubmit={(values) => {
          console.log(values);
          axios
            .put(`http://localhost:3001/books/${form.id}`, values)
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
              value={form.title || ""}
              placeholder="Enter your title"
              className="px-3 py-2 bg-gray-200 border border-gray-400 rounded-lg outline-none focus:ring-1 focus-within:border-green-500 focus-within:bg-white "
              onChange={handleChange}
            ></Field>
            <ErrorMessage
              component="div"
              name="title"
              className="text-sm text-red-500"
            ></ErrorMessage>
          </div>
          <div className="flex flex-col mb-3">
            <label
              htmlFor="quantity"
              className="py-2 text-sm font-medium cursor-pointer"
            >
              Quantity
            </label>
            <Field
              name="quantity"
              id="quantity"
              value={form.quantity || ""}
              type="number"
              placeholder="Enter your quatity"
              className="px-3 py-2 bg-gray-200 border border-gray-400 rounded-lg outline-none focus:ring-1 focus-within:border-green-500 focus-within:bg-white "
              onChange={handleChange}
            ></Field>
            <ErrorMessage component="div" name="quantity"></ErrorMessage>
          </div>

          <button
            type="submit"
            className="w-full max-w-[200px] py-3 block mx-auto rounded-lg bg-blue-500 text-white font-semibold"
          >
            Update
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookEdit;
