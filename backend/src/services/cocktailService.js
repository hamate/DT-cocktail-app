import fetch from 'node-fetch';

export const cocktailService = {
  async getRandomCocktail() {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const randomCocktail = await response.json();
    const ingredients = Object.entries(randomCocktail.drinks[0]).filter(
      ([key, value]) => key.indexOf('strIngredient') !== -1 && value !== null,
    );
    const measure = Object.entries(randomCocktail.drinks[0]).filter(([key, value]) => key.indexOf('strMeasure') !== -1 && value !== null).map((m) => m[1]);
    const cocktailData = {
      name: randomCocktail.drinks[0].strDrink,
      ingredients,
      measure,
      instruction: randomCocktail.drinks[0].strInstructions,
      img: randomCocktail.drinks[0].strDrinkThumb,
    };
    return cocktailData;
  },
};
