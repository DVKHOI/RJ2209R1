import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employees from "./Employees";
import EmployeesDetail from "./EmployeesDetail";
import Login from "./Login";
const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/employess" element={<Employees />}></Route>
        <Route path="/employeesDetail" element={<EmployeesDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
