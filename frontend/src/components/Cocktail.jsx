import React, { useState } from 'react';
import generalDataFetch from '../utilities/generalDataFetch';

function Cocktail() {
  const [randomCocktail, setRandomCocktail] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [measure, setMeasure] = useState([]);

  const handleRandomButton = async () => {
    const response = await generalDataFetch('/cocktail');
    setRandomCocktail(response.jsonData);
    setIngredients(response.jsonData.ingredients);
    setMeasure(response.jsonData.measure);
  };

  return (
    <div className="cocktail-main-container">
      <button type="button" className="random-button" onClick={handleRandomButton}>Random cocktail</button>
      <div className="cocktail-data">
        <table>
          <thead>
            <tr>
              <th className="cocktail-name">{randomCocktail.name}</th>
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
          {randomCocktail.instruction}
        </div>
      </div>
    </div>
  );
}

export default Cocktail;
