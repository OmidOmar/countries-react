import { useState } from "react";

const DisplayCountryList = ({ countriesList }) => {
  const [isCountryClicked, setIsCountryClicked] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const handleCountryClick = (e) => {
    let countryDetails = countriesList.filter(
      (x) => x.name.common === e.target.id
    );

    setSelectedCountry(countryDetails);
    if (e.target.localName === "img" || e.target.id === "back")
      setIsCountryClicked(!isCountryClicked);
  };

  return isCountryClicked ? (
    <div>
      <div className="country-container">
        {countriesList.map((x, i) => {
          return (
            <div key={i} className="card">
              <img
                src={x.flags.png}
                id={x.name.common}
                onClick={handleCountryClick}
                alt={x.name.common + " flag"}
              ></img>
              <h5>{x.name.common}</h5>
              <div>
                <p>Population: {x.population}</p>
                <p>Region: {x.region}</p>
                <p>Capital: {x.capital}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div>
      <button id="back" onClick={handleCountryClick}>
        back
      </button>
      <img
        src={selectedCountry[0].flags.png}
        alt={selectedCountry[0].name.common + "'s flag"}
      ></img>
      <div>
        <h3>{selectedCountry[0].name.common}</h3>
      </div>
      <div>
        <p>
          Native Name:{" "}
          {
            selectedCountry[0].name.nativeName[
              Object.keys(selectedCountry[0].name.nativeName)[0]
            ].common
          }
        </p>
        <p>Population: {selectedCountry[0].population}</p>
        <p>Region: {selectedCountry[0].region}</p>
        <p>Sub Region: {selectedCountry[0].subregion}</p>
        <p>Capital: {selectedCountry[0].capital} </p>
      </div>
      <div>
        <p>Top Level Domain: {selectedCountry[0].tld.join(",")} </p>
        <p>
          Currencies:{" "}
          {
            selectedCountry[0].currencies[
              Object.keys(selectedCountry[0].currencies)[0]
            ].name
          }{" "}
        </p>
        <p>
          Languages: {Object.values(selectedCountry[0].languages).join(", ")}
        </p>
      </div>
      <div>
        <p>
          Border Countries{" "}
          {selectedCountry[0].borders
            ? selectedCountry[0].borders
                .map((x) => {
                  let final = countriesList
                    .filter((y) => {
                      return y.fifa === x ? y.name.common : null;
                    })
                    .map((x) => x.name.common);
                  return final;
                })
                .flat()
                .map((h, i) => (
                  <button key={i} id={h} onClick={handleCountryClick}>
                    {h}
                  </button>
                ))
            : null}
        </p>
      </div>
    </div>
  );
};

export default DisplayCountryList;
