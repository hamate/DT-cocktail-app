import React, { useEffect, useState } from 'react';
import generalDataFetch from '../utilities/generalDataFetch';
import './Cocktail.css';

function Cocktail() {
  const [cocktail, setCocktail] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [measure, setMeasure] = useState([]);
  const [searchCocktail, setSearchCocktail] = useState('');

  const handleRandomButton = async () => {
    const response = await generalDataFetch('/cocktail');
    setCocktail(response.jsonData);
    setIngredients(response.jsonData.ingredients);
    setMeasure(response.jsonData.measure);
  };

  useEffect(() => {
    handleRandomButton();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await generalDataFetch(`/cocktail/${searchCocktail.replace(' ', '%20')}`);
    setCocktail(response.jsonData);
    setIngredients(response.jsonData.ingredients);
    setMeasure(response.jsonData.measure);
  };

  return (
    <div className="cocktail-main-container">
      <div className="search-field">
        <button type="button" className="random-button cocktail-button btn-1" onClick={handleRandomButton}>Random cocktail</button>
        <form action="" method="get" className="cocktail-form">
          <label htmlFor="cocktail">Search for cocktail: </label>
          <input type="text" name="cocktail" id="cocktail" onKeyPress={(event) => event.key === 'Enter' && event.preventDefault()} onChange={(event) => setSearchCocktail(event.target.value)} />
          <button type="button" className="search-button cocktail-button btn-1" onClick={handleSearch}>Search</button>
        </form>
      </div>
      <div className="cocktail-data">
        <table className="cocktail-table">
          <thead>
            <tr>
              <th className="cocktail-name">{cocktail.name}</th>
            </tr>
            <tr>
              <td>
                Ingredients
              </td>
              <td>
                Measure
              </td>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((ing, index) => (
              <tr key={ing[0]}>
                <td>
                  {ing[1]}
                </td>
                <td>
                  {measure[index]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cocktail-instruction">
          {cocktail.instruction}
        </div>
        <img src={cocktail.img} alt="Cocktail" />
      </div>
    </div>
  );
}

export default Cocktail;
