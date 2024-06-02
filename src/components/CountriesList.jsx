import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

import CountriesListShimmer from "./CountriesListShimmer";

function CountriesList({query}) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  if (!countriesData.length) {
    return <CountriesListShimmer />;
  }
  return (
    <div className="countries-container">
      {countriesData
        .filter(
          (country) =>
            country.name.common.toLowerCase().includes(query) ||
            country.region.toLowerCase().includes(query)
        )
        .map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}
              data={country}
            />
          );
        })}
    </div>
  );
}

export default CountriesList;
