import express from 'express';
import { cocktailController } from '../controllers';

const cors = require('cors');

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/cocktail', cocktailController.getRandomCocktail);

export default router;
