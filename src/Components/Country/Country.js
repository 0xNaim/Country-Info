import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Country.css";

const Country = (props) => {
  const { name, flag } = props.country;
  return (
    <div className="container content-wrapper">
      <div className="country-info">
        <h4>{name}</h4>
        <img src={flag} alt="" />
      </div>
      <div>
        <Link to={`/country/${name}`}>
          <Button className="detail-btn" variant="contained" color="primary">
            See Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Country;
