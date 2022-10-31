import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
const validateSchema = Yup.object().shape({
  title: Yup.string().required(),
  author: Yup.string().required(),
  quantity: Yup.number().min(1).max(100).required(),
});

const QuanLySach = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    quantity: null,
  });
  const [bookShelf, setBookShelf] = useState([
    {
      title: "Rung Xa Nu",
      author: "Quang Tien",
      quantity: 10,
    },
    {
      title: "Buoc Chan Tren Da",
      author: "Ta Hien",
      quantity: 50,
    },
  ]);
  const [mode, setMode] = useState({ status: "add", action: "Submit" });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const editBook = (index) => {
    setMode({ status: "edit", action: "Save", selectIndex: index });
    setForm(bookShelf[index]);
  };
  const deleteBook = (index) => {
    setBookShelf(bookShelf.filter((prev, key) => key !== index));
  };
  return (
    <div>
      <Formik
        initialValues={form}
        enableReinitialize={true}
        validationSchema={validateSchema}
        onSubmit={(values) => {
          if (mode.status === "add") {
            alert("You add one item success!");
            bookShelf.push(values);
            setBookShelf([...bookShelf]);
            setForm({
              title: "",
              author: "",
              quantity: null,
            });
          } else {
            alert("You edit one item success!");
            bookShelf[mode.selectIndex] = values;
            setBookShelf([...bookShelf]);
            setMode({ status: "add", action: "Submit", selectIndex: null });
            setForm({
              title: "",
              author: "",
              quantity: null,
            });
          }
        }}
      >
        <Form className="flex flex-col mx-auto w-full max-w-[300px] mt-5">
          <h1 className="mb-3 text-2xl font-bold">Contact Form</h1>
          <Field
            className="w-full max-w-[300px] p-2 rounded-lg border border-gray-300 mb-2"
            name="title"
            value={form.title || ""}
            placeholder="Enter your title"
            onChange={handleChange}
          ></Field>
          <ErrorMessage
            component="div"
            name="title"
            className="mb-1 text-sm text-red-400"
          />
          <Field
            className="w-full max-w-[300px] p-2 rounded-lg border border-gray-300 mb-2"
            name="author"
            value={form.author || ""}
            placeholder="Enter your author"
            onChange={handleChange}
          ></Field>
          <ErrorMessage
            component="div"
            name="author"
            className="mb-1 text-sm text-red-400"
          />
          <Field
            className="w-full max-w-[300px] p-2 rounded-lg border border-gray-300 mb-3"
            name="quantity"
            type="number"
            value={form.quantity || ""}
            placeholder="Enter your quantity"
            onChange={handleChange}
          ></Field>
          <ErrorMessage
            component="div"
            name="quantity"
            className="mb-1 text-sm text-red-400"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="w-[100px] p-3 text-white bg-purple-400 rounded-xl"
            >
              {mode.action}
            </button>
            <button
              type="reset"
              className="w-[100px] p-3 text-white bg-green-400 rounded-xl"
            >
              Reset
            </button>
          </div>
        </Form>
      </Formik>
      <div className="overflow-x-auto relative w-full max-w-[1000px] mx-auto mt-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Author
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {bookShelf.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{item.title}</td>
                <td className="px-6 py-4">{item.author}</td>
                <td className="px-6 py-4">{item.quantity}</td>
                <td className="px-6 py-4">
                  <button
                    className="w-full max-w-[70px] text-white bg-purple-500 p-2 rounded-md mt-2 mr-2"
                    onClick={(e) => editBook(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="w-full max-w-[70px] text-white bg-red-500 p-2  rounded-md mt-2"
                    onClick={(e) => deleteBook(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default QuanLySach;

/**
 *  <div className="overflow-x-auto relative w-full max-w-[1000px] mx-auto mt-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Author
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {bookShelf.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{item.title}</td>
                <td className="px-6 py-4">{item.author}</td>
                <td className="px-6 py-4">{item.quantity}</td>
                <td className="px-6 py-4">
                  <button
                    className="w-full max-w-[70px] text-white bg-purple-500 p-2 rounded-md mt-2"
                    onClick={(e) => editBook(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="w-full max-w-[70px] text-white bg-purple-500 p-2  rounded-md mt-2"
                    onClick={(e) => deleteBook(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
 */
