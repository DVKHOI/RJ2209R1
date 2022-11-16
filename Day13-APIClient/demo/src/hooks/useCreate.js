import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function useCreate(initialUrl) {
  const [form, setFrom] = useState({
    name: "",
    birthday: "",
  });
  const [url] = useState(initialUrl);
  const navigate = useNavigate();
  const handleChangeInput = (e) => {
    setFrom({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const formSchema = Yup.object().shape({
    name: Yup.string().max(100).required(),
    birthday: Yup.string().min(8).max(10),
  });
  const handleSubmit = (values) => {
    axios
      .post(url, values)
      .then((res) => {
        navigate("/user");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEditUser = (values) => {
    axios
      .put(`http://localhost:3001/user/${form.id}`, values)
      .then((res) => {
        navigate("/user");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return {
    handleChangeInput,
    handleSubmit,
    handleEditUser,
    form,
    setFrom,
    url,
    formSchema,
  };
}
