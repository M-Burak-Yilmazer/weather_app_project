import image from "../src/images/weatherLogo.png";
import spinner from "../src/images/Vector.png";
import { useState } from "react";

function App() {
  const [input, setInput] = useState([]);
  console.log(input);

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
      <ul className="list">
        <li>istanbul Turkey</li>
        <li>istanbul Turkey</li>
       
      </ul>
    </div>
  );
}

export default App;
