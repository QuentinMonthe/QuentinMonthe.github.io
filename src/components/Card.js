import React from "react";

const Card = (props) => {
  return (
    <li className="card">
      <div className="card-img">
        <img
          src={props.value.flags.svg}
          alt={"Drapeau " + props.value.translations.fra.common}
        />
        <h2>{props.value.translations.fra.common}</h2>
      </div>
      <div className="infos">
        <h4>Cap : {props.value.capital}</h4>
        <p>
          Pop : {props.value.population.toLocaleString()} hab.
          <br />
          Sup : {props.value.area.toLocaleString()} Km<sup>2</sup>
        </p>
      </div>
    </li>
  );
};

export default Card;
