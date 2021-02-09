import { cocktailService } from '../services';

export const cocktailController = {
  async getRandomCocktail(req, res, next) {
    try {
      const randomCocktail = await cocktailService.getCocktail();
      res.status(200).json(randomCocktail);
    } catch (err) {
      next(err);
    }
  },
  async getCocktail(req, res, next) {
    const { cocktail } = req.params;
    try {
      const cocktailData = await cocktailService.getCocktail(cocktail);
      res.status(200).json(cocktailData);
    } catch (err) {
      next(err);
    }
  },
};
