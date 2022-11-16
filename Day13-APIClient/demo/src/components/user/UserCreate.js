import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useCreate from "../../hooks/useCreate";

const UserCreate = () => {
  const { handleChangeInput, handleSubmit, form, formSchema } = useCreate(
    "http://localhost:3001/user"
  );

  return (
    <div>
      <Formik
        initialValues={form}
        enableReinitialize={true}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
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
              htmlFor="birthday"
              className="py-2 text-sm font-medium cursor-pointer"
            >
              Birthday
            </label>
            <Field
              name="birthday"
              id="birthday"
              type="date"
              placeholder="Enter your birthday"
              className="px-3 py-2 bg-gray-200 border border-gray-400 rounded-lg outline-none focus:ring-1 focus-within:border-green-500 focus-within:bg-white "
              onChange={handleChangeInput}
            ></Field>
            <ErrorMessage component="div" name="birthday"></ErrorMessage>
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

export default UserCreate;
