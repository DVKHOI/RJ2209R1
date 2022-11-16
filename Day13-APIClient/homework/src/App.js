import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/contact/Contact";
import AddContact from "./components/contact/AddContact";
import Book from "./components/books/Book";
import EditContact from "./components/contact/EditContact";
import BookCreate from "./components/books/BookCreate";
import BookEdit from "./components/books/BookEdit";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className=" w-full max-w-[800px] mx-auto">
      <>
        <BrowserRouter>
          <h1>This is a Home page</h1>
          <div className="flex items-center justify-start gap-x-5 ">
            <Link to="/contact"> Contact</Link>
            <Link to="/books"> Book</Link>
          </div>
          <hr />
          <Routes>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/contact/add" element={<AddContact />}></Route>
            <Route path="/contact/edit" element={<EditContact />}></Route>
            <Route path="/books" element={<Book />}></Route>
            <Route path="/books/create" element={<BookCreate />}></Route>
            <Route path="/books/bookEdit" element={<BookEdit />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
