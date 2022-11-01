import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryLocation = () => {
  const navigate = useNavigate();
  const handleDataToProduct = (e) => {
    navigate("/product", { state: { categoryID: e.target.value } });
  };
  return (
    <div className="p-5">
      <h2 className="inline-block"> Choose your library: </h2>
      <select defaultValue="default" onChange={(e) => handleDataToProduct(e)}>
        <option value="default" disabled hidden>
          Option...
        </option>
        <option value="ReactJS">ReactJS</option>
        <option value="VueJS">VueJS</option>
        <option value="NextJS">NextJS</option>
        <option value="Angular">Angular</option>
      </select>
    </div>
  );
};

export default CategoryLocation;
