import "./App.css";
import { useEffect, useState } from "react";

const object = [
  {
    name: "India",
    value: "IN",
    cities: ["Hyderabad", "Bangalore", "Chennai", "Delhi"],
  },
  { name: "Pakistan", value: "PK", cities: ["Karachi", "SomeCity"] },
  {
    name: "America",
    value: "USA",
    cities: ["Washington DC", "New York", "Texas"],
  },
];

function App() {
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const showCitiesHandler = (countryName) => {
    setHoveredCountry(countryName);
  };

  const hideCitiesHandler = () => {
    setHoveredCountry(null);
  };

  return (
    <div className="App" onClick={() => setHoveredCountry(null)}>
      <ul className="dropdown-menu">
        {object.map((country) => (
          <li
            className="dropdown-submenu hover"
            onMouseEnter={() => showCitiesHandler(country.name)}
            onMouseLeave={hideCitiesHandler}
            key={country.value}
          >
            <a href="https://www.google.com" tabindex="-1">
              {country.name}
            </a>
            {hoveredCountry === country.name && (
              <ul className="Sdropdown-menu">
                {country.cities.map((city) => (
                  <li
                    key={city}
                    className="hover"
                    onMouseEnter={() => showCitiesHandler(country.name)}
                    onMouseLeave={hideCitiesHandler}
                  >
                    <a href="https://www.google.com" tabindex="-1">
                      {city}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
