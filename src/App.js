import image from "../src/images/weatherLogo.png";
import spinner from "../src/images/Vector.png";
import { useEffect, useState } from "react";
import axios from "axios";
import WeatherDetail from "./components/WeatherDetail";

function App() {
  const [input, setInput] = useState();
  console.log(input);
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    setWeather([]);
    getWeather();
  }, [input]);
  console.log(weather);
  const API_KEY = process.env.REACT_APP_API_KEY;
  console.log(API_KEY);

  const getWeather = async () => {
    if (!input) {
      return; // input değeri yoksa işlemi sonlandır
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/find?q=${input}&limit=3&units=metric&appid=${API_KEY}&lang=tr`
      );
      setWeather(response.data.list);
    } catch (error) {
      console.error("Hava durumu alınamadı:", error);
      // Hata durumunda gerekli işlemleri yapabilirsiniz
    }
  };
  return (
    <div className="App">
      <img src={image} width="186px" height="32px" alt="" />
      <div>
        <h3 className="title">
          Welcome to <span>TypeWeather</span>
        </h3>
        <p>Choose a location to see the weather forecast.</p>
      </div>
      <div style={{ position: "relative" }}>
        <input
          onChange={(e) => setInput(e.target.value)}
          className="input"
          type="text"
          placeholder="Search location"
        />
        <img className="spinner" src={spinner} alt="" />
      </div>
      <ul className={`list ${weather.length === 1 ? "single-item" : ""}`}>
        {input && weather?.length > 0 ? (
          weather.map((item) => (
            <WeatherDetail key={item.id} weather={item}>
              {item.name} - {item.sys.country}
            </WeatherDetail>
          ))
        ) : input ? (
          <li id="single-item">Weather information not available.</li>
        ) : null}
      </ul>
    </div>
  );
}

export default App;
