import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function useCreate({ initialUrl, navi, formId }) {
  const [url] = useState(initialUrl);
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    axios
      .post(url, values)
      .then((res) => {
        navigate(`/${navi}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEditContact = (values) => {
    axios
      .put(`${url}/${formId}`, values)
      .then((res) => {
        navigate(`/${navi}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return {
    handleSubmit,
    handleEditContact,
    url,
  };
}
