import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Product = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  return (
    <div className="p-5">
      <h1>Product Details: {categoryId}</h1>
      <button
        className="p-1 mt-3 w-[100px] border border-none bg-blue-500 rounded-lg"
        onClick={(e) => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
};

export default Product;
