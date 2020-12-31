import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Home = () => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountry(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {country.map((country) => (
        <Country country={country} key={country.name}></Country>
      ))}
    </div>
  );
};

export default Home;
