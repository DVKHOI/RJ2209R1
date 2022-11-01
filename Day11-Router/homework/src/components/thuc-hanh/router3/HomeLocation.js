import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryLocation from "./CategoryLocation";
import ProductLocation from "./ProductLocation";
const HomeLocation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CategoryLocation />}></Route>
        <Route path="product" element={<ProductLocation />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default HomeLocation;
