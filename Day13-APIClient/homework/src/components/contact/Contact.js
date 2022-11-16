import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [contactList, setContactList] = useState([]);
  console.log(
    "🚀 ~ file: Contact.js ~ line 7 ~ Contact ~ contactList",
    contactList
  );
  const navigate = useNavigate();
  const url = "http://localhost:3001/contact";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setContactList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleCreate = () => {
    navigate("/contact/add");
  };
  const handleEditContact = (contectID) => {
    navigate("/contact/edit", { state: { id: contectID } });
  };
  const handleDeleteContact = (contectID) => {
    const confirm = window.confirm("Are you sure you want to delete");
    if (confirm) {
      axios
        .delete(`${url}/${contectID}`)
        .then((res) => {
          setContactList(
            contactList.filter((contect) => contect.id !== contectID)
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div className="container pt-3 ">
        <div className="mx-auto content">
          <div className="flex-row justify-between d-flex w-full max-w-[1000px]">
            <h2>Contact List</h2>
            <button className="mr-10 btn btn-success" onClick={handleCreate}>
              Add Contact
            </button>
          </div>
          {/* {loading && <div className="">Loading...</div>} */}
          <div className="overflow-x-auto relative w-full max-w-[1000px] mt-5 select-none">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 text-blue-400">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-blue-400">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-blue-400">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-3 text-blue-400">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {contactList.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="flex-row items-center justify-start px-6 py-2 gap-x-2 d-flex">
                      <img
                        src={item.img.Url}
                        // src=""
                        alt="error"
                        className="w-10 h-10 bg-blue-400 rounded-full"
                      />
                      <span>{item.name}</span>
                    </td>
                    <td className="px-6 py-2">{item.email}</td>
                    <td className="px-6 py-2">{item.phone}</td>
                    <td className="px-6 py-2">
                      <button
                        className="p-2 mt-2 mr-2 text-xl text-yellow-500 rounded-md "
                        onClick={() => handleEditContact(item.id)}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button
                        className="p-2 mt-2 text-xl text-red-500 rounded-md "
                        onClick={() => handleDeleteContact(item.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
