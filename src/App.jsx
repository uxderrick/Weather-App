import { useEffect, useState } from "react";
import "./App.css";

const API_URL =
  "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=986e54ddb6dbdf1b9c5dc2d87eac3622";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const searchWeather = async (location) => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=986e54ddb6dbdf1b9c5dc2d87eac3622`
    );
    // `${API_URL}`
    const data = await response.json();

    // setMovies(data.Search);
    console.log(data);
  };

  useEffect(() => {
    searchWeather("Accra");
  }, []);

  //interface
  return (
    <>
      <div>
        <h1>Weather App</h1>
      </div>
    </>
  );
}

export default App;
