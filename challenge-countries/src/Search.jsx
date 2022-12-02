import { useEffect, useState } from "react";
import DisplayCountryList from "./DisplayCountryList";




const Search = () => {
  const continents = ["Asia", "Americas", "Oceania", "Africa", "Europe"];
  const [countriesList, setCountriesList] = useState([]);
  const [region, setRegion] = useState("all");

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/${region}`)
      .then((res) => res.json())
      .then((data) =>
        setCountriesList(
          data.sort((x, y) => (x.name.common > y.name.common ? 1 : -1))
        )
      )
      .catch((err) => {
        throw err;
      });
  }, [region]);

  const handleSearch = (e) => {
    let searchInput = e.target.value;
    searchInput === "" ? setRegion("all") : setRegion(`name/${searchInput}`);
  };

  const filterByRegion = (e) => {
    let selectedOption = e.target.value;
    selectedOption === "Filter by Region"
      ? setRegion("all")
      : setRegion(`region/${selectedOption}`);
  };

  return (
    <div>
      <div>
        <input type="text" onChange={handleSearch} />
        <select onChange={filterByRegion}>
          <option>Filter by Region</option>
          {continents
            .sort((x, y) => (x > y ? 1 : -1))
            .map((continent, i) => (
              <option key={i}>{continent}</option>
            ))}
        </select>
      </div>
      <div>
        <DisplayCountryList countriesList={countriesList} />
      </div>
    </div>
  );
};
export default Search;
