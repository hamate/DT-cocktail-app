import { cocktailService } from '../services';

export const cocktailController = {
  async getRandomCocktail(req, res, next) {
    try {
      const randomCocktail = await cocktailService.getRandomCocktail();
      res.status(200).json(randomCocktail);
    } catch (err) {
      next(err);
    }
  },
};
