import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  //Cet element est un use effect qui ne s'execute qu'a l'appel du composant
  const [rangeValue, setRangeValue] = useState([250]);
  const continents = [
    { id: 1, nom: "Africa" },
    { id: 2, nom: "America" },
    { id: 3, nom: "Asia" },
    { id: 4, nom: "Europe" },
    { id: 5, nom: "Oceania" },
  ];
  const [selectRadio, setSelectRadio] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(event) => setRangeValue(event.target.value)}
        />
        {continents.map((continent) => (
          <li>
            <input
              type="radio"
              id={continent.nom}
              name="continentRadio"
              checked={continent.nom === selectRadio}
              onChange={(event) => setSelectRadio(event.target.id)}
            />
            <label htmlFor={continent.nom}>{continent.nom}</label>
          </li>
        ))}
      </ul>
      {selectRadio && (
        <button onClick={() => setSelectRadio("")}>Annuler la recherche</button>
      )}
      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectRadio))
          .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((country) => (
            <Card key={country.flag} value={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
