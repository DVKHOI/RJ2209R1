import axios from "axios";
import { useState } from "react";
import styles from "../../styles/Weather.module.css";
export default function Weather() {
  const [city, setCity] = useState("");
  const [showWeather, setShowWeather] = useState({
    main: "",
    humidity: "",
    temp: "",
    icon: "",
    wind: "",
  });
  let data = {};
  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };
  const handleSubmitWeather = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8d3d967b02884edab68ed2e64ad62d6f`
      );
      data = await response.data;
      console.log(data);
      setShowWeather({
        main: data.weather[0].main,
        humidity: data.main.humidity,
        temp: data.main.temp,
        icon: data.weather.icon,
        wind: data.wind.speed,
      });
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <div className={styles.formInput}>
          <input
            type="text"
            placeholder=" "
            className={styles.inputSearch}
            onChange={handleChangeCity}
          />
          <label className={styles.lable} htmlFor="username">
            City
          </label>
        </div>{" "}
        <button
          type="submit"
          className={styles.btnSearch}
          onClick={handleSubmitWeather}
        >
          Search
        </button>
      </div>
      <hr />
      {city && (
        <div className={styles.main}>
          <img src="" alt="icon" className={styles.icon} />
          <div className={styles.temp}>{showWeather.temp}</div>
          <div className={styles.info}>
            <div>Main:{showWeather.main}</div>
            <div>Humidity:{showWeather.humidity}</div>
            <div>Wind:{showWeather.wind}</div>
          </div>
        </div>
      )}
    </div>
  );
}
// https://api.openweathermap.org/data/2.5/weather?q=HaNoi&appid=8d3d967b02884edab68ed2e64ad62d6f
