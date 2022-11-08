import React, { useEffect, useState } from "react";
import axios from "axios";

const Searchweather = async () => {
  const [city, setCity] = useState("");
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8d3d967b02884edab68ed2e64ad62d6f`
  );
  useEffect(() => {
    const handleChangeCity = (e) => {
      setCity(e.target.value);
    };
  }, [city]);
  console.log(response.data);
  return (
    <div>
      <input type="text" onChange={handleChangeCity} />
    </div>
  );
};

export default Searchweather;
