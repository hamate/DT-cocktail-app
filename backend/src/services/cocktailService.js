import fetch from 'node-fetch';

export const cocktailService = {
  async getCocktail(selectedCocktail) {
    console.log(selectedCocktail);

    async function fetchCocktail(apiModifier) {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/${apiModifier}`);
      const cocktail = await response.json();
      const ingredients = Object.entries(cocktail.drinks[0]).filter(
        ([key, value]) => key.indexOf('strIngredient') !== -1 && value !== null,
      );
      const measure = Object.entries(cocktail.drinks[0]).filter(([key, value]) => key.indexOf('strMeasure') !== -1 && value !== null).map((m) => m[1]);
      const cocktailData = {
        name: cocktail.drinks[0].strDrink,
        ingredients,
        measure,
        instruction: cocktail.drinks[0].strInstructions,
        img: cocktail.drinks[0].strDrinkThumb,
      };
      return cocktailData;
    }
    let apiModifier = '';
    if (selectedCocktail === undefined) {
      apiModifier = 'random.php';
      return fetchCocktail(apiModifier);
    }
    apiModifier = `search.php?s=${selectedCocktail}`;
    return fetchCocktail(apiModifier);
  },

};
