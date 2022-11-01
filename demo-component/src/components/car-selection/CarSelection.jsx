import React, { useState } from "react";

const CarSelection = () => {
  const carList = ["Mescedes S600", "BMW 750i", "LX 570"];
  const colorList = ["Black", "Gold", "White"];
  const [car, setCar] = useState(carList[0]);
  const [color, setColor] = useState(colorList[0]);
  const handleSelectCar = (e) => {
    setCar((car) => e);
  };
  const handleSelectColor = (e) => {
    setColor((color) => e);
  };

  return (
    <div className="main">
      <div className="main-car">
        <span>Select a car</span>

        <select value={car} onChange={(e) => handleSelectCar(e.target.value)}>
          {carList.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="main-color">
        <span>Select a color</span>
        <select
          value={color}
          onChange={(e) => handleSelectColor(e.target.value)}
        >
          {colorList.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <h1>
        You select a {car} - {color}
      </h1>
    </div>
  );
};

export default CarSelection;
