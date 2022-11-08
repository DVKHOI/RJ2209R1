import axios from "axios";
import { useEffect, useState } from "react";

export const getStaticProps = async () => {
  const [city, setCity] = useState("HaNoi");

  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8d3d967b02884edab68ed2e64ad62d6f`
  );
  useEffect(() => {
    getStaticProps();
    const handleChangeCity = (e) => {
      setCity(e.target.value);
    };
  }, [city]);
  return {
    props: {
      weatherData: response.data,
    },
  };
};
export default function Weather({ weatherData }) {
  // console.log(weatherData);
  return (
    <div>
      <input type="text" onChange={handleChangeCity} />
    </div>
  );
}
// https://api.openweathermap.org/data/2.5/weather?q=HaNoi&appid=8d3d967b02884edab68ed2e64ad62d6f
