import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./Category";
import Product from "./Product";
const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Category />}></Route>
        <Route path="/product/:categoryId" element={<Product />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Home;
