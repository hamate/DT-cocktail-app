import fetch from 'node-fetch';

export const cocktailService = {
  async getRandomCocktail() {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const randomCocktail = await response.json();
    return randomCocktail;
  },
};
