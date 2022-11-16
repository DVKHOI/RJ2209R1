// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function useCreate({ initialUrl,  navi }) {
//   const [url] = useState(initialUrl);
//   const navigate = useNavigate();

//   const handleSubmit = (values) => {
//     axios
//       .post(url, values)
//       .then((res) => {
//         navigate(`/${navi}`);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const handleEditUser = (values) => {
//     axios
//       .put(`http://localhost:3001/books/${form.id}`, values)
//       .then((res) => {
//         navigate("/books");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   return {
//     handleSubmit,
//     handleEditUser,

//     url,
//   };
// }
