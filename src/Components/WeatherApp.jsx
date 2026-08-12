const cityWeatherNames = [
  {
    name: "lahore",
    temperature: "35°C",
    condition: "Sunny",
    humidity: "65%",
    windSpeed: "15 km/h",
    weatherIcon: "☀️",
  },
  {
    name: "karachi",
    temperature: "41°C",
    condition: "Sunny",
    humidity: "45%",
    windSpeed: "25 km/h",
    weatherIcon: "☀️",
  },
  {
    name: "abbottabad",
    temperature: "20°C",
    condition: "Cloudy",
    humidity: "95%",
    windSpeed: "10 km/h",
    weatherIcon: "☁️",
  },
  {
    name: "peshawar",
    temperature: "26°C",
    condition: "Rainy",
    humidity: "73%",
    windSpeed: "33 km/h",
    weatherIcon: "🌧️",
  },
];


import SearchBar from "./SearchBar";
import WeatherInfo from "./WeatherInfo";
import { useState } from "react";

const WeatherApp = () => {
   
  let [cityName, setCityName] = useState("");
  let [selectedCity, setSelectedCity] = useState(null);
  

  let searchWeather = () => {
    if(cityName.trim() === "") {
      alert("Please enter your city name first...");
      return;
    }

    let foundCity = cityWeatherNames.find((city) => 
    city.name.toLowerCase() === cityName.toLowerCase());
    if(foundCity) {
      setSelectedCity(foundCity);
    } else {
      alert("city not found");
      setSelectedCity(null);
    }

    setCityName("");
  }
  return (
    <div className="weather-container">
      <div className="weather-card">

        <h1 className="app-title">🌤 Weather App</h1>
        <p className="app-subtitle">Search weather by city</p>

        <SearchBar searchWeather={searchWeather} cityName={cityName} setCityName={setCityName}/>
        <WeatherInfo city={selectedCity}/>

      </div>
    </div>
  );
};

export default WeatherApp;