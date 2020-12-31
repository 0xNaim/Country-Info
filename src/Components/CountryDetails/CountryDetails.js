import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CountryDetails.css";

const CountryDetails = () => {
  const { details } = useParams();
  const [countryDetail, setCountryDetail] = useState([]);
  const {
    name,
    flag,
    population,
    region,
    capital,
    alpha3Code,
    callingCodes,
  } = countryDetail;
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${details}`)
      .then((res) => res.json())
      .then((data) => setCountryDetail(data && data[0]))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="country-details">
      <h2>Name: {name}</h2>
      <img src={flag} alt="" />
      <h3>Population: {population}</h3>
      <h3>Capital: {capital}</h3>
      <h3>Region: {region}</h3>
      <h3>Calling Code: {callingCodes}</h3>
      <h3>Alpha Code3: {alpha3Code}</h3>
    </div>
  );
};

export default CountryDetails;
