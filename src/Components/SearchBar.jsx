import "./SearchBar.css";

const SearchBar = ( {searchWeather, cityName, setCityName } ) => {
  return (
    <div className="search-box">

      <input type="text" placeholder="Enter city name..." className="city-input" value={cityName}
       onChange={(e) => setCityName(e.target.value)}/>
      <button className="search-btn" onClick={searchWeather}>🔍 Search</button>

    </div>
  );
};

export default SearchBar;