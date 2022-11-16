import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const todoSchema = Yup.object().shape({
  title: Yup.string().min(10, "Must to 10 characters ").required(),
});
const TodoList = () => {
  const [todos, setTodos] = React.useState([]);
  const [form, setForm] = React.useState({
    title: "",
  });

  console.log(form);
  React.useEffect(() => {
    axios
      .get("http://localhost:3001/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [form]);
  const handleChangeInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handlerSubmit = (form) => {
    axios
      .post("http://localhost:3001/todos", form)
      .then((res) => {
        alert("You have successfully");
        setForm("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="row">
        <div className="mx-auto col-lg-5">
          <div className="border-0 rounded shadow-sm card position-relative">
            <div className="p-5 card-body">
              <div className="pb-4 mb-4 d-flex flex-column align-items-start justify-content-start border-bottom">
                <div className="mb-3">
                  <h2 className="mb-0 text-uppercase fw-weight-bold">
                    TodoList
                  </h2>
                </div>
                <Formik
                  initialValues={form}
                  enableReinitialize={true}
                  validationSchema={todoSchema}
                  onSubmit={(values) => handlerSubmit(values)}
                >
                  <Form>
                    <Field
                      name="title"
                      value={form.title || ""}
                      onChange={handleChangeInput}
                      placeholder="Enter your title"
                    ></Field>
                    <ErrorMessage component="div" name="title"></ErrorMessage>
                  </Form>
                </Formik>
                <div>
                  <button onClick={() => handlerSubmit(form)}>Submit</button>
                </div>
              </div>
              {todos.map((item) => (
                <div key={item.id} className="mb-3 form-check">
                  <label className="form-check-label" htmlFor="flexCheck1">
                    <span className="pl-1 fst-italic">{item.title}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
