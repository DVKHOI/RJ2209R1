import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./User";
import UserDetail from "./UserDetail";
import UserCreate from "./UserCreate";
const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<User />}></Route>
        <Route path="/user/create" element={<UserCreate />}></Route>
        <Route path="/user/userDetail" element={<UserDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
