import "./WeatherInfo.css";

const WeatherInfo = ( {city} ) => {
  if(!city) {
    return <h3>Search for a city to see the weather.</h3>;
  }
  return (
    <div className="weather-info">

      <div className="weather-icon">{city.weatherIcon}</div>
      <h2 className="city">{city.name}</h2>
      <h1 className="temperature">{city.temperature}</h1>

      <div className="weather-grid">
        <div className="info-card">
          <span>Condition</span>
          <h4>{city.condition}</h4>
        </div>

        <div className="info-card">
          <span>Humidity</span>
          <h4>{city.humidity}</h4>
        </div>

        <div className="info-card">
          <span>Wind Speed</span>
          <h4>{city.windSpeed}</h4>
        </div>

      </div>

    </div>
  );
};

export default WeatherInfo;