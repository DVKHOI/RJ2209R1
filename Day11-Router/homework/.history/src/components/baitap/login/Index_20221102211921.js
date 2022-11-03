import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Link
              class="nav-link"
              className="p-3 mx-[50%] -translate-x-2/4 text-white rounded-lg font-semibold flex items-center justify-center w-[250px] bg-blue-500"
              to="/login"
            >
              Login
            </Link>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
