import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Book = () => {
  const [bookShelf, setBookShelf] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);

    axios
      .get("http://localhost:3001/books")
      .then((response) => {
        setBookShelf(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      });
  }, []);
  const handleCreate = () => {
    navigate("/books/create");
  };
  const handleEditBook = (bookID) => {
    navigate("/books/bookEdit", { state: { id: bookID } });
  };
  const handleDeleteBook = (bookID) => {
    const confirm = window.confirm("Are you sure you want to delete this Book");
    if (confirm) {
      axios
        .delete(`http://localhost:3001/books/${bookID}`)
        .then((res) => {
          setBookShelf(bookShelf.filter((book) => book.id !== bookID));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      <div className="container pt-3">
        <h2>Books List</h2>
        <button className="btn btn-success" onClick={handleCreate}>
          Add new Book
        </button>
        {loading && <div className="">Loading...</div>}
        <div className="overflow-x-auto relative w-full max-w-[800px] mt-5 select-none">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-blue-400">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 text-blue-400">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 text-blue-400">
                  Quatity
                </th>
                <th scope="col" className="px-6 py-3 text-blue-400">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {bookShelf.map((book) => (
                <tr
                  key={book.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-2">{book.id}</td>
                  <td className="px-6 py-2">{book.title}</td>
                  <td className="px-6 py-2">{book.quantity}</td>
                  <td className="px-6 py-2">
                    <button
                      className="p-2 mt-2 mr-2 text-xl text-yellow-500 rounded-md "
                      onClick={(e) => handleEditBook(book.id)}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                      className="p-2 mt-2 text-xl text-red-500 rounded-md "
                      onClick={(e) => handleDeleteBook(book.id)}
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
    </>
  );
};

export default Book;
